import React from "react";
import { render, screen } from "@testing-library/react";
import MainNavigation from "./MainNavigation";

test("Main Navigation", () => {
  render(<MainNavigation />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
