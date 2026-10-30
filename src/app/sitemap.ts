import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { products } from "@/data/products";
import { locationsData } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;

  const coreRoutes = [
    "",
    "/about",
    "/products",
    "/clients-served",
    "/our-expertise",
    "/projects",
    "/contact",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const locationRoutes = locationsData.map((loc) => ({
    url: `${baseUrl}/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...coreRoutes, ...productRoutes, ...locationRoutes];
}
