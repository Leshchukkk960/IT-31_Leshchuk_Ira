
async function getProducts() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return [
    "Смартфони",
    "Ноутбуки",
  ];
}

export default async function Catalog() {
  const products = await getProducts();

  return (
    <main>
      <h1>Каталог товарів</h1>
      <p>Оберіть категорію техніки:</p>
      <ul>
        {products.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </main>
  );
}
