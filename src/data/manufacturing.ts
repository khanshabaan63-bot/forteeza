export interface ManufacturingItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  alt: string;
  isGenuineSuppliedPhoto: boolean;
  statusLabel?: string;
  aspectRatio?: string;
}

export const manufacturingSectionData = {
  heading: "Behind Every Safe Is a Commitment to Security.",
  supportingHeading: "Experience, Workmanship and Manufacturing Expertise.",
  description:
    "Our focus is on understanding customer requirements and providing suitable safe and security solutions through industry experience, product knowledge, and attention to workmanship.",
};

export const manufacturingItems: ManufacturingItem[] = [
  {
    id: "mfg-workshop",
    title: "Heavy Manufacturing Workshop & Machining Bay",
    category: "Workshop Environment",
    description:
      "Our core fabrication bay equipped for heavy-gauge steel handling, high-precision plate cutting, welding, and structural assembly of commercial safe casings.",
    imageSrc: "/images/manufacturing/manufacturing-setup.png",
    alt: "Forteeza Safe Company heavy manufacturing workshop showing structural safe bodies in progress",
    isGenuineSuppliedPhoto: true,
    statusLabel: "Actual Workshop Photo",
  },
  {
    id: "mfg-components",
    title: "Safe Doors, Lockers & Structural Vault Components",
    category: "Structural Components",
    description:
      "Heavy-duty safe doors engineered with interlocking rebated frames, multi-directional shooting bolt mechanisms, and anti-pry rebate edges.",
    imageSrc: "/images/manufacturing/manufacturing-facility.png",
    alt: "Forteeza manufacturing facility floor displaying heavy safe bodies and doors under fabrication",
    isGenuineSuppliedPhoto: true,
    statusLabel: "Actual Facility Photo",
  },
  {
    id: "mfg-team",
    title: "Team Workmanship & Skilled Production Craftsmen",
    category: "Team Workmanship",
    description:
      "Backed by over 50 years of collective industry experience, our skilled metalworkers, welders, and security lock technicians apply time-tested craftsmanship to every security product.",
    imageSrc: "/images/manufacturing/skilled-workers.png",
    alt: "Forteeza Safe Company skilled fabrication team and production craftsmen at work",
    isGenuineSuppliedPhoto: true,
    statusLabel: "Actual Team Photo",
  },
];
