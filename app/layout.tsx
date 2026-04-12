import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WAFloat from "@/components/WAFloat";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "MycoFarm — Jamur Tiram Premium Malang",
  description:
    "Supplier & Budidaya Jamur Tiram Segar Premium. Langsung dari kebun ke meja makan Anda. Organik, berkualitas, dipanen setiap hari.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // data-scroll-behavior="smooth" tells Next.js to allow smooth scroll on <html>
    <html lang="id" data-theme="forest" data-scroll-behavior="smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Cursor />
        <WAFloat />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
