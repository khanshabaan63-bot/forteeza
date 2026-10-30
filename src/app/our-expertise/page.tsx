import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  Wrench,
  KeyRound,
  Sliders,
  DoorClosed,
  Hammer,
  Truck,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Our Expertise & Manufacturing Process | Forteeza Safe Company",
  description:
    "Explore Forteeza's manufacturing expertise across safes, tijoris, commercial security equipment, multi-stage locking mechanisms, strong-room doors, and our 5-step engineering process.",
};

export default function OurExpertisePage() {
  const expertiseAreas = [
    {
      title: "Safe & Tijori Engineering",
      icon: ShieldCheck,
      description: "Monolithic body structures, multi-layered barrier composite infill, and anti-drill manganese armor plating engineered to protect liquid bullion, gold, and legal records.",
    },
    {
      title: "Commercial Security Equipment",
      icon: Sliders,
      description: "Heavy cash counter deposit safes, night drop boxes, and anti-fish baffles designed for high-turnover retail environments, petrol pumps, and financial branches.",
    },
    {
      title: "Mechanical & Electronic Locking Systems",
      icon: KeyRound,
      description: "Precision calibration of double-bitted unpickable key locks, 3-wheel or 4-wheel mechanical combination dials, and digital touch electronic keypads with dual custody.",
    },
    {
      title: "Lockers & Storage Cabinets",
      icon: DoorClosed,
      description: "Custom multi-tier locker columns, numbered borrower compartments, and internal secret drawers engineered for banks, credit societies, and private collections.",
    },
    {
      title: "Heavy-Duty Strong-Room Doors",
      icon: Hammer,
      description: "Vault doors manufactured with heavy structural vestibule frames for concrete casting, balanced spoke-wheel boltwork, and integrated secondary day-grille gates.",
    },
    {
      title: "Custom Architectural Fabrications",
      icon: Wrench,
      description: "Bespoke dimensions, non-standard weights, tailored internal velvet layouts, and specific anchor configurations designed to client blueprints.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Requirement Discussion",
      description: "We review your operational risk profile, floor space constraints, door clearance dimensions, and the category of assets to be secured.",
    },
    {
      step: "02",
      title: "Product Recommendation",
      description: "Our technical specialists recommend the appropriate safe class, steel plate thickness, and fire barrier specification suited to your premises.",
    },
    {
      step: "03",
      title: "Configuration & Quotation",
      description: "We define lock combinations (dual key, combination dial, or electronic keypad), internal locker columns, and provide a clear, transparent quotation.",
    },
    {
      step: "04",
      title: "Manufacturing or Preparation",
      description: "Heavy fabrication, precision welding, locking alignment, multi-point tolerance checks, and quality finishing in our workshop bay.",
    },
    {
      step: "05",
      title: "Delivery & Support",
      description: "Careful freight dispatch coordination, floor placement guidance, and ongoing direct technical support for locking mechanism operation.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-canvas-subtle border-b border-border py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Our Expertise" }]} />

          <div className="mt-4 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-olive-800 bg-olive-100 border border-olive-200 px-3 py-1 rounded inline-block mb-3">
              Engineering Capabilities
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-charcoal-900 tracking-tight">
              Manufacturing Expertise Backed by Over 50 Years of Experience
            </h1>
            <p className="mt-3 text-sm sm:text-base text-charcoal-600 leading-relaxed">
              From heavy monolithic commercial safes to custom strong-room vault doors, our manufacturing knowledge spans mechanical barrier engineering, locking linkages, and tailored security fabrications.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Capabilities Grid */}
      <section className="py-16 md:py-24 bg-canvas border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Core Disciplines"
            title="Comprehensive Safe & Security Capabilities"
            subtitle="Explore our technical specialization across commercial safe construction, locking engineering, and custom architectural vault doors."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {expertiseAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-lg bg-canvas-subtle border border-border hover:border-olive-500 hover:shadow-soft transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-olive-100 flex items-center justify-center text-olive-800 mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-charcoal-900">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between text-xs">
                    <span className="text-olive-700 font-semibold">Forteeza Standard</span>
                    <span className="text-[11px] text-charcoal-400">Engineering Focused</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Process Section */}
      <section className="py-16 md:py-24 bg-charcoal-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-olive-300 bg-olive-950 px-3 py-1 rounded border border-olive-800 inline-block mb-3">
              End-to-End Workflow
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              Our 5-Step Security Process
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-charcoal-400">
              A structured, transparent engineering process ensuring your safe is tailored to your physical premises and operational routines.
            </p>
          </div>

          {/* Process Flow Cards with Flow Arrows */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 relative">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-lg bg-charcoal-900 border border-charcoal-800 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-bold text-olive-400 block mb-2">
                    {step.step}
                  </span>
                  <h3 className="font-heading font-bold text-base text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-charcoal-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-olive-500">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Direct CTA */}
          <div className="mt-14 text-center">
            <WhatsAppButton
              message="Hello Forteeza Safe Company, I would like to begin step 1 (Requirement Discussion) for a commercial safe."
              size="lg"
              variant="primary"
              className="text-xs uppercase font-bold tracking-wider"
            >
              <span>START REQUIREMENT DISCUSSION ON WHATSAPP</span>
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Support & Services Note */}
      <section className="py-14 bg-canvas-subtle border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-xl bg-canvas border border-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-olive-100 flex items-center justify-center text-olive-800 shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-charcoal-900">
                  Installation Coordination & Advisory
                </h4>
                <p className="text-xs text-charcoal-600 mt-0.5">
                  We assist with transport packaging, floor load assessment, and coordinate secure delivery across our target regional network.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="px-5 py-2.5 rounded bg-charcoal-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider shrink-0 transition-colors"
            >
              CONTACT OUR TEAM
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
