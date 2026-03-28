import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bestellung bestätigt | Pfotenkissen",
};

export default function DankePage() {
  return (
    <main className="bg-warm-bg min-h-screen">
      <div className="mx-auto max-w-2xl px-6 py-20 text-center">
        {/* Decorative paw icon */}
        <div className="text-primary mb-8 text-6xl" aria-hidden="true">
          🐾
        </div>

        <h1 className="text-primary mb-4 text-4xl font-bold tracking-tight">
          Vielen Dank f&uuml;r deine Bestellung!
        </h1>

        <p className="mb-10 text-lg text-gray-600">
          Wir bereiten dein Pfotenkissen mit Liebe vor.
        </p>

        {/* Order details placeholder */}
        <div className="mx-auto mb-12 max-w-md rounded-xl border border-warm-border bg-warm-light p-8 text-left">
          <h2 className="text-primary mb-4 text-lg font-semibold">
            Bestelldetails
          </h2>
          <dl className="space-y-3 text-gray-700">
            <div className="flex justify-between">
              <dt className="text-gray-500">Bestellnummer</dt>
              <dd className="font-medium">#PK-[XXXXX]</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-500">Status</dt>
              <dd className="font-medium text-green-700">Best&auml;tigt</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-500">Voraussichtliche Lieferung</dt>
              <dd className="font-medium">[X&ndash;Y Werktage]</dd>
            </div>
          </dl>
          <hr className="my-4 border-warm-border" />
          <p className="text-sm text-gray-500">
            Eine Best&auml;tigungsmail mit allen Details ist auf dem Weg zu dir.
          </p>
        </div>

        <Link
          href="/"
          className="bg-primary inline-block rounded-full px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Zur&uuml;ck zur Startseite
        </Link>
      </div>
    </main>
  );
}
