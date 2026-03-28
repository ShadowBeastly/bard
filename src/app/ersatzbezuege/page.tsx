import type { Metadata } from "next";
import { sizes } from "@/data/products";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Ersatzbezüge für Hundekissen",
  description:
    "Ersatzbezüge für alle Pfotenkissen-Größen. Abnehmbarer, waschbarer Bezug für nur €19,90. Neuer Look, gleiches Kissen.",
};

export default function ErsatzbezuegePage() {
  return (
    <div className="bg-warm-bg">
      <section className="max-w-5xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary mb-4">
            Neuer Look, gleiches Kissen
          </h1>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Der Bezug lebt schneller als die Füllung – das ist normal. Mit
            unseren Ersatzbezügen sieht dein Pfotenkissen im Handumdrehen wieder
            wie neu aus. Einfach abnehmen, neuen Bezug drauf, fertig.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-warm-border p-8 mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Warum ein Ersatzbezug?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary mb-1">Immer frisch</h3>
              <p className="text-sm text-primary/60">
                Ein Wechselbezug, während der andere in der Wäsche ist.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary mb-1">Neuer Style</h3>
              <p className="text-sm text-primary/60">
                Gleiche Qualität, neues Aussehen für dein Hundekissen.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary mb-1">Günstig</h3>
              <p className="text-sm text-primary/60">
                Nur €19,90 – egal welche Größe.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-primary mb-6 text-center">
          Ersatzbezüge nach Größe
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sizes.map((size) => (
            <div
              key={size.label}
              className="bg-white rounded-xl shadow-sm border border-warm-border p-6 text-center"
            >
              <ImagePlaceholder
                label={`Ersatzbezug ${size.label}`}
                aspectRatio="aspect-square"
                className="mb-4"
              />
              <h3 className="text-xl font-bold text-primary mb-1">
                Größe {size.label}
              </h3>
              <p className="text-sm text-primary/60 mb-1">{size.dimensions}</p>
              <p className="text-sm text-primary/60 mb-4">
                Für Hunde {size.weightRange}
              </p>
              <p className="text-2xl font-extrabold text-accent mb-4">
                €19,90
              </p>
              <button className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                In den Warenkorb
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
