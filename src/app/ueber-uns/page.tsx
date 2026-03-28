import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Über uns – Die Geschichte hinter Pfotenkissen",
  description:
    "Wir sind Hundebesitzer, die das Problem selbst kennen: plattgelegene Kissen, billige Materialien, frustrierte Hunde. Pfotenkissen ist unsere Lösung.",
};

export default function UeberUnsPage() {
  return (
    <div className="bg-warm-bg">
      <section className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-primary mb-8 text-center">
          Wir kennen das Problem
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-primary/80 mb-4">
              Drei Hundekissen in einem Jahr. Alle platt. Alle im Müll. Das war
              der Moment, in dem wir beschlossen haben: Das muss besser gehen.
            </p>
            <p className="text-lg text-primary/80 mb-4">
              Als Besitzer großer Hunderassen kennen wir das Spiel: Man kauft
              ein Kissen, der Hund liegt zwei Monate drauf, und dann ist es
              durchgelegen. Die Füllung ist komprimiert, der Bezug hat bessere
              Tage gesehen, und man steht wieder im Laden.
            </p>
            <p className="text-lg text-primary/80">
              Pfotenkissen ist aus Frust entstanden – und aus dem Wunsch, ein
              Hundekissen zu bauen, das man nur einmal kaufen muss. Mit einer
              Füllung, die auch nach Jahren nicht einsinkt. Mit einem Bezug, den
              man einfach abnehmen und waschen kann. Und mit einer Garantie, die
              das auch verspricht.
            </p>
          </div>
          <ImagePlaceholder
            label="Gründer mit Hund"
            aspectRatio="aspect-[4/5]"
          />
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-warm-border text-center">
            <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">Qualität</h3>
            <p className="text-sm text-primary/60">
              Wir verwenden nur Materialien, die wir selbst für unsere Hunde
              nutzen würden. Keine Kompromisse.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-warm-border text-center">
            <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">
              Nachhaltigkeit
            </h3>
            <p className="text-sm text-primary/60">
              Ein Kissen, das 3+ Jahre hält, statt drei Kissen pro Jahr. Weniger
              Müll, besseres Gewissen.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-warm-border text-center">
            <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">
              Hundeliebe
            </h3>
            <p className="text-sm text-primary/60">
              Jede Entscheidung treffen wir mit einer Frage: Würde unser eigener
              Hund damit glücklich sein?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
