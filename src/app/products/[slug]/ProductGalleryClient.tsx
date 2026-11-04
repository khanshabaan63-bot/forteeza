"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { Product } from "@/data/products";
import ImageLightbox from "@/components/ImageLightbox";

interface ProductGalleryClientProps {
  product: Product;
}

export default function ProductGalleryClient({ product }: ProductGalleryClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentImage = product.images[selectedImageIndex] || product.images[0] || "/images/products/double-door-defender-safe.png";
  const isDark = currentImage.includes("counter-safe");

  return (
    <>
      <div className="flex flex-col gap-4">
        {/* Main Image Showcase */}
        <div
          className={`relative h-80 sm:h-96 md:h-[440px] w-full rounded-xl border border-border overflow-hidden cursor-zoom-in group flex items-center justify-center p-6 shadow-soft ${
            isDark ? "bg-black" : "bg-white"
          }`}
          onClick={() => setLightboxOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setLightboxOpen(true);
            }
          }}
          aria-label={`Enlarge photo for ${product.name}`}
        >
          {/* Subtle Industrial Grid */}
          <div
            className={`absolute inset-0 [background-size:20px_20px] ${
              isDark
                ? "opacity-20 bg-[radial-gradient(#CBD7CB_1px,transparent_1px)]"
                : "opacity-[0.03] bg-[radial-gradient(#1A1D1A_1px,transparent_1px)]"
            }`}
          />

          {/* Expand Badge */}
          <div className="absolute top-4 right-4 z-10 p-2 rounded-full bg-charcoal-900/80 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="w-4 h-4" />
          </div>

          {/* Floating Product Image with Hover Animation */}
          <div className="relative w-full h-full transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03]">
            <Image
              src={currentImage}
              alt={product.name}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="absolute bottom-3 text-center w-full opacity-0 group-hover:opacity-90 transition-opacity duration-200">
            <span
              className={`text-[11px] px-3 py-1 rounded font-mono ${
                isDark ? "text-olive-100 bg-black/70" : "text-charcoal-700 bg-canvas/90 border border-border"
              }`}
            >
              Click to enlarge in high-resolution viewer
            </span>
          </div>
        </div>

        {/* Thumbnails Row if multiple images */}
        {product.images.length > 1 && (
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            {product.images.map((img, idx) => {
              const thumbIsDark = img.includes("counter-safe");
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 p-1.5 ${
                    thumbIsDark ? "bg-black" : "bg-white"
                  } ${
                    selectedImageIndex === idx
                      ? "border-olive-600 shadow-md ring-2 ring-olive-500/20"
                      : "border-border hover:border-olive-400 opacity-80 hover:opacity-100"
                  }`}
                  aria-label={`View photo ${idx + 1}`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    fill
                    className="object-contain"
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={currentImage}
        imageAlt={product.name}
        title={product.name}
        description={product.shortDescription}
        badge={product.category}
      />
    </>
  );
}
