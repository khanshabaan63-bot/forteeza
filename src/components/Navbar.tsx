"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall } from "lucide-react";
import { siteConfig } from "@/config/site";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-canvas/95 backdrop-blur-md shadow-soft border-b border-border py-2.5"
          : "bg-canvas border-b border-border-subtle py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-olive-600 rounded"
            aria-label="Forteeza Safe Company - Home"
          >
            <div className="relative h-10 w-28 sm:h-11 sm:w-36 flex items-center">
              <Image
                src="/images/logo/logo.png"
                alt="Forteeza Safe Company Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <div className="hidden min-[420px]:flex flex-col border-l border-border pl-3">
              <span className="font-heading font-extrabold text-xs sm:text-sm tracking-widest text-charcoal-900 uppercase">
                Forteeza
              </span>
              <span className="text-[10px] uppercase tracking-wider text-olive-700 font-semibold -mt-0.5">
                Safe Company
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {siteConfig.navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-xs xl:text-sm font-semibold tracking-wide transition-colors rounded ${
                    isActive
                      ? "text-olive-800 bg-olive-50 font-bold"
                      : "text-charcoal-700 hover:text-olive-800 hover:bg-canvas-subtle"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action: WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <WhatsAppButton
              size="sm"
              variant="primary"
              className="text-xs uppercase tracking-wider font-bold py-2.5 px-4 shadow-sm"
            >
              <span>ENQUIRE ON WHATSAPP</span>
            </WhatsAppButton>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <WhatsAppButton
              size="sm"
              variant="primary"
              className="p-2 text-xs"
              showIcon={true}
            >
              <span className="sr-only">WhatsApp</span>
            </WhatsAppButton>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-md text-charcoal-800 hover:text-olive-800 hover:bg-canvas-subtle focus:outline-none focus:ring-2 focus:ring-olive-600"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-charcoal-950/70 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-canvas shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-fade-in border-l border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-5 border-b border-border">
                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-sm tracking-widest text-charcoal-900 uppercase">
                    Forteeza
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-olive-700 font-semibold">
                    Safe Company
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-charcoal-600 hover:text-charcoal-950 rounded-full"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col space-y-2">
                {siteConfig.navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-3 py-2.5 text-sm font-semibold rounded-md transition-colors ${
                        isActive
                          ? "bg-olive-100 text-olive-900 font-bold"
                          : "text-charcoal-800 hover:bg-canvas-subtle"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Quick Regional Links */}
              <div className="mt-6 pt-5 border-t border-border">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal-500 block mb-2">
                  Key Locations
                </span>
                <div className="grid grid-cols-2 gap-1.5 text-xs text-charcoal-700">
                  {siteConfig.targetLocations.slice(0, 6).map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/${loc.slug}`}
                      className="py-1 hover:text-olive-700 truncate"
                    >
                      {loc.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions inside drawer */}
            <div className="pt-6 border-t border-border space-y-3">
              <div className="text-xs text-charcoal-600 flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-olive-700" />
                <span>Direct Inquiries: {siteConfig.whatsappDisplay}</span>
              </div>
              <WhatsAppButton
                size="md"
                variant="primary"
                className="w-full justify-center text-xs tracking-wider font-bold py-3 uppercase"
              >
                <span>ENQUIRE ON WHATSAPP</span>
              </WhatsAppButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
