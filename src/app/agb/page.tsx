import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen | Pfotenkissen",
};

export default function AGBPage() {
  return (
    <main className="bg-warm-bg min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-primary mb-12 text-4xl font-bold tracking-tight">
          Allgemeine Gesch&auml;ftsbedingungen
        </h1>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          {/* §1 */}
          <section>
            <h2 className="text-primary mb-3 text-xl font-semibold">
              &sect;1 Geltungsbereich
            </h2>
            <p>
              Diese Allgemeinen Gesch&auml;ftsbedingungen (AGB) gelten f&uuml;r
              alle Bestellungen, die Verbraucher und Unternehmer &uuml;ber
              unseren Onlineshop{" "}
              <strong>pfotenkissen.de</strong> abschlie&szlig;en.
            </p>
            <p className="mt-2">
              Verbraucher im Sinne dieser AGB ist jede nat&uuml;rliche Person,
              die ein Rechtsgesch&auml;ft zu Zwecken abschlie&szlig;t, die
              &uuml;berwiegend weder ihrer gewerblichen noch ihrer
              selbst&auml;ndigen beruflichen T&auml;tigkeit zugerechnet werden
              k&ouml;nnen.
            </p>
          </section>

          {/* §2 */}
          <section>
            <h2 className="text-primary mb-3 text-xl font-semibold">
              &sect;2 Vertragsschluss
            </h2>
            <p>
              Die Darstellung der Produkte im Onlineshop stellt kein rechtlich
              bindendes Angebot dar, sondern eine Aufforderung zur Bestellung.
            </p>
            <p className="mt-2">
              Durch Anklicken des Buttons &ldquo;Zahlungspflichtig
              bestellen&rdquo; geben Sie eine verbindliche Bestellung der im
              Warenkorb enthaltenen Waren ab. Die Best&auml;tigung des Eingangs
              Ihrer Bestellung erfolgt unmittelbar nach dem Absenden per E-Mail.
              Der Kaufvertrag kommt zustande, wenn wir Ihre Bestellung durch
              eine Auftragsbest&auml;tigung per E-Mail annehmen.
            </p>
          </section>

          {/* §3 */}
          <section>
            <h2 className="text-primary mb-3 text-xl font-semibold">
              &sect;3 Preise und Zahlung
            </h2>
            <p>
              Alle angegebenen Preise sind Endpreise inklusive der gesetzlichen
              Mehrwertsteuer. Versandkosten werden gesondert ausgewiesen und vor
              Abschluss der Bestellung transparent dargestellt.
            </p>
            <p className="mt-2">
              Die Zahlung erfolgt &uuml;ber den Zahlungsdienstleister Stripe.
              Folgende Zahlungsarten stehen zur Verf&uuml;gung:
            </p>
            <ul className="mt-2 ml-6 list-disc space-y-1">
              <li>Kreditkarte (Visa, Mastercard, American Express)</li>
              <li>SEPA-Lastschrift</li>
              <li>Apple Pay / Google Pay</li>
            </ul>
          </section>

          {/* §4 */}
          <section>
            <h2 className="text-primary mb-3 text-xl font-semibold">
              &sect;4 Lieferung
            </h2>
            <p>
              Die Lieferung erfolgt innerhalb Deutschlands. Die Lieferzeit
              betr&auml;gt in der Regel [X&ndash;Y] Werktage. Sollte ein
              Produkt nicht verf&uuml;gbar sein, informieren wir Sie
              unverz&uuml;glich und erstatten bereits geleistete Zahlungen
              zur&uuml;ck.
            </p>
            <p className="mt-2">
              Die Versandkosten betragen [Betrag] &euro; innerhalb Deutschlands.
              Ab einem Bestellwert von [Betrag] &euro; liefern wir
              versandkostenfrei.
            </p>
          </section>

          {/* §5 */}
          <section>
            <h2 className="text-primary mb-3 text-xl font-semibold">
              &sect;5 Eigentumsvorbehalt
            </h2>
            <p>
              Die gelieferte Ware bleibt bis zur vollst&auml;ndigen Bezahlung
              unser Eigentum.
            </p>
          </section>

          {/* §6 */}
          <section>
            <h2 className="text-primary mb-3 text-xl font-semibold">
              &sect;6 Gew&auml;hrleistung und Garantie
            </h2>
            <p>Es gelten die gesetzlichen Gew&auml;hrleistungsrechte.</p>
            <p className="mt-2">
              Zus&auml;tzlich gew&auml;hren wir auf alle Pfotenkissen-Produkte
              eine <strong>3-Jahres-Formgarantie</strong>. Diese garantiert,
              dass das Kissen seine ergonomische Form und St&uuml;tzkraft bei
              bestimmungsgem&auml;&szlig;em Gebrauch f&uuml;r mindestens drei
              Jahre beh&auml;lt. Die Garantie umfasst den kostenlosen Austausch
              oder die Reparatur des Produkts. N&auml;here Einzelheiten
              entnehmen Sie bitte den Garantiebedingungen, die Ihrer Lieferung
              beiliegen.
            </p>
          </section>

          {/* §7 */}
          <section>
            <h2 className="text-primary mb-3 text-xl font-semibold">
              &sect;7 Haftung
            </h2>
            <p>
              Wir haften unbeschr&auml;nkt f&uuml;r Vorsatz und grobe
              Fahrl&auml;ssigkeit. F&uuml;r leichte Fahrl&auml;ssigkeit haften
              wir nur bei Verletzung wesentlicher Vertragspflichten
              (Kardinalpflichten), und zwar begrenzt auf den vorhersehbaren,
              vertragstypischen Schaden.
            </p>
            <p className="mt-2">
              Die vorstehenden Haftungsbeschr&auml;nkungen gelten nicht bei
              Verletzung von Leben, K&ouml;rper und Gesundheit.
            </p>
          </section>

          {/* §8 */}
          <section>
            <h2 className="text-primary mb-3 text-xl font-semibold">
              &sect;8 Datenschutz
            </h2>
            <p>
              Informationen zur Verarbeitung Ihrer personenbezogenen Daten
              finden Sie in unserer{" "}
              <a
                href="/datenschutz"
                className="text-primary underline underline-offset-2 hover:opacity-70"
              >
                Datenschutzerkl&auml;rung
              </a>
              .
            </p>
          </section>

          {/* §9 */}
          <section>
            <h2 className="text-primary mb-3 text-xl font-semibold">
              &sect;9 Schlussbestimmungen
            </h2>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss
              des UN-Kaufrechts. Bei Verbrauchern gilt diese Rechtswahl nur
              insoweit, als nicht der durch zwingende Bestimmungen des Rechts
              des Staates des gew&ouml;hnlichen Aufenthaltes des Verbrauchers
              gew&auml;hrte Schutz entzogen wird.
            </p>
            <p className="mt-2">
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
              werden, bleibt die Wirksamkeit der &uuml;brigen Bestimmungen
              unber&uuml;hrt.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
