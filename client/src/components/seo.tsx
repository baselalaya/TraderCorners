import React from "react";
import { SITE, SEO_DATA, PageKey } from "@/seo/seo-data";

type Props = {
  page: PageKey;
  titleOverride?: string;
  descriptionOverride?: string;
  pathOverride?: string;
};

function toAbsolute(url: string) {
  if (url.startsWith("http")) return url;
  return `${SITE.baseUrl}${url.startsWith("/") ? url : `/${url}`}`;
}

export default function SEO({ page, titleOverride, descriptionOverride, pathOverride }: Props) {
  const data = SEO_DATA[page];
  const title = titleOverride || data.title;
  const description = descriptionOverride || data.description;
  const path = pathOverride || data.path;
  const canonical = toAbsolute(path);
  const image = toAbsolute(data.ogImage || SITE.defaultImage);

  const jsonLd: any[] = [];

  // Organization schema
  jsonLd.push({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.organization.name,
    url: SITE.organization.url,
    logo: toAbsolute(SITE.organization.logo),
    sameAs: SITE.organization.sameAs,
  });

  // WebSite + SearchAction
  jsonLd.push({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  });

  // Breadcrumbs
  if (data.breadcrumb) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: data.breadcrumb.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: toAbsolute(b.url),
      })),
    });
  }

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {SEO_DATA[page].keywords && (
        <meta name="keywords" content={SEO_DATA[page].keywords!.join(", ")} />
      )}

      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={SEO_DATA[page].type || "website"} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={SITE.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      {jsonLd.map((obj, idx) => (
        <script key={idx} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
    </>
  );
}

