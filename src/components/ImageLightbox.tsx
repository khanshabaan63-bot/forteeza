"use client";

import React, { useEffect, useCallback } from "react";
import { X, Info, ZoomIn } from "lucide-react";

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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title || "Image Viewer"}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-charcoal-950/80 backdrop-blur-md transition-opacity animate-fade-in"
      onClick={onClose}
    >
      {/* Lightbox Modal Container */}
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-canvas rounded-xl overflow-hidden shadow-2xl border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Lightbox Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-canvas-subtle border-b border-border">
          <div className="flex items-center gap-2.5">
            {badge && (
              <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-olive-700 text-white shadow-soft-sm">
                {badge}
              </span>
            )}
            <h3 className="font-heading font-bold text-sm sm:text-base text-charcoal-900 truncate max-w-[260px] sm:max-w-lg">
              {title || "Product & Manufacturing Inspection"}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex text-[11px] text-charcoal-500 font-medium">
              Press Esc or click outside to close
            </span>
            <button
              onClick={onClose}
              aria-label="Close image viewer"
              className="p-1.5 rounded-full text-charcoal-600 hover:text-charcoal-950 hover:bg-canvas-muted transition-colors focus:outline-none focus:ring-2 focus:ring-olive-600 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* High-Contrast Light Showroom Display Area */}
        <div className="relative w-full h-[62vh] min-h-[340px] max-h-[640px] bg-gradient-to-b from-[#FFFFFF] via-[#FAF9F5] to-[#EFECE3] flex items-center justify-center p-4 sm:p-8 overflow-hidden select-none">
          {/* Subtle Studio Grid Background Pattern */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#CBD7CB_1.2px,transparent_1.2px)] [background-size:20px_20px] pointer-events-none" />

          {/* Centered High-Resolution Image */}
          <div className="relative w-full h-full flex items-center justify-center z-10">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
              loading="eager"
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
