import type { Metadata } from "next";
import Link from "next/link";
import { breeds } from "@/data/breeds";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title:
    "Pfotenkissen – Premium-Hundekissen für große Rassen | Formstabil. Waschbar. Garantiert.",
  description:
    "Premium-Hundekissen für große Rassen. Formstabil nach 3 Jahren, waschbarer Bezug, Gratis-Ersatzbezug inklusive. Mit 3-Jahres-Garantie.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <h1 className="font-sans text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Das letzte Hundekissen, das du kaufst.
              </h1>
              <p className="text-lg text-white/80 sm:text-xl">
                Formstabil. Waschbar. Mit 3-Jahres-Garantie.
              </p>
              <div>
                <a
                  href="#rassen"
                  className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white transition hover:bg-accent/90"
                >
                  Finde das richtige Kissen
                </a>
              </div>
            </div>
            <ImagePlaceholder
              label="Hero – Hund auf Pfotenkissen"
              className="w-full"
              aspectRatio="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Rassen-Grid */}
      <section id="rassen" className="bg-warm-bg py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-sans text-3xl font-bold text-primary sm:text-4xl">
            Welche Rasse hat dein Hund?
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {breeds.slice(0, 8).map((breed) => (
              <Link
                key={breed.slug}
                href={`/rasse/${breed.slug}`}
                className="group overflow-hidden rounded-xl border border-warm-border bg-white transition hover:shadow-lg"
              >
                <ImagePlaceholder
                  label={breed.name}
                  aspectRatio="aspect-square"
                />
                <div className="p-4 text-center">
                  <h3 className="font-sans text-sm font-semibold text-primary sm:text-base">
                    {breed.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-4 rounded-xl border border-warm-border p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-sans text-lg font-bold text-primary">
                Formstabil nach 3 Jahren
              </h3>
              <p className="text-sm text-primary/60">
                Premium-Füllung, die ihre Form behält – garantiert. Sinkt es
                ein, bekommst du ein neues.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-xl border border-warm-border p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="font-sans text-lg font-bold text-primary">
                Waschbarer Bezug
              </h3>
              <p className="text-sm text-primary/60">
                Bezug einfach abziehen und bei 40 °C waschen. Dein Hund liegt
                immer frisch.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-xl border border-warm-border p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="font-sans text-lg font-bold text-primary">
                Gratis-Ersatzbezug inklusive
              </h3>
              <p className="text-sm text-primary/60">
                Im Starterpaket enthalten: ein zweiter Bezug gratis. Wechseln
                während der Wäsche.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-warm-bg py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-sans text-3xl font-bold text-primary sm:text-4xl">
            Was unsere Kunden sagen
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                name: "Sabine M.",
                breed: "Labrador Retriever",
                text: "Nach 2 Jahren sieht das Kissen aus wie am ersten Tag. Mein Labrador liegt am liebsten den ganzen Tag darauf. Absolut empfehlenswert!",
              },
              {
                name: "Thomas K.",
                breed: "Berner Sennenhund",
                text: "Endlich ein Kissen, das nicht nach wenigen Monaten platt ist. Die XXL-Größe passt perfekt für unseren Berner. Der waschbare Bezug ist Gold wert.",
              },
              {
                name: "Julia R.",
                breed: "Deutsche Dogge",
                text: "Wir haben schon viele Hundebetten durch – dieses ist das erste, das hält. Die 3-Jahres-Garantie gibt extra Sicherheit. Unsere Dogge liebt es!",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="flex flex-col gap-4 rounded-xl border border-warm-border bg-white p-6"
              >
                <div className="flex items-center gap-3">
                  <ImagePlaceholder
                    label={review.name}
                    className="h-12 w-12 shrink-0 !rounded-full"
                    aspectRatio="aspect-square"
                  />
                  <div>
                    <p className="font-sans text-sm font-semibold text-primary">
                      {review.name}
                    </p>
                    <p className="text-xs text-primary/50">{review.breed}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-primary/70">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* So funktioniert's */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-sans text-3xl font-bold text-primary sm:text-4xl">
            So funktioniert&apos;s
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Rasse wählen",
                description:
                  "Wähle die Rasse deines Hundes und wir empfehlen dir die passende Größe.",
              },
              {
                step: "2",
                title: "Größe passt automatisch",
                description:
                  "Basierend auf der Rasse bekommst du die optimale Kissengröße vorgeschlagen.",
              },
              {
                step: "3",
                title: "Starterpaket bestellen",
                description:
                  "Kissen + Gratis-Ersatzbezug + 3-Jahres-Garantie. Alles in einem Paket.",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="font-sans text-lg font-bold text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-primary/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
