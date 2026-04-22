<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Page section spacing convention (REQUIRED)

Every full-width content block on a page MUST use one of the project's section utility classes so it has proper top AND bottom vertical breathing room. Do NOT wrap page content in a bare `<div className="container-hn">` that only carries directional padding (e.g. `pb-32` with no `pt-*`) — that causes the first heading inside it to sit flush against the previous section.

### Allowed section wrappers

Use one of these as the OUTER wrapper for any content area between the hero and the footer. They are defined in `app/globals.css`:

- `<section className="section">` — 5rem top + 5rem bottom padding. Default for major content sections.
- `<section className="section-padding">` — Responsive 3rem → 4.5rem → 5rem. Use on long-form landing pages (location pages, dedicated service pages).
- `<section className="section-sm">` — 3rem top + 3rem bottom. Use for compact strips ("At a Glance", inline CTAs).

The `<div className="container-hn">` ALWAYS goes INSIDE the section, never as the section itself.

### Hero sections

Heroes use `bg-gradient-hero` with explicit top padding to clear the fixed navbar:

```tsx
<section className="bg-gradient-hero" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
  <div className="container-hn"> ... </div>
</section>
```

`pt-[100px]` (or `paddingTop: '100px'`) is required for any first hero section so the title is not hidden under the navbar.

### Closing CTA strips

Use `py-16` (or `py-20` for hero-sized closers) plus a coloured background:

```tsx
<section className="py-16" style={{ background: 'linear-gradient(135deg, #8B5E83, #6B4563)' }}>
  <div className="container-hn text-center"> ... </div>
</section>
```

### Anti-patterns (do not do)

```tsx
{/* WRONG — no top padding, heading sits flush against previous section */}
<div className="container-hn pb-32">
  <h2>Overview</h2>
</div>

{/* WRONG — directional padding only on the section */}
<section className="pb-20">
  <div className="container-hn"> ... </div>
</section>
```

```tsx
{/* RIGHT */}
<section className="section">
  <div className="container-hn">
    <h2>Overview</h2>
  </div>
</section>
```

This convention applies to ALL new pages and to any edits to existing pages. Audit every section wrapper before committing.
