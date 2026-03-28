export interface FAQ {
  question: string;
  answer: string;
}

export interface Breed {
  name: string;
  slug: string;
  recommendedSize: string;
  weightRange: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubline: string;
  faqs: FAQ[];
}

const baseFaqs = (breedName: string, size: string, weight: string): FAQ[] => [
  {
    question: `Welche Größe braucht mein ${breedName}?`,
    answer: `Für ${breedName} empfehlen wir Größe ${size}. Diese Größe ist optimal für Hunde mit einem Gewicht von ${weight}. Dein Hund sollte sich komplett ausstrecken können, ohne über den Rand hinauszuragen.`,
  },
  {
    question: "Ist das Kissen waschbar?",
    answer:
      "Ja! Der Bezug ist abnehmbar und bei 40°C waschbar. Einfach den Reißverschluss öffnen, Bezug abnehmen und in die Waschmaschine geben. Im Starterpaket ist ein Gratis-Ersatzbezug enthalten, damit dein Hund auch während der Wäsche bequem liegt.",
  },
  {
    question: "Was passiert wenn das Kissen einsinkt?",
    answer:
      "Darauf geben wir dir unsere 3-Jahres-Formgarantie: Sinkt das Kissen innerhalb von 3 Jahren ein, bekommst du ein neues. Ohne Diskussion. Unsere Premium-Füllung ist speziell für große Hunderassen entwickelt und behält ihre Form auch bei täglicher Nutzung.",
  },
  {
    question: "Kann ich den Bezug einzeln nachkaufen?",
    answer:
      "Ja, Ersatzbezüge sind für jede Größe einzeln erhältlich – für nur €19,90. So kannst du den Look auffrischen oder einen Wechselbezug auf Vorrat haben.",
  },
  {
    question: "Wo wird das Kissen produziert?",
    answer:
      "Unsere Kissen werden in Europa nach strengen Qualitätsstandards hergestellt. Wir verwenden nur schadstofffreie Materialien, die für deinen Hund völlig unbedenklich sind.",
  },
];

