
import InteractiveList from "./InteractiveList";

const books = [
  { id: 1, title: "Гаррі Поттер", author: "Джоан Роулінг", genre: "Фантастика" },
  { id: 2, title: "Володар перснів", author: "Джон Толкін", genre: "Фантастика" },
  { id: 3, title: "Маленький принц", author: "Антуан де Сент-Екзюпері", genre: "Пригоди" },
  { id: 4, title: "1984", author: "Джордж Орвелл", genre: "Фантастика" },
  { id: 5, title: "Тигролови", author: "Іван Багряний", genre: "Пригоди" },
  { id: 6, title: "Кобзар", author: "Тарас Шевченко", genre: "Поезія" },
];

export default function PracticePage() {
  return (
    <main>
      <h1>Електронна бібліотека</h1>
      <p>Загальна кількість книг: {books.length}</p>
      <InteractiveList items={books} />
    </main>
  );
}
