import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Sliders,
  Users,
  ArrowRight,
  Sparkles,
  MapPin,
  ChevronRight,
  Lock,
  Building2,
  Coins,
  Store,
  Briefcase,
  Layers,
  Wrench,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { products } from "@/data/products";
import { projectsData } from "@/data/projects";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 6);

  const trustPoints = [
    {
      icon: Award,
      title: "50+ Years Experience",
      desc: "Collective team expertise across five decades of industrial safe engineering.",
    },
    {
      icon: ShieldCheck,
      title: "Commercial Security Solutions",
      desc: "Engineered physical barriers against burglary, forced entry, and fire hazards.",
    },
    {
      icon: Sliders,
      title: "Product Configuration Options",
      desc: "Custom dimensional fabrication, internal lockers, and locking systems.",
    },
    {
      icon: Users,
      title: "Customer-Focused Support",
      desc: "Direct requirement consultation and advisory for business asset protection.",
    },
  ];

  const industries = [
    {
      title: "Jewellery Showrooms",
      icon: Coins,
      description: "Heavy tijoris with anti-drill shields, velvet trays, and multi-bolt locking to protect bullion and diamond ornaments.",
    },
    {
      title: "Banking & Finance",
      icon: Building2,
      description: "Vault doors with day grille gates, dual combination locking, and high-security depository safes.",
    },
    {
      title: "Gold-Loan Businesses",
      icon: Lock,
      description: "Segmented locker safes featuring numbered borrower pledge boxes and dual-custody access.",
    },
    {
      title: "Retail Establishments",
      icon: Store,
      description: "Anti-fish under-counter deposit safes and cash drop collection units for busy cash counters.",
    },
    {
      title: "Corporate Offices",
      icon: Briefcase,
      description: "Fireproof document safes safeguarding title deeds, contracts, accounts, and confidential files.",
    },
    {
      title: "Commercial Establishments",
      icon: Layers,
      description: "Heavy monolithic defender safes for factories, distribution hubs, and commercial centers.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative bg-canvas overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-border-subtle">
        {/* Subtle background industrial grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1A1D1A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Typography & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-olive-100/90 border border-olive-200 text-olive-900 text-xs font-bold uppercase tracking-wider mb-5">
                <ShieldCheck className="w-4 h-4 text-olive-700" />
                <span>Commercial Security & Safe Manufacturing</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal-900 tracking-tight leading-[1.1]">
                Advanced Security. <br />
                <span className="text-olive-700">Built on Trust.</span>
              </h1>

              {/* Supporting Headline */}
              <p className="mt-4 font-heading font-semibold text-lg sm:text-xl text-charcoal-800">
                Safes, Lockers and Security Solutions for Businesses.
              </p>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-charcoal-600 max-w-xl leading-relaxed">
                Forteeza Safe & Vaults Company provides safe and security solutions for jewellery showrooms, commercial establishments, offices, and businesses seeking dependable protection for their valuable assets.
              </p>

              {/* Hero Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-charcoal-900 hover:bg-charcoal-950 text-white font-heading font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-soft hover:shadow-soft-lg group"
                >
                  <span>EXPLORE OUR PRODUCTS</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <WhatsAppButton
                  message="Hello Forteeza Safe Company, I would like to know more about your safes and security products."
                  size="lg"
                  variant="primary"
                  className="text-xs sm:text-sm tracking-wider uppercase font-bold"
                >
                  <span>ENQUIRE ON WHATSAPP</span>
                </WhatsAppButton>
              </div>

              {/* Trust Subtext */}
              <div className="mt-8 pt-6 border-t border-border-subtle flex items-center gap-4 text-xs text-charcoal-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Direct Factory Quotes</span>
                </div>
                <span>•</span>
                <div>50+ Years Industry Knowledge</div>
                <span>•</span>
                <div>North India Regional Supply</div>
              </div>
            </div>

            {/* Right Column: Hero Safe Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Visual Backdrop Frame */}
                <div className="relative rounded-2xl bg-gradient-to-b from-canvas-subtle to-canvas-muted p-4 sm:p-6 border border-border shadow-soft-lg">
                  {/* Subtle Badge */}
                  <div className="absolute -top-3 right-6 bg-olive-700 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded shadow-sm">
                    Flagship Commercial Safe
                  </div>

                  <div className="relative h-80 sm:h-96 md:h-[420px] w-full flex items-center justify-center overflow-hidden rounded-lg bg-[#141A14]">
                    <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#CBD7CB_1px,transparent_1px)] [background-size:20px_20px]" />
                    <Image
                      src="/images/hero/hero-safe.png"
                      alt="Forteeza Safe Company - High Security Commercial Double Door Safe"
                      fill
                      className="object-contain p-4 drop-shadow-2xl transition-transform duration-700 hover:scale-105"
                      priority
                    />
                  </div>

                  {/* Caption underneath */}
                  <div className="mt-4 flex items-center justify-between text-xs text-charcoal-600">
                    <span className="font-semibold text-charcoal-800">
                      Double Door Defender Series
                    </span>
                    <span className="text-[11px] text-olive-700 font-medium">
                      Multi-Bolt Protection
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="bg-canvas-subtle border-b border-border py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-3.5 p-4 rounded-lg bg-canvas border border-border transition-all hover:border-olive-400"
                >
                  <div className="p-2.5 rounded bg-olive-100 text-olive-800 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-charcoal-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-charcoal-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS */}
      <section className="py-16 md:py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <SectionHeading
              badge="Product Portfolio"
              title="Commercial Safes & Tijoris"
              subtitle="Engineered with heavy structural steel, multi-directional locking bolts, and high-security key or electronic configurations."
              className="mb-0"
            />
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-olive-800 hover:text-olive-950 transition-colors group shrink-0"
            >
              <span>View All 12+ Categories</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} priority={idx < 3} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs sm:text-sm text-charcoal-600 mb-4">
              Need non-standard dimensions, specific steel thickness, or tailored locker columns?
            </p>
            <WhatsAppButton
              message="Hello Forteeza Safe Company, I need a custom-dimension safe for my business. Please advise."
              variant="outline"
              size="md"
              className="text-xs uppercase tracking-wider font-bold"
            >
              <span>INQUIRE FOR CUSTOM SPECIFICATIONS</span>
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* 4. WHY FORTEEZA */}
      <section className="py-16 md:py-24 bg-canvas-subtle border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <SectionHeading
                badge="Why Forteeza Safe Company"
                title="Manufacturing Workmanship Focused on Long-Term Security"
                subtitle="Safes are one-time capital investments that must perform flawlessly during high-stress burglary or fire events. We build with heavy physical integrity rather than hollow cosmetic shortcuts."
              />

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-canvas border border-border">
                  <h4 className="font-heading font-bold text-sm sm:text-base text-charcoal-900">
                    50+ Years of Collective Manufacturing Knowledge
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    Our metalworking veterans understand the subtle nuances of lever alignment, barrier infill formulation, and drill deflection plating learned across five decades in the trade.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-canvas border border-border">
                  <h4 className="font-heading font-bold text-sm sm:text-base text-charcoal-900">
                    Direct Customer Requirement Consultation
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    Every commercial premises has unique entry doorways, floor load parameters, and cash routines. We consult directly with business owners to ensure the chosen safe matches real operating needs.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-canvas border border-border">
                  <h4 className="font-heading font-bold text-sm sm:text-base text-charcoal-900">
                    Transparent Technical Guidance
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    We never make unverified marketing claims. Our team shares verified specifications and clearly guides clients on lock grades, shooting bolt dimensions, and anchoring procedures.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side visual: Actual Workshop image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden border border-border shadow-soft-lg bg-charcoal-950">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/manufacturing/manufacturing-setup.png"
                    alt="Forteeza Safe Company Manufacturing Setup"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-700/60 inline-block mb-2">
                      Actual Factory Photo
                    </span>
                    <h3 className="font-heading font-bold text-lg text-white">
                      Behind Every Safe Is a Commitment to Security
                    </h3>
                    <p className="text-xs text-charcoal-300 mt-1">
                      Safe bodies fabricated with precision steel cutting and continuous seam welds in our heavy workshop.
                    </p>
                    <Link
                      href="/about"
                      className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-olive-300 hover:text-white uppercase tracking-wider"
                    >
                      <span>Explore Manufacturing Setup</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE */}
      <section className="py-16 md:py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Tailored Security Solutions"
            title="Industries We Serve"
            subtitle="Commercial security equipment customized to the operating risks and daily cash routines of diverse industries."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-lg bg-canvas-subtle border border-border hover:border-olive-500 hover:shadow-soft transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-olive-100 flex items-center justify-center text-olive-800 mb-4 group-hover:bg-olive-700 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-charcoal-900">
                    {ind.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {ind.description}
                  </p>
                  <Link
                    href="/clients-served"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-olive-700 hover:text-olive-900 uppercase tracking-wider"
                  >
                    <span>Read Industry Guide</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. MANUFACTURING & WORKMANSHIP PREVIEW */}
      <section className="py-16 md:py-20 bg-charcoal-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-olive-400 bg-olive-950 px-3 py-1 rounded border border-olive-800 inline-block mb-3">
                Manufacturing Setup
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
                Behind Every Safe Is a Commitment to Security.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-olive-200 font-semibold">
                Experience, Workmanship and Manufacturing Expertise.
              </p>
              <p className="mt-4 text-xs sm:text-sm text-charcoal-400 leading-relaxed max-w-xl">
                Our focus is on understanding customer requirements and providing suitable safe and security solutions through industry experience, product knowledge, and attention to workmanship.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs text-charcoal-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Actual Workshop Photos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-emerald-400" />
                  <span>Lock Configuration & Alignment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>Skilled Craftsmen at Work</span>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded bg-olive-600 hover:bg-olive-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-soft"
                >
                  <span>VIEW FULL WORKSHOP PHOTO GALLERY</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative h-44 rounded-lg overflow-hidden border border-charcoal-800 bg-charcoal-900">
                <Image
                  src="/images/manufacturing/manufacturing-facility.png"
                  alt="Manufacturing Facility Floor"
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 text-[10px] bg-black/70 px-2 py-0.5 rounded text-white font-mono">
                  Facility Floor
                </span>
              </div>
              <div className="relative h-44 rounded-lg overflow-hidden border border-charcoal-800 bg-charcoal-900">
                <Image
                  src="/images/manufacturing/skilled-workers.png"
                  alt="Skilled Metalworkers"
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 text-[10px] bg-black/70 px-2 py-0.5 rounded text-white font-mono">
                  Skilled Craftsmen
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PROJECTS SHOWCASE PREVIEW */}
      <section className="py-16 md:py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <SectionHeading
              badge="Client Deployments"
              title="Verified Commercial Security Projects"
              subtitle="Safes and strong-room installations fabricated for jewellery retailers, corporate accounts, and commercial enterprises."
              className="mb-0"
            />
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-olive-800 hover:text-olive-950 transition-colors group shrink-0"
            >
              <span>View All Project Cases</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {projectsData.slice(0, 3).map((proj) => (
              <div
                key={proj.id}
                className="flex flex-col bg-canvas-subtle rounded-lg border border-border overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:border-olive-400"
              >
                <div className="relative h-52 bg-charcoal-950 flex items-center justify-center p-4">
                  <Image
                    src={proj.imageSrc}
                    alt={proj.title}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-olive-900 text-olive-100 border border-olive-700">
                      {proj.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-semibold text-olive-700 flex items-center gap-1 mb-1">
                      <MapPin className="w-3 h-3" />
                      <span>{proj.location}</span>
                    </div>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-charcoal-900 line-clamp-2">
                      {proj.title}
                    </h3>
                    <p className="mt-2 text-xs text-charcoal-600 line-clamp-3">
                      {proj.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between text-xs">
                    <span className="text-[11px] text-charcoal-500">{proj.clientType}</span>
                    <Link
                      href="/projects"
                      className="font-bold text-olive-800 hover:text-olive-950"
                    >
                      Case Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LOCATION COVERAGE */}
      <section className="py-16 md:py-24 bg-canvas-subtle border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Regional Focus"
            title="Commercial Safe Solutions Across Target Locations"
            subtitle="Direct factory coordination, custom sizing, and dispatch support for businesses in nine key regions."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {siteConfig.targetLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/${loc.slug}`}
                className="p-5 rounded-lg bg-canvas border border-border hover:border-olive-600 hover:shadow-soft transition-all duration-200 group flex items-start justify-between"
              >
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-olive-700">
                    {loc.state}
                  </div>
                  <h3 className="font-heading font-bold text-base text-charcoal-900 group-hover:text-olive-800 transition-colors mt-0.5">
                    Safe Manufacturers in {loc.name}
                  </h3>
                  <p className="mt-1 text-xs text-charcoal-500">
                    Jewellery tijoris, fireproof safes, and commercial vault doors.
                  </p>
                </div>
                <div className="p-2 rounded-full bg-canvas-subtle text-charcoal-400 group-hover:bg-olive-100 group-hover:text-olive-800 transition-colors shrink-0 ml-3">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="py-16 md:py-20 bg-olive-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#CBD7CB_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-olive-800 border border-olive-700 text-olive-200 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Safe Engineering Advisory</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
            Looking for the Right Safe for Your Business?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-olive-100 max-w-2xl mx-auto leading-relaxed">
            Discuss your dimensional requirements, floor space parameters, and locking options directly with our team. We provide tailored quotations and technical specifications.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="w-full sm:w-auto px-7 py-3.5 rounded bg-white hover:bg-canvas-subtle text-charcoal-950 font-heading font-bold text-xs sm:text-sm tracking-wider uppercase transition-colors shadow-soft"
            >
              EXPLORE PRODUCTS
            </Link>

            <WhatsAppButton
              message="Hello Forteeza Safe Company, I am looking for the right safe for my business. Please connect with me to discuss options."
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto text-xs sm:text-sm tracking-wider uppercase font-bold bg-charcoal-950 hover:bg-black text-white border border-charcoal-800"
            >
              <span>CHAT WITH OUR TEAM</span>
            </WhatsAppButton>
          </div>

          <p className="mt-6 text-xs text-olive-300">
            Official WhatsApp: {siteConfig.whatsappDisplay} • Mon-Sat 9:30 AM – 7:30 PM
          </p>
        </div>
      </section>
    </div>
  );
}
