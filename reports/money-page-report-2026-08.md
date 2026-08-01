# Money Page Report — August 2026

*Automated monthly review of the service × location landing pages on drsanjanal.in. Generated 2026-08-01.*

---

## Executive summary

1. **No analytics connected.** Google Search Console and GA4 are not linked to this workspace, so this report contains **zero traffic, ranking or lead numbers**. Everything below is from the code and the live site.
2. **Most important finding:** every money page emits its FAQ and breadcrumb structured data **twice** — a duplicate-schema bug that can cost you FAQ rich results in Google. It is a ~4-line fix.
3. **Action this month:** fix the duplicate JSON-LD, then build the two missing HSR Layout delivery pages (`normal-delivery-hsr-layout`, `painless-delivery-hsr-layout`) — your own clinic's locality has no delivery money page.

---

## Changes applied on 2026-08-01

All technical fixes below were implemented and type-checked (`tsc --noEmit`, clean) in the same session as this report.

| # | Change | Files touched | Status |
|---|---|---|---|
| 1 | Removed duplicate `FAQPage` + `BreadcrumbList` JSON-LD | `app/[locationService]/page.tsx` | Done — 1 ld+json block now emitted by the route; `FAQAccordion` and `BreadcrumbNav` own theirs |
| 2 | Trimmed **10** over-length meta titles to ≤60 chars | `lib/locationServices.ts` | Done — all 22 now ≤60, verified programmatically |
| 3 | `lady-gynaecologist-hsr-layout` `serviceSlug` `''` → `'pregnancy-care'` | `lib/locationServices.ts` | Done — page now renders its cross-link card and sidebar service link |
| 4 | Corrected stale "6 curated slugs" comment | `app/[locationService]/page.tsx` | Done |
| 5 | Added money-page link block to the two hubs that had none | `components/AreaMoneyPageLinks.tsx` (new), `app/attibele-gynaecologist/page.tsx`, `app/electronic-city-sarjapura-gynaecologist/page.tsx` | Done — 13 money pages now receive hub back-links |
| 6 | Built the two missing HSR Layout delivery pages | `lib/locationServices.ts` | **Drafted — needs Dr. Sanjana's review before publishing** |
| 7 | Added the same link block to the HSR hub | `app/hsr-layout-gynaecologist/page.tsx` | Done — the hub previously hardcoded 4 of what are now 8 HSR money pages; it is now data-driven |

**Money page count is now 24** (was 22 at the start of this report). Sitemap, static-route generation and the `/services/*` cross-links all read from the same array, so the two new pages are picked up automatically with no further wiring.

### About the two new pages — read before publishing

`normal-delivery-hsr-layout` and `painless-delivery-hsr-layout` are written but should be treated as **draft clinical copy until Dr. Sanjana reads them**. They publish under her name and become her professional representation, not the site's.

To keep the risk low, every clinical statement in both pages is reused in substance from the existing Sarjapura Road / Electronic City / Attibele entries she has already approved — epidural relief within 10–20 minutes, VBAC criteria, 24–48 hour stay, 24/7 anaesthesia and operative back-up. **No new medical claim, statistic or outcome promise was introduced.** Both entries carry an inline `NOTE` comment in `lib/locationServices.ts` saying exactly this.

What she should specifically check:

- The Health Nest address and phone number as written into the FAQ answers (`1162, 24th Main Road, Sector 2` / `+91 94490 31003`).
- The "minutes from home in early labour" and "same doctor through pregnancy, labour and postnatal recovery" framing — accurate positioning claims, but hers to confirm.
- Whether "thousands of safe vaginal births" is a figure she is comfortable repeating on two more pages.

**Correction to this report:** the meta-title section originally listed only 2 over-length titles, because that came from a 7-page sample rather than the full set. A programmatic scan of all 22 found **10** titles over 60 characters (longest: 69). All 10 are now fixed. The corrected list is in Step 2.

**Not done — needs your action:**

- **Connecting Google Search Console and GA4.** This is an OAuth flow that must be run from your claude.ai connector settings; it cannot be automated from here. Until it is done, none of the work above is measurable and next month's report will be as empty as this one.

---

## Step 0 — Current money pages

**22 money pages** are live (up from 12 when this report was first set up). All 22 are generated from `lib/locationServices.ts` and rendered by `app/[locationService]/page.tsx`.

Because `app/sitemap.ts` maps over the `locationServices` array directly, **sitemap coverage is automatic and complete** — no page can be missed. The live sitemap at `/sitemap.xml` returns 200 and contains 107 URLs.

