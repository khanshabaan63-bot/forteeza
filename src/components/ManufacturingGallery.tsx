"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, ShieldCheck, Wrench, Sparkles } from "lucide-react";
import { manufacturingItems, manufacturingSectionData, ManufacturingItem } from "@/data/manufacturing";
import ImageLightbox from "@/components/ImageLightbox";

interface ManufacturingGalleryProps {
  showIntro?: boolean;
  className?: string;
}

export default function ManufacturingGallery({
  showIntro = true,
  className = "",
}: ManufacturingGalleryProps) {
  const [activeItem, setActiveItem] = useState<ManufacturingItem | null>(null);

  return (
    <section className={`py-16 md:py-24 bg-canvas-subtle border-y border-border ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {showIntro && (
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-olive-100 border border-olive-200 text-olive-900 text-xs font-bold uppercase tracking-wider mb-4">
              <Wrench className="w-3.5 h-3.5 text-olive-700" />
              <span>Manufacturing & Craftsmanship</span>
            </div>
            
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-charcoal-900 tracking-tight leading-tight">
              {manufacturingSectionData.heading}
            </h2>

            <p className="mt-3 font-heading font-semibold text-lg sm:text-xl text-olive-800">
              {manufacturingSectionData.supportingHeading}
            </p>

            <p className="mt-4 text-sm sm:text-base text-charcoal-700 leading-relaxed max-w-2xl">
              {manufacturingSectionData.description}
            </p>
          </div>
        )}

        {/* Editorial Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {manufacturingItems.map((item) => {
            return (
              <div
                key={item.id}
                className="group relative flex flex-col bg-canvas rounded-lg border border-border overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:border-olive-500"
              >
                {/* Image Container with Hover Animation */}
                <div
                  className="relative h-64 sm:h-80 w-full bg-charcoal-950 overflow-hidden cursor-zoom-in"
                  onClick={() => setActiveItem(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveItem(item);
                    }
                  }}
                  aria-label={`View enlarged photo: ${item.title}`}
                >
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#CBD7CB_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-2">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded backdrop-blur-md border ${
                        item.isGenuineSuppliedPhoto
                          ? "bg-emerald-950/80 text-emerald-200 border-emerald-600/60"
                          : "bg-charcoal-900/80 text-olive-200 border-olive-700/50"
                      }`}
                    >
                      {item.statusLabel || item.category}
                    </span>
                  </div>

                  {/* Expand icon on hover */}
                  <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 rounded-full bg-charcoal-900/80 text-white backdrop-blur-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Image with subtle floating scale */}
                  <div className="relative w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                    <Image
                      src={item.imageSrc}
                      alt={item.alt}
                      fill
                      className={item.isGenuineSuppliedPhoto ? "object-cover" : "object-contain"}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Prompt hint */}
                  <div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-90 transition-opacity duration-200">
                    <span className="text-[10px] text-olive-100 bg-charcoal-950/70 px-2 py-0.5 rounded font-mono">
                      Click to inspect
                    </span>
                  </div>
                </div>

                {/* Editorial Caption Details */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-canvas">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-olive-700 mb-1">
                      <span>{item.category}</span>
                      {item.isGenuineSuppliedPhoto && (
                        <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Supplied Workshop Photo</span>
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading font-bold text-lg sm:text-xl text-charcoal-900 group-hover:text-olive-800 transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between text-xs text-charcoal-500">
                    <button
                      onClick={() => setActiveItem(item)}
                      className="font-semibold text-olive-800 hover:text-olive-950 inline-flex items-center gap-1"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Enlarge & View Details</span>
                    </button>
                    <span className="text-[11px]">Forteeza Security Engineering</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparency note */}
        <div className="mt-10 p-4 rounded-lg bg-olive-50 border border-olive-200 text-xs text-charcoal-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-olive-700 shrink-0" />
            <p>
              <strong>Factory Authenticity Commitment:</strong> All photographs above showcase actual Forteeza manufacturing facilities, workshop setup, and fabrication craftsmen.
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {activeItem && (
        <ImageLightbox
          isOpen={!!activeItem}
          onClose={() => setActiveItem(null)}
          imageSrc={activeItem.imageSrc}
          imageAlt={activeItem.alt}
          title={activeItem.title}
          description={activeItem.description}
          badge={activeItem.category}
        />
      )}
    </section>
  );
}
