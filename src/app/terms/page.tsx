import React from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms and Conditions | Forteeza Safe Company",
  description: "Terms and conditions of service and product quotations for Forteeza Safe Company.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-canvas-subtle border-b border-border py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Terms and Conditions" }]} />
          <h1 className="mt-4 font-heading font-extrabold text-3xl sm:text-4xl text-charcoal-900 tracking-tight">
            Terms and Conditions
          </h1>
          <p className="mt-2 text-xs text-charcoal-500">
            Last updated: October 2026 • Forteeza Safe Company
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-canvas">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-sm leading-relaxed text-charcoal-700 space-y-6">
          <div>
            <h2 className="font-heading font-bold text-lg text-charcoal-900">
              1. Acceptance of Terms
            </h2>
            <p className="mt-2">
              By accessing the Forteeza Safe Company website, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please refrain from using this website.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-lg text-charcoal-900">
              2. Product Specifications & Custom Fabrications
            </h2>
            <p className="mt-2">
              Product photographs, renderings, and technical specifications presented on this website are for general illustrative and technical evaluation purposes. Exact steel plate thicknesses, locking configurations, external dimensions, and weights are confirmed in written quotations during technical discussions prior to manufacturing.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-lg text-charcoal-900">
              3. Quotations & Pricing
            </h2>
            <p className="mt-2">
              All prices and commercial quotations provided via WhatsApp or written estimates remain valid for the period stipulated in the quotation. Freight, floor handling, and rigging are coordinated separately based on site access conditions.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-lg text-charcoal-900">
              4. Intellectual Property
            </h2>
            <p className="mt-2">
              All company logos, photography, illustrations, text, and design elements are the intellectual property of Forteeza Safe Company and may not be reproduced without prior written permission.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