| # | Slug | Service | Locality |
|---|---|---|---|
| 1 | painless-delivery-sarjapura-road | Painless Delivery | Sarjapura Road |
| 2 | normal-delivery-electronic-city | Normal Delivery | Electronic City |
| 3 | pcos-treatment-electronic-city | PCOS / PCOD | Electronic City |
| 4 | high-risk-pregnancy-sarjapura-road | High-Risk Pregnancy | Sarjapura Road |
| 5 | fertility-ivf-treatment-attibele | IVF & IUI | Attibele |
| 6 | laparoscopic-surgery-hsr-layout | Laparoscopic Surgery | HSR Layout |
| 7 | normal-delivery-sarjapura-road | Normal Delivery | Sarjapura Road |
| 8 | painless-delivery-electronic-city | Painless Delivery | Electronic City |
| 9 | pcos-treatment-hsr-layout | PCOS / PCOD | HSR Layout |
| 10 | fertility-ivf-treatment-hsr-layout | IVF & IUI | HSR Layout |
| 11 | high-risk-pregnancy-electronic-city | High-Risk Pregnancy | Electronic City |
| 12 | cesarean-delivery-attibele | Caesarean Delivery | Attibele |
| 13 | normal-delivery-attibele | Normal Delivery | Attibele |
| 14 | painless-delivery-attibele | Painless Delivery | Attibele |
| 15 | normal-delivery-bommasandra | Normal Delivery | Bommasandra |
| 16 | painless-delivery-bommasandra | Painless Delivery | Bommasandra |
| 17 | maternity-package-cost-attibele | Maternity Package Cost | Attibele |
| 18 | lady-gynaecologist-hsr-layout | General / Lady Gynaecologist | HSR Layout |
| 19 | pcos-treatment-attibele | PCOS / PCOD | Attibele |
| 20 | high-risk-pregnancy-attibele | High-Risk Pregnancy | Attibele |
| 21 | high-risk-pregnancy-hsr-layout | High-Risk Pregnancy | HSR Layout |
| 22 | cesarean-delivery-hsr-layout | Caesarean Delivery | HSR Layout |

**Coverage by locality:** Attibele 7 · HSR Layout 6 · Electronic City 4 · Sarjapura Road 3 · Bommasandra 2

---

## Step 1 — Performance (leads & sessions)

**Not available.** No Google Search Console or GA4 connector is linked to this workspace, so no impressions, clicks, sessions, calls or WhatsApp conversions could be retrieved. No performance figures are given below because none were retrieved — nothing here is estimated.

**To make next month's report complete**, connect two things:

- **Google Search Console** — property `https://www.drsanjanal.in`. Connect it from Claude → Settings → Connectors.
- **Google Analytics 4** — the GA4 property already receiving data via GTM container `GTM-MXWJFJKG`. Connect it the same way.

Once both are connected, this report will automatically rank the 22 pages by leads (phone_click / whatsapp_click / form submits) and by impressions, and flag the bottom performers for rewrite or pruning.

*Worth checking manually in the meantime:* confirm in GA4 that `phone_click`, `whatsapp_click` and `cta_click` are registered as **conversions**, not just events. If they are only events, lead attribution per page will be unavailable even after connecting.

## Step 2 — Search rankings & query opportunities

**Not available** — requires Google Search Console (see above).

One thing that can be said without Search Console: **10 of 22** meta titles were long enough to be truncated in Google's results, which suppresses click-through. All 10 have been shortened — the longest title on the site is now 60 characters.

| Page | Was | Now |
|---|---|---|
| normal-delivery-attibele | 69 | 50 |
| pcos-treatment-attibele | 68 | 49 |
| high-risk-pregnancy-hsr-layout | 68 | 54 |
| high-risk-pregnancy-electronic-city | 67 | 56 |
| high-risk-pregnancy-sarjapura-road | 66 | 55 |
| painless-delivery-sarjapura-road | 65 | 51 |
| laparoscopic-surgery-hsr-layout | 65 | 50 |
| painless-delivery-attibele | 64 | 45 |
| lady-gynaecologist-hsr-layout | 62 | 48 |
| maternity-package-cost-attibele | 61 | 50 |

Most of the length came from trailing " — Health Nest" / " — Raghava Hospital" suffixes, which Google was cutting off anyway. Page `<h1>` headings are stored separately and are unchanged.

---

## Step 3 — Page health (technical)

Every one of the 22 URLs was fetched live. **All 22 returned 200.** No 404s, no errors, no redirects.

**Passing on all 22 pages:**

- Exactly one `<h1>`, matching the configured page title
- Visible FAQ section with question/answer pairs
- `<title>` and meta description present
- Self-referencing canonical tag
- `robots: index, follow`
- Present in `/sitemap.xml`
- **No broken internal links** — every internal link across all 22 pages resolves to a 200. No empty `href`, no `href="#"`, no empty anchor text.

### Issue 1 — Duplicate structured data on all 22 pages — **FIXED 2026-08-01**

