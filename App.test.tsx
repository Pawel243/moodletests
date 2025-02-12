import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("navigates to the next page after correct login", async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  fireEvent.change(screen.getByLabelText(/Użytkownik/i), {
    target: { value: "teacher" },
  });

  fireEvent.change(screen.getByLabelText(/Hasło/i), {
    target: { value: "moodle25" },
  });

  fireEvent.click(screen.getByText(/Zaloguj się/i));

  const welcomeText = await screen.findByText(/Mount Orange School/i);
  expect(welcomeText).toBeInTheDocument();
});
