export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  categorySlug: string;
  description: string;
  imageSrc: string;
  completionPeriod: string;
  clientType: string;
  highlights: string[];
}

export const projectCategories = [
  { name: "All Showcases", slug: "all" },
  { name: "Jewellery Showrooms", slug: "jewellery" },
  { name: "Commercial & Industrial", slug: "commercial" },
  { name: "Banking & NBFC", slug: "banking" },
  { name: "Retail & Cash Counters", slug: "retail" },
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "Double-Door Heavy Defender Safe for Commercial Jewellery Showroom",
    location: "Ghaziabad, Uttar Pradesh",
    category: "Jewellery Showrooms",
    categorySlug: "jewellery",
    description: "Engineering and fabrication of a high-capacity double-door defender safe with custom interior carpeted jewellery trays and dual-key high-security locking for a premier retail jewellery establishment.",
    imageSrc: "/images/products/double-door-defender-safe.png",
    completionPeriod: "Commercial Installation",
    clientType: "Retail Jewellery Merchant (Confidential for Security)",
    highlights: [
      "Custom multi-drawer partitioned interior",
      "Dual 8-lever double-bitted unpickable key locks",
      "Multi-directional active shooting bolts on all 4 door edges",
      "Continuous rear dog bolt interlock"
    ]
  },
  {
    id: "proj-2",
    title: "Fireproof Document Archive Safes for Manufacturing Headquarters",
    location: "Sahibabad Industrial Area, Ghaziabad",
    category: "Commercial & Industrial",
    categorySlug: "commercial",
    description: "Supply of multi-tier fire-resistant double-door safes to safeguard vital land documents, engineering blueprints, and corporate tax registers for an industrial manufacturing facility.",
    imageSrc: "/images/products/double-door-fireproof-safe.png",
    completionPeriod: "Industrial Supply",
    clientType: "Engineering & Steel Processing Unit",
    highlights: [
      "Thermal barrier insulation matrix",
      "Stepped tongue-and-groove rebate door frame",
      "Adjustable heavy-gauge document shelving",
      "Dual custody security access"
    ]
  },
  {
    id: "proj-3",
    title: "Heavy-Duty Strong-Room Door Installation for Financial Vault",
    location: "Lucknow, Uttar Pradesh",
    category: "Banking & NBFC",
    categorySlug: "banking",
    description: "Fabrication and delivery of an engineered strong-room door assembly complete with secondary day-inspection grille gate, multi-wheel combination dials, and automatic relocking device.",
    imageSrc: "/images/products/strong-room-door-vault.png",
    completionPeriod: "Institutional Deployment",
    clientType: "Financial Services Vault (Confidential for Security)",
    highlights: [
      "Integrated tubular steel day grille gate",
      "Multi-tier laminated drill and torch deflector plate",
      "Balanced operating spoke wheel mechanism",
      "Structural channel frame for wall casting"
    ]
  },
  {
    id: "proj-4",
    title: "Anti-Fish Cash Counter Drop Safes for Multi-Store Retail Chain",
    location: "Bareilly & Lucknow, Uttar Pradesh",
    category: "Retail & Cash Counters",
    categorySlug: "retail",
    description: "Custom fabrication of compact under-counter cash drop safes fitted with serrated anti-fishing deposit baffles to protect cashier collection points across high-traffic retail outlets.",
    imageSrc: "/images/products/counter-safe.png",
    completionPeriod: "Retail Rollout",
    clientType: "Commercial Supermarket & Cash Desks",
    highlights: [
      "Anti-fish serrated baffle chute",
      "Compact under-counter profile",
      "Dual custody manager-key vault chamber",
      "Heavy floor anchor plates"
    ]
  },
  {
    id: "proj-5",
    title: "High-Security Bullion Tijori with Hardened Armor Plates",
    location: "Chowk, Lucknow",
    category: "Jewellery Showrooms",
    categorySlug: "jewellery",
    description: "Bespoke bullion safe engineered with hardened alloy drill deflector shields and multiple internal locking lockers for a traditional bullion dealer.",
    imageSrc: "/images/products/jewellery-safe.png",
    completionPeriod: "Sarafa Market Supply",
    clientType: "Bullion & Gold Merchant",
    highlights: [
      "Hardened anti-drill alloy shields",
      "Internal lockable sub-compartments",
      "Heavy base plate prepared for floor grouting",
      "Automatic mechanical deadlock relocker"
    ]
  },
  {
    id: "proj-6",
    title: "Forecourt Night Deposit Safes for Highway Fuel Outlets",
    location: "Muzaffarnagar & Saharanpur Corridor",
    category: "Commercial & Industrial",
    categorySlug: "commercial",
    description: "Supply of rugged 24/7 night deposit cash safes designed for continuous shift handover without opening the main vault, built with heavy weather-resistant industrial coating.",
    imageSrc: "/images/products/petrol-pump-safe.png",
    completionPeriod: "Forecourt Supply",
    clientType: "Highway Fuel Station Network",
    highlights: [
      "Drop hopper with anti-tamper baffle",
      "Dual custody managerial unlock protocol",
      "Heavy concrete-anchor base flange",
      "High-durability polyurethane finish"
    ]
  }
];
