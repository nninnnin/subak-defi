import TestRenderer from "react-test-renderer";
import { screen, render } from "@testing-library/react";
import NavigationBar from "@/components/NavigationBar";

describe("Navigation Bar", () => {
  it("render a heading", () => {
    render(<NavigationBar />);

    const navigationBar = screen.getByRole("heading");

    // console.log(TestRenderer);
  });
});
