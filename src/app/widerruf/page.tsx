import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Widerrufsbelehrung | Pfotenkissen",
};

export default function WiderrufPage() {
  return (
    <main className="bg-warm-bg min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-primary mb-12 text-4xl font-bold tracking-tight">
          Widerrufsbelehrung
        </h1>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          {/* Widerrufsrecht */}
          <section>
            <h2 className="text-primary mb-3 text-xl font-semibold">
              Widerrufsrecht
            </h2>
            <p>
              Sie haben das Recht, binnen <strong>vierzehn Tagen</strong> ohne
              Angabe von Gr&uuml;nden diesen Vertrag zu widerrufen.
            </p>
            <p className="mt-2">
              Die Widerrufsfrist betr&auml;gt vierzehn Tage ab dem Tag, an dem
              Sie oder ein von Ihnen benannter Dritter, der nicht der
              Bef&ouml;rderer ist, die Waren in Besitz genommen haben bzw. hat.
            </p>
            <p className="mt-2">
              Um Ihr Widerrufsrecht auszu&uuml;ben, m&uuml;ssen Sie uns
            </p>
            <p className="mt-2 rounded-lg border border-warm-border bg-warm-light p-4">
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
            <p className="mt-2">
              mittels einer eindeutigen Erkl&auml;rung (z.&thinsp;B. ein mit der
              Post versandter Brief oder eine E-Mail) &uuml;ber Ihren
              Entschluss, diesen Vertrag zu widerrufen, informieren. Sie
              k&ouml;nnen daf&uuml;r das beigef&uuml;gte
              Muster-Widerrufsformular verwenden, das jedoch nicht
              vorgeschrieben ist.
            </p>
            <p className="mt-2">
              Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die
              Mitteilung &uuml;ber die Aus&uuml;bung des Widerrufsrechts vor
              Ablauf der Widerrufsfrist absenden.
            </p>
          </section>

          {/* Folgen des Widerrufs */}
          <section>
            <h2 className="text-primary mb-3 text-xl font-semibold">
              Folgen des Widerrufs
            </h2>
            <p>
              Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle
              Zahlungen, die wir von Ihnen erhalten haben, einschlie&szlig;lich
              der Lieferkosten (mit Ausnahme der zus&auml;tzlichen Kosten, die
              sich daraus ergeben, dass Sie eine andere Art der Lieferung als die
              von uns angebotene, g&uuml;nstigste Standardlieferung
              gew&auml;hlt haben), unverz&uuml;glich und sp&auml;testens binnen
              vierzehn Tagen ab dem Tag zur&uuml;ckzuzahlen, an dem die
              Mitteilung &uuml;ber Ihren Widerruf dieses Vertrags bei uns
              eingegangen ist.
            </p>
            <p className="mt-2">
              F&uuml;r diese R&uuml;ckzahlung verwenden wir dasselbe
              Zahlungsmittel, das Sie bei der urspr&uuml;nglichen Transaktion
              eingesetzt haben, es sei denn, mit Ihnen wurde ausdr&uuml;cklich
              etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser
              R&uuml;ckzahlung Entgelte berechnet.
            </p>
            <p className="mt-2">
              Wir k&ouml;nnen die R&uuml;ckzahlung verweigern, bis wir die
              Waren zur&uuml;ckerhalten haben oder bis Sie den Nachweis erbracht
              haben, dass Sie die Waren zur&uuml;ckgesandt haben, je nachdem,
              welches der fr&uuml;here Zeitpunkt ist.
            </p>
          </section>

          {/* Rücksendung */}
          <section>
            <h2 className="text-primary mb-3 text-xl font-semibold">
              R&uuml;cksendung
            </h2>
            <p>
              Sie haben die Waren unverz&uuml;glich und in jedem Fall
              sp&auml;testens binnen vierzehn Tagen ab dem Tag, an dem Sie uns
              &uuml;ber den Widerruf dieses Vertrags unterrichten, an uns
              zur&uuml;ckzusenden oder zu &uuml;bergeben. Die Frist ist gewahrt,
              wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen
              absenden.
            </p>
            <p className="mt-2">
              Sie tragen die unmittelbaren Kosten der R&uuml;cksendung der
              Waren.
            </p>
            <p className="mt-2">
              Sie m&uuml;ssen f&uuml;r einen etwaigen Wertverlust der Waren nur
              aufkommen, wenn dieser Wertverlust auf einen zur Pr&uuml;fung der
              Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht
              notwendigen Umgang mit ihnen zur&uuml;ckzuf&uuml;hren ist.
            </p>
          </section>

          {/* Muster-Widerrufsformular */}
          <section>
            <h2 className="text-primary mb-3 text-xl font-semibold">
              Muster-Widerrufsformular
            </h2>
            <p className="mb-4">
              Wenn Sie den Vertrag widerrufen wollen, k&ouml;nnen Sie dieses
              Formular ausf&uuml;llen und zur&uuml;cksenden:
            </p>
            <div className="rounded-lg border border-warm-border bg-warm-light p-6 space-y-3">
              <p>
                An:
                <br />
                [Firmenname]
                <br />
                [Stra&szlig;e Nr.]
                <br />
                [PLZ Ort]
                <br />
                [E-Mail-Adresse]
              </p>
              <p>
                Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*)
                abgeschlossenen Vertrag &uuml;ber den Kauf der folgenden Waren
                (*) / die Erbringung der folgenden Dienstleistung (*)
              </p>
              <p>Bestellt am (*) / erhalten am (*):</p>
              <p>Name des/der Verbraucher(s):</p>
              <p>Anschrift des/der Verbraucher(s):</p>
              <p>
                Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf
                Papier):
              </p>
              <p>Datum:</p>
              <p className="text-sm text-gray-500 mt-4">
                (*) Unzutreffendes streichen.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
