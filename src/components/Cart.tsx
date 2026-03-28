'use client';

import { useCart } from '@/context/CartContext';

const variantLabel: Record<string, string> = {
  flat: 'Flachkissen',
  raised: 'Randkissen',
};

export default function Cart() {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, total } = useCart();

  return (
    <>
      {/* Overlay backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={toggleCart}
          aria-hidden="true"
        />
      )}

      {/* Slide-in sidebar */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Warenkorb"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-warm-border px-6 py-5">
          <h2 className="text-lg font-semibold text-primary">Warenkorb</h2>
          <button
            onClick={toggleCart}
            className="rounded-full p-2 text-primary/60 transition-colors hover:bg-warm-bg hover:text-primary"
            aria-label="Warenkorb schließen"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-primary/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mb-4 h-16 w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <p className="text-sm">Ihr Warenkorb ist leer.</p>
            </div>
          ) : (
            <ul className="divide-y divide-warm-border">
              {items.map((item) => (
                <li
                  key={`${item.productId}-${item.variant}-${item.size}`}
                  className="flex gap-4 py-5"
                >
                  {/* Item thumbnail placeholder */}
                  <div className="h-20 w-20 flex-shrink-0 rounded-lg bg-warm-bg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary/20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  {/* Item details */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-primary">{item.name}</h3>
                      <p className="mt-0.5 text-xs text-primary/50">
                        {variantLabel[item.variant] ?? item.variant} &middot; {item.size}
                      </p>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      {/* Quantity controls */}
                      <div className="flex items-center rounded-lg border border-warm-border">
                        <button
                          onClick={() =>
                            updateQuantity(item.productId, item.variant, item.size, item.quantity - 1)
                          }
                          className="px-2.5 py-1 text-sm text-primary/60 transition-colors hover:text-primary"
                          aria-label="Menge verringern"
                        >
                          &minus;
                        </button>
                        <span className="min-w-[2rem] text-center text-sm font-medium text-primary">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.productId, item.variant, item.size, item.quantity + 1)
                          }
                          className="px-2.5 py-1 text-sm text-primary/60 transition-colors hover:text-primary"
                          aria-label="Menge erhöhen"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <span className="text-sm font-semibold text-primary">
                        {(item.price * item.quantity).toFixed(2)}&nbsp;&euro;
                      </span>
                    </div>
                  </div>

                  {/* Remove button */}
                  <button
                    onClick={() => removeItem(item.productId, item.variant, item.size)}
                    className="self-start rounded p-1 text-primary/30 transition-colors hover:text-red-500"
                    aria-label={`${item.name} entfernen`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer with total and checkout */}
        {items.length > 0 && (
          <div className="border-t border-warm-border px-6 py-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-primary/60">Zwischensumme</span>
              <span className="text-lg font-bold text-primary">{total.toFixed(2)}&nbsp;&euro;</span>
            </div>
            <p className="mb-4 text-xs text-primary/40">
              Versandkosten werden an der Kasse berechnet.
            </p>
            <a
              href="/checkout"
              className="block w-full rounded-lg bg-accent py-3.5 text-center text-sm font-semibold text-white shadow-md transition-all hover:bg-accent/90 hover:shadow-lg"
            >
              Zur Kasse
            </a>
          </div>
        )}
      </aside>
    </>
  );
}
