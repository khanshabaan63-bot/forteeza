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

  return (
    <>
      <div className="flex flex-col gap-4">
        {/* Main Image Showcase */}
        <div
          className="relative h-80 sm:h-96 md:h-[440px] w-full rounded-xl bg-charcoal-950 border border-border overflow-hidden cursor-zoom-in group flex items-center justify-center p-6 shadow-soft"
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
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#CBD7CB_1px,transparent_1px)] [background-size:20px_20px]" />

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
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="absolute bottom-3 text-center w-full opacity-0 group-hover:opacity-90 transition-opacity duration-200">
            <span className="text-[11px] text-olive-100 bg-black/70 px-3 py-1 rounded font-mono">
              Click to enlarge in high-resolution viewer
            </span>
          </div>
        </div>

        {/* Thumbnails Row if multiple images */}
        {product.images.length > 1 && (
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 bg-charcoal-950 p-1 ${
                  selectedImageIndex === idx
                    ? "border-olive-600 shadow-sm"
                    : "border-border hover:border-olive-400 opacity-70 hover:opacity-100"
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
            ))}
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
