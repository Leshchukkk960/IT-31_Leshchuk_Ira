
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Магазин техніки",
  description: "Інтернет-магазин сучасної техніки",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <header>
          <h1>TECH STORE</h1>
          <nav>
            <Link href="/">Головна</Link>
            <Link href="/catalog">Каталог</Link>
            <Link href="/catalog/smartphones">Смартфони</Link>
            <Link href="/catalog/laptops">Ноутбуки</Link>
            <Link href="/contacts">Контакти</Link>
          </nav>
        </header>

        <div className="container">{children}</div>

        <footer>
          <p>© 2026 TECH STORE. Усі права захищені.</p>
        </footer>
      </body>
    </html>
  );
}
