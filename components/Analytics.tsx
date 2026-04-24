'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useRef } from 'react';
import { GA4_ID, GADS_ID, track, trackPageView } from '@/lib/analytics';

/**
 * Mounted once in the root layout. Owns:
 *   1. Loading the gtag.js loader (Google Ads + optional GA4)
 *   2. Initializing window.dataLayer + window.gtag
 *   3. Firing page_view on SPA route changes
 *   4. Auto-tracking scroll depth (25 / 50 / 75 / 100)
 *   5. Auto-tracking clicks via event delegation:
 *        - tel:               → phone_click
 *        - wa.me / whatsapp   → whatsapp_click
 *        - cross-origin links → outbound_click
 *        - [data-analytics]   → cta_click  (with the value as `cta_id`)
 */
export default function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`}
        strategy="lazyOnload"
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GADS_ID}', { send_page_view: true });
          ${GA4_ID ? `gtag('config', '${GA4_ID}', { send_page_view: true });` : ''}
        `}
      </Script>
      <Suspense fallback={null}>
        <AnalyticsListeners />
      </Suspense>
    </>
  );
}

function AnalyticsListeners() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // ---- SPA page_view on every route change ---------------------------------
  useEffect(() => {
    if (!pathname) return;
    const qs = searchParams?.toString();
    const url = qs ? `${pathname}?${qs}` : pathname;
    // Defer slightly so document.title has time to update
    const id = window.setTimeout(() => trackPageView(url), 50);
    return () => window.clearTimeout(id);
  }, [pathname, searchParams]);

  // ---- Scroll depth (25/50/75/100) -----------------------------------------
  const fired = useRef<Set<number>>(new Set());
  useEffect(() => {
    fired.current = new Set();
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const doc = document.documentElement;
        const scrollTop = window.scrollY || doc.scrollTop;
        const scrollHeight = doc.scrollHeight - window.innerHeight;
        if (scrollHeight <= 0) {
          ticking = false;
          return;
        }
        const pct = Math.round((scrollTop / scrollHeight) * 100);
        for (const threshold of [25, 50, 75, 100]) {
          if (pct >= threshold && !fired.current.has(threshold)) {
            fired.current.add(threshold);
            track('scroll_depth', {
              percent: threshold,
              page_path: pathname || '',
            });
          }
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  // ---- Click delegation ----------------------------------------------------
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const link = target.closest('a, button, [data-analytics]') as
        | HTMLElement
        | null;
      if (!link) return;

      // 1. Explicit data-analytics annotation wins.
      const ctaId = link.getAttribute('data-analytics');
      if (ctaId) {
        track('cta_click', {
          cta_id: ctaId,
          cta_label: (link.textContent || '').trim().slice(0, 60),
          page_path: pathname || '',
        });
      }

      // 2. <a> classification by href.
      if (link.tagName === 'A') {
        const href = (link as HTMLAnchorElement).getAttribute('href') || '';
        if (href.startsWith('tel:')) {
          track('phone_click', {
            phone: href.replace(/^tel:/, ''),
            page_path: pathname || '',
          });
        } else if (
          /(^https?:\/\/(api\.whatsapp\.com|wa\.me|chat\.whatsapp\.com))/i.test(
            href,
          )
        ) {
          track('whatsapp_click', {
            href,
            page_path: pathname || '',
          });
        } else if (href.startsWith('mailto:')) {
          track('cta_click', {
            cta_id: 'email',
            email: href.replace(/^mailto:/, ''),
            page_path: pathname || '',
          });
        } else if (/^https?:\/\//i.test(href)) {
          try {
            const url = new URL(href);
            if (url.hostname !== window.location.hostname) {
              track('outbound_click', {
                href,
                hostname: url.hostname,
                page_path: pathname || '',
              });
            }
          } catch {
            /* malformed URL — ignore */
          }
        }
      }
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, [pathname]);

  return null;
}
