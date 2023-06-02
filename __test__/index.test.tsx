import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a container", async () => {
    render(<Home />);

    const container = screen.getByRole("container");

    expect(container).toBeInTheDocument();
  });

  it("renders container unchanged", () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
