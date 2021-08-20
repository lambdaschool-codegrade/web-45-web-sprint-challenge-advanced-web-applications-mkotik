import React from "react";
import MutationObserver from "mutationobserver-shim";

import {
  getAllByTestId,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Renders without errors", () => {
  render(<BubblePage />);
});

test("Renders appropriate number of colors passed in through mock", async () => {
  //Keep in mind that our service is called on mount for this component.
  render(<BubblePage />);
  const colors = await waitFor(() => screen.getAllByTestId("color"));
  expect(colors).toHaveLength(11);
});
