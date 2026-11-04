"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Building, ShieldCheck, CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageLightbox from "@/components/ImageLightbox";
import { projectsData, projectCategories, Project } from "@/data/projects";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter(
    (p) => selectedCategory === "all" || p.categorySlug === selectedCategory
  );

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-canvas-subtle border-b border-border py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Projects" }]} />

          <div className="mt-4 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-olive-800 bg-olive-100 border border-olive-200 px-3 py-1 rounded inline-block mb-3">
              Commercial Deployments
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-charcoal-900 tracking-tight">
              Verified Project Showcases & Installations
            </h1>
            <p className="mt-3 text-sm sm:text-base text-charcoal-600 leading-relaxed">
              Explore representative safe deployments and vault door engineering completed for jewellery showrooms, manufacturing facilities, banks, and commercial retailers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Filter & Portfolio */}
      <section className="py-12 md:py-20 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-border scrollbar-none">
            <span className="text-xs font-bold uppercase tracking-wider text-charcoal-500 mr-2 shrink-0">
              Filter by Sector:
            </span>
            {projectCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all shrink-0 cursor-pointer ${
                  selectedCategory === cat.slug
                    ? "bg-olive-700 text-white shadow-sm"
                    : "bg-canvas-subtle hover:bg-canvas-muted text-charcoal-700 border border-border"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj) => {
              const isDark = proj.imageSrc.includes("counter-safe");
              return (
                <div
                  key={proj.id}
                  className="group flex flex-col bg-canvas-subtle rounded-xl border border-border overflow-hidden hover:shadow-card-hover hover:border-olive-500 transition-all duration-300"
                >
                  {/* Clickable Image Box */}
                  <div
                    className={`relative h-64 w-full flex items-center justify-center p-4 cursor-zoom-in overflow-hidden ${
                      isDark ? "bg-black" : "bg-white border-b border-border-subtle"
                    }`}
                    onClick={() => setActiveProject(proj)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveProject(proj);
                      }
                    }}
                    aria-label={`View enlarged photo of ${proj.title}`}
                  >
                    <div
                      className={`absolute inset-0 [background-size:16px_16px] ${
                        isDark
                          ? "opacity-20 bg-[radial-gradient(#CBD7CB_1px,transparent_1px)]"
                          : "opacity-[0.03] bg-[radial-gradient(#1A1D1A_1px,transparent_1px)]"
                      }`}
                    />
                    <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={proj.imageSrc}
                        alt={proj.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-olive-900/90 text-olive-100 border border-olive-700">
                        {proj.category}
                      </span>
                    </div>
                    <div className="absolute bottom-2 text-center w-full opacity-0 group-hover:opacity-90 transition-opacity">
                      <span
                        className={`text-[10px] px-2.5 py-0.5 rounded font-mono ${
                          isDark ? "text-olive-200 bg-black/60" : "text-charcoal-700 bg-canvas/90 border border-border"
                        }`}
                      >
                        Click image to inspect
                      </span>
                    </div>
                  </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-olive-800 mb-1.5">
                      <MapPin className="w-3.5 h-3.5 text-olive-700" />
                      <span>{proj.location}</span>
                    </div>

                    <h3 className="font-heading font-bold text-base sm:text-lg text-charcoal-900 group-hover:text-olive-800 transition-colors">
                      {proj.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                      {proj.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-4 pt-4 border-t border-border-subtle">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500 block mb-2">
                        Project Highlights
                      </span>
                      <ul className="space-y-1.5 text-xs text-charcoal-700">
                        {proj.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-olive-700 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs">
                    <span className="text-[11px] text-charcoal-500 italic">
                      {proj.clientType}
                    </span>
                    <WhatsAppButton
                      message={`Hello Forteeza Safe Company, I saw your project: "${proj.title}" in ${proj.location}. I have a similar requirement for my business.`}
                      size="sm"
                      variant="compact"
                      className="text-[11px] uppercase tracking-wider font-bold"
                    >
                      <span>Inquire Similar</span>
                    </WhatsAppButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

          {/* Privacy Note */}
          <div className="mt-14 p-4 rounded-lg bg-olive-50 border border-olive-200 text-xs text-charcoal-700 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-olive-700 shrink-0 mt-0.5" />
            <p>
              <strong>Security Protocol Notice:</strong> Project details are published with generalized client descriptors to protect our customers’ physical premises, security blueprints, and vault contents from public exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox for selected project */}
      {activeProject && (
        <ImageLightbox
          isOpen={!!activeProject}
          onClose={() => setActiveProject(null)}
          imageSrc={activeProject.imageSrc}
          imageAlt={activeProject.title}
          title={activeProject.title}
          description={`${activeProject.location} • ${activeProject.description}`}
          badge={activeProject.category}
        />
      )}
    </div>
  );
}
