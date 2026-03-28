'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { sizes, getPrice, type Product } from '@/data/products';

interface ProductConfiguratorProps {
  product: Product;
}

export default function ProductConfigurator({ product }: ProductConfiguratorProps) {
  const [selectedSize, setSelectedSize] = useState('XL');
  const { addItem } = useCart();

  const currentSize = sizes.find((s) => s.label === selectedSize)!;
  const price = getPrice(product.variant, selectedSize);

  function handleAddToCart() {
    addItem({
      productId: product.id,
      variant: product.variant,
      size: selectedSize,
      quantity: 1,
      name: `${product.name} (${selectedSize})`,
      price,
    });
  }

  return (
    <div className="bg-white border border-warm-border rounded-xl p-6 sticky top-24">
      <h2 className="text-xl font-bold text-primary mb-1">{product.name}</h2>
      <p className="text-sm text-primary/60 mb-5">Starterpaket inkl. Gratis-Ersatzbezug</p>

      {/* Size selector */}
      <label className="block text-sm font-semibold text-primary mb-2">
        Gr\u00f6\u00dfe w\u00e4hlen:
      </label>
      <div className="flex gap-2 mb-4">
        {sizes.map((size) => (
          <button
            key={size.label}
            onClick={() => setSelectedSize(size.label)}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold border transition-colors ${
              selectedSize === size.label
                ? 'bg-primary text-white border-primary'
                : 'bg-warm-light text-primary border-warm-border hover:border-primary/40'
            }`}
          >
            {size.label}
          </button>
        ))}
      </div>

      {/* Selected size info */}
      <div className="bg-warm-light rounded-lg p-3 mb-5 text-sm">
        <p className="text-primary/70">
          <span className="font-medium text-primary">Ma\u00dfe:</span> {currentSize.dimensions}
        </p>
        <p className="text-primary/70">
          <span className="font-medium text-primary">Empfohlen f\u00fcr:</span>{' '}
          {currentSize.weightRange}
        </p>
      </div>

      {/* Price */}
      <div className="mb-5">
        <span className="text-3xl font-bold text-primary">
          {price.toFixed(2).replace('.', ',')} \u20ac
        </span>
        <span className="text-sm text-primary/50 ml-2">inkl. MwSt.</span>
      </div>

      {/* Free cover badge */}
      <div className="bg-accent/10 text-accent text-sm font-medium rounded-lg px-3 py-2 mb-5 inline-block">
        Inklusive Gratis-Ersatzbezug
      </div>

      {/* CTA */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-accent text-white font-semibold py-3.5 rounded-lg hover:bg-accent/90 transition-colors text-lg"
      >
        Starterpaket bestellen
      </button>

      <p className="text-xs text-primary/40 text-center mt-3">
        Kostenloser Versand &middot; 30 Tage R\u00fcckgaberecht
      </p>
    </div>
  );
}