Each money page emits its FAQ and breadcrumb schema **twice**:

- `app/[locationService]/page.tsx` builds and renders `faqSchema` (FAQPage) — **and** passes the same FAQs to `<FAQAccordion>`, which renders its own identical FAQPage block.
- The same page builds and renders `breadcrumbSchema` (BreadcrumbList) — **and** `<BreadcrumbNav>` renders its own BreadcrumbList.

Result: 6 JSON-LD blocks per page where 4 are expected. Google can treat conflicting duplicate FAQPage markup as invalid and drop FAQ rich results entirely — which is the main SEO reason those FAQ blocks exist.

**Fix:** in `app/[locationService]/page.tsx`, delete the local `faqSchema` and `breadcrumbSchema` blocks and let the two components own their schema (they already do). Then re-test one page in Google's Rich Results Test.

### Issue 2 — Two hub pages don't link back to their money pages — **FIXED 2026-08-01**

13 of the 22 money pages link *up* to a hub page, but the hub doesn't link back down:

| Hub | Money pages pointing at it | Hub links back? |
|---|---|---|
| /electronic-city-sarjapura-gynaecologist | 7 | **No** |
| /attibele-gynaecologist | 6 | **No** |
| /hsr-layout-gynaecologist | 6 | Yes |
| /bommasandra-gynaecologist | 2 | Yes |

Those 13 pages are still reachable (from `/services/*` pages, the sitemap, and other hubs), so they are not orphaned — but the one-way linking wastes internal link equity on exactly the pages meant to convert. Adding a "Services in this area" block to the Attibele and Electronic City/Sarjapura hub pages, matching what the HSR Layout hub already does, is a quick win.

### Issue 3 — `lady-gynaecologist-hsr-layout` has an empty `serviceSlug` — **FIXED 2026-08-01**

It is set to `''`, so `getServiceBySlug()` returns nothing and the page silently drops both the "Want the full clinical detail?" cross-link card and the sidebar service link. The page renders fine, but it has fewer outbound links than its 21 siblings. Either point it at a real service (`pregnancy-care` would fit) or accept it as intentional.

### Issue 4 — Stale comment — **FIXED 2026-08-01**

`app/[locationService]/page.tsx` line 22 still says "Only the 6 curated money-page slugs resolve." It is 22 now. Cosmetic, but misleading for future edits.

---

## Step 4 — New page opportunities

The clearest gap: **HSR Layout — where Health Nest actually is — has no normal delivery and no painless delivery money page**, while Sarjapura Road, Electronic City, Attibele and Bommasandra all have both.

None of the five below duplicate existing blog posts (normal vs C-section, IVF vs IUI cost, PCOS vs PCOD, delivery cost) — these are transactional local-service pages, not comparison or cost content.

| Priority | Proposed slug | Target keyword | Status / why |
|---|---|---|---|
| **1** | `normal-delivery-hsr-layout` | normal delivery doctor HSR Layout | **✅ Built 2026-08-01** (pending clinical review). Health Nest *is* in HSR Layout, yet the highest-intent obstetric keyword had no page for the home locality. |
| **2** | `painless-delivery-hsr-layout` | painless delivery HSR Layout / epidural delivery HSR | **✅ Built 2026-08-01** (pending clinical review). Painless delivery existed for 4 localities but not the flagship clinic. |
| **3** | `fertility-ivf-treatment-electronic-city` | IVF centre Electronic City / fertility doctor Electronic City | Not built. Fertility pages exist only for Attibele and HSR Layout. Electronic City is the largest IT-professional catchment and fertility is the highest lifetime-value service. Distinct from the IVF-vs-IUI-cost blog post. |
| **4** | `pcos-treatment-sarjapura-road` | PCOS doctor Sarjapura Road / PCOD treatment Sarjapura | Not built. PCOS pages exist for Electronic City, HSR Layout and Attibele — Sarjapura Road is the one dense young-professional corridor missing. Completes the PCOS grid. |
| **5** | `uterine-fibroids-treatment-hsr-layout` | fibroid treatment HSR Layout / fibroid doctor HSR Layout | Not built. Condition-led rather than procedure-led. `laparoscopic-surgery-hsr-layout` targets the *operation*; patients search the *condition*. Different query set, no cannibalisation. |

**A caution on 3–5:** building more pages before analytics is connected is guesswork. Right now there is no evidence that any of the 24 existing pages converts — so the case for pages 3, 4 and 5 rests on reasoning about the service × locality grid, not on data. That reasoning is sound, but it is not the same thing as knowing. Connect Search Console first, see which of the 24 actually earns impressions and calls, and let that decide whether the next page is fertility in Electronic City or something the data suggests instead.

---

## Site-wide growth work (added 2026-08-01, beyond money pages)

