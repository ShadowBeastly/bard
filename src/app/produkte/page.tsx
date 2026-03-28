import type { Metadata } from "next";
import Link from "next/link";
import { products, sizes, getPrice } from "@/data/products";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Alle Hundekissen – Flachkissen & Randkissen | Pfotenkissen",
  description:
    "Entdecke unsere Premium-Hundekissen: Flachkissen und Randkissen in 5 Gr\u00f6\u00dfen. Formstabil, waschbar, mit 3-Jahres-Garantie und Gratis-Ersatzbezug.",
};

function PriceTable({ variant }: { variant: "flat" | "raised" }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-warm-border">
            <th className="py-2 pr-4 font-semibold text-primary">Gr\u00f6\u00dfe</th>
            <th className="py-2 pr-4 font-semibold text-primary">Ma\u00dfe</th>
            <th className="py-2 pr-4 font-semibold text-primary">Gewicht Hund</th>
            <th className="py-2 font-semibold text-primary">Preis</th>
          </tr>
        </thead>
        <tbody>
          {sizes.map((size) => (
            <tr key={size.label} className="border-b border-warm-border/50">
              <td className="py-2 pr-4 font-medium text-primary">{size.label}</td>
              <td className="py-2 pr-4 text-primary/70">{size.dimensions}</td>
              <td className="py-2 pr-4 text-primary/70">{size.weightRange}</td>
              <td className="py-2 font-semibold text-accent">
                {getPrice(variant, size.label).toFixed(2).replace(".", ",")} \u20ac
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ProduktePage() {
  const flachkissen = products.find((p) => p.slug === "flachkissen")!;
  const randkissen = products.find((p) => p.slug === "randkissen")!;

  return (
    <main className="bg-warm-bg">
      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Unsere Hundekissen
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Zwei Modelle, f\u00fcnf Gr\u00f6\u00dfen, eine Mission: das letzte Hundekissen, das du kaufen musst.
          </p>
        </div>
      </section>

      {/* Flachkissen Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <ImagePlaceholder
            label={flachkissen.images[0]}
            aspectRatio="aspect-square"
            className="w-full"
          />
          <div>
            <h2 className="text-2xl font-bold text-primary mb-3">
              {flachkissen.name}
            </h2>
            <p className="text-primary/70 mb-6">{flachkissen.description}</p>
            <ul className="space-y-2 mb-6">
              {flachkissen.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-primary/80">
                  <span className="text-accent mt-0.5">&#10003;</span>
                  {feature}
                </li>
              ))}
            </ul>
            <PriceTable variant="flat" />
            <Link
              href="/produkt/flachkissen"
              className="inline-block mt-6 bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
            >
              Flachkissen ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <hr className="border-warm-border" />
      </div>

      {/* Randkissen Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <ImagePlaceholder
            label={randkissen.images[0]}
            aspectRatio="aspect-square"
            className="w-full"
          />
          <div>
            <h2 className="text-2xl font-bold text-primary mb-3">
              {randkissen.name}
            </h2>
            <p className="text-primary/70 mb-6">{randkissen.description}</p>
            <ul className="space-y-2 mb-6">
              {randkissen.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-primary/80">
                  <span className="text-accent mt-0.5">&#10003;</span>
                  {feature}
                </li>
              ))}
            </ul>
            <PriceTable variant="raised" />
            <Link
              href="/produkt/randkissen"
              className="inline-block mt-6 bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
            >
              Randkissen ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <hr className="border-warm-border" />
      </div>

      {/* Ersatzbez\u00fcge Section */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-primary mb-3">Ersatzbez\u00fcge</h2>
        <p className="text-primary/70 mb-6 max-w-xl mx-auto">
          Neuer Look gef\u00e4llig? Unsere Ersatzbez\u00fcge passen auf alle Kissen und sind
          f\u00fcr jede Gr\u00f6\u00dfe erh\u00e4ltlich &ndash; f\u00fcr nur{" "}
          <span className="font-semibold text-accent">19,90 \u20ac</span>.
        </p>
        <Link
          href="/ersatzbezuege"
          className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Ersatzbez\u00fcge entdecken
        </Link>
      </section>
    </main>
  );
}
