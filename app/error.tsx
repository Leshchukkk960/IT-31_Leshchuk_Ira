
"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <main>
      <h1>Сталася помилка</h1>
      <p>Не вдалося отримати дані.</p>
      <button onClick={() => reset()}>
        Спробувати ще раз
      </button>
    </main>
  );
}
