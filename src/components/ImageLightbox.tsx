"use client";

import React, { useEffect, useCallback, useState } from "react";
import { X, Info, AlertCircle } from "lucide-react";

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Reset loading & error state when imageSrc or isOpen changes
  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      setError(false);
    }
  }, [imageSrc, isOpen]);

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-charcoal-950/85 backdrop-blur-sm transition-opacity animate-fade-in"
      onClick={onClose}
    >
      {/* Lightbox Modal Container */}
      <div
        className="relative max-w-5xl w-full flex flex-col bg-canvas rounded-lg overflow-hidden shadow-2xl border border-border"
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
            <h3 className="font-heading font-bold text-sm sm:text-base text-charcoal-900 truncate max-w-[240px] sm:max-w-md">
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
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[65vh] min-h-[280px] max-h-[620px] bg-[#121612] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Subtle industrial grid pattern */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#CBD7CB_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          {/* Loading Spinner */}
          {loading && !error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-olive-300 z-10">
              <div className="w-8 h-8 border-2 border-olive-500 border-t-transparent rounded-full animate-spin" />
              <span className="text-xs font-mono text-charcoal-300">Loading product image...</span>
            </div>
          )}

          {/* Error State */}
          {error ? (
            <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 text-charcoal-300 gap-2">
              <AlertCircle className="w-8 h-8 text-amber-500" />
              <p className="text-sm font-semibold text-white">Unable to display image</p>
              <p className="text-xs text-charcoal-400">Image source: {imageSrc}</p>
            </div>
          ) : (
            <img
              src={imageSrc}
              alt={imageAlt || "Product image"}
              onLoad={() => setLoading(false)}
              onError={() => {
                setLoading(false);
                setError(true);
              }}
              className={`relative z-10 max-w-full max-h-full w-auto h-auto object-contain mx-auto my-auto drop-shadow-2xl transition-opacity duration-200 select-none ${
                loading ? "opacity-0" : "opacity-100"
              }`}
            />
          )}
        </div>

        {/* Lightbox Footer Details */}
        {description && (
          <div className="px-5 py-3.5 bg-canvas-subtle border-t border-border flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700">
            <Info className="w-4 h-4 text-olive-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed line-clamp-2 sm:line-clamp-none">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
