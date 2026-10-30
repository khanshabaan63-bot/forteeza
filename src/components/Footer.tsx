import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ShieldCheck, MapPin, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-charcoal-300 border-t border-charcoal-800">
      {/* Top Banner: Industrial Security Assurance */}
      <div className="bg-olive-950/80 border-b border-olive-900/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <ShieldCheck className="w-6 h-6 text-olive-400 shrink-0" />
            <div>
              <p className="font-heading font-bold text-white text-sm sm:text-base">
                50+ Years of Team Industry Experience in Safe Manufacturing
              </p>
              <p className="text-xs text-olive-200">
                Direct factory engineering & consultation for jewellers, banks, and commercial enterprises.
              </p>
            </div>
          </div>
          <WhatsAppButton
            size="sm"
            variant="primary"
            className="text-xs tracking-wider uppercase font-bold px-4 py-2 bg-olive-600 hover:bg-olive-500 text-white"
          >
            <span>CONNECT WITH SPECIALISTS</span>
          </WhatsAppButton>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-10 w-36 bg-canvas-subtle/10 p-1 rounded">
                <Image
                  src="/images/logo/logo.png"
                  alt="Forteeza Safe Company"
                  fill
                  className="object-contain object-left brightness-200 invert"
                />
              </div>
            </Link>
            
            <p className="text-xs sm:text-sm text-charcoal-400 leading-relaxed max-w-sm">
              Forteeza Safe Company specializes in manufacturing heavy-duty safes, tijoris, commercial lockers, and strong-room doors. Built with uncompromising structural integrity for businesses requiring dependable security.
            </p>

            <div className="pt-2 text-xs space-y-2 text-charcoal-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-olive-400" />
                <span>Official Inquiries: {siteConfig.whatsappDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-olive-400" />
                <span>{siteConfig.contactPlaceholder.serviceHours}</span>
              </div>
              <div className="flex items-start gap-2 pt-1 text-[11px] text-charcoal-500">
                <MapPin className="w-3.5 h-3.5 text-olive-400 shrink-0 mt-0.5" />
                <span>Direct factory coordination & dispatch serving North India target locations.</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Company & Process
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-olive-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-olive-300 transition-colors">
                  About Us & Factory Setup
                </Link>
              </li>
              <li>
                <Link href="/clients-served" className="hover:text-olive-300 transition-colors">
                  Clients & Industries Served
                </Link>
              </li>
              <li>
                <Link href="/our-expertise" className="hover:text-olive-300 transition-colors">
                  Our Expertise & Process
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-olive-300 transition-colors">
                  Projects & Installations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-olive-300 transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Security Products */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Security Products
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/products/double-door-defender-safe" className="hover:text-olive-300 transition-colors">
                  Double Door Defender Safes
                </Link>
              </li>
              <li>
                <Link href="/products/jewellery-showroom-safe" className="hover:text-olive-300 transition-colors">
                  Jewellery Showroom Safes
                </Link>
              </li>
              <li>
                <Link href="/products/double-door-fireproof-safe" className="hover:text-olive-300 transition-colors">
                  Double Door Fireproof Safes
                </Link>
              </li>
              <li>
                <Link href="/products/single-door-defender-safe" className="hover:text-olive-300 transition-colors">
                  Single Door Commercial Safes
                </Link>
              </li>
              <li>
                <Link href="/products/strong-room-doors-and-vaults" className="hover:text-olive-300 transition-colors">
                  Strong-Room Doors & Vaults
                </Link>
              </li>
              <li>
                <Link href="/products/cash-counter-retail-safe" className="hover:text-olive-300 transition-colors">
                  Cash Counter Deposit Safes
                </Link>
              </li>
              <li>
                <Link href="/products/custom-engineered-safes" className="hover:text-olive-300 transition-colors">
                  Custom-Made Safes
                </Link>
              </li>
            </ul>
          </div>

          {/* Regional Target Locations */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Target Locations
            </h4>
            <ul className="space-y-1.5 text-xs">
              {siteConfig.targetLocations.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/${loc.slug}`}
                    className="hover:text-olive-300 transition-colors flex items-center justify-between"
                  >
                    <span>{loc.name}</span>
                    <span className="text-[10px] text-charcoal-500">View</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-8 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-500">
          <p>
            © {new Date().getFullYear()} Forteeza Safe Company. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-charcoal-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-charcoal-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-charcoal-300 transition-colors">
              Inquire on WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
