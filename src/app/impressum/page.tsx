import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Pfotenkissen",
};

export default function ImpressumPage() {
  return (
    <main className="bg-warm-bg min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-primary mb-12 text-4xl font-bold tracking-tight">
          Impressum
        </h1>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-primary mb-3 text-xl font-semibold">
              Angaben gem&auml;&szlig; &sect; 5 TMG
            </h2>
            <p>
              [Firmenname]
              <br />
              [Stra&szlig;e Nr.]
              <br />
              [PLZ Ort]
            </p>
          </section>

          <section>
            <h2 className="text-primary mb-3 text-xl font-semibold">
              Vertreten durch
            </h2>
            <p>[Name]</p>
          </section>

          <section>
            <h2 className="text-primary mb-3 text-xl font-semibold">
              Kontakt
            </h2>
            <p>
              Telefon: [Telefonnummer]
              <br />
              E-Mail: [E-Mail-Adresse]
            </p>
          </section>

          <section>
            <h2 className="text-primary mb-3 text-xl font-semibold">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
              Umsatzsteuergesetz:
              <br />
              [USt-IdNr.]
            </p>
          </section>

          <section>
            <h2 className="text-primary mb-3 text-xl font-semibold">
              Verantwortlich f&uuml;r den Inhalt nach &sect; 55 Abs. 2 RStV
            </h2>
            <p>
              [Name]
              <br />
              [Stra&szlig;e Nr.]
              <br />
              [PLZ Ort]
            </p>
          </section>

          <section>
            <h2 className="text-primary mb-3 text-xl font-semibold">
              Streitschlichtung
            </h2>
            <p className="mb-4">
              Die Europ&auml;ische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:opacity-70"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
