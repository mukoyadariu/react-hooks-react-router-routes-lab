import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Directors from "../components/Directors";
import { directors } from "../data";

test('renders "Directors Page" inside of a <h1 />', () => {
  render(<Directors />);
  const h1 = screen.queryByText(/Directors Page/g);
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test('renders each director\'s name', () => {
  render(<Directors />);
  const directorsData = [/* Array of director objects with "name" property */];

  for (const director of directorsData) {
    expect(
      screen.queryByText(director.name, { exact: false })
    ).toBeInTheDocument();
  }
});

test('renders a <li /> for each movie', () => {
  render(<Directors />);
  const directorsData = [/* Array of director objects with "movies" property */];

  for (const director of directorsData) {
    for (const movie of director.movies) {
      expect(screen.queryByText(movie, { exact: false })).toBeInTheDocument();
      expect(screen.queryByText(movie, { exact: false }).tagName).toBe("LI");
    }
  }
});
