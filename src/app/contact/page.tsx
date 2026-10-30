import React from "react";
import { Metadata } from "next";
import { MessageCircle, Phone, MapPin, Clock, ShieldCheck, HelpCircle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us & Factory Inquiries | Forteeza Safe Company",
  description:
    "Connect with Forteeza Safe Company on WhatsApp (+91 8076009057) for commercial safe quotations, custom dimension discussions, and regional dispatch support.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-canvas-subtle border-b border-border py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Contact Us" }]} />

          <div className="mt-4 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-olive-800 bg-olive-100 border border-olive-200 px-3 py-1 rounded inline-block mb-3">
              Direct Factory Consultation
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-charcoal-900 tracking-tight">
              Connect with Forteeza Safe Specialists
            </h1>
            <p className="mt-3 text-sm sm:text-base text-charcoal-600 leading-relaxed">
              We provide direct consultation for commercial safes, jewellery tijoris, and custom vault doors. Connect with our engineering team via official WhatsApp for fast responses and technical quotations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Form & Direct Contact Cards */}
      <section className="py-14 md:py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Interactive Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Contact Details & Regional Logistics */}
            <div className="lg:col-span-5 space-y-6">
              {/* WhatsApp Primary Card */}
              <div className="p-6 rounded-xl bg-olive-900 text-white shadow-soft">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-olive-800 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-olive-300" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white">
                      Official WhatsApp Inquiries
                    </h3>
                    <p className="text-xs text-olive-200">Fastest response channel</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-olive-100 leading-relaxed mt-2">
                  Send your room dimensions, floor photos, or required locker configuration directly to our engineering desk.
                </p>

                <div className="mt-4 pt-4 border-t border-olive-800 flex items-center justify-between">
                  <span className="font-mono font-bold text-lg text-white">
                    {siteConfig.whatsappDisplay}
                  </span>
                  <WhatsAppButton
                    size="sm"
                    variant="secondary"
                    className="bg-white hover:bg-canvas-subtle text-charcoal-950 font-bold text-xs uppercase"
                  >
                    <span>CHAT NOW</span>
                  </WhatsAppButton>
                </div>
              </div>

              {/* Working Hours & Coordination Card */}
              <div className="p-6 rounded-xl bg-canvas-subtle border border-border space-y-4">
                <h4 className="font-heading font-bold text-base text-charcoal-900 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-olive-700" />
                  <span>Consultation Hours</span>
                </h4>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  {siteConfig.contactPlaceholder.serviceHours}
                </p>
                <p className="text-xs text-charcoal-500">
                  Inquiries received outside business hours will be addressed on the following business morning.
                </p>
              </div>

              {/* Regional Dispatch & Coordination */}
              <div className="p-6 rounded-xl bg-canvas-subtle border border-border space-y-4">
                <h4 className="font-heading font-bold text-base text-charcoal-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-olive-700" />
                  <span>Regional Dispatch & Target Network</span>
                </h4>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  We coordinate factory dispatch and logistics across:
                </p>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  {siteConfig.targetLocations.map((loc) => (
                    <span
                      key={loc.slug}
                      className="px-2 py-0.5 rounded bg-canvas border border-border text-charcoal-700"
                    >
                      {loc.name}
                    </span>
                  ))}
                </div>
                <div className="pt-2 text-[11px] text-charcoal-500 border-t border-border-subtle">
                  {siteConfig.contactPlaceholder.addressNote}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
