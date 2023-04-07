import { fireEvent, render, screen } from "@testing-library/react";
import Search from "../components/Search";
import renderer from "react-test-renderer";

describe("Search", () => {
  const validProps = {
    setSearchResult: jest.fn(),
  };
  it("renders correctly", () => {
    const rendered = renderer.create(
      <Search setSearchResult={validProps.setSearchResult} />
    );

    expect(rendered).toMatchSnapshot();
  });

  it("Renders a single button with correct text", () => {
    render(<Search setSearchResult={validProps.setSearchResult} />);

    const button = screen.getAllByRole("button");

    expect(button).toHaveLength(1);
    expect(button[0]).toHaveTextContent("Search");
  });
});
