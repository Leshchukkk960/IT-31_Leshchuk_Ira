"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>Сталася помилка!</h2>
      <p>Не вдалося завантажити завдання.</p>
      <button onClick={() => reset()}>
        Спробувати ще раз
      </button>
    </main>
  );
}