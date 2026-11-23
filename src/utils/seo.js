import { BUSINESS_INFO } from '../data/businessInfo';

/**
 * Generate LocalBusiness & PrintingShop Schema
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "PrintingShop"],
    "@id": `${BUSINESS_INFO.contact.website}/#localbusiness`,
    "name": BUSINESS_INFO.name,
    "legalName": BUSINESS_INFO.legalName,
    "alternateName": "Global Offset Patna",
    "description": BUSINESS_INFO.shortDescription,
    "url": BUSINESS_INFO.contact.website,
    "telephone": BUSINESS_INFO.contact.phone,
    "image": `${BUSINESS_INFO.contact.website}/favicon.png`,
    "priceRange": "₹₹",
    "founder": {
      "@type": "Person",
      "name": BUSINESS_INFO.owner.name,
      "jobTitle": BUSINESS_INFO.owner.title
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${BUSINESS_INFO.location.addressLine1}, ${BUSINESS_INFO.location.addressLine2}`,
      "addressLocality": BUSINESS_INFO.location.city,
      "addressRegion": BUSINESS_INFO.location.state,
      "postalCode": BUSINESS_INFO.location.pincode,
      "addressCountry": BUSINESS_INFO.location.countryCode
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.location.coordinates.latitude,
      "longitude": BUSINESS_INFO.location.coordinates.longitude
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Patna"
      },
      {
        "@type": "State",
        "name": "Bihar"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:30",
        "closes": "20:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Commercial Printing & Solutions Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diary Printing & Manufacturing in Patna"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Register Printing in Patna"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Examination Copy Printing in Patna"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bill Book & Invoice Printing in Patna"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial & Paper Offset Printing in Patna"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Complete Book Binding & Lamination in Patna (Hardbound, Perfect, Spiral, Wiro, Cloth Stitch)"
          }
        }
      ]
    }
  };
}

/**
 * Generate BreadcrumbList Schema
 * @param {Array<{ name: string, url: string }>} crumbs
 */
export function getBreadcrumbSchema(crumbs = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url.startsWith('http') ? crumb.url : `${BUSINESS_INFO.contact.website}${crumb.url}`
    }))
  };
}

/**
 * Generate FAQPage Schema
 * @param {Array<{ question: string, answer: string }>} faqs
 */
export function getFaqSchema(faqs = []) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Generate Product Schema
 * @param {Object} product
 */
export function getProductSchema(product) {
  if (!product) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${product.name} - Global Offset Patna`,
    "description": product.summary,
    "image": product.image,
    "brand": {
      "@type": "Brand",
      "name": BUSINESS_INFO.name
    },
    "category": product.category || "Commercial Printing",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "100",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": BUSINESS_INFO.name
      }
    }
  };
}
