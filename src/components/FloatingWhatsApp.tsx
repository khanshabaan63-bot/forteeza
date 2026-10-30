"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function FloatingWhatsApp() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const message = "Hello Forteeza Safe Company, I would like to know more about your safes and security products.";
  const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 print:hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Floating Tooltip Pill */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-charcoal-900 text-white text-xs font-medium px-3.5 py-2 rounded-full shadow-soft-lg border border-charcoal-700 transition-all duration-300 pointer-events-none ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        <ShieldCheck className="w-3.5 h-3.5 text-olive-400" />
        <span>Direct Factory Inquiries: {siteConfig.whatsappDisplay}</span>
      </div>

      {/* Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp inquiry with Forteeza Safe Company"
        className="group relative flex items-center justify-center w-14 h-14 bg-olive-700 hover:bg-olive-800 text-white rounded-full shadow-card-hover transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-olive-500/40"
      >
        {/* Subtle breathing ring */}
        <span className="absolute -inset-1 rounded-full bg-olive-600/30 animate-ping opacity-60 pointer-events-none" />
        
        {/* Icon */}
        <MessageCircle className="w-7 h-7 relative z-10 transition-transform duration-200 group-hover:scale-110" />

        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
      </a>
    </div>
  );
}
