import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Pfotenkissen",
};

export default function DatenschutzPage() {
  return (
    <main className="bg-warm-bg min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-primary mb-12 text-4xl font-bold tracking-tight">
          Datenschutzerkl&auml;rung
        </h1>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          {/* Verantwortlicher */}
          <section>
            <h2 className="text-primary mb-3 text-xl font-semibold">
              1. Verantwortlicher
            </h2>
            <p>
              Verantwortlich f&uuml;r die Datenverarbeitung auf dieser Website
              ist:
            </p>
            <p className="mt-2">
              [Firmenname]
              <br />
              [Stra&szlig;e Nr.]
              <br />
              [PLZ Ort]
              <br />
              E-Mail: [E-Mail-Adresse]
              <br />
              Telefon: [Telefonnummer]
            </p>
          </section>

          {/* Datenerfassung */}
          <section>
            <h2 className="text-primary mb-3 text-xl font-semibold">
              2. Datenerfassung auf unserer Website
            </h2>

            <h3 className="text-primary mt-6 mb-2 text-lg font-medium">
              Cookies
            </h3>
            <p>
              Unsere Website verwendet nur technisch notwendige Cookies, die
              f&uuml;r den Betrieb der Seite erforderlich sind. Diese Cookies
              werden nach Ende Ihrer Browser-Sitzung automatisch gel&ouml;scht.
              Eine gesonderte Einwilligung ist hierf&uuml;r nicht erforderlich
              (Art. 6 Abs. 1 lit. f DSGVO).
            </p>

            <h3 className="text-primary mt-6 mb-2 text-lg font-medium">
              Server-Log-Files
            </h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in sogenannten Server-Log-Files, die Ihr Browser
              automatisch &uuml;bermittelt. Dies sind:
            </p>
            <ul className="mt-2 ml-6 list-disc space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse (anonymisiert)</li>
            </ul>
            <p className="mt-2">
              Diese Daten werden nicht mit anderen Datenquellen
              zusammengef&uuml;hrt. Grundlage f&uuml;r die Datenverarbeitung
              ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="text-primary mt-6 mb-2 text-lg font-medium">
              Kontaktformular
            </h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Formular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und
              f&uuml;r den Fall von Anschlussfragen bei uns gespeichert.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </section>

          {/* Analyse-Tools */}
          <section>
            <h2 className="text-primary mb-3 text-xl font-semibold">
              3. Analyse-Tools
            </h2>
            <p>
              Wir verwenden [Plausible Analytics / Umami] zur Auswertung des
              Nutzerverhaltens auf unserer Website. Dieses Tool arbeitet
              vollst&auml;ndig ohne Cookies und erfasst keine personenbezogenen
              Daten. Es werden keine Daten an Dritte weitergegeben. Die
              Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses
              an der statistischen Analyse des Nutzerverhaltens (Art. 6 Abs. 1
              lit. f DSGVO).
            </p>
          </section>

          {/* Zahlungsdienstleister */}
          <section>
            <h2 className="text-primary mb-3 text-xl font-semibold">
              4. Zahlungsdienstleister
            </h2>
            <p>
              Wir nutzen Stripe als Zahlungsdienstleister. Ihre Zahlungsdaten
              werden direkt von Stripe verarbeitet und nicht auf unseren Servern
              gespeichert. Stripe ist zertifiziert nach dem PCI Data Security
              Standard (PCI DSS). Weitere Informationen zum Datenschutz bei
              Stripe finden Sie unter:{" "}
              <a
                href="https://stripe.com/de/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:opacity-70"
              >
                https://stripe.com/de/privacy
              </a>
            </p>
            <p className="mt-2">
              Rechtsgrundlage f&uuml;r die Weitergabe der Daten ist Art. 6 Abs.
              1 lit. b DSGVO (Vertragserf&uuml;llung).
            </p>
          </section>

          {/* SSL */}
          <section>
            <h2 className="text-primary mb-3 text-xl font-semibold">
              5. SSL-Verschl&uuml;sselung
            </h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der
              &Uuml;bertragung vertraulicher Inhalte eine
              SSL-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung
              erkennen Sie daran, dass die Adresszeile des Browsers von
              &ldquo;http://&rdquo; auf &ldquo;https://&rdquo; wechselt und an
              dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          {/* Betroffenenrechte */}
          <section>
            <h2 className="text-primary mb-3 text-xl font-semibold">
              6. Ihre Rechte
            </h2>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul className="mt-2 ml-6 list-disc space-y-1">
              <li>
                <strong>Auskunft</strong> &uuml;ber Ihre bei uns gespeicherten
                personenbezogenen Daten (Art. 15 DSGVO)
              </li>
              <li>
                <strong>Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)
              </li>
              <li>
                <strong>L&ouml;schung</strong> Ihrer bei uns gespeicherten Daten
                (Art. 17 DSGVO)
              </li>
              <li>
                <strong>Einschr&auml;nkung</strong> der Datenverarbeitung (Art.
                18 DSGVO)
              </li>
              <li>
                <strong>Daten&uuml;bertragbarkeit</strong> (Art. 20 DSGVO)
              </li>
              <li>
                <strong>Widerspruch</strong> gegen die Verarbeitung (Art. 21
                DSGVO)
              </li>
            </ul>
            <p className="mt-4">
              Dar&uuml;ber hinaus steht Ihnen ein Beschwerderecht bei der
              zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
