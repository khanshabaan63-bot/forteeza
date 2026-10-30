"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { products } from "@/data/products";

interface ContactFormProps {
  initialProduct?: string;
  initialCity?: string;
}

export default function ContactForm({ initialProduct = "", initialCity = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    city: initialCity,
    product: initialProduct || "Double Door Defender Safe",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone / WhatsApp number is required";
    if (!formData.city.trim()) newErrors.city = "City / Location is required";
    if (!formData.product.trim()) newErrors.product = "Please select a product of interest";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Contextual WhatsApp pre-filled message according to official prompt specification:
    // "Hello Forteeza Safe Company, my name is [NAME], my company is [COMPANY], I am located in [CITY], and I am interested in [PRODUCT]. My requirements are: [MESSAGE]. Please contact me."
    const companyPart = formData.company.trim() ? formData.company.trim() : "Private Enterprise";
    const messagePart = formData.message.trim() ? formData.message.trim() : "Quotation and technical dimension options";
    
    const prefilledText = `Hello Forteeza Safe Company, my name is ${formData.name.trim()}, my company is ${companyPart}, I am located in ${formData.city.trim()}, and I am interested in ${formData.product.trim()}. My requirements are: ${messagePart}. Please contact me.`;

    const encoded = encodeURIComponent(prefilledText);
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-canvas rounded-lg border border-border p-6 sm:p-8 shadow-soft">
      <div className="flex items-center gap-2 mb-6 text-xs uppercase tracking-wider font-bold text-olive-800">
        <MessageCircle className="w-4 h-4 text-olive-700" />
        <span>Direct WhatsApp Inquiry Generator</span>
      </div>

      <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-charcoal-900 tracking-tight">
        Send Technical Requirement
      </h3>
      <p className="mt-1.5 text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">
        Fill out your requirements below to instantly generate a formal WhatsApp enquiry connected directly to our engineering team.
      </p>

      {submitted ? (
        <div className="p-6 rounded-lg bg-emerald-50 border border-emerald-200 text-charcoal-800 space-y-4">
          <div className="flex items-center gap-3 text-emerald-800 font-bold">
            <CheckCircle2 className="w-6 h-6 shrink-0" />
            <span>WhatsApp Conversation Triggered!</span>
          </div>
          <p className="text-sm text-charcoal-700 leading-relaxed">
            Your requirement details were formatted and opened in WhatsApp. If the tab did not open automatically, click the direct button below to continue:
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              `Hello Forteeza Safe Company, my name is ${formData.name}, I am located in ${formData.city}, interested in ${formData.product}. Please share quotation.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded bg-olive-700 hover:bg-olive-800 text-white font-bold text-xs uppercase tracking-wider"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Open in WhatsApp Now</span>
          </a>
          <button
            onClick={() => setSubmitted(false)}
            className="block text-xs text-charcoal-600 hover:text-charcoal-900 underline mt-2"
          >
            Submit another requirement
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-charcoal-800 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rajesh Verma"
                className={`w-full px-3.5 py-2.5 text-sm rounded bg-canvas-subtle border ${
                  errors.name ? "border-red-500 focus:ring-red-400" : "border-border focus:ring-olive-500"
                } focus:outline-none focus:ring-2`}
              />
              {errors.name && <p className="mt-1 text-[11px] text-red-600">{errors.name}</p>}
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="company" className="block text-xs font-semibold text-charcoal-800 mb-1">
                Company / Showroom Name
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Verma Jewellers"
                className="w-full px-3.5 py-2.5 text-sm rounded bg-canvas-subtle border border-border focus:outline-none focus:ring-2 focus:ring-olive-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-charcoal-800 mb-1">
                Phone / WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 9876543210"
                className={`w-full px-3.5 py-2.5 text-sm rounded bg-canvas-subtle border ${
                  errors.phone ? "border-red-500 focus:ring-red-400" : "border-border focus:ring-olive-500"
                } focus:outline-none focus:ring-2`}
              />
              {errors.phone && <p className="mt-1 text-[11px] text-red-600">{errors.phone}</p>}
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-xs font-semibold text-charcoal-800 mb-1">
                City / Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="e.g. Ghaziabad / Lucknow"
                className={`w-full px-3.5 py-2.5 text-sm rounded bg-canvas-subtle border ${
                  errors.city ? "border-red-500 focus:ring-red-400" : "border-border focus:ring-olive-500"
                } focus:outline-none focus:ring-2`}
              />
              {errors.city && <p className="mt-1 text-[11px] text-red-600">{errors.city}</p>}
            </div>
          </div>

          {/* Product of Interest */}
          <div>
            <label htmlFor="product" className="block text-xs font-semibold text-charcoal-800 mb-1">
              Product of Interest <span className="text-red-500">*</span>
            </label>
            <select
              id="product"
              value={formData.product}
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm rounded bg-canvas-subtle border border-border focus:outline-none focus:ring-2 focus:ring-olive-500 text-charcoal-800"
            >
              {products.map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name} ({p.category})
                </option>
              ))}
              <option value="Custom Safe Specification">Custom Safe Specification</option>
              <option value="Strong Room Door & Day Gate">Strong Room Door & Day Gate</option>
            </select>
          </div>

          {/* Message / Requirement Details */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-charcoal-800 mb-1">
              Requirement Details / Dimensions
            </label>
            <textarea
              id="message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="e.g. Need a 4-foot double door safe with internal lockers for jewellery storage. Please share quotation and delivery timeline."
              className="w-full px-3.5 py-2.5 text-sm rounded bg-canvas-subtle border border-border focus:outline-none focus:ring-2 focus:ring-olive-500"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-md bg-olive-700 hover:bg-olive-800 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-soft hover:shadow-soft-lg cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>SEND ENQUIRY ON WHATSAPP</span>
            </button>
            <p className="mt-2 text-[11px] text-charcoal-500 text-center">
              Direct connection to official WhatsApp number +91 8076009057.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
