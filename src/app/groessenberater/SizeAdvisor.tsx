"use client";

import { useState } from "react";
import Link from "next/link";
import { breeds } from "@/data/breeds";
import { sizes } from "@/data/products";

export default function SizeAdvisor() {
  const [selectedBreed, setSelectedBreed] = useState("");
  const [weight, setWeight] = useState("");

  const breed = breeds.find((b) => b.slug === selectedBreed);

  function getSizeByWeight(kg: number): string {
    if (kg <= 15) return "M";
    if (kg <= 25) return "L";
    if (kg <= 40) return "XL";
    if (kg <= 60) return "XXL";
    return "XXXL";
  }

  const recommendedSizeLabel = breed
    ? breed.recommendedSize.split("–")[0]
    : weight
      ? getSizeByWeight(Number(weight))
      : null;

  const recommendedSize = recommendedSizeLabel
    ? sizes.find((s) => s.label === recommendedSizeLabel)
    : null;

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-border">
        <label className="block text-sm font-semibold text-primary mb-2">
          Wähle die Rasse deines Hundes
        </label>
        <select
          value={selectedBreed}
          onChange={(e) => {
            setSelectedBreed(e.target.value);
            setWeight("");
          }}
          className="w-full border border-warm-border rounded-lg px-4 py-3 text-primary bg-warm-light focus:outline-none focus:ring-2 focus:ring-accent mb-6"
        >
          <option value="">– Rasse wählen –</option>
          {breeds.map((b) => (
            <option key={b.slug} value={b.slug}>
              {b.name}
            </option>
          ))}
          <option value="andere">Andere Rasse</option>
        </select>

        {selectedBreed === "andere" && (
          <div className="mb-6">
            <label className="block text-sm font-semibold text-primary mb-2">
              Gewicht deines Hundes (kg)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="z.B. 35"
              min="1"
              max="120"
              className="w-full border border-warm-border rounded-lg px-4 py-3 text-primary bg-warm-light focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        )}

        {recommendedSize && (
          <div className="bg-warm-bg rounded-xl p-6 mt-4">
            <div className="text-center">
              <p className="text-sm text-primary/60 mb-1">Unsere Empfehlung</p>
              <p className="text-4xl font-extrabold text-primary mb-2">
                Größe {recommendedSize.label}
              </p>
              <p className="text-lg text-primary/80 mb-1">
                {recommendedSize.dimensions}
              </p>
              <p className="text-sm text-primary/60 mb-4">
                Für Hunde {recommendedSize.weightRange}
              </p>
              <p className="text-sm text-primary/60 mb-6">
                Ab €{recommendedSize.priceFlat} (Flachkissen) / €
                {recommendedSize.priceRaised} (Randkissen)
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/produkt/flachkissen"
                  className="inline-block bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Flachkissen ansehen
                </Link>
                <Link
                  href="/produkt/randkissen"
                  className="inline-block bg-primary hover:bg-primary-light text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Randkissen ansehen
                </Link>
              </div>

              {breed && (
                <Link
                  href={`/rasse/${breed.slug}`}
                  className="inline-block mt-4 text-accent hover:text-accent-dark text-sm font-medium underline"
                >
                  Mehr Infos für {breed.name}
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
