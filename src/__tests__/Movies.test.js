import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Movies from "../components/Movies";
import { movies } from "../data";

test('renders each movie\'s title and time', () => {
  render(<Movies />);
  const moviesData = [/* Array of movie objects with "title" and "time" properties */];

  for (const movie of moviesData) {
    expect(
      screen.queryByText(movie.title, { exact: false })
    ).toBeInTheDocument();
    expect(
      screen.queryByText(movie.time.toString(), { exact: false })
    ).toBeInTheDocument();
  }
});