export const breeds: Breed[] = [
  {
    name: "Labrador Retriever",
    slug: "labrador",
    recommendedSize: "XL",
    weightRange: "25–36 kg",
    metaTitle:
      "Hundekissen für Labrador Retriever – XL, formstabil, 3 Jahre Garantie | Pfotenkissen",
    metaDescription:
      "Das perfekte Hundekissen für deinen Labrador Retriever. Größe XL (120×100 cm), formstabil, waschbarer Bezug & Gratis-Ersatzbezug. 3-Jahres-Garantie inklusive.",
    heroHeadline: "Das perfekte Hundekissen für deinen Labrador",
    heroSubline:
      "Speziell dimensioniert für 25–36 kg. Formstabil. 3 Jahre Garantie.",
    faqs: baseFaqs("Labrador Retriever", "XL", "25–36 kg"),
  },
  {
    name: "Golden Retriever",
    slug: "golden-retriever",
    recommendedSize: "XL",
    weightRange: "25–34 kg",
    metaTitle:
      "Hundekissen für Golden Retriever – XL, formstabil, 3 Jahre Garantie | Pfotenkissen",
    metaDescription:
      "Das perfekte Hundekissen für deinen Golden Retriever. Größe XL (120×100 cm), formstabil, waschbarer Bezug & Gratis-Ersatzbezug. 3-Jahres-Garantie inklusive.",
    heroHeadline: "Das perfekte Hundekissen für deinen Golden Retriever",
    heroSubline:
      "Speziell dimensioniert für 25–34 kg. Formstabil. 3 Jahre Garantie.",
    faqs: baseFaqs("Golden Retriever", "XL", "25–34 kg"),
  },
  {
    name: "Deutscher Schäferhund",
    slug: "schaeferhund",
    recommendedSize: "XL–XXL",
    weightRange: "30–40 kg",
    metaTitle:
      "Hundekissen für Deutschen Schäferhund – XL/XXL, formstabil, 3 Jahre Garantie | Pfotenkissen",
    metaDescription:
      "Das perfekte Hundekissen für deinen Deutschen Schäferhund. Größe XL–XXL, formstabil, waschbarer Bezug & Gratis-Ersatzbezug. 3-Jahres-Garantie inklusive.",
    heroHeadline: "Das perfekte Hundekissen für deinen Schäferhund",
    heroSubline:
      "Speziell dimensioniert für 30–40 kg. Formstabil. 3 Jahre Garantie.",
    faqs: baseFaqs("Deutschen Schäferhund", "XL–XXL", "30–40 kg"),
  },
  {
    name: "Berner Sennenhund",
    slug: "berner-sennenhund",
    recommendedSize: "XXL",
    weightRange: "40–50 kg",
    metaTitle:
      "Hundekissen für Berner Sennenhund – XXL, formstabil, 3 Jahre Garantie | Pfotenkissen",
    metaDescription:
      "Das perfekte Hundekissen für deinen Berner Sennenhund. Größe XXL (140×100 cm), formstabil, waschbarer Bezug & Gratis-Ersatzbezug. 3-Jahres-Garantie inklusive.",
    heroHeadline: "Das perfekte Hundekissen für deinen Berner Sennenhund",
    heroSubline:
      "Speziell dimensioniert für 40–50 kg. Formstabil. 3 Jahre Garantie.",
    faqs: baseFaqs("Berner Sennenhund", "XXL", "40–50 kg"),
  },
  {
    name: "Deutsche Dogge",
    slug: "deutsche-dogge",
    recommendedSize: "XXXL",
    weightRange: "50–80 kg",
    metaTitle:
      "Hundekissen für Deutsche Dogge – XXXL, formstabil, 3 Jahre Garantie | Pfotenkissen",
    metaDescription:
      "Das perfekte Hundekissen für deine Deutsche Dogge. Größe XXXL (150×120 cm), formstabil, waschbarer Bezug & Gratis-Ersatzbezug. 3-Jahres-Garantie inklusive.",
    heroHeadline: "Das perfekte Hundekissen für deine Deutsche Dogge",
    heroSubline:
      "Speziell dimensioniert für 50–80 kg. Formstabil. 3 Jahre Garantie.",
    faqs: baseFaqs("Deutsche Dogge", "XXXL", "50–80 kg"),
  },
  {
    name: "Rhodesian Ridgeback",
    slug: "rhodesian-ridgeback",
    recommendedSize: "XL–XXL",
    weightRange: "32–40 kg",
    metaTitle:
      "Hundekissen für Rhodesian Ridgeback – XL/XXL, formstabil, 3 Jahre Garantie | Pfotenkissen",
    metaDescription:
      "Das perfekte Hundekissen für deinen Rhodesian Ridgeback. Größe XL–XXL, formstabil, waschbarer Bezug & Gratis-Ersatzbezug. 3-Jahres-Garantie inklusive.",
    heroHeadline: "Das perfekte Hundekissen für deinen Rhodesian Ridgeback",
    heroSubline:
      "Speziell dimensioniert für 32–40 kg. Formstabil. 3 Jahre Garantie.",
    faqs: baseFaqs("Rhodesian Ridgeback", "XL–XXL", "32–40 kg"),
  },
  {
    name: "Rottweiler",
    slug: "rottweiler",
    recommendedSize: "XXL",
    weightRange: "40–55 kg",
    metaTitle:
      "Hundekissen für Rottweiler – XXL, formstabil, 3 Jahre Garantie | Pfotenkissen",
    metaDescription:
      "Das perfekte Hundekissen für deinen Rottweiler. Größe XXL (140×100 cm), formstabil, waschbarer Bezug & Gratis-Ersatzbezug. 3-Jahres-Garantie inklusive.",
    heroHeadline: "Das perfekte Hundekissen für deinen Rottweiler",
    heroSubline:
      "Speziell dimensioniert für 40–55 kg. Formstabil. 3 Jahre Garantie.",
    faqs: baseFaqs("Rottweiler", "XXL", "40–55 kg"),
  },
  {
    name: "Deutsch Kurzhaar",
    slug: "deutsch-kurzhaar",
    recommendedSize: "XL",
    weightRange: "25–32 kg",
    metaTitle:
      "Hundekissen für Deutsch Kurzhaar – XL, formstabil, 3 Jahre Garantie | Pfotenkissen",
    metaDescription:
      "Das perfekte Hundekissen für deinen Deutsch Kurzhaar. Größe XL (120×100 cm), formstabil, waschbarer Bezug & Gratis-Ersatzbezug. 3-Jahres-Garantie inklusive.",
    heroHeadline: "Das perfekte Hundekissen für deinen Deutsch Kurzhaar",
    heroSubline:
      "Speziell dimensioniert für 25–32 kg. Formstabil. 3 Jahre Garantie.",
    faqs: baseFaqs("Deutsch Kurzhaar", "XL", "25–32 kg"),
  },
];

export function getBreed(slug: string): Breed | undefined {
  return breeds.find((b) => b.slug === slug);
}
