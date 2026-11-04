export const siteConfig = {
  name: "Forteeza Safe & Vaults Company",
  tagline: "Advanced Security. Built on Trust.",
  shortDescription: "Manufacturer of heavy-duty safes, tijoris, lockers, strong-room doors, and commercial security solutions.",
  fullDescription: "Forteeza Safe Company provides engineered safe and security solutions for jewellery showrooms, commercial establishments, financial institutions, offices, and industrial premises seeking dependable protection.",
  
  // WhatsApp Configuration (Confirmed Official)
  whatsappNumber: "918076009057",
  whatsappDisplay: "+91 8076009057",
  countryCode: "+91",
  
  // Experience
  experienceYears: "50+",
  experienceLabel: "50+ Years of Team Industry Experience",

  // Target Locations (Confirmed 9 Regions)
  targetLocations: [
    { name: "Ghaziabad", state: "Uttar Pradesh", slug: "safe-manufacturers-in-ghaziabad" },
    { name: "Lucknow", state: "Uttar Pradesh", slug: "safe-manufacturers-in-lucknow" },
    { name: "Mathura", state: "Uttar Pradesh", slug: "safe-manufacturers-in-mathura" },
    { name: "Bareilly", state: "Uttar Pradesh", slug: "safe-manufacturers-in-bareilly" },
    { name: "Saharanpur", state: "Uttar Pradesh", slug: "safe-manufacturers-in-saharanpur" },
    { name: "Muzaffarnagar", state: "Uttar Pradesh", slug: "safe-manufacturers-in-muzaffarnagar" },
    { name: "Kasganj", state: "Uttar Pradesh", slug: "safe-manufacturers-in-kasganj" },
    { name: "Jammu and Kashmir", state: "Jammu and Kashmir", slug: "safe-manufacturers-in-jammu-and-kashmir" },
    { name: "Himachal Pradesh", state: "Himachal Pradesh", slug: "safe-manufacturers-in-himachal-pradesh" },
  ],

  // Navigation Links
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Clients Served", href: "/clients-served" },
    { label: "About Us", href: "/about" },
    { label: "Our Expertise", href: "/our-expertise" },
    { label: "Projects", href: "/projects" },
    { label: "Contact Us", href: "/contact" },
  ],

  // Placeholders for unsupplied company contact points (Transparently noted)
  contactPlaceholder: {
    addressNote: "Direct factory coordination and order dispatch across North India. For office/factory appointment or site assessment, connect via WhatsApp.",
    emailPlaceholder: "contact@forteezasafes.com [Placeholder - Inquire directly via WhatsApp]",
    serviceHours: "Monday to Saturday: 9:30 AM – 7:30 PM (IST)",
  },

  // Base canonical URL (configurable)
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://forteezasafes.com",
};
