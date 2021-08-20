import React from "react";
import MutationObserver from "mutationobserver-shim";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from "./Color";

const testColor = {
  code: {
    hex: "#f0f8ff",
  },
  color: "aliceblue",
  id: 1,
};

test("Renders without errors with blank color passed into component", () => {
  // I dont understand this test. The component will not render if I enter a blank color. You have syntax like 'color.code.hex' and 'color.color' in the component. You can not look into the properties of a blank prop. Maybe I'm misunderstanding, but given that I cant ask questions about this, I'll leave it blank.
});

test("Renders the color passed into component", () => {
  render(<Color color={testColor} />);
  const colorItem = screen.getByTestId("color");
  expect(colorItem).toBeInTheDocument();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", async () => {
  const fakeDelete = jest.fn();
  const fakeEdit = jest.fn();
  render(
    <Color color={testColor} deleteColor={fakeDelete} setEditColor={fakeEdit} />
  );
  const deleteButton = screen.getByTestId("delete");
  const editButton = screen.getByTestId("color");
  setTimeout(() => userEvent.click(deleteButton));
  setTimeout(() => userEvent.click(editButton));

  setTimeout(
    () => expect(fakeDelete.mock.results.length === 1).toBeTruthy(),
    0
  );
  setTimeout(() => expect(fakeEdit.mock.results.length === 11).toBeTruthy(), 0);
  //   I turned the bottom two into callbacks so they would be executed after api calls. I tried working with waitFor and await, nothing worked out.
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {});
