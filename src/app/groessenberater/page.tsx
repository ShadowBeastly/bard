import type { Metadata } from "next";
import SizeAdvisor from "./SizeAdvisor";

export const metadata: Metadata = {
  title:
    "Gr\u00f6\u00dfenberater \u2013 Die richtige Kissengr\u00f6\u00dfe f\u00fcr deinen Hund | Pfotenkissen",
  description:
    "Finde die perfekte Kissengr\u00f6\u00dfe f\u00fcr deinen Hund. W\u00e4hle die Rasse oder gib das Gewicht ein \u2013 wir empfehlen die passende Gr\u00f6\u00dfe.",
};

export default function GroessenberaterPage() {
  return (
    <main className="bg-warm-bg">
      <section className="bg-primary text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Welche Gr\u00f6\u00dfe braucht dein Hund?
          </h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            W\u00e4hle die Rasse deines Hundes oder gib sein Gewicht ein &ndash; wir
            finden die perfekte Kissengr\u00f6\u00dfe.
          </p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 py-12">
        <SizeAdvisor />
      </section>
    </main>
  );
}
