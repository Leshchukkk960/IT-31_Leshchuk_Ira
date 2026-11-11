type Todo = {
id: number;
title: string;
completed: boolean;
};

export default async function Home() {
const res = await fetch(
"https://jsonplaceholder.typicode.com/todos?_limit=10",

);
{ next: { revalidate: 60 } }{ next: { revalidate: 60 } }
if (!res.ok) {
throw new Error("Помилка завантаження завдань");
}

const todos: Todo[] = await res.json();

return (
<main style={{ padding: "30px", fontFamily: "Arial" }}>
<h1>Список завдань</h1>

  {todos.map((todo) => (
    <article key={todo.id} style={{ marginBottom: "15px" }}>
      <h3>{todo.id}. {todo.title}</h3>
      <p>
        Статус: {todo.completed ? "Виконано" : "Не виконано"}
      </p>
    </article>
  ))}
</main>
);
}