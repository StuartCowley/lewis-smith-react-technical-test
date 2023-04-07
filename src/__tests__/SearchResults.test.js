import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  const mockImageURL = "https://example.com/image.jpg";

  const { asFragment } = render(<SearchResults />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders an image with a mocked URL", () => {
    render(<SearchResults />);
    const image = screen.getByAltText("space");
    expect(image).toBeInTheDocument();
  });
});
