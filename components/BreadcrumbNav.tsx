import Link from 'next/link';

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  crumbs: Crumb[];
}

export default function BreadcrumbNav({ crumbs }: BreadcrumbNavProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.label,
      ...(crumb.href ? { item: `https://healthnest.in${crumb.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav className="breadcrumb py-2 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        {crumbs.map((crumb, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && <span style={{ color: '#C9A7C7' }} aria-hidden="true">/</span>}
            {crumb.href && i < crumbs.length - 1 ? (
              <Link
                href={crumb.href}
                className="hover:text-purple-700 transition-colors"
                style={{ color: '#6B6B6B' }}
              >
                {crumb.label}
              </Link>
            ) : (
              <span style={{ color: '#8B5E83' }} aria-current={i === crumbs.length - 1 ? 'page' : undefined}>
                {crumb.label}
              </span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
