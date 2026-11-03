"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowRight,
  Maximize2,
  Lock,
  Truck,
  Award,
  Sparkles,
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageLightbox from "@/components/ImageLightbox";

export default function HeroSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <section className="relative bg-gradient-to-b from-[#FAF9F5] via-[#F5F3EC] to-[#ECE8DC] overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 border-b border-border-subtle">
        {/* Subtle precision architectural grid pattern */}
        <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#1A1D1A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        {/* Ambient Warm Luxury Studio Glows */}
        <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-olive-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -left-28 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Typography, Rakshak Logo & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-olive-100/90 border border-olive-200/90 text-olive-900 text-xs font-bold uppercase tracking-wider mb-5 shadow-soft-sm backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-olive-700" />
                <span>Heavy-Duty Security Engineering &amp; Vault Architecture</span>
              </div>

              {/* Main Requested Headline */}
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-charcoal-900 tracking-tight leading-[1.08]">
                Forteeza Safe &amp; <br className="hidden sm:inline" />
                <span className="text-olive-700">Vaults Company</span>
              </h1>

              {/* Rakshak Logo - Positioned Directly Below Headline */}
              <div className="mt-5 mb-5">
                <div className="inline-flex items-center gap-4 bg-white/95 backdrop-blur-md px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border border-border shadow-soft hover:shadow-soft-lg transition-all duration-300 group/logo">
                  <div className="relative h-12 sm:h-14 w-44 sm:w-56 flex items-center justify-center">
                    <img
                      src="/images/logo/logo.png"
                      alt="Rakshak Logo"
                      className="max-h-full max-w-full w-auto h-auto object-contain filter drop-shadow-sm select-none transition-transform duration-200 group-hover/logo:scale-[1.02]"
                    />
                  </div>
                  <div className="h-8 sm:h-9 w-px bg-border-strong/60" />
                  <div className="flex flex-col pr-1">
                    <span className="text-[10px] sm:text-[11px] font-heading font-extrabold uppercase tracking-wider text-charcoal-900">
                      Rakshak Series
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-olive-800 font-semibold tracking-wider uppercase">
                      50+ Years Heritage
                    </span>
                  </div>
                </div>
              </div>

              {/* Supporting Headline */}
              <p className="font-heading font-semibold text-lg sm:text-xl text-charcoal-800 leading-snug">
                Safes, Lockers and Security Solutions for Businesses.
              </p>

              {/* Description */}
              <p className="mt-3 text-sm sm:text-base text-charcoal-600 max-w-xl leading-relaxed">
                Forteeza Safe &amp; Vaults Company provides heavy-duty physical security solutions for jewellery showrooms, banking vaults, commercial establishments, and enterprises seeking dependable protection for their valuable assets.
              </p>

              {/* Hero Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-charcoal-900 hover:bg-black text-white font-heading font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-soft hover:shadow-soft-lg group"
                >
                  <span>EXPLORE OUR PRODUCTS</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <WhatsAppButton
                  message="Hello Forteeza Safe & Vaults Company, I would like to know more about your safes and commercial vault products."
                  size="lg"
                  variant="primary"
                  className="text-xs sm:text-sm tracking-wider uppercase font-bold rounded-lg shadow-soft"
                >
                  <span>ENQUIRE ON WHATSAPP</span>
                </WhatsAppButton>
              </div>

              {/* Trust Subtext Feature Chips */}
              <div className="mt-8 pt-6 border-t border-border-subtle flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-charcoal-600">
                <div className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Direct Factory Quotes</span>
                </div>
                <span className="text-charcoal-300 hidden sm:inline">•</span>
                <div className="flex items-center gap-1.5 font-medium">
                  <Lock className="w-3.5 h-3.5 text-olive-700" />
                  <span>Multi-Bolt Relocker Protection</span>
                </div>
                <span className="text-charcoal-300 hidden sm:inline">•</span>
                <div className="flex items-center gap-1.5 font-medium">
                  <Truck className="w-3.5 h-3.5 text-olive-700" />
                  <span>North India Regional Supply</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Safe Visual Studio Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Visual Backdrop Frame */}
                <div className="relative rounded-3xl bg-gradient-to-b from-white via-canvas-subtle to-canvas-muted p-5 sm:p-7 border border-border shadow-soft-lg overflow-hidden group">
                  {/* Subtle Studio Lighting Glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-olive-200/30 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-100/40 rounded-full blur-2xl pointer-events-none" />

                  {/* Header Badge */}
                  <div className="relative z-10 flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-olive-700 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      <ShieldCheck className="w-3.5 h-3.5 text-olive-200" />
                      <span>Flagship Commercial Safe</span>
                    </span>
                    <span className="text-[11px] font-mono text-charcoal-600 font-semibold uppercase tracking-wider bg-canvas/80 px-2 py-0.5 rounded border border-border">
                      Series 50+
                    </span>
                  </div>

                  {/* High-Resolution Interactive Studio Pedestal */}
                  <div
                    className="relative h-80 sm:h-96 md:h-[430px] w-full flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#FAF9F5] via-[#F4F2EC] to-[#ECE9DF] border border-border/80 shadow-inner p-4 cursor-zoom-in"
                    onClick={() => setLightboxOpen(true)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setLightboxOpen(true);
                      }
                    }}
                    aria-label="Inspect Double Door Defender Safe in High Resolution"
                  >
                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#CBD7CB_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />

                    <img
                      src="/images/hero/hero-safe.png"
                      alt="Forteeza Safe & Vaults Company - High Security Commercial Double Door Safe"
                      className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-1.5 select-none"
                    />

                    {/* Floating Feature Pills */}
                    <div className="absolute bottom-3 left-3 z-20 hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-charcoal-900/85 backdrop-blur-md text-white text-[10px] font-medium border border-charcoal-700/60 shadow-soft">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Multi-Directional Shooting Bolts</span>
                    </div>

                    <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 rounded-full bg-charcoal-900/80 text-white backdrop-blur-md shadow-soft">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Caption underneath */}
                  <div className="mt-4 pt-3 border-t border-border/80 flex items-center justify-between text-xs text-charcoal-600">
                    <span className="font-semibold text-charcoal-800">
                      Double Door Defender Series
                    </span>
                    <span className="text-[11px] text-olive-700 font-bold uppercase tracking-wider inline-flex items-center gap-1">
                      <span>Click to inspect</span>
                      <Maximize2 className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox for Hero Safe */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc="/images/hero/hero-safe.png"
        imageAlt="Forteeza Safe & Vaults Company - Flagship Double Door Defender Safe"
        title="Double Door Defender Commercial Safe"
        description="Flagship commercial safe engineered with multi-layer steel barrier, interlocking double rebated doors, continuous rear dog bolts, and high-security dual locking."
        badge="Flagship Commercial Safe"
      />
    </>
  );
}
