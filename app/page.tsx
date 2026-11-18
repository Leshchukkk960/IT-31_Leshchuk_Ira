
type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function Home() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=8",
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Помилка завантаження публікацій");
  }

  const posts: Post[] = await res.json();

  return (
    <main>
      <h1>Новини та публікації</h1>

      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </main>
  );
}
