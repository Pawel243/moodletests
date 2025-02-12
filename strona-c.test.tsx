import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import StronaC from "./strona-c";
import StronaMC from "./strona-mc";

test("navigates to strona-mc when Mindful Course Creation is clicked", async () => {
  render(
    <MemoryRouter initialEntries={["/strona-c"]}>
      <Routes>
        <Route path="/strona-c" element={<StronaC />} />
        <Route path="/strona-mc" element={<StronaMC />} />
      </Routes>
    </MemoryRouter>
  );

  const mindfulLink = screen.getByText("Mindful Course Creation");
  expect(mindfulLink).toBeInTheDocument();

  await userEvent.click(mindfulLink);

  expect(screen.getByText("Mindful Course Creation")).toBeInTheDocument();
});
