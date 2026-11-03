"use client";

import React, { useEffect, useCallback, useState } from "react";
import { X, ZoomIn, ZoomOut, RotateCcw, Info, MessageCircle, Sun, Moon } from "lucide-react";
import { siteConfig } from "@/config/site";

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
  const [zoom, setZoom] = useState(1);
  const [darkBg, setDarkBg] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Reset zoom & states when modal opens with a new image
  useEffect(() => {
    if (isOpen) {
      setZoom(1);
      setLoaded(false);
    }
  }, [isOpen, imageSrc]);

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

  const whatsappMessage = `Hello Forteeza Safe Company, I am inquiring about the ${title || "safe product"} I viewed on your website. Please share specifications and quotation.`;
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title || "High-Resolution Image Inspection"}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-charcoal-950/80 backdrop-blur-md transition-opacity animate-fade-in"
      onClick={onClose}
    >
      {/* Lightbox Modal Container */}
      <div
        className="relative max-w-5xl w-full max-h-[94vh] flex flex-col bg-canvas rounded-xl overflow-hidden shadow-2xl border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Lightbox Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-canvas-subtle border-b border-border gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            {badge && (
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded bg-olive-700 text-white shrink-0">
                {badge}
              </span>
            )}
            <h3 className="font-heading font-bold text-sm sm:text-base text-charcoal-900 truncate">
              {title || "Product & Manufacturing Inspection"}
            </h3>
          </div>

          {/* Action Tools: Zoom Controls + Contrast Toggle + Close */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* Background contrast toggle */}
            <button
              onClick={() => setDarkBg(!darkBg)}
              aria-label={darkBg ? "Switch to light background" : "Switch to dark background"}
              title={darkBg ? "Switch to light background" : "Switch to dark background"}
              className="p-1.5 rounded-md text-charcoal-600 hover:text-charcoal-950 hover:bg-canvas-muted transition-colors text-xs font-semibold hidden sm:inline-flex items-center gap-1"
            >
              {darkBg ? (
                <>
                  <Sun className="w-4 h-4 text-amber-500" />
                  <span className="text-[11px]">Light View</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-olive-800" />
                  <span className="text-[11px]">Dark View</span>
                </>
              )}
            </button>

            {/* Zoom In */}
            <button
              onClick={() => setZoom((prev) => Math.min(prev + 0.25, 2.5))}
              aria-label="Zoom in"
              title="Zoom in"
              className="p-1.5 rounded-md text-charcoal-600 hover:text-charcoal-950 hover:bg-canvas-muted transition-colors"
            >
              <ZoomIn className="w-4 h-4" />
            </button>

            {/* Zoom Out */}
            <button
              onClick={() => setZoom((prev) => Math.max(prev - 0.25, 0.75))}
              aria-label="Zoom out"
              title="Zoom out"
              className="p-1.5 rounded-md text-charcoal-600 hover:text-charcoal-950 hover:bg-canvas-muted transition-colors"
            >
              <ZoomOut className="w-4 h-4" />
            </button>

            {/* Reset Zoom */}
            {zoom !== 1 && (
              <button
                onClick={() => setZoom(1)}
                aria-label="Reset zoom"
                title="Reset zoom"
                className="p-1.5 rounded-md text-charcoal-600 hover:text-charcoal-950 hover:bg-canvas-muted transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}

            <div className="h-4 w-px bg-border mx-1" />

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close image viewer"
              title="Close (Esc)"
              className="p-1.5 rounded-full text-charcoal-600 hover:text-charcoal-950 hover:bg-canvas-muted transition-colors focus:outline-none focus:ring-2 focus:ring-olive-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* High-Visibility Image Display Area */}
        <div
          className={`relative w-full h-[55vh] sm:h-[68vh] max-h-[700px] flex items-center justify-center p-4 sm:p-8 overflow-hidden transition-colors duration-300 select-none ${
            darkBg ? "bg-[#161B16]" : "bg-[#F8F7F3]"
          }`}
        >
          {/* Subtle architectural grid pattern */}
          <div
            className={`absolute inset-0 pointer-events-none transition-opacity ${
              darkBg
                ? "opacity-20 bg-[radial-gradient(#CBD7CB_1px,transparent_1px)] [background-size:20px_20px]"
                : "opacity-40 bg-[radial-gradient(#CBD7CB_1px,transparent_1px)] [background-size:20px_20px]"
            }`}
          />

          {/* Actual Full-Resolution Image */}
          <img
            src={imageSrc}
            alt={imageAlt || title || "Forteeza Safe Inspection"}
            onLoad={() => setLoaded(true)}
            className={`relative z-10 max-h-full max-w-full w-auto h-auto object-contain transition-all duration-300 drop-shadow-xl ${
              loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{
              transform: `scale(${zoom})`,
              transformOrigin: "center center",
            }}
            loading="eager"
          />

          {/* Loading Spinner while decoding */}
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <div className="w-8 h-8 border-3 border-olive-300 border-t-olive-700 rounded-full animate-spin" />
            </div>
          )}

          {/* Scale indicator pill when zoomed */}
          {zoom !== 1 && (
            <div className="absolute bottom-3 left-4 z-20 bg-charcoal-900/80 text-white text-[11px] font-mono px-2.5 py-1 rounded backdrop-blur-sm">
              {Math.round(zoom * 100)}%
            </div>
          )}
        </div>

        {/* Lightbox Footer Details & Instant WhatsApp Action */}
        <div className="px-4 sm:px-6 py-3.5 bg-canvas-subtle border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-start gap-2.5 text-charcoal-700 flex-1 min-w-0">
            <Info className="w-4 h-4 text-olive-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed line-clamp-2">
              {description ||
                "Inspecting genuine Forteeza commercial safe engineering, steel body fabrication, and high-security bolt mechanisms."}
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded bg-olive-700 hover:bg-olive-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
