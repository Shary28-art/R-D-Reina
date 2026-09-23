export interface Subcategory {
  name: string;
  slug: string;
}

export interface Category {
  name: string;
  slug: string;
  navGroup: "rentals" | "decor";
  description: string;
  image: string;
  subcategories: Subcategory[];
}

/** Placeholder imagery — replace with R&D by Reina photography */
const img = (id: string) =>
  `https://images.unsplash.com/${id.startsWith("photo-") ? id : "photo-" + id}?auto=format&fit=crop&w=800&q=80`;

export const categories: Category[] = [
  {
    name: "Tables",
    slug: "tables",
    navGroup: "rentals",
    description: "Farm tables, banquet rounds, cocktail tables, and sweetheart dining.",
    image: "/images/Round table.jpg",
    subcategories: [
      { name: "Farm Tables", slug: "farm-tables" },
      { name: "Round Tables", slug: "round-tables" },
      { name: "Specialty Tables", slug: "specialty-tables" },
    ],
  },
  {
    name: "Chairs",
    slug: "chairs",
    navGroup: "rentals",
    description: "Ghost, chiavari, throne, and luxury seating for every style.",
    image: img("photo-1540574163026-643ea20ade25"),
    subcategories: [
      { name: "Ghost Clear Chair", slug: "ghost-clear-chair" },
      { name: "Black & Gold Luxury Chair", slug: "black-gold-luxury" },
      { name: "Luxury Gold Chair", slug: "luxury-gold-chair" },
      { name: "Garden Chairs", slug: "garden-chairs" },
    ],
  },
  {
    name: "Tablecloths & Napkins",
    slug: "tablecloths-napkins",
    navGroup: "rentals",
    description: "Linens, runners, and napkins in refined palettes.",
    image: img("photo-1509316975850-ff9c5deb0cd9"),
    subcategories: [
      { name: "Tablecloths", slug: "tablecloths" },
      { name: "Napkins", slug: "napkins" },
      { name: "Runners", slug: "runners" },
    ],
  },
  {
    name: "Centerpieces & Candelabras",
    slug: "centerpieces-candelabras",
    navGroup: "decor",
    description: "Floral centerpieces, candelabras, and statement table décor.",
    image: img("photo-1561181286-d3fee7d55364"),
    subcategories: [
      { name: "Floral Centerpieces", slug: "floral-centerpieces" },
      { name: "Floral Arrangements", slug: "floral-arrangements" },
    ],
  },
  {
    name: "Glassware & Chargers",
    slug: "glassware-chargers",
    navGroup: "rentals",
    description: "Reef charger plates, beaded chargers, stemware, and flutes.",
    image: img("photo-1574634534894-89d7576c8259"),
    subcategories: [
      { name: "Charger Plates", slug: "charger-plates" },
      { name: "Specialty Glassware", slug: "specialty-glassware" },
    ],
  },
  {
    name: "Backdrops & Focal Points",
    slug: "backdrops-focal-points",
    navGroup: "decor",
    description: "Arches, panels, walls, and immersive focal displays.",
    image: img("photo-1522413452208-996ff3f3e740"),
    subcategories: [
      { name: "Arches", slug: "arches" },
      { name: "Backdrops", slug: "backdrops" },
      { name: "Walls", slug: "walls" },
    ],
  },
  {
    name: "Lounge & Throne Seating",
    slug: "lounge-throne-seating",
    navGroup: "rentals",
    description: "Lounges, loveseats, and regal throne seating.",
    image: img("photo-1592078615290-033ee584e267"),
    subcategories: [
      { name: "Loveseats", slug: "loveseats" },
      { name: "Sofas", slug: "sofas" },
      { name: "Lounge Chairs", slug: "lounge-chairs" },
      { name: "Throne Chairs", slug: "throne-chairs-lounge" },
    ],
  },
  {
    name: "Kids",
    slug: "kids",
    navGroup: "rentals",
    description: "Banquet tables, chiavari chairs, and party styling for little guests.",
    image: img("photo-1516450360452-9312f5e86fc7"),
    subcategories: [
      { name: "Kids Tables", slug: "kids-tables" },
      { name: "Kids Chairs", slug: "kids-chairs" },
      { name: "Kids Décor", slug: "kids-decor" },
    ],
  },
  {
    name: "Candles & Décor",
    slug: "candles-decor",
    navGroup: "decor",
    description: "Candles, holders, vases, and finishing touches.",
    image: img("photo-1519710164239-da123dc03ef4"),
    subcategories: [
      { name: "Candle Holders", slug: "candle-holders" },
      { name: "Decorative Accessories", slug: "decorative-accessories" },
    ],
  },
  {
    name: "Cake Stands & Treat Tables",
    slug: "cake-stands-treat-tables",
    navGroup: "rentals",
    description: "Cake stands, dessert tables, and sweet display pieces.",
    image: img("photo-1578985545062-69928b1d9587"),
    subcategories: [
      { name: "Cake Stands", slug: "cake-stands" },
      { name: "Dessert Tables", slug: "dessert-tables" },
      { name: "Treat Displays", slug: "treat-displays" },
    ],
  },
  {
    name: "Photo Booth & Bounce House",
    slug: "entertainment",
    navGroup: "rentals",
    description: "Photo booth experiences and bounce house rentals.",
    image: img("photo-1505236858219-8359eb29e329"),
    subcategories: [
      { name: "Photo Booth", slug: "photo-booth" },
      { name: "Bounce House", slug: "bounce-house" },
    ],
  },
  {
    name: "Production",
    slug: "production",
    navGroup: "rentals",
    description: "Lighting, draping, flooring, and event production.",
    image: img("photo-1506157786151-b8491531f063"),
    subcategories: [
      { name: "Event Production", slug: "event-production" },
      { name: "Lighting", slug: "lighting" },
      { name: "Specialty Equipment", slug: "specialty-equipment" },
    ],
  },
  {
    name: "Balloons",
    slug: "balloons",
    navGroup: "decor",
    description: "Garlands, installations, and custom balloon design.",
    image: img("photo-1527529482837-4698179dc6ce"),
    subcategories: [
      { name: "Balloon Garlands", slug: "balloon-garlands" },
      { name: "Balloon Installations", slug: "balloon-installations" },
      { name: "Balloon Décor", slug: "balloon-decor" },
    ],
  },
  {
    name: "Wedding & Stage Designs",
    slug: "wedding-stage-designs",
    navGroup: "decor",
    description: "Ceremony stages, luxury installations, and bespoke design.",
    image: img("photo-1519167758481-83f550bb49b3"),
    subcategories: [
      { name: "Wedding Stages", slug: "wedding-stages" },
      { name: "Ceremony Designs", slug: "ceremony-designs" },
      { name: "Luxury Stage Décor", slug: "luxury-stage-decor" },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getRentalCategories(): Category[] {
  return categories.filter((c) => c.navGroup === "rentals");
}

export function getDecorCategories(): Category[] {
  return categories.filter((c) => c.navGroup === "decor");
}
