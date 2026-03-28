import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { breeds, getBreed } from "@/data/breeds";
import { getSize } from "@/data/products";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import BreedProductSelector from "@/components/BreedProductSelector";
import BreedJsonLd from "./BreedJsonLd";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return breeds.map((breed) => ({ slug: breed.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const breed = getBreed(slug);
  if (!breed) return {};
  return {
    title: breed.metaTitle,
    description: breed.metaDescription,
    openGraph: {
      title: breed.metaTitle,
      description: breed.metaDescription,
    },
  };
}

export default async function BreedPage({ params }: PageProps) {
  const { slug } = await params;
  const breed = getBreed(slug);
  if (!breed) notFound();

  const primarySize = breed.recommendedSize.split(/[–-]/)[0].trim();
  const sizeData = getSize(primarySize);

  return (
    <>
      <BreedJsonLd faqs={breed.faqs} />

      {/* Hero */}
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <h1 className="font-sans text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                {breed.heroHeadline}
              </h1>
              <p className="text-lg text-white/80 sm:text-xl">
                {breed.heroSubline}
              </p>
            </div>
            <ImagePlaceholder
              label={`${breed.name} auf Pfotenkissen`}
              className="w-full"
              aspectRatio="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Size Recommendation */}
      <section className="bg-warm-bg py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-accent bg-white p-6 text-center shadow-sm sm:p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">
              Unsere Empfehlung
            </p>
            <h2 className="mb-4 font-sans text-2xl font-bold text-primary sm:text-3xl">
              Für {breed.name} empfehlen wir Größe{" "}
              <span className="text-accent">{breed.recommendedSize}</span>
            </h2>
            {sizeData && (
              <div className="flex flex-wrap justify-center gap-6 text-primary/70">
                <div>
                  <span className="font-semibold text-primary">
                    {sizeData.dimensions}
                  </span>{" "}
                  Liegefläche
                </div>
                <div>
                  <span className="font-semibold text-primary">
                    {sizeData.weightRange}
                  </span>{" "}
                  Gewichtsbereich
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Product Selection */}
      <section className="bg-warm-bg pb-16 pt-4">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <BreedProductSelector
            breedName={breed.name}
            recommendedSize={breed.recommendedSize}
            breedSlug={breed.slug}
          />
        </div>
      </section>

      {/* Warum Pfotenkissen */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-sans text-2xl font-bold text-primary sm:text-4xl">
            Warum Pfotenkissen?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Formstabilität",
                description:
                  "Premium-Füllung, die auch nach Jahren täglicher Nutzung nicht einsinkt.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                ),
              },
              {
                title: "Waschbarer Bezug",
                description:
                  "Abnehmbarer Bezug, waschbar bei 40 °C. Sauber und frisch in unter einer Stunde.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                ),
              },
              {
                title: "3-Jahres-Garantie",
                description:
                  "Sinkt das Kissen ein, bekommst du ein neues. Ohne Diskussion.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                ),
              },
              {
                title: "Gratis-Ersatzbezug",
                description:
                  "Im Starterpaket enthalten – damit dein Hund auch während der Wäsche bequem liegt.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                ),
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center gap-4 rounded-xl border border-warm-border p-6 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="font-sans font-bold text-primary">
                  {feature.title}
                </h3>
                <p className="text-sm text-primary/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-warm-bg py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center font-sans text-2xl font-bold text-primary sm:text-4xl">
            Häufig gestellte Fragen
          </h2>
          <div className="flex flex-col gap-3">
            {breed.faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl border border-warm-border bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 font-sans font-semibold text-primary [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 text-primary/40 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm leading-relaxed text-primary/70">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Placeholder */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center font-sans text-2xl font-bold text-primary sm:text-4xl">
            {breed.name}-Besitzer lieben Pfotenkissen
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 rounded-xl border border-warm-border bg-warm-bg p-6"
              >
                <div className="flex items-center gap-3">
                  <ImagePlaceholder
                    label="Foto"
                    className="h-10 w-10 shrink-0 !rounded-full"
                    aspectRatio="aspect-square"
                  />
                  <div>
                    <p className="font-sans text-sm font-semibold text-primary">
                      Kundenname
                    </p>
                    <p className="text-xs text-primary/50">{breed.name}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg
                      key={j}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm italic text-primary/70">
                  Platzhalter-Bewertung für {breed.name}-Besitzer. Hier kommt
                  eine echte Kundenbewertung hin.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
