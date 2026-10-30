import React from "react";
import { siteConfig } from "@/config/site";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: "Forteeza Safes",
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/images/logo/logo.png`,
    description: siteConfig.fullDescription,
    telephone: "+91 8076009057",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8076009057",
      contactType: "customer service",
      areaServed: ["IN"],
      availableLanguage: ["English", "Hindi"],
    },
    areaServed: siteConfig.targetLocations.map((loc) => ({
      "@type": "AdministrativeArea",
      name: `${loc.name}, ${loc.state}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.shortDescription,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
