import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ShieldCheck, Award, Wrench, Users, CheckCircle, ArrowRight, PhoneCall } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ManufacturingGallery from "@/components/ManufacturingGallery";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us & Manufacturing Setup | Forteeza Safe Company",
  description:
    "Learn about Forteeza Safe Company, our 50+ years of team industry experience, manufacturing setup, metalworking craftsmanship, and commitment to business asset protection.",
};

export default function AboutPage() {
  const editorialSections = [
    {
      title: "Five Decades of Hands-On Engineering Knowledge",
      subtitle: "More than 50 years of collective team experience in safe fabrication.",
      body: "Security is not merely about assembling steel sheets; it requires deep understanding of structural load transfer, drill deflection vectors, locking deadbolts, and relocker triggers. Forteeza Safe Company’s core manufacturing team brings over 50 years of collective industry experience. We have observed decades of forced entry tactics, evolving from traditional mechanical chiseling to modern power tools, and engineered every barrier layer accordingly.",
      image: "/images/manufacturing/skilled-workers.png",
      alt: "Forteeza team of skilled craftsmen and safe metalworkers",
      badge: "Team Experience",
      imageFirst: false,
    },
    {
      title: "A Manufacturing-Oriented Approach",
      subtitle: "Heavy steel fabrication, seamless welding, and precision assembly.",
      body: "Unlike retail traders who resell lightweight branded boxes, Forteeza operates with a genuine manufacturing-first mindset. Every commercial safe begins with heavy structural steel plates, machine-cut to exacting tolerances, multi-bend monolithic body forming, and continuous internal arc welding. Our workshop environment is dedicated to producing safes that withstand immense physical duress.",
      image: "/images/manufacturing/manufacturing-setup.png",
      alt: "Forteeza Safe Company manufacturing workshop showing safes under construction",
      badge: "Factory Workshop",
      imageFirst: true,
    },
    {
      title: "Customized to Real Customer Requirements",
      subtitle: "Safes engineered for jewellery shops, banks, and commercial premises.",
      body: "No two businesses share identical security challenges. A busy gold-loan branch in Lucknow requires multi-tier dual-custody customer deposit lockers, while a retail cash desk in Ghaziabad needs compact under-counter anti-fish chute protection. We engage directly with customers, consulting on door clearance, floor weight distribution, inner secret partitions, and lock integration.",
      image: "/images/manufacturing/manufacturing-facility.png",
      alt: "Forteeza manufacturing facility floor displaying commercial safes",
      badge: "Custom Engineering",
      imageFirst: false,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-canvas-subtle border-b border-border py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "About Us" }]} />

          <div className="mt-4 max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-wider text-olive-800 bg-olive-100 border border-olive-200 px-3 py-1 rounded inline-block mb-3">
              About Forteeza Safe Company
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-charcoal-900 tracking-tight leading-tight">
              Protecting What Matters, <br />
              <span className="text-olive-700">Through Experience and Engineering.</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-charcoal-600 leading-relaxed max-w-2xl">
              Forteeza Safe Company is a professional, manufacturing-focused business providing safe and security solutions for jewellery showrooms, banks, gold-loan companies, commercial establishments, offices, and industrial enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Storytelling: Left-Right Alternating Layout */}
      <section className="py-16 md:py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-28">
          {editorialSections.map((sec, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center ${
                sec.imageFirst ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text column */}
              <div
                className={`lg:col-span-6 ${
                  sec.imageFirst ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <span className="text-[11px] font-bold uppercase tracking-wider text-olive-800 bg-olive-100/90 px-2.5 py-1 rounded border border-olive-200">
                  {sec.badge}
                </span>
                <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl text-charcoal-900 leading-snug">
                  {sec.title}
                </h2>
                <p className="mt-2 text-sm sm:text-base font-semibold text-olive-800">
                  {sec.subtitle}
                </p>
                <p className="mt-4 text-sm text-charcoal-600 leading-relaxed">
                  {sec.body}
                </p>

                <div className="mt-6 pt-4 border-t border-border-subtle flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-semibold text-charcoal-700">
                    Built to protect commercial assets for decades.
                  </span>
                </div>
              </div>

              {/* Image column */}
              <div
                className={`lg:col-span-6 ${
                  sec.imageFirst ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="relative rounded-xl overflow-hidden bg-charcoal-950 border border-border shadow-soft-lg group">
                  <div className="relative h-72 sm:h-96 w-full">
                    <Image
                      src={sec.image}
                      alt={sec.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  </div>
                  <div className="p-4 bg-canvas-subtle border-t border-border flex items-center justify-between text-xs text-charcoal-600">
                    <span className="font-semibold text-charcoal-800">{sec.badge}</span>
                    <span className="text-olive-700 font-medium">Forteeza Workshop</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CRITICAL REQUIREMENT: Dedicated Manufacturing Setup Photos Section */}
      <ManufacturingGallery showIntro={true} />

      {/* Long-Term Relationships Strip */}
      <section className="py-16 bg-canvas border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Our Commitment"
              title="Built for Decades of Dependable Protection"
              subtitle="Safes are long-term security investments. Our focus is on enduring craftsmanship, transparent technical consultation, and building trust that spans generations."
              align="center"
            />

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/products"
                className="w-full sm:w-auto px-6 py-3 rounded bg-charcoal-900 hover:bg-charcoal-950 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-soft"
              >
                EXPLORE SECURITY PRODUCTS
              </Link>
              <WhatsAppButton
                message="Hello Forteeza Safe Company, I would like to consult with your manufacturing team regarding a safe requirement."
                size="md"
                variant="primary"
                className="w-full sm:w-auto text-xs uppercase tracking-wider font-bold"
              >
                <span>CONSULT WITH OUR TEAM</span>
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
