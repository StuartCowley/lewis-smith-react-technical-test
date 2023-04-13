import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  it("renders correctly", () => {
    const results = [];
    const { asFragment } = render(<SearchResults results={results} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly with results", () => {
    const results = [
      "https:/example.com/image1.jpg",
      "https:/example.com/image2.jpg",
      "https:/example.com/image3.jpg",
    ];

    const { asFragment } = render(<SearchResults results={results} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders no results message when there are no results", () => {
    const results = [];
    render(<SearchResults results={results} />);
    const noResultsMessage = screen.getByText("No results");

    expect(noResultsMessage).toBeInTheDocument();
  });

  it("renders images when results is not empty", () => {
    const results = [
      "https:/example.com/image1.jpg",
      "https:/example.com/image2.jpg",
      "https:/example.com/image3.jpg",
    ];
    render(<SearchResults results={results} />);
    const images = screen.queryAllByAltText("space");

    expect(images.length).toBe(3);
  });
});
