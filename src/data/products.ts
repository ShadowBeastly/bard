export interface Size {
  label: string;
  dimensions: string;
  weightRange: string;
  priceFlat: number;
  priceRaised: number;
  replacementCoverPrice: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  variant: "flat" | "raised";
  variantLabel: string;
  description: string;
  features: string[];
  includes: string[];
  images: string[];
}

export const sizes: Size[] = [
  {
    label: "M",
    dimensions: "80 × 60 cm",
    weightRange: "bis 15 kg",
    priceFlat: 35,
    priceRaised: 39,
    replacementCoverPrice: 19.9,
  },
  {
    label: "L",
    dimensions: "100 × 80 cm",
    weightRange: "15–25 kg",
    priceFlat: 42,
    priceRaised: 47,
    replacementCoverPrice: 19.9,
  },
  {
    label: "XL",
    dimensions: "120 × 100 cm",
    weightRange: "25–40 kg",
    priceFlat: 52,
    priceRaised: 59,
    replacementCoverPrice: 19.9,
  },
  {
    label: "XXL",
    dimensions: "140 × 100 cm",
    weightRange: "40–60 kg",
    priceFlat: 59,
    priceRaised: 67,
    replacementCoverPrice: 19.9,
  },
  {
    label: "XXXL",
    dimensions: "150 × 120 cm",
    weightRange: "60+ kg",
    priceFlat: 65,
    priceRaised: 75,
    replacementCoverPrice: 19.9,
  },
];

export const products: Product[] = [
  {
    id: "flachkissen",
    name: "Flachkissen",
    slug: "flachkissen",
    variant: "flat",
    variantLabel: "Flachkissen",
    description:
      "Klassisches Liegekissen ohne Rand – maximale Liegefläche für deinen Hund. Formstabil, waschbar und mit 3-Jahres-Garantie.",
    features: [
      "Formstabile Premium-Füllung",
      "Abnehmbarer & waschbarer Bezug",
      "Rutschfeste Unterseite",
      "Europäische Produktion",
      "3-Jahres-Formgarantie",
    ],
    includes: [
      "1× Flachkissen in gewählter Größe",
      "1× Gratis-Ersatzbezug",
      "3-Jahres-Formgarantie",
    ],
    images: [
      "Flachkissen Hauptansicht",
      "Flachkissen Seitenansicht",
      "Flachkissen Detail Bezug",
      "Flachkissen mit Hund",
    ],
  },
  {
    id: "randkissen",
    name: "Randkissen",
    slug: "randkissen",
    variant: "raised",
    variantLabel: "Randkissen",
    description:
      "Kissen mit erhöhtem Rand in Nestform – für Hunde die sich gerne anlehnen. Formstabil, waschbar und mit 3-Jahres-Garantie.",
    features: [
      "Erhöhter Rand als Kopfstütze",
      "Formstabile Premium-Füllung",
      "Abnehmbarer & waschbarer Bezug",
      "Rutschfeste Unterseite",
      "Europäische Produktion",
      "3-Jahres-Formgarantie",
    ],
    includes: [
      "1× Randkissen in gewählter Größe",
      "1× Gratis-Ersatzbezug",
      "3-Jahres-Formgarantie",
    ],
    images: [
      "Randkissen Hauptansicht",
      "Randkissen Seitenansicht",
      "Randkissen Detail Rand",
      "Randkissen mit Hund",
    ],
  },
];

export function getPrice(variant: "flat" | "raised", sizeLabel: string): number {
  const size = sizes.find((s) => s.label === sizeLabel);
  if (!size) return 0;
  return variant === "flat" ? size.priceFlat : size.priceRaised;
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getSize(label: string): Size | undefined {
  return sizes.find((s) => s.label === label);
}
