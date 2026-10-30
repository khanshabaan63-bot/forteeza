export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  detailedDescription: string;
  images: string[];
  features: string[];
  applications: string[];
  configurations: string[];
  technicalSpecifications: ProductSpecification[];
  faqs: ProductFAQ[];
  seoTitle: string;
  seoDescription: string;
  isFeatured?: boolean;
}

export const productCategories = [
  { name: "All Products", slug: "all" },
  { name: "Fireproof Safes and Tijoris", slug: "fireproof-safes" },
  { name: "Double-Door Safes", slug: "double-door-safes" },
  { name: "Commercial Safes", slug: "commercial-safes" },
  { name: "Jewellery Shop Security", slug: "jewellery-safes" },
  { name: "Office Safes", slug: "office-safes" },
  { name: "Digital Lock Safes", slug: "digital-lock-safes" },
  { name: "Mechanical Combination Safes", slug: "combination-safes" },
  { name: "Lockers & Cabinets", slug: "lockers-cabinets" },
  { name: "Strong-Room Doors & Vaults", slug: "strong-room-doors" },
  { name: "Gold-Loan Company Solutions", slug: "gold-loan-safes" },
  { name: "Custom-Made Safes", slug: "custom-safes" },
];

export const products: Product[] = [
  {
    id: "double-door-defender-safe",
    name: "Double Door Defender Heavy Commercial Safe",
    slug: "double-door-defender-safe",
    category: "Double-Door Safes",
    categorySlug: "double-door-safes",
    shortDescription: "High-capacity dual-door security safe engineered for commercial enterprises, jewellery showrooms, and heavy cash storage.",
    detailedDescription: "The Double Door Defender Safe represents the pinnacle of commercial physical asset protection. Fabricated with a reinforced multi-bend steel casing and interlocking double door structure, this safe offers generous storage volume combined with formidable mechanical defense. Equipped with multi-directional steel shooting bolts, dual locking mechanisms, and customizable interior shelves or independent internal lockable drawers.",
    images: [
      "/images/products/double-door-defender-safe.png",
      "/images/hero/hero-safe.png"
    ],
    features: [
      "Twin door design facilitating structured inventory access for multiple department managers",
      "Heavy-gauge reinforced monolithic outer body with seamless continuous arc welding",
      "Multi-directional high-tensile solid steel shooting bolts with anti-drive collars",
      "Dual high-security locking options: Key + Combination Dial or Electronic Digital Keypad",
      "Automatic relocking device that deadlocks bolts upon physical attack or forced tampering",
      "Customizable internal compartments, document shelves, and inner secret drawers"
    ],
    applications: [
      "Jewellery Showrooms & Wholesale Bullion Merchants",
      "Commercial Enterprises & Corporate Cash Offices",
      "Banking Branches & Gold-Loan Institutions",
      "Wholesale Distributors & Manufacturing Units"
    ],
    configurations: [
      "Standard Double Door with dual key locks",
      "Combination Dial + Key Lock configuration",
      "Electronic Digital Keypad with Audit Trail + Emergency Mechanical Override Key",
      "Custom internal locker partitions and carpet-lined jewellery trays"
    ],
    technicalSpecifications: [
      { label: "Construction", value: "Multi-layered reinforced steel casing with high-density barrier material infill" },
      { label: "Door Structure", value: "Double rebated interlocking doors with solid plate barrier" },
      { label: "Locking Options", value: "Dual high-security 8-lever key lock, 3-wheel mechanical combination, or digital keypad" },
      { label: "Bolt Mechanism", value: "Multi-point live steel shooting bolts plus continuous fixed rebate rear dog bolts" },
      { label: "Relocking System", value: "Thermal and mechanical deadlock trigger system" },
      { label: "Custom Dimensions", value: "Tailored to client floor space and vault requirements (contact for verified specs)" }
    ],
    faqs: [
      {
        question: "Can both doors be operated with separate keys for dual-custody access?",
        answer: "Yes, our double-door defender safes can be configured for joint custody, requiring two keyholders or distinct passcode inputs to open."
      },
      {
        question: "How do I request specific dimensions or internal locker heights?",
        answer: "Our manufacturing team customizes safe dimensions and internal configurations. Simply share your requirements with our team via WhatsApp for a tailored drawing and quotation."
      }
    ],
    seoTitle: "Double Door Defender Safe | Heavy Commercial Safe Manufacturer - Forteeza",
    seoDescription: "Forteeza Double Door Defender Heavy Commercial Safe engineered for jewellery showrooms, banks, and enterprises. Dual door protection with multi-point shooting bolts.",
    isFeatured: true,
  },
  {
    id: "double-door-fireproof-safe",
    name: "Double Door Fireproof Safe & Tijori",
    slug: "double-door-fireproof-safe",
    category: "Fireproof Safes and Tijoris",
    categorySlug: "fireproof-safes",
    shortDescription: "Specialized dual-door fire-resistant safe engineered to safeguard vital legal documents, ledgers, and valuable assets.",
    detailedDescription: "Designed for institutions where document integrity and fire defense are paramount, the Double Door Fireproof Safe features a specially compounded thermal insulation barrier encased within thick steel body panels. The precision-engineered tongue-and-groove door jamb prevents heat and smoke ingress during a thermal event.",
    images: [
      "/images/products/double-door-fireproof-safe.png",
      "/images/products/double-door-defender-safe.png"
    ],
    features: [
      "Dual door architectural design allowing expansive opening for large ledgers and binders",
      "Thermal barrier formulation providing substantial resistance against heat transfer",
      "Precision rebate profile preventing smoke, hot gases, and water penetration",
      "Independent internal locking lockers for partitioned confidential storage",
      "Heavy duty exterior pivot hinges enabling full 180-degree door opening",
      "Smooth multi-point bolt movement operated via high-torque solid metal handle"
    ],
    applications: [
      "Corporate Head Offices & Legal Archives",
      "Chartered Accountants & Financial Advisors",
      "Jewellery & Gem Trading Showrooms",
      "Government Contractors & Administrative Establishments"
    ],
    configurations: [
      "Full document shelving setup with height-adjustable steel shelves",
      "Split internal arrangement: One side shelving, one side private locker chambers",
      "Key locking or Electronic Digital Keypad integration"
    ],
    technicalSpecifications: [
      { label: "Thermal Barrier", value: "Compounded thermal insulation barrier filling double-walled steel body" },
      { label: "Jamb Profile", value: "Tongue-and-groove stepped rebate to restrict fire and hot gas infiltration" },
      { label: "Locking Types", value: "Dual unpickable key locks or combined digital electronic lock" },
      { label: "Shelving", value: "Heavy-gauge reinforced removable steel shelves" },
      { label: "Verified Specifications", value: "Contact Forteeza team for verified thermal resistance details and dimension sheets" }
    ],
    faqs: [
      {
        question: "Can this fireproof safe store both paper documents and gold jewellery?",
        answer: "Yes, many commercial clients configure one compartment with velvet-lined trays for precious items and remaining tiers for ledgers and property documents."
      }
    ],
    seoTitle: "Double Door Fireproof Safe & Tijori | Forteeza Safe Company",
    seoDescription: "Dual-door fireproof safe and tijori by Forteeza Safe Company. High-capacity thermal barrier protection for business documents, ledgers, and valuables.",
    isFeatured: true,
  },
  {
    id: "jeweller-safe",
    name: "Jewellery Showroom Heavy Defender Safe",
    slug: "jewellery-showroom-safe",
    category: "Jewellery Shop Security",
    categorySlug: "jewellery-safes",
    shortDescription: "High-security tijori engineered specifically for jewellers, bullion dealers, and diamond merchants requiring maximum drill and tool resistance.",
    detailedDescription: "Jewellery businesses present unique security demands that standard commercial safes cannot meet. The Forteeza Jeweller Safe is engineered with hardened anti-drill armor plates defending critical lock zones, multi-layered barrier composite resisting sledgehammer and torch attempts, and an instant automatic relocking device.",
    images: [
      "/images/products/jewellery-safe.png",
      "/images/products/single-door-defender-safe.png"
    ],
    features: [
      "Hardened anti-drill alloy plates protecting locks and vital bolt mechanism components",
      "Continuous rebate rear dog-bolts ensuring door remains securely locked even if outer hinges are severed",
      "Velvet-lined removable jewellery trays and customizable vertical partitions",
      "Dual custody locking system ensuring no single individual can access the vault alone",
      "Reinforced heavy base structure prepared for floor anchor bolting",
      "Smooth, high-durability industrial polyurethane paint finish"
    ],
    applications: [
      "Retail Jewellery Showrooms",
      "Bullion Merchants & Gold Wholesalers",
      "Precious Gem & Diamond Traders",
      "Pawn Brokers & Bullion Refining Workshops"
    ],
    configurations: [
      "Standard Jewellery Showroom configuration with 4-8 inner lockable compartments",
      "Full-height open layout with customizable tray pull-outs",
      "Biometric / Digital Keypad combined with mechanical key lock"
    ],
    technicalSpecifications: [
      { label: "Barrier Protection", value: "Hardened steel drill-deflecting plate over lock and boltwork clusters" },
      { label: "Bolt Diameter", value: "Solid steel cylindrical shooting bolts on all active door edges" },
      { label: "Relocker", value: "Indirect mechanical live glass or spring relocking trigger" },
      { label: "Interiors", value: "Customizable inner lockers with private independent keyways" },
      { label: "Detailed Specs", value: "Connect with our engineering team for exact weight and dimension drawings" }
    ],
    faqs: [
      {
        question: "Can we install internal sub-lockers with separate keys for staff?",
        answer: "Yes, we frequently build jewellery safes with custom inner compartments so different staff members have designated locked sections."
      }
    ],
    seoTitle: "Jeweller Safe & Tijori Manufacturer | Forteeza Safe Company",
    seoDescription: "High-security jewellery safes and tijoris for gold showrooms, bullion dealers, and diamond merchants. Hardened anti-drill plates and multi-bolt locking.",
    isFeatured: true,
  },
  {
    id: "single-door-defender-safe",
    name: "Single Door Defender Heavy Commercial Safe",
    slug: "single-door-defender-safe",
    category: "Commercial Safes",
    categorySlug: "commercial-safes",
    shortDescription: "Heavy monolithic single-door safe providing dependable anti-theft defense for offices, retail stores, and commercial premises.",
    detailedDescription: "Built with the robust engineering heritage of Forteeza, the Single Door Defender Safe combines a compact external footprint with exceptional physical strength. Features a multi-step anti-pry door frame, multi-directional shooting bolts, and reinforced hinge pins.",
    images: [
      "/images/products/single-door-defender-safe.png",
      "/images/products/single-door-fireproof-safe.png"
    ],
    features: [
      "Single solid door with deep recess anti-crowbar door frame",
      "High-tensile steel shooting bolts engaging on top, bottom, and side frame edges",
      "Full-length solid rear rebate preventing door removal upon hinge attack",
      "Internal lockable drawer at the base for private petty cash and keys",
      "Adjustable heavy steel shelves for books, files, and cash trays",
      "Equipped for secure floor anchoring"
    ],
    applications: [
      "Retail Stores & Supermarkets",
      "Commercial Offices & Factory Accounts",
      "Hotels, Restaurants & Cash Desks",
      "Private Residences & High-Net-Worth Homes"
    ],
    configurations: [
      "Dual 8-lever double-bitted mechanical key locks",
      "3-wheel mechanical combination dial + 1 key lock",
      "Digital electronic keypad with LED display and emergency override"
    ],
    technicalSpecifications: [
      { label: "Body Construction", value: "Heavy-gauge reinforced cold-rolled steel plates with continuous seam welds" },
      { label: "Door Thickness", value: "Multi-layer steel door slab with internal boltwork housing" },
      { label: "Shooting Bolts", value: "Heavy solid steel cylindrical locking bolts" },
      { label: "Anchor Holes", value: "Pre-drilled base holes for solid floor anchoring" },
      { label: "Specifications Note", value: "Please contact our team via WhatsApp for verified dimensional variants" }
    ],
    faqs: [
      {
        question: "Is this safe suitable for a retail store cash collection point?",
        answer: "Yes, it is widely utilized in retail and commercial environments for securing daily collections and vital registers."
      }
    ],
    seoTitle: "Single Door Defender Commercial Safe | Forteeza Safe Company",
    seoDescription: "Single Door Defender Heavy Commercial Safe for retail, business offices, and factory premises. Robust anti-pry frame and multi-directional bolts.",
    isFeatured: true,
  },
  {
    id: "single-door-fireproof-safe",
    name: "Single Door Fireproof Safe & Document Tijori",
    slug: "single-door-fireproof-safe",
    category: "Fireproof Safes and Tijoris",
    categorySlug: "fireproof-safes",
    shortDescription: "Compact fire-resistant safe engineered to safeguard business documents, contracts, titles, and currency against fire damage.",
    detailedDescription: "The Single Door Fireproof Safe is the ideal choice for business owners and professionals who need dedicated fire resistance without occupying excessive floor space. Constructed with double steel walls filled with a formulated insulation matrix.",
    images: [
      "/images/products/single-door-fireproof-safe.png",
      "/images/products/home-safe.png"
    ],
    features: [
      "Monolithic composite insulated body engineered for heat dissipation",
      "Thermal expansion seal around the door perimeter that activates during heat rise",
      "Solid steel live locking bolts with smooth mechanical action",
      "Removable interior document shelf and sliding tray",
      "Ergonomic handle and precision keyway alignment",
      "Neutral industrial coating resisting corrosion and scratching"
    ],
    applications: [
      "Executive Cabins & Law Chambers",
      "Medical Clinics & Hospital Record Rooms",
      "Retail Cash Counters & Small Businesses",
      "Residential Apartments & Estates"
    ],
    configurations: [
      "Standard Key Lock mechanism",
      "Digital Touch Keypad with programmable 4-to-8 digit PIN",
      "Dual Key operation for designated key custodians"
    ],
    technicalSpecifications: [
      { label: "Thermal Infill", value: "Specially formulated fire-resistant insulation barrier" },
      { label: "Door Profile", value: "Stepped tongue-and-groove rebate" },
      { label: "Bolt System", value: "Solid steel shooting bolts with fixed rear rebate" },
      { label: "Inquire for Specs", value: "Connect on WhatsApp for detailed size options and technical data" }
    ],
    faqs: [
      {
        question: "Can this safe be anchored to the floor without compromising fire resistance?",
        answer: "Yes, anchor sleeves are engineered to allow secure floor mounting while preserving the protective barrier."
      }
    ],
    seoTitle: "Single Door Fireproof Safe & Document Tijori | Forteeza Safes",
    seoDescription: "Single door fireproof safe and document tijori by Forteeza Safe Company. Compact fire-resistant security for business contracts, documents, and cash.",
    isFeatured: true,
  },
  {
    id: "counter-safe",
    name: "Commercial Cash Counter & Retail Safe",
    slug: "cash-counter-retail-safe",
    category: "Commercial Safes",
    categorySlug: "commercial-safes",
    shortDescription: "Under-counter cash deposit safe designed for busy retail cashiers, toll booths, and commercial checkout counters.",
    detailedDescription: "The Counter Safe is specially engineered for high-velocity cash handling environments where cashiers need to deposit surplus currency notes securely without opening the main safe door. Equipped with an anti-fish baffle chute or deposit trap, deposited bundles fall safely into the locked bottom vault.",
    images: [
      "/images/products/counter-safe.png",
      "/images/products/single-door-defender-safe.png"
    ],
    features: [
      "Anti-fish deposit mechanism preventing retrieval of contents via the deposit opening",
      "Compact height engineered to fit beneath standard POS and retail payment counters",
      "Independent key custody: cashier can drop cash, manager holds vault key",
      "Heavy steel mounting flange for under-counter or floor bolting",
      "Anti-tamper relocking mechanism protecting the lower vault compartment",
      "Durable powder-coated scratch-resistant finish"
    ],
    applications: [
      "Supermarket Cash Desks & Retail Outlets",
      "Petrol Pumps & Highway Toll Collection Plazas",
      "Hospital Billing Counters & Pharmacy Outlets",
      "Restaurants & Fast-Food Cash Terminals"
    ],
    configurations: [
      "Top deposit chute with anti-fish baffle",
      "Front drop drawer deposit unit",
      "Single or dual key lock for lower vault door"
    ],
    technicalSpecifications: [
      { label: "Mounting", value: "Floor or under-counter anchor ready" },
      { label: "Drop Chute", value: "Internal anti-fish serrated steel baffle" },
      { label: "Locking", value: "High-security 7 or 8-lever lock with dual key option" },
      { label: "Custom Sizing", value: "Fabricated to counter clearance dimensions (Contact for quotation)" }
    ],
    faqs: [
      {
        question: "Can cashiers take money back out of the deposit slot once inserted?",
        answer: "No. The anti-fish baffle system ensures notes drop into the lower secure chamber and cannot be retrieved through the deposit slot."
      }
    ],
    seoTitle: "Commercial Cash Counter Safe | Retail Drop Safe - Forteeza",
    seoDescription: "Under-counter cash deposit safe for retail counters, cashiers, and commercial checkout desks. Anti-fish deposit slot with locked lower vault.",
    isFeatured: true,
  },
  {
    id: "home-safe",
    name: "Premium Executive & Home Security Safe",
    slug: "executive-home-security-safe",
    category: "Office Safes",
    categorySlug: "office-safes",
    shortDescription: "Elegant yet solidly built security safe for executive cabins, private offices, and residence valuables.",
    detailedDescription: "Combining discreet residential aesthetics with commercial-grade physical steel construction, the Forteeza Home & Executive Safe provides peace of mind for precious family heirlooms, certificates, passports, and currency. Can be fitted cleanly into wardrobes or anchored to concrete walls and floors.",
    images: [
      "/images/products/home-safe.png",
      "/images/products/single-door-fireproof-safe.png"
    ],
    features: [
      "Reinforced steel body suitable for concealed wardrobe or closet installation",
      "High-precision digital keypad with illuminated touch keys and master key backup",
      "Solid motorized shooting bolts with anti-tamper auto-lockout after failed attempts",
      "Velvet-lined soft interior protecting jewellery and luxury watches from scratches",
      "Pre-drilled anchor holes for wall and floor mounting",
      "Low battery warning buzzer with external emergency power terminal"
    ],
    applications: [
      "Private Residences & Luxury Apartments",
      "Executive Director Cabins & Private Boardrooms",
      "Home Offices & Personal Study Rooms",
      "Boutique Hotel Suites & Guest Rooms"
    ],
    configurations: [
      "Digital Electronic Pin Lock + Override Key",
      "Traditional Double-Bitted Key Lock",
      "Biometric Fingerprint Sensor model (on demand)"
    ],
    technicalSpecifications: [
      { label: "Locking System", value: "Electronic digital touchpad or high-security keyway" },
      { label: "Mounting", value: "Reinforced wall and floor anchor holes with expansion bolts" },
      { label: "Interior", value: "Padded scratch-guard lining with removable shelf" },
      { label: "Custom Details", value: "Contact Forteeza team for customized sizes and color finishes" }
    ],
    faqs: [
      {
        question: "What happens if the digital keypad battery runs out?",
        answer: "The safe includes emergency mechanical override keys and an external battery terminal to power up the keypad from the outside."
      }
    ],
    seoTitle: "Premium Executive & Home Security Safe | Forteeza Safe Company",
    seoDescription: "Forteeza premium executive and home security safe. Reinforced steel construction, digital keypad, and velvet interior for jewellery and documents.",
    isFeatured: false,
  },
  {
    id: "petrol-pump-safe",
    name: "Commercial Petrol Pump & Night Deposit Safe",
    slug: "petrol-pump-night-deposit-safe",
    category: "Commercial Safes",
    categorySlug: "commercial-safes",
    shortDescription: "Heavy-duty outdoor and forecourt cash management safe designed for fuel stations and 24-hour retail operations.",
    detailedDescription: "Engineered specifically to handle day and night cash collections at petrol stations, toll booths, and 24/7 retail points. Allows shift attendants to deposit cash collections directly without giving anyone on the shift access to accumulated funds.",
    images: [
      "/images/products/petrol-pump-safe.png",
      "/images/products/counter-safe.png"
    ],
    features: [
      "Rugged heavy-gauge body built to withstand rigorous continuous commercial usage",
      "Rotary or trapdoor drop hopper with internal anti-fishing teeth",
      "Dual custody locking ensuring morning pickup requires managerial presence",
      "Heavy anchor base plates for secure grouting into concrete floors",
      "Weather-resistant exterior paint suitable for forecourt environments"
    ],
    applications: [
      "Petrol Pumps & Highway Fuel Stations",
      "Automotive Dealerships & Service Centers",
      "24-Hour Convenience Stores & Highway Food Plazas",
      "Liquor Vends & High-Cash Night Commercial Counters"
    ],
    configurations: [
      "Rotary Drum Drop Unit",
      "Trapdoor Chute Deposit Unit",
      "Dual Key or Combination Dial options for bottom vault"
    ],
    technicalSpecifications: [
      { label: "Intended Use", value: "24/7 continuous cash collection and shift handover" },
      { label: "Anti-Fishing", value: "Multi-toothed steel baffle plate in hopper chute" },
      { label: "Installation", value: "Floor grouting or heavy-duty anchor bolt mounting" },
      { label: "Inquire on WhatsApp", value: "Connect with our team for exact dimensions and tailored fabrication" }
    ],
    faqs: [
      {
        question: "Can this safe be installed on a petrol pump forecourt?",
        answer: "Yes, it is designed for fuel station offices and forecourt cash points with heavy floor anchor reinforcement."
      }
    ],
    seoTitle: "Petrol Pump & Night Deposit Safe Manufacturer | Forteeza Safes",
    seoDescription: "Heavy-duty petrol pump and night deposit cash safe by Forteeza Safe Company. Designed for fuel stations, 24/7 retail, and high-cash environments.",
    isFeatured: false,
  },
  {
    id: "strong-room-door-vault",
    name: "Heavy-Duty Strong-Room Door & Vault Security",
    slug: "strong-room-doors-and-vaults",
    category: "Strong-Room Doors",
    categorySlug: "strong-room-doors",
    shortDescription: "Engineered strong-room doors and vault security installations for banks, gold-loan companies, and large jewellery vaults.",
    detailedDescription: "Forteeza manufactures heavy-duty strong-room doors designed to secure entire vault chambers and concrete secure rooms. Fabricated with thick monolithic steel barrier plates, composite infill, hardened lock shields, and multi-directional shooting boltwork driven by a balanced operating wheel. Includes an inner emergency grille gate (day gate) for ventilation and daytime security inspection.",
    images: [
      "/images/products/strong-room-door-vault.png",
      "/images/hero/hero-safe.png"
    ],
    features: [
      "Multi-layered steel barrier plate engineered against oxy-acetylene torch, drilling, and mechanical attack",
      "Rebated heavy channel vestibule frame prepared for grouting into masonry or reinforced concrete walls",
      "Integrated daytime grille gate with independent lock allowing visual inspection while maintaining a physical barrier",
      "Full perimeter continuous locking action with heavy solid steel shooting bolts",
      "Multiple indirect relocking devices that lock bolts permanently if attack is detected",
      "Precision heavy-duty thrust bearing hinges supporting massive door weight smoothly"
    ],
    applications: [
      "Banking Strong Rooms & Currency Chests",
      "Gold-Loan Head Branch Vaults",
      "Jewellery Showroom Main Underground / Backstage Vaults",
      "High-Value Industrial Storage & Bullion Warehouses"
    ],
    configurations: [
      "Standard Banking Vault Door with Day Grille Gate",
      "Dual 4-Wheel Mechanical Combination Locks + Dual High-Security Key Locks",
      "Electronic Audit Vault Locks with Time Delay and Duress Alarm Integration"
    ],
    technicalSpecifications: [
      { label: "Door Construction", value: "Laminated steel barrier plates with anti-torch and anti-drill matrix" },
      { label: "Vestibule Frame", value: "Heavy rolled steel channel frame with wall anchor grip ties" },
      { label: "Day Gate", value: "Heavy tubular / solid steel bar grille door with independent lock" },
      { label: "Locking", value: "Dual combination dials + dual high-security 8-lever key locks" },
      { label: "Verified Specs", value: "Custom engineered to architectural wall openings. Contact Forteeza team for site measurement and verified drawings." }
    ],
    faqs: [
      {
        question: "Do you supply the day grille gate along with the main strong room door?",
        answer: "Yes, our strong-room door assemblies include a secondary steel day-gate for daytime ventilation and secure observation."
      },
      {
        question: "Can the door be installed into an existing brick or RCC wall?",
        answer: "Yes, our heavy vestibule frame is designed with heavy steel ties for secure grouting into reinforced concrete or masonry openings."
      }
    ],
    seoTitle: "Strong-Room Doors & Bank Vault Manufacturer | Forteeza Safe Company",
    seoDescription: "Forteeza heavy-duty strong-room doors and bank vault security solutions. Multi-layer steel barrier, day grille gate, and relocking mechanisms.",
    isFeatured: true,
  },
  {
    id: "gold-loan-vault-safe",
    name: "Gold-Loan Branch High-Security Vault Safe",
    slug: "gold-loan-company-vault-safe",
    category: "Gold-Loan Company Solutions",
    categorySlug: "gold-loan-safes",
    shortDescription: "Reinforced vault safe configured with multi-tier partitioned locker bays specifically for pledged gold ornament custody.",
    detailedDescription: "Configured to meet the rigorous physical security protocols required by non-banking financial companies (NBFCs) and gold-loan branches. Features compartmentalized internal locker cells with numbered dual-key master custody, preventing unauthorized opening.",
    images: [
      "/images/products/double-door-defender-safe.png",
      "/images/products/jewellery-safe.png"
    ],
    features: [
      "Numbered individual customer gold deposit pigeonhole lockers with independent keys",
      "Dual custody master keying system for audit control",
      "Heavy reinforced steel body ready for floor chemical anchoring",
      "Multi-directional boltwork and hardened anti-drill plates",
      "Compliant with physical security guidelines for gold custody"
    ],
    applications: [
      "Gold-Loan Branches & NBFCs",
      "Cooperative Credit Societies",
      "Micro-Finance Institutions",
      "Pawn Lending Establishments"
    ],
    configurations: [
      "24, 36, or 48 internal locker compartment configurations",
      "Combined document drawer tier and gold ornament trays",
      "Electronic audit trail locking option"
    ],
    technicalSpecifications: [
      { label: "Lockers", value: "Independently lockable steel compartment cells" },
      { label: "Custody", value: "Branch Manager + Custodian dual-key mechanism" },
      { label: "Relocker", value: "Mechanical deadlocking glass or tension trigger" },
      { label: "Technical Inquiry", value: "Share branch capacity requirements via WhatsApp for bespoke engineering drawings" }
    ],
    faqs: [
      {
        question: "Can the internal lockers be numbered and provided with individual client keys?",
        answer: "Yes, we custom fabricate internal locker columns with numbered doors and individual lock sets."
      }
    ],
    seoTitle: "Gold-Loan Company Vault Safe | NBFC Custody Safes - Forteeza",
    seoDescription: "Specialized gold-loan branch vault safes by Forteeza Safe Company. Partitioned dual-key lockers for pledged gold jewellery and bullion custody.",
    isFeatured: false,
  },
  {
    id: "custom-made-safes",
    name: "Custom-Engineered Architectural Security Safes",
    slug: "custom-engineered-safes",
    category: "Custom-Made Safes",
    categorySlug: "custom-safes",
    shortDescription: "Bespoke safes manufactured to exact client dimensions, weight constraints, locker partitions, and locking preferences.",
    detailedDescription: "When off-the-shelf dimensions cannot accommodate your architectural niche, under-stair vault, or specific bullion tray dimensions, Forteeza custom engineers safes from the ground up. Over 50 years of collective team fabrication experience allows us to build unique configurations without compromising physical security.",
    images: [
      "/images/products/double-door-fireproof-safe.png",
      "/images/products/single-door-defender-safe.png"
    ],
    features: [
      "Custom height, width, and depth to match architectural openings or elevator capacity",
      "Tailored interior configuration: secret compartments, velvet watch winders, bullion bars racks",
      "Choice of finishes: industrial hammer tone, matte charcoal, or custom corporate colors",
      "Full flexibility in locking: biometric, digital keypad, mechanical combination, or heavy keyways",
      "Direct technical discussion with experienced safe fabrication specialists"
    ],
    applications: [
      "Luxury Homes & Penthouses with Custom Joinery",
      "High-End Jewellery Showrooms with Non-Standard Vault Footprints",
      "Corporate Boardrooms & Secret Archives",
      "Industrial Laboratories Securing Sensitive Materials"
    ],
    configurations: [
      "Completely bespoke based on customer technical brief"
    ],
    technicalSpecifications: [
      { label: "Design", value: "Built to client dimensional specifications" },
      { label: "Steel Grades", value: "Heavy-gauge structural steel plates" },
      { label: "Fabrication", value: "Custom cutting, robotic/manual seam welding, and bespoke boltwork layout" },
      { label: "Quotation Process", value: "Send requirement details on WhatsApp to receive a preliminary drawing and estimate" }
    ],
    faqs: [
      {
        question: "How long does a custom safe take to manufacture?",
        answer: "Depending on the complexity, size, and interior customization, production typically ranges from a few days to a couple of weeks. Contact us directly to discuss timelines."
      }
    ],
    seoTitle: "Custom-Made Safes Manufacturer | Forteeza Safe Company",
    seoDescription: "Custom-made safes and bespoke security tijoris engineered to your exact dimensions, locking mechanisms, and interior layout by Forteeza Safe Company.",
    isFeatured: false,
  }
];
