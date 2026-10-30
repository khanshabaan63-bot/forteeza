import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Coins,
  Building2,
  Lock,
  Store,
  Briefcase,
  Layers,
  Factory,
  ShieldCheck,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Clients & Industries Served | Forteeza Safe Company",
  description:
    "Security solutions engineered for jewellery showrooms, banks, gold-loan companies, retail establishments, commercial offices, and industrial premises.",
};

export default function ClientsServedPage() {
  const industries = [
    {
      id: "jewellery",
      title: "Jewellery Showrooms & Bullion Dealers",
      icon: Coins,
      tagline: "High-value physical bullion and diamond ornament protection",
      challenges: [
        "High concentration of liquid, high-value assets requiring overnight vault storage.",
        "Need for multiple internal velvet-lined compartments to organize inventory categories.",
        "Protection against targeted mechanical attack, heavy tools, and drill attempts.",
      ],
      solutions: [
        "Heavy Jewellery Defender Safes with anti-drill manganese plates.",
        "Dual-key unpickable lever locks ensuring mandatory two-person custody.",
        "Internal locking sub-drawers with independent keys for individual counter managers.",
      ],
      relevantProducts: [
        { name: "Jewellery Showroom Heavy Defender Safe", href: "/products/jewellery-showroom-safe" },
        { name: "Double Door Defender Heavy Commercial Safe", href: "/products/double-door-defender-safe" },
      ],
    },
    {
      id: "banking",
      title: "Banks & Financial Institutions",
      icon: Building2,
      tagline: "Institutional vault doors and currency chest defense",
      challenges: [
        "Stringent physical specifications for strong-room doors and night depository safes.",
        "Requirement for day grille gates allowing daytime air circulation while securing the portal.",
        "Multi-stage locking combining mechanical combination dials with electronic keyways.",
      ],
      solutions: [
        "Engineered Strong-Room Doors with heavy channel frame for RCC casting.",
        "Secondary day inspection gate with independent locking boltwork.",
        "Live automatic relocking devices triggered by physical force or heat rise.",
      ],
      relevantProducts: [
        { name: "Heavy-Duty Strong-Room Door & Vault Security", href: "/products/strong-room-doors-and-vaults" },
        { name: "Double Door Defender Safe", href: "/products/double-door-defender-safe" },
      ],
    },
    {
      id: "gold-loan",
      title: "Gold-Loan Companies & NBFCs",
      icon: Lock,
      tagline: "Individual customer pledge locker compartments with audit control",
      challenges: [
        "High volume of pledged gold packets belonging to individual loan borrowers.",
        "Strict regulatory guidelines requiring dual-custody audit logs for all vault entries.",
        "High turnover during branch disbursement and redemption hours.",
      ],
      solutions: [
        "Custom Gold-Loan Vault Safes partitioned with 24 to 48 individual numbered lockers.",
        "Master-keying system requiring Branch Manager and Custodian keys to operate.",
        "Pre-drilled base plates for high-strength chemical anchor floor grouting.",
      ],
      relevantProducts: [
        { name: "Gold-Loan Branch High-Security Vault Safe", href: "/products/gold-loan-company-vault-safe" },
        { name: "Double Door Defender Safe", href: "/products/double-door-defender-safe" },
      ],
    },
    {
      id: "retail",
      title: "Retail Establishments & Supermarkets",
      icon: Store,
      tagline: "Under-counter cash management and anti-fish deposit chutes",
      challenges: [
        "Surplus cash accumulating at billing counters throughout peak shopping hours.",
        "Vulnerability to cashier snatch-and-grab or unauthorized drawer tampering.",
        "Need for staff to deposit cash without having access to accumulated vault funds.",
      ],
      solutions: [
        "Commercial Cash Counter Drop Safes fitted with serrated anti-fishing baffles.",
        "Compact vertical footprints fitting beneath standard POS billing desks.",
        "Two-compartment custody: cashier drops bundles, manager holds bottom door key.",
      ],
      relevantProducts: [
        { name: "Commercial Cash Counter & Retail Safe", href: "/products/cash-counter-retail-safe" },
        { name: "Commercial Petrol Pump & Night Deposit Safe", href: "/products/petrol-pump-night-deposit-safe" },
      ],
    },
    {
      id: "offices",
      title: "Corporate Offices & Executive Suites",
      icon: Briefcase,
      tagline: "Fire-resistant protection for vital land deeds, contracts, and registers",
      challenges: [
        "Paper documents combust at 232°C (451°F) during commercial structural fires.",
        "Legal dispute risks if contracts, title deeds, and share certificates are destroyed.",
        "Need for clean corporate aesthetics matching modern executive interiors.",
      ],
      solutions: [
        "Single and Double Door Fireproof Safes with formulated insulation barrier matrices.",
        "Tongue-and-groove rebate door frame sealing off hot gases and water spray.",
        "Digital touchscreen keypad with emergency manual master key override.",
      ],
      relevantProducts: [
        { name: "Double Door Fireproof Safe & Tijori", href: "/products/double-door-fireproof-safe" },
        { name: "Single Door Fireproof Safe & Document Tijori", href: "/products/single-door-fireproof-safe" },
        { name: "Premium Executive & Home Security Safe", href: "/products/executive-home-security-safe" },
      ],
    },
    {
      id: "industrial",
      title: "Commercial & Industrial Establishments",
      icon: Factory,
      tagline: "Heavy-duty perimeter defense for plant accounts and warehouses",
      challenges: [
        "Factory payroll cash, scrap auction receipts, and expensive tooling equipment.",
        "Industrial workshop environments subject to dust, vibration, and rugged handling.",
        "Need for heavy monolithic steel structures that cannot be physically moved or overturned.",
      ],
      solutions: [
        "Heavy monolithic steel defender safes with solid continuous seam welds.",
        "Multi-directional high-tensile solid steel cylindrical shooting bolts.",
        "Heavy-gauge base anchoring flanges grouted directly into factory concrete slabs.",
      ],
      relevantProducts: [
        { name: "Single Door Defender Heavy Commercial Safe", href: "/products/single-door-defender-safe" },
        { name: "Double Door Defender Heavy Commercial Safe", href: "/products/double-door-defender-safe" },
        { name: "Custom-Engineered Architectural Security Safes", href: "/products/custom-engineered-safes" },
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-canvas-subtle border-b border-border py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Clients Served" }]} />

          <div className="mt-4 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-olive-800 bg-olive-100 border border-olive-200 px-3 py-1 rounded inline-block mb-3">
              Industry Security Solutions
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-charcoal-900 tracking-tight">
              Security Solutions Built for Diverse Business Demands
            </h1>
            <p className="mt-3 text-sm sm:text-base text-charcoal-600 leading-relaxed">
              Every industry faces distinct asset vulnerability profiles. With over 50 years of collective manufacturing experience, Forteeza Safe Company engineers specialized physical barriers matched to the risk parameters of commercial operations.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-16 md:py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                id={ind.id}
                className="p-8 sm:p-10 rounded-xl bg-canvas-subtle border border-border transition-all duration-200 hover:shadow-soft"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-olive-100 flex items-center justify-center text-olive-800 shrink-0">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-xl sm:text-2xl text-charcoal-900">
                        {ind.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-semibold text-olive-800 mt-0.5">
                        {ind.tagline}
                      </p>
                    </div>
                  </div>

                  <WhatsAppButton
                    message={`Hello Forteeza Safe Company, I represent a ${ind.title} business and would like to discuss security safes.`}
                    size="sm"
                    variant="primary"
                    className="shrink-0 text-xs uppercase font-bold"
                  >
                    <span>CONSULT FOR THIS INDUSTRY</span>
                  </WhatsAppButton>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                  {/* Operating Challenges */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-700 flex items-center gap-1.5 mb-3">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span>Security & Operational Challenges</span>
                    </h3>
                    <ul className="space-y-2.5">
                      {ind.challenges.map((c, i) => (
                        <li key={i} className="text-xs sm:text-sm text-charcoal-600 flex items-start gap-2">
                          <span className="text-charcoal-400 font-bold shrink-0">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Forteeza Engineering Solutions */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-olive-800 flex items-center gap-1.5 mb-3">
                      <CheckCircle2 className="w-4 h-4 text-olive-700" />
                      <span>Forteeza Engineering Response</span>
                    </h3>
                    <ul className="space-y-2.5">
                      {ind.solutions.map((s, i) => (
                        <li key={i} className="text-xs sm:text-sm text-charcoal-700 font-medium flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-olive-700 mt-2 shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Relevant Products Bar */}
                <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal-500">
                    Recommended Safes:
                  </span>
                  {ind.relevantProducts.map((p, i) => (
                    <Link
                      key={i}
                      href={p.href}
                      className="text-xs font-semibold px-3 py-1.5 rounded bg-canvas hover:bg-olive-50 text-olive-900 border border-border hover:border-olive-400 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{p.name}</span>
                      <ArrowRight className="w-3 h-3 text-olive-600" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Transparent Client Privacy Statement */}
      <section className="py-12 bg-canvas-subtle border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="w-8 h-8 text-olive-700 mx-auto mb-3" />
          <h3 className="font-heading font-bold text-lg text-charcoal-900">
            Client Confidentiality & Discretion Policy
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-charcoal-600 leading-relaxed max-w-2xl mx-auto">
            Due to the high-security nature of safe manufacturing and vault installations, Forteeza Safe Company strictly respects client confidentiality. We do not publish sensitive client lists or private address locations without explicit authorization.
          </p>
        </div>
      </section>
    </div>
  );
}
