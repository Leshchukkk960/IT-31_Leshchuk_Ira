
"use client";

import { useActionState } from "react";
import { submitRequest, type FormState } from "../actions";

const initialState: FormState = {
  success: false,
  message: "",
  errors: {},
};

export default function RequestForm() {
  const [state, formAction, isPending] = useActionState(
    submitRequest,
    initialState
  );

  return (
    <form action={formAction} noValidate>
      <div>
        <label htmlFor="fullName">ПІБ студента:</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Введіть ваше ім'я"
        />
        {state.errors.fullName && (
          <p>{state.errors.fullName[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
        />
        {state.errors.email && (
          <p>{state.errors.email[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="topic">Тема консультації:</label>
        <select id="topic" name="topic" defaultValue="">
          <option value="" disabled>Оберіть тему</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="Next.js">Next.js</option>
        </select>
        {state.errors.topic && (
          <p>{state.errors.topic[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="details">Запитання до викладача:</label>
        <textarea
          id="details"
          name="details"
          placeholder="Напишіть ваше запитання"
        />
        {state.errors.details && (
          <p>{state.errors.details[0]}</p>
        )}
      </div>

      <button type="submit" disabled={isPending}>
        {isPending ? "Надсилання..." : "Надіслати"}
      </button>

      <p aria-live="polite">{state.message}</p>
    </form>
  );
}
