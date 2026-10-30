"use client";

import React, { useState } from "react";
import { Filter, SlidersHorizontal, Sparkles } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products, productCategories } from "@/data/products";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.categorySlug === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-canvas-subtle border-b border-border py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Products" }]} />

          <div className="mt-4 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-olive-800 bg-olive-100 border border-olive-200 px-3 py-1 rounded inline-block mb-3">
              Commercial Safe Catalogue
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-charcoal-900 tracking-tight">
              Safes, Tijoris & Physical Security Solutions
            </h1>
            <p className="mt-3 text-sm sm:text-base text-charcoal-600 leading-relaxed">
              Explore our range of heavy commercial safes, double-door tijoris, fireproof document cabinets, and strong-room doors. Built with multi-directional shooting bolts, drill-resistant alloy plates, and customizable configurations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Catalogue Section */}
      <section className="py-12 md:py-20 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls: Category Filter Pills & Search Input */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-border">
            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              <span className="text-xs font-bold uppercase tracking-wider text-charcoal-500 shrink-0 hidden sm:inline-block mr-1">
                Filter:
              </span>
              {productCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all shrink-0 cursor-pointer ${
                    selectedCategory === cat.slug
                      ? "bg-olive-700 text-white shadow-sm"
                      : "bg-canvas-subtle hover:bg-canvas-muted text-charcoal-700 border border-border"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3.5 py-2 text-xs rounded bg-canvas-subtle border border-border focus:outline-none focus:ring-2 focus:ring-olive-500 text-charcoal-900"
              />
            </div>
          </div>

          {/* Results Count & Product Grid */}
          <div className="mb-6 flex items-center justify-between text-xs text-charcoal-500">
            <span>
              Showing <strong>{filteredProducts.length}</strong> security product
              {filteredProducts.length === 1 ? "" : "s"}
            </span>
            {selectedCategory !== "all" && (
              <button
                onClick={() => setSelectedCategory("all")}
                className="text-olive-700 hover:underline"
              >
                Clear filter
              </button>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-canvas-subtle rounded-lg border border-border p-8">
              <p className="text-base font-heading font-semibold text-charcoal-800">
                No products found matching your criteria.
              </p>
              <p className="mt-2 text-xs text-charcoal-500">
                Try selecting a different category or reach out for custom engineering.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 bg-olive-700 text-white rounded text-xs font-bold uppercase tracking-wider"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Custom Requirement Strip */}
          <div className="mt-16 p-8 rounded-xl bg-olive-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-olive-300 bg-olive-800 px-2.5 py-0.5 rounded inline-block mb-2">
                Custom Engineering
              </span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                Looking for Non-Standard Dimensions or Internal Locker Configurations?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-olive-100">
                We custom fabricate safes to match specific architectural alcoves, under-counter depths, or client locker requirements.
              </p>
            </div>

            <WhatsAppButton
              message="Hello Forteeza Safe Company, I need a custom-built safe with specific dimensions. Please share consultation and quotation."
              size="md"
              variant="secondary"
              className="bg-white hover:bg-canvas-subtle text-charcoal-950 shrink-0 font-bold text-xs uppercase tracking-wider"
            >
              <span>DISCUSS CUSTOM BUILD</span>
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </div>
  );
}
