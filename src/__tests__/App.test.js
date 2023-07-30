import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // Fix the import statement
import App from "../components/App"; // Update the path based on your file structure

test('renders the Home component using the <Route path="/">', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(screen.queryByText(/Home Page/g)).toBeInTheDocument();
});

test('renders the Actors component using the <Route path="/actors">', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(screen.queryByText(/Actors Page/g)).toBeInTheDocument();
});

test('renders the Directors component using the <Route path="/directors">', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(screen.queryByText(/Directors Page/g)).toBeInTheDocument();
});

test('renders the Movies component using the <Route path="/movies">', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(screen.queryByText(/Movies Page/g)).toBeInTheDocument();
});
