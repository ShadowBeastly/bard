import Link from 'next/link';

const columns = [
  {
    title: 'Produkte',
    links: [
      { href: '/produkte/flachkissen', label: 'Flachkissen' },
      { href: '/produkte/randkissen', label: 'Randkissen' },
      { href: '/produkte/ersatzbezuege', label: 'Ersatzbezüge' },
    ],
  },
  {
    title: 'Service',
    links: [
      { href: '/groessenberater', label: 'Größenberater' },
      { href: '/ueber-uns', label: 'Über uns' },
      { href: '/kontakt', label: 'Kontakt' },
    ],
  },
  {
    title: 'Rechtliches',
    links: [
      { href: '/impressum', label: 'Impressum' },
      { href: '/datenschutz', label: 'Datenschutz' },
      { href: '/agb', label: 'AGB' },
      { href: '/widerruf', label: 'Widerruf' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <ellipse cx="8" cy="5.5" rx="2" ry="2.5" />
                <ellipse cx="16" cy="5.5" rx="2" ry="2.5" />
                <ellipse cx="4.5" cy="10" rx="2" ry="2.5" />
                <ellipse cx="19.5" cy="10" rx="2" ry="2.5" />
                <path d="M12 20c-4 0-7-3-7-6 0-2 1.5-3.5 3-4 1-.3 2.5-.5 4-.5s3 .2 4 .5c1.5.5 3 2 3 4 0 3-3 6-7 6z" />
              </svg>
              <span className="text-lg font-bold text-white">Pfotenkissen</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/50">
              Premium-Hundekissen, handgefertigt in Deutschland. Weil Ihr Vierbeiner nur das Beste verdient.
            </p>
          </div>

          {/* Navigation columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-accent">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider + Copyright */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-white/30">
            &copy; {year} Pfotenkissen. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