A full-site audit found that the constraint on organic growth is not content volume — 111 indexable pages and 43 blog posts is plenty — but that almost nothing linked to the pages built to convert.

| Change | Detail | Files |
|---|---|---|
| Footer now lists all 8 area hubs | Was 3 of 8. `/jigani-gynaecologist` had **zero** inbound internal links sitewide and `/anekal-gynaecologist` had one. Both were effectively invisible. Now 8 refs each. | `lib/site.ts` (new `AREA_HUBS`), `components/Footer.tsx` |
| Homepage links to hubs + money pages | The homepage previously linked to **zero** hubs and **zero** money pages — the site's strongest page passed nothing downward. New "Find Dr. Sanjana in Your Area" section. | `components/HomeAreaLinks.tsx` (new), `app/page.tsx` |
| All 8 hubs now link to money pages | Was 3 of 8. Hubs whose own locality has no money page (Chandapura, Anekal, Jigani, Hosur Road) link to the nearest Attibele/Bommasandra pages. | 5 hub pages |
| Blog posts link to money pages | **Zero of 43 posts** linked to any money page. A keyword matcher now surfaces up to 4 relevant treatment pages per article; **30 of 43** posts match, the rest render nothing rather than an irrelevant link. | `lib/relatedContent.ts` (new), `components/RelatedMoneyPages.tsx` (new), `app/blog/[slug]/page.tsx` |
| Blog author name links to her profile | The E-E-A-T bio box named her but linked nowhere. | `app/blog/[slug]/page.tsx` |
| Sitemap `lastModified` is real | Every non-blog URL reported "modified today" on every build, which teaches Google to ignore `lastmod` entirely. Now driven by `CONTENT_LAST_REVISED` — **bump these by hand when content changes**. | `app/sitemap.ts`, `lib/site.ts` |
| Blog posts can signal a refresh | New optional `updated` field feeds `dateModified` in schema and the sitemap. Previously `dateModified` was hardcoded to the publish date, so no YMYL article could ever show it had been reviewed. | `lib/blog.ts`, `app/blog/[slug]/page.tsx` |
| Physician schema enriched | Added `alumniOf` (RGUHS), `award` (Gold Medal), `hasCredential` (MBBS, MS OBG, FMAS), `knowsAbout` (18 areas), `hospitalAffiliation` (both clinics). All were previously stated only in prose, invisible as entity attributes. | `app/layout.tsx` |

### Two things I did NOT change, deliberately

**1. Fabricated social proof — you are verifying this.** Flagging it here so it is on record:

- `app/page.tsx:286` renders three "Happy patient" photos loaded live from `randomuser.me`, an API that generates **random fake faces**. They sit beside the claim "4.9/5 · 5000+ Happy Patients".
- `aggregateRating: 4.9 / reviewCount: 200` is hardcoded into **11 pages** (root layout + all 8 hubs), while `lib/testimonials.ts` holds exactly **5** real reviews. Three different numbers — 5, 200, 5000+ — none sourced from a review feed.
- Self-serving review markup on your own site is already ineligible for Google rich-result stars, so this is carrying risk without earning anything.

**2. Physician `sameAs` and `memberOf` — needs you.** `sameAs` currently lists LinkedIn plus two self-referencing URLs. No Practo, no Justdial, no Google Business Profile, no Instagram. That is the signal Google uses to connect her identity across the web, and it is essentially empty. Send me those URLs and any society memberships (FOGSI / IMA / IAGE) and I will add them — **I will not invent them.**

---

## What's left

**Yours, in priority order:**

1. **Verify the review numbers and the homepage patient photos.** Credibility on a doctor's site outranks every ranking tactic in this report. Tell me the decision and I'll implement it.
2. **Connect Search Console + GA4.** The single highest-value action remaining and the only one Claude cannot do. Everything above is currently unmeasurable.
3. **Audit the Google Business Profile.** For a local medical practice the GBP and review volume drive the local pack, which is where most patients actually find you — the website supports that, it doesn't replace it. I have no visibility into its state.
4. **Dr. Sanjana reviews the two new HSR Layout pages** before they go live. Nothing else blocks them.
5. **Send me her Practo / Justdial / GBP / Instagram URLs and society memberships** so the Physician entity can be properly connected.
6. **Create `public/og-image.jpg`.** Still missing — every social share and all 43 article schemas point at a 404. Not done because you didn't select it, but it's cheap.

**After deploy:** re-test one money page in Google's Rich Results Test to confirm the FAQ result validates now the duplicate schema is gone.

**Hold:** opportunity pages 3–5 until there is traffic data to prioritise them against.

---

*Report generated automatically. No traffic, ranking or lead figures appear in this report because no analytics source was connected at the time of the run.*
