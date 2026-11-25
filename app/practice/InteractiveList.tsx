
"use client";

import { useState } from "react";

type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
};

export default function InteractiveList({ items }: { items: Book[] }) {
  const [query, setQuery] = useState("");
  const [onlyFantasy, setOnlyFantasy] = useState(false);

  const filteredBooks = items.filter((book) => {
    const matchesTitle = book.title.toLowerCase().includes(query.toLowerCase());
    const matchesGenre = !onlyFantasy || book.genre === "Фантастика";

    return matchesTitle && matchesGenre;
  });

  return (
    <div>
      <h2>Список книг</h2>

      <input
        type="text"
        placeholder="Пошук книги за назвою..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <p>
        <label>
          <input
            type="checkbox"
            checked={onlyFantasy}
            onChange={(e) => setOnlyFantasy(e.target.checked)}
          />
          Лише фантастика
        </label>
      </p>

      <p>Знайдено книг: {filteredBooks.length}</p>

      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>Автор: {book.author}</p>
            <p>Жанр: {book.genre}</p>
          </div>
        ))
      ) : (
        <p>Нічого не знайдено</p>
      )}
    </div>
  );
}
