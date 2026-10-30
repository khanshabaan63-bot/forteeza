import React from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Forteeza Safe Company",
  description: "Privacy Policy and information handling practices of Forteeza Safe Company.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-canvas-subtle border-b border-border py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Privacy Policy" }]} />
          <h1 className="mt-4 font-heading font-extrabold text-3xl sm:text-4xl text-charcoal-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-charcoal-500">
            Last updated: October 2026 • Forteeza Safe Company
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-canvas">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral text-sm leading-relaxed text-charcoal-700 space-y-6">
          <div>
            <h2 className="font-heading font-bold text-lg text-charcoal-900">
              1. Overview & Information Collection
            </h2>
            <p className="mt-2">
              Forteeza Safe Company respects your privacy. Our website does not utilize customer account tracking, hidden databases, or unauthorized behavioral surveillance. Any information you voluntarily provide via our enquiry forms is formatted and transferred directly through WhatsApp to initiate customer service communications.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-lg text-charcoal-900">
              2. Client Security Discretion
            </h2>
            <p className="mt-2">
              Given the sensitive nature of safes, bullion lockers, and vault door installations, we maintain strict discretion regarding client identities, commercial vault locations, and purchased locking configurations. We do not sell, rent, or lease client communication records to third-party marketing companies.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-lg text-charcoal-900">
              3. WhatsApp Communications
            </h2>
            <p className="mt-2">
              By initiating contact through our official WhatsApp number ({siteConfig.whatsappDisplay}), you acknowledge that communication is governed by WhatsApp's end-to-end encryption standards and privacy practices.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-lg text-charcoal-900">
              4. Contact for Privacy Matters
            </h2>
            <p className="mt-2">
              If you have any questions regarding privacy or confidentiality, connect directly with our administration team via our official WhatsApp business channel.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
