
import Link from "next/link";

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2>Категорії товарів</h2>

      <nav className="catalog-nav">
        <Link href="/catalog">Усі товари</Link>
        <Link href="/catalog/smartphones">Смартфони</Link>
        <Link href="/catalog/laptops">Ноутбуки</Link>
      </nav>

      <div>{children}</div>
    </section>
  );
}
