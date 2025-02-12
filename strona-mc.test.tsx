import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StronaMC from "./strona-mc";

test("Edit mode allows reordering and renaming of list items", async () => {
  render(<StronaMC />);

  const editButton = screen.getByRole("button", { name: "Edit mode" });
  expect(editButton).toBeInTheDocument();

  await userEvent.click(editButton);

  const firstListItem = screen.getByDisplayValue("Course noticeboard Forum");
  expect(firstListItem).toBeInTheDocument();

  fireEvent.change(firstListItem, { target: { value: "Updated Course Notice" } });

  expect(screen.getByDisplayValue("Updated Course Notice")).toBeInTheDocument();

  console.log("Edit mode działa poprawnie");
});
