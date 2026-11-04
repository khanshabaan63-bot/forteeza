"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ZoomIn, Info } from "lucide-react";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title?: string;
  description?: string;
  badge?: string;
}

export default function ImageLightbox({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  title,
  description,
  badge,
}: ImageLightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const isDark =
    imageSrc.includes("counter-safe") ||
    imageSrc.includes("manufacturing") ||
    imageSrc.includes(".svg");

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title || "Image Viewer"}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-charcoal-950/85 backdrop-blur-sm transition-opacity animate-fade-in"
      onClick={onClose}
    >
      {/* Lightbox Modal Container */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-canvas rounded-lg overflow-hidden shadow-2xl border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Lightbox Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-canvas-subtle border-b border-border">
          <div className="flex items-center gap-2.5">
            {badge && (
              <span className="text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-olive-700 text-white">
                {badge}
              </span>
            )}
            <h3 className="font-heading font-bold text-sm sm:text-base text-charcoal-900 truncate max-w-[280px] sm:max-w-md">
              {title || "Product & Manufacturing Inspection"}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close image viewer"
            className="p-1.5 rounded-full text-charcoal-600 hover:text-charcoal-950 hover:bg-canvas-muted transition-colors focus:outline-none focus:ring-2 focus:ring-olive-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display Area */}
        <div
          className={`relative flex-1 min-h-[300px] sm:min-h-[420px] max-h-[65vh] flex items-center justify-center p-6 ${
            isDark ? "bg-black" : "bg-white"
          }`}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* If SVG or PNG */}
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
        </div>

        {/* Lightbox Footer Details */}
        {description && (
          <div className="px-5 py-3.5 bg-canvas-subtle border-t border-border flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700">
            <Info className="w-4 h-4 text-olive-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
