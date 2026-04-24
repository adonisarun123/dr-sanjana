'use client';

import { useEffect, useRef } from 'react';
import { track, trackLeadConversion } from '@/lib/analytics';

/**
 * Fires the lead conversion event when the thank-you page mounts.
 *
 * The form's onSubmit also fires the conversion before navigating, but firing
 * it again here is a deliberate redundancy: if the user reloads the thank-you
 * page, or if a slow network swallows the first event before the redirect,
 * Google Ads still records the lead. Because we pass `transaction_id`, the
 * Ads platform deduplicates same-id conversions automatically.
 */
export default function ThankYouConversion() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    let transactionId = '';
    try {
      transactionId = sessionStorage.getItem('lastLeadId') || '';
    } catch {
      /* private mode etc. — ignore */
    }

    track('lead_form_submit_success', {
      form_id: 'lp_callback',
      via: 'thank_you_page',
      transaction_id: transactionId,
    });
    trackLeadConversion({ transaction_id: transactionId });
  }, []);

  return null;
}
