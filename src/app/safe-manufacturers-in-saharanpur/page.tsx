import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationPageTemplate from "@/components/LocationPageTemplate";
import { locationsData } from "@/data/locations";
import { siteConfig } from "@/config/site";

const slug = "safe-manufacturers-in-saharanpur";
const location = locationsData.find((loc) => loc.slug === slug);

export const metadata: Metadata = {
  title: location?.seoTitle || "Safe Manufacturers in Saharanpur",
  description: location?.seoDescription || "Safe manufacturers in Saharanpur.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/${slug}`,
  },
  openGraph: {
    title: location?.seoTitle,
    description: location?.seoDescription,
    url: `${siteConfig.siteUrl}/${slug}`,
  },
};

export default function SaharanpurLocationPage() {
  if (!location) notFound();
  return <LocationPageTemplate location={location} />;
}
