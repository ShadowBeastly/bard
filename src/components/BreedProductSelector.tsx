"use client";

import { useState } from "react";
import { products, getPrice, getSize } from "@/data/products";
import { useCart } from "@/context/CartContext";

type BreedProductSelectorProps = {
  breedName: string;
  recommendedSize: string;
  breedSlug: string;
};

export default function BreedProductSelector({
  breedName,
  recommendedSize,
}: BreedProductSelectorProps) {
  // Parse recommended size: "XL–XXL" → "XL"
  const primarySize = recommendedSize.split(/[–-]/)[0].trim();

  const [selectedVariant, setSelectedVariant] = useState<"flat" | "raised">(
    "flat"
  );
  const { addItem } = useCart();

  const price = getPrice(selectedVariant, primarySize);
  const size = getSize(primarySize);
  const product = products.find((p) => p.variant === selectedVariant);

  function handleAddToCart() {
    if (!product) return;
    addItem({
      productId: product.id,
      variant: selectedVariant,
      size: primarySize,
      quantity: 1,
      name: `${product.variantLabel} ${primarySize} – ${breedName}`,
      price,
    });
  }

  return (
    <div className="rounded-2xl border border-warm-border bg-white p-6 shadow-sm sm:p-8">
      <h3 className="mb-6 font-sans text-xl font-bold text-primary">
        Kissen wählen
      </h3>

      {/* Variant Toggle */}
      <div className="mb-6 flex overflow-hidden rounded-lg border border-warm-border">
        <button
          onClick={() => setSelectedVariant("flat")}
          className={`flex-1 px-4 py-3 text-center font-sans text-sm font-semibold transition ${
            selectedVariant === "flat"
              ? "bg-primary text-white"
              : "bg-white text-primary hover:bg-warm-bg"
          }`}
        >
          Flachkissen
        </button>
        <button
          onClick={() => setSelectedVariant("raised")}
          className={`flex-1 px-4 py-3 text-center font-sans text-sm font-semibold transition ${
            selectedVariant === "raised"
              ? "bg-primary text-white"
              : "bg-white text-primary hover:bg-warm-bg"
          }`}
        >
          Randkissen
        </button>
      </div>

      {/* Product Info */}
      {product && (
        <p className="mb-4 text-sm leading-relaxed text-primary/70">
          {product.description}
        </p>
      )}

      {/* Size & Price */}
      <div className="mb-4 flex items-end justify-between">
        <div>
          <p className="text-sm text-primary/60">
            Empfohlene Größe:{" "}
            <span className="font-semibold text-primary">{primarySize}</span>
          </p>
          {size && (
            <p className="text-xs text-primary/50">
              {size.dimensions} / {size.weightRange}
            </p>
          )}
        </div>
        <p className="text-3xl font-bold text-primary">
          {price.toFixed(2).replace(".", ",")}{" "}
          <span className="text-base font-normal">EUR</span>
        </p>
      </div>

      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
          />
        </svg>
        Inklusive Gratis-Ersatzbezug
      </div>

      {/* CTA */}
      <button
        onClick={handleAddToCart}
        className="w-full rounded-lg bg-accent px-8 py-4 font-sans text-lg font-semibold text-white transition hover:bg-accent/90"
      >
        Starterpaket bestellen
      </button>
    </div>
  );
}
