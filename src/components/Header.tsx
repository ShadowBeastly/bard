'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { href: '/produkte', label: 'Produkte' },
  { href: '/groessenberater', label: 'Größenberater' },
  { href: '/ueber-uns', label: 'Über uns' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, itemCount } = useCart();

  return (
    <header className="sticky top-0 z-30 border-b border-warm-border bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* Paw icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-accent transition-transform group-hover:scale-110"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <ellipse cx="8" cy="5.5" rx="2" ry="2.5" />
            <ellipse cx="16" cy="5.5" rx="2" ry="2.5" />
            <ellipse cx="4.5" cy="10" rx="2" ry="2.5" />
            <ellipse cx="19.5" cy="10" rx="2" ry="2.5" />
            <path d="M12 20c-4 0-7-3-7-6 0-2 1.5-3.5 3-4 1-.3 2.5-.5 4-.5s3 .2 4 .5c1.5.5 3 2 3 4 0 3-3 6-7 6z" />
          </svg>
          <span className="text-xl font-bold tracking-tight text-primary">
            Pfotenkissen
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary/70 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: Cart + Mobile toggle */}
        <div className="flex items-center gap-3">
          {/* Cart button */}
          <button
            onClick={toggleCart}
            className="relative rounded-full p-2 text-primary/70 transition-colors hover:bg-warm-bg hover:text-accent"
            aria-label="Warenkorb öffnen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
                {itemCount > 99 ? '99+' : itemCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-primary/70 transition-colors hover:bg-warm-bg md:hidden"
            aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-warm-border bg-white px-4 pb-4 pt-2 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-primary/70 transition-colors hover:bg-warm-bg hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
