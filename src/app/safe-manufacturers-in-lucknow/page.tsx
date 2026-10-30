import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationPageTemplate from "@/components/LocationPageTemplate";
import { locationsData } from "@/data/locations";
import { siteConfig } from "@/config/site";

const slug = "safe-manufacturers-in-lucknow";
const location = locationsData.find((loc) => loc.slug === slug);

export const metadata: Metadata = {
  title: location?.seoTitle || "Safe Manufacturers in Lucknow",
  description: location?.seoDescription || "Safe manufacturers in Lucknow.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/${slug}`,
  },
  openGraph: {
    title: location?.seoTitle,
    description: location?.seoDescription,
    url: `${siteConfig.siteUrl}/${slug}`,
  },
};

export default function LucknowLocationPage() {
  if (!location) notFound();
  return <LocationPageTemplate location={location} />;
}
