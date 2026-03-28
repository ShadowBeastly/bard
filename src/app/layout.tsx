import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

export const metadata: Metadata = {
  title: {
    default:
      "Pfotenkissen – Premium-Hundekissen für große Rassen | Formstabil. Waschbar. Garantiert.",
    template: "%s | Pfotenkissen",
  },
  description:
    "Premium-Hundekissen für große und sehr große Hunderassen. Formstabil, waschbarer Bezug, Gratis-Ersatzbezug & 3-Jahres-Garantie. Jetzt Starterpaket bestellen.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Pfotenkissen",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="font-sans antialiased bg-warm-bg text-primary">
        <CartProvider>
          <Header />
          <Cart />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
