import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ShieldCheck,
  CheckCircle2,
  Sliders,
  Layers,
  HelpCircle,
  PhoneCall,
  Maximize2,
  Info,
  ArrowRight,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";
import { FAQSchema } from "@/components/SchemaOrg";
import { products, Product } from "@/data/products";
import { siteConfig } from "@/config/site";
import ProductGalleryClient from "./ProductGalleryClient";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    alternates: {
      canonical: `${siteConfig.siteUrl}/products/${product.slug}`,
    },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      url: `${siteConfig.siteUrl}/products/${product.slug}`,
      images: [
        {
          url: product.images[0] || "/images/hero/hero-safe.png",
          alt: product.name,
        },
      ],
    },
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const whatsappMessage = `Hello Forteeza Safe Company, I am interested in ${product.name}. Please share product details and quotation.`;

  return (
    <div className="flex flex-col">
      <FAQSchema faqs={product.faqs} />

      {/* Breadcrumb Header */}
      <section className="bg-canvas-subtle border-b border-border py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: product.name },
            ]}
          />
        </div>
      </section>

      {/* Main Product Hero & Gallery */}
      <section className="py-12 md:py-16 bg-canvas border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Gallery Column (Interactive Client Component) */}
            <div className="lg:col-span-6">
              <ProductGalleryClient product={product} />
            </div>

            {/* Product Overview & Purchase Actions Column */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded bg-olive-100 text-olive-900 border border-olive-200">
                  {product.category}
                </span>
                <span className="text-xs text-charcoal-500 font-mono">
                  Series: Heavy Commercial
                </span>
              </div>

              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-charcoal-900 tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="mt-4 text-sm sm:text-base text-charcoal-700 leading-relaxed">
                {product.detailedDescription}
              </p>

              {/* Quick Specification Highlights */}
              <div className="mt-6 p-4 rounded-lg bg-canvas-subtle border border-border space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-charcoal-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-olive-700" />
                  <span>Key Engineering Features</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal-600 pt-1">
                  {product.features.slice(0, 4).map((f, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-600 mt-1.5 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Action Area */}
              <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <WhatsAppButton
                  message={whatsappMessage}
                  size="lg"
                  variant="primary"
                  className="flex-1 justify-center text-xs sm:text-sm tracking-wider uppercase font-bold py-3.5"
                >
                  <span>GET QUOTATION ON WHATSAPP</span>
                </WhatsAppButton>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded border-2 border-charcoal-800 text-charcoal-800 hover:bg-charcoal-900 hover:text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  CUSTOM INQUIRY
                </Link>
              </div>

              <p className="mt-3 text-xs text-charcoal-500">
                Official Inquiries: {siteConfig.whatsappDisplay} • Direct factory coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Applications Section */}
      <section className="py-14 md:py-20 bg-canvas-subtle border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features List */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-olive-800 mb-2">
                <ShieldCheck className="w-4 h-4 text-olive-700" />
                <span>Security Engineering</span>
              </div>
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-charcoal-900">
                Product Features & Protection Mechanisms
              </h2>

              <ul className="mt-6 space-y-3.5">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-charcoal-700">
                    <CheckCircle2 className="w-5 h-5 text-olive-700 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications List */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-olive-800 mb-2">
                <Layers className="w-4 h-4 text-olive-700" />
                <span>Industry Suitability</span>
              </div>
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-charcoal-900">
                Recommended Applications
              </h2>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.applications.map((app, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-canvas border border-border shadow-soft-sm"
                  >
                    <span className="font-heading font-bold text-sm text-charcoal-900 block">
                      {app}
                    </span>
                    <span className="text-xs text-charcoal-500 mt-1 block">
                      Engineered for high-value protection
                    </span>
                  </div>
                ))}
              </div>

              {/* Configurations preview */}
              <div className="mt-8 p-5 rounded-lg bg-canvas border border-border">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-3">
                  <Sliders className="w-4 h-4 text-olive-700" />
                  <span>Available Configurations</span>
                </div>
                <ul className="space-y-2 text-xs text-charcoal-600">
                  {product.configurations.map((cfg, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-700 mt-1.5 shrink-0" />
                      <span>{cfg}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-14 md:py-20 bg-canvas border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-olive-800 bg-olive-100 border border-olive-200 px-3 py-1 rounded inline-block mb-2">
              Specifications & Construction
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-charcoal-900">
              Technical Specifications
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-charcoal-600">
              Specifications vary according to custom client dimensions and required security rating. Connect with our engineering team for verified dimension drawings and floor load specifications.
            </p>
          </div>

          <div className="max-w-4xl bg-canvas-subtle rounded-lg border border-border overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-canvas-muted border-b border-border">
                  <th className="py-3 px-4 sm:px-6 text-xs font-bold uppercase tracking-wider text-charcoal-800 w-1/3">
                    Parameter
                  </th>
                  <th className="py-3 px-4 sm:px-6 text-xs font-bold uppercase tracking-wider text-charcoal-800">
                    Configuration Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs sm:text-sm">
                {product.technicalSpecifications.map((spec, idx) => (
                  <tr key={idx} className="hover:bg-canvas transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-charcoal-900">
                      {spec.label}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-charcoal-700">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 max-w-4xl flex items-start gap-2 text-xs text-charcoal-500 bg-olive-50 p-3.5 rounded border border-olive-200">
            <Info className="w-4 h-4 text-olive-700 shrink-0 mt-0.5" />
            <p>
              <strong>Specification Note:</strong> Precise exterior dimensions, plate gauges, and internal locker heights are fabricated per customer architectural drawing. Contact us via WhatsApp for verified technical data.
            </p>
          </div>
        </div>
      </section>

      {/* Product FAQs */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="py-14 md:py-20 bg-canvas-subtle border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-olive-800 bg-olive-100 border border-olive-200 px-3 py-1 rounded inline-block mb-2">
                Frequently Asked Questions
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-charcoal-900">
                Questions About {product.name}
              </h2>
            </div>

            <div className="space-y-4">
              {product.faqs.map((faq, idx) => (
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
      )}

      {/* Related Products */}
      <section className="py-14 md:py-20 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-olive-800">
                Explore More
              </span>
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-charcoal-900">
                Related Security Products
              </h2>
            </div>
            <Link
              href="/products"
              className="text-xs font-bold uppercase tracking-wider text-olive-800 hover:text-olive-950 inline-flex items-center gap-1"
            >
              <span>Full Catalogue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
