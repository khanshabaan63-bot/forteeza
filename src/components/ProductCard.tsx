"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Maximize2, ArrowRight } from "lucide-react";
import { Product } from "@/data/products";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageLightbox from "@/components/ImageLightbox";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const primaryImage = product.images[0] || "/images/products/double-door-defender-safe.png";

  const whatsappMessage = `Hello Forteeza Safe Company, I am interested in ${product.name}. Please share product details and quotation.`;

  return (
    <>
      <article className="group flex flex-col bg-canvas rounded-lg border border-border overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:border-olive-400">
        {/* Clickable Image Showcase */}
        <div
          className="relative h-64 sm:h-72 w-full bg-[#181E17] overflow-hidden cursor-zoom-in flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setLightboxOpen(true);
            }
          }}
          aria-label={`View enlarged image of ${product.name}`}
        >
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#CBD7CB_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Product Category Tag */}
          <div className="absolute top-3 left-3 z-10">
            <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-olive-900/80 backdrop-blur-md text-olive-100 border border-olive-700/50">
              {product.category}
            </span>
          </div>

          {/* Expand Icon Indicator on Hover */}
          <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1.5 rounded-full bg-charcoal-900/80 text-white backdrop-blur-md">
            <Maximize2 className="w-4 h-4" />
          </div>

          {/* Floating Product Image */}
          <div className="relative w-full h-full transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03]">
            <Image
              src={primaryImage}
              alt={product.name}
              fill
              className="object-contain drop-shadow-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={priority}
            />
          </div>

          <div className="absolute bottom-2 text-center w-full opacity-0 group-hover:opacity-90 transition-opacity duration-200">
            <span className="text-[10px] text-olive-200 bg-black/60 px-2 py-0.5 rounded">
              Click image to inspect details
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex flex-col flex-1 p-5 sm:p-6 bg-canvas">
          <h3 className="font-heading font-bold text-lg sm:text-xl text-charcoal-900 group-hover:text-olive-700 transition-colors line-clamp-2 min-h-[3.25rem]">
            <Link href={`/products/${product.slug}`}>
              {product.name}
            </Link>
          </h3>

          <p className="mt-2 text-sm text-charcoal-600 line-clamp-3 leading-relaxed flex-1">
            {product.shortDescription}
          </p>

          {/* Features Bullets preview */}
          {product.features && product.features.length > 0 && (
            <div className="mt-4 pt-3 border-t border-border-subtle">
              <ul className="text-xs text-charcoal-600 space-y-1">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-olive-600 shrink-0" />
                  <span className="truncate">{product.features[0]}</span>
                </li>
                {product.features[1] && (
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-olive-600 shrink-0" />
                    <span className="truncate">{product.features[1]}</span>
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Action CTAs */}
          <div className="mt-5 pt-4 border-t border-border flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center justify-between">
            <Link
              href={`/products/${product.slug}`}
              className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal-800 hover:text-olive-700 py-2 transition-colors group/btn"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </Link>

            <WhatsAppButton
              message={whatsappMessage}
              size="sm"
              variant="primary"
              className="text-xs py-2 px-3 tracking-wider font-bold"
            >
              <span>GET QUOTE</span>
            </WhatsAppButton>
          </div>
        </div>
      </article>

      {/* Lightbox for this product */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={primaryImage}
        imageAlt={product.name}
        title={product.name}
        description={product.shortDescription}
        badge={product.category}
      />
    </>
  );
}
