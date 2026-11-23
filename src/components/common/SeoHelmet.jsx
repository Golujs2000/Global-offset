import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BUSINESS_INFO } from '../../data/businessInfo';
import {
  getLocalBusinessSchema,
  getBreadcrumbSchema,
  getFaqSchema,
  getProductSchema
} from '../../utils/seo';

export default function SeoHelmet({
  title,
  description,
  canonical,
  keywords,
  ogImage = `${BUSINESS_INFO.contact.website}/favicon.svg`,
  ogType = 'website',
  breadcrumbs,
  faqs,
  product,
  noIndex = false
}) {
  const fullTitle = title 
    ? (title.includes('Global Offset') ? title : `${title} | Global Offset Patna`)
    : `${BUSINESS_INFO.name} | Premier Commercial Printing & Solutions in Patna, Bihar`;

  const metaDesc = description || BUSINESS_INFO.shortDescription;
  const canonicalUrl = canonical 
    ? (canonical.startsWith('http') ? canonical : `${BUSINESS_INFO.contact.website}${canonical}`)
    : BUSINESS_INFO.contact.website;

  const localBusinessJson = getLocalBusinessSchema();
  const breadcrumbJson = breadcrumbs && breadcrumbs.length > 0 ? getBreadcrumbSchema(breadcrumbs) : null;
  const faqJson = faqs && faqs.length > 0 ? getFaqSchema(faqs) : null;
  const productJson = product ? getProductSchema(product) : null;

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={BUSINESS_INFO.name} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={ogImage} />

      {/* Geo Tags for Local Patna SEO */}
      <meta name="geo.region" content="IN-BR" />
      <meta name="geo.placename" content="Patna" />
      <meta name="geo.position" content={`${BUSINESS_INFO.location.coordinates.latitude};${BUSINESS_INFO.location.coordinates.longitude}`} />
      <meta name="ICBM" content={`${BUSINESS_INFO.location.coordinates.latitude}, ${BUSINESS_INFO.location.coordinates.longitude}`} />

      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessJson)}
      </script>

      {breadcrumbJson && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJson)}
        </script>
      )}

      {faqJson && (
        <script type="application/ld+json">
          {JSON.stringify(faqJson)}
        </script>
      )}

      {productJson && (
        <script type="application/ld+json">
          {JSON.stringify(productJson)}
        </script>
      )}
    </Helmet>
  );
}
