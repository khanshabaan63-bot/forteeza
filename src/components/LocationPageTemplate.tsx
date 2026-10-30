import React from "react";
import Link from "next/link";
import {
  MapPin,
  Building,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import { FAQSchema } from "@/components/SchemaOrg";
import { LocationData } from "@/data/locations";
import { products } from "@/data/products";
import { siteConfig } from "@/config/site";

interface LocationPageTemplateProps {
  location: LocationData;
}

export default function LocationPageTemplate({ location }: LocationPageTemplateProps) {
  const recommendedProductObjects = products.filter((p) =>
    location.recommendedProducts.includes(p.id)
  );

  const whatsappMessage = `Hello Forteeza Safe Company, I am looking for safe and security solutions in ${location.name}. Please share the available products and service details.`;

  return (
    <div className="flex flex-col">
      <FAQSchema faqs={location.faqs} />

      {/* Location Hero Header */}
      <section className="bg-canvas-subtle border-b border-border py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Locations", href: "/#locations" },
              { label: location.name },
            ]}
          />

          <div className="mt-4 max-w-4xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-olive-100 border border-olive-200 text-olive-900 text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 text-olive-700" />
              <span>Regional Coverage: {location.region}</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-charcoal-900 tracking-tight leading-tight">
              {location.h1}
            </h1>

            <p className="mt-4 text-sm sm:text-base text-charcoal-700 leading-relaxed max-w-3xl">
              {location.introduction}
            </p>

            <div className="mt-6 flex flex-wrap gap-4 items-center">
              <WhatsAppButton
                message={whatsappMessage}
                size="md"
                variant="primary"
                className="text-xs uppercase font-bold tracking-wider"
              >
                <span>INQUIRE FOR {location.name.toUpperCase()} ON WHATSAPP</span>
              </WhatsAppButton>

              <span className="text-xs text-charcoal-500">
                Direct factory consultation: {siteConfig.whatsappDisplay}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Profile & Tailored Industry Needs */}
      <section className="py-14 md:py-20 bg-canvas border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                badge={`${location.name} Commercial Sector`}
                title="Commercial Landscape & Physical Security Demands"
                subtitle={location.commercialProfile}
                className="mb-6"
              />

              <div className="p-5 rounded-lg bg-olive-50 border border-olive-200 text-xs text-charcoal-700 space-y-2">
                <div className="flex items-center gap-2 font-bold text-olive-900 text-xs uppercase">
                  <ShieldCheck className="w-4 h-4 text-olive-700" />
                  <span>50+ Years Manufacturing Heritage</span>
                </div>
                <p>
                  Every safe for {location.name} enterprises is engineered with heavy structural steel, unpickable lever locking, and multi-directional shooting bolts.
                </p>
              </div>
            </div>

            {/* Key Industries in this location */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-charcoal-600 block mb-2">
                Key Sector Security Applications in {location.name}
              </span>

              {location.keyIndustries.map((ind, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg bg-canvas-subtle border border-border hover:border-olive-400 transition-colors"
                >
                  <h3 className="font-heading font-bold text-base text-charcoal-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-olive-700" />
                    <span>{ind.name}</span>
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-charcoal-600 leading-relaxed pl-6">
                    {ind.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Products for this Location */}
      <section className="py-14 md:py-24 bg-canvas-subtle border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <SectionHeading
              badge="Recommended Products"
              title={`Engineered Safes for ${location.name} Establishments`}
              subtitle={`Heavy commercial safes, tijoris, and vault doors suited for businesses in ${location.name}.`}
              className="mb-0"
            />
            <Link
              href="/products"
              className="text-xs font-bold uppercase tracking-wider text-olive-800 hover:text-olive-950 inline-flex items-center gap-1 shrink-0"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {recommendedProductObjects.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      </section>

      {/* Quotation & Requirements Form */}
      <section className="py-14 md:py-20 bg-canvas border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-olive-800 bg-olive-100 border border-olive-200 px-3 py-1 rounded inline-block mb-2">
              Request a Quotation
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-charcoal-900">
              Get a Direct Factory Quote for {location.name}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-charcoal-600">
              Provide your dimension and locking preferences below. We format your inquiry directly to our engineering team on WhatsApp.
            </p>
          </div>

          <ContactForm initialCity={location.name} />
        </div>
      </section>

      {/* Location FAQs */}
      <section className="py-14 md:py-20 bg-canvas-subtle border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-olive-800 bg-olive-100 border border-olive-200 px-3 py-1 rounded inline-block mb-2">
              Regional FAQs
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-charcoal-900">
              Frequently Asked Questions for {location.name}
            </h2>
          </div>

          <div className="space-y-4">
            {location.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg bg-canvas border border-border shadow-soft-sm"
              >
                <h3 className="font-heading font-bold text-base text-charcoal-900 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-olive-700 shrink-0 mt-1" />
                  <span>{faq.question}</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-charcoal-600 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Location Links Strip */}
      <section className="py-12 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-border gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-olive-800">
                Coverage Network
              </span>
              <h3 className="font-heading font-bold text-base text-charcoal-900">
                Other Locations We Serve
              </h3>
            </div>
            <WhatsAppButton
              message={whatsappMessage}
              size="sm"
              variant="outline"
              className="text-xs font-bold uppercase"
            >
              <span>INQUIRE FOR OTHER CITIES</span>
            </WhatsAppButton>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-6 text-xs text-charcoal-700">
            {siteConfig.targetLocations
              .filter((loc) => loc.slug !== location.slug)
              .map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/${loc.slug}`}
                  className="p-2.5 rounded bg-canvas-subtle hover:bg-olive-50 hover:text-olive-900 border border-border transition-colors flex items-center justify-between"
                >
                  <span className="font-medium truncate">{loc.name}</span>
                  <span className="text-[10px] text-charcoal-400">View →</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
