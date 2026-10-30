import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { siteConfig } from "@/config/site";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const schemaBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.siteUrl,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        ...(item.href ? { item: `${siteConfig.siteUrl}${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 px-0 text-xs text-charcoal-500">
        <ol className="flex items-center flex-wrap gap-1.5">
          <li className="flex items-center">
            <Link
              href="/"
              className="hover:text-olive-700 flex items-center gap-1 transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-charcoal-400 shrink-0" />
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-olive-700 transition-colors truncate max-w-[200px]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-charcoal-800 truncate max-w-[240px]">
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
