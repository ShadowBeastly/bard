import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sizes, getProduct, getPrice } from "@/data/products";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ProductConfigurator from "@/components/ProductConfigurator";

export function generateStaticParams() {
  return [{ slug: "flachkissen" }, { slug: "randkissen" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const minPrice = getPrice(product.variant, "M");
  return {
    title: `${product.name} \u2013 Premium-Hundekissen ab ${minPrice.toFixed(2).replace(".", ",")} \u20ac | Pfotenkissen`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const minPrice = getPrice(product.variant, "M");
  const maxPrice = getPrice(product.variant, "XXXL");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Pfotenkissen ${product.name}`,
    description: product.description,
    brand: { "@type": "Brand", name: "Pfotenkissen" },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: minPrice.toFixed(2),
      highPrice: maxPrice.toFixed(2),
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      offerCount: sizes.length,
    },
  };

  return (
    <main className="bg-warm-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="max-w-5xl mx-auto px-4 py-12">
        {/* Image Gallery */}
        <div className="grid grid-cols-2 gap-3 mb-10">
          {product.images.map((img, i) => (
            <ImagePlaceholder
              key={i}
              label={img}
              aspectRatio={i === 0 ? "aspect-square" : "aspect-video"}
              className="w-full"
            />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Info */}
          <div>
            <h1 className="text-3xl font-bold text-primary mb-3">
              {product.name}
            </h1>
            <p className="text-primary/70 mb-6">{product.description}</p>

            {/* Features */}
            <ul className="space-y-2 mb-8">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-primary/80"
                >
                  <span className="text-accent mt-0.5">&#10003;</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Starterpaket enth\u00e4lt */}
            <div className="bg-warm-light border border-warm-border rounded-lg p-5 mb-8">
              <h3 className="font-semibold text-primary mb-3">
                Starterpaket enth\u00e4lt:
              </h3>
              <ul className="space-y-1">
                {product.includes.map((item) => (
                  <li key={item} className="text-primary/70 flex items-start gap-2">
                    <span className="text-accent">&#8226;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 3-Jahres-Garantie Badge */}
            <div className="flex items-center gap-3 bg-accent/10 border border-accent/20 rounded-lg p-4 mb-8">
              <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">3J</span>
              </div>
              <div>
                <p className="font-semibold text-primary">3-Jahres-Formgarantie</p>
                <p className="text-sm text-primary/60">
                  Sinkt das Kissen ein, bekommst du ein neues. Ohne Diskussion.
                </p>
              </div>
            </div>

            {/* Size advisor link */}
            <Link
              href="/groessenberater"
              className="inline-flex items-center gap-1 text-accent hover:text-accent/80 font-medium transition-colors mb-8"
            >
              Welche Gr\u00f6\u00dfe braucht mein Hund? &rarr;
            </Link>
          </div>

          {/* Right: Configurator */}
          <div>
            <ProductConfigurator product={product} />
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 max-w-2xl mx-auto space-y-3">
          <details className="group border border-warm-border rounded-lg">
            <summary className="cursor-pointer px-5 py-4 font-semibold text-primary flex items-center justify-between">
              Materialdetails
              <span className="text-accent transition-transform group-open:rotate-180">&#9660;</span>
            </summary>
            <div className="px-5 pb-5 text-primary/70 space-y-2">
              <p>
                <strong>F\u00fcllung:</strong> Premium-Polyester-Hohlfaser, formstabil und
                r\u00fcckfedernd. Beh\u00e4lt auch nach Jahren t\u00e4glicher Nutzung ihre Form.
              </p>
              <p>
                <strong>Bezug:</strong> Robuster Mischgewebe-Stoff (65% Polyester,
                35% Baumwolle), weich und kratzfest. \u00d6ko-Tex 100 zertifiziert.
              </p>
              <p>
                <strong>Unterseite:</strong> Rutschfeste Beschichtung f\u00fcr sicheren
                Halt auf allen B\u00f6den.
              </p>
            </div>
          </details>

          <details className="group border border-warm-border rounded-lg">
            <summary className="cursor-pointer px-5 py-4 font-semibold text-primary flex items-center justify-between">
              Pflegehinweise
              <span className="text-accent transition-transform group-open:rotate-180">&#9660;</span>
            </summary>
            <div className="px-5 pb-5 text-primary/70 space-y-2">
              <p>
                Der Bezug ist abnehmbar und bei <strong>40\u00b0C waschbar</strong>.
                Einfach den Rei\u00dfverschluss \u00f6ffnen und den Bezug in die
                Waschmaschine geben.
              </p>
              <p>
                <strong>Nicht</strong> in den Trockner geben &ndash; an der Luft
                trocknen lassen. Die F\u00fcllung kann bei Bedarf punktuell mit einem
                feuchten Tuch gereinigt werden.
              </p>
            </div>
          </details>

          <details className="group border border-warm-border rounded-lg">
            <summary className="cursor-pointer px-5 py-4 font-semibold text-primary flex items-center justify-between">
              Lieferung
              <span className="text-accent transition-transform group-open:rotate-180">&#9660;</span>
            </summary>
            <div className="px-5 pb-5 text-primary/70 space-y-2">
              <p>
                <strong>Versand:</strong> Kostenloser Versand innerhalb Deutschlands.
                Lieferzeit 3&ndash;5 Werktage.
              </p>
              <p>
                <strong>Verpackung:</strong> Vakuumverpackt f\u00fcr einfachen Transport.
                Nach dem Auspacken erreicht das Kissen innerhalb von 24 Stunden
                seine volle Form.
              </p>
              <p>
                <strong>R\u00fcckgabe:</strong> 30 Tage Zufriedenheitsgarantie. Wenn dein
                Hund nicht \u00fcberzeugt ist, nehmen wir das Kissen zur\u00fcck.
              </p>
            </div>
          </details>
        </div>
      </section>
    </main>
  );
}
