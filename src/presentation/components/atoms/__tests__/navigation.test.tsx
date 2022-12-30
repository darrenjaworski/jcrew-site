import { screen } from "@testing-library/react";
import { renderComponentWithTheme } from "../../../../test-config/renderComponentWith";
import { Navigation } from "../navigation";

describe("navigation", () => {
  it("renders navigation with solid white background and is fixed", () => {
    renderComponentWithTheme(<Navigation />);

    const nav = screen.getByTestId("navigation-container");
    expect(nav).toHaveStyle("background: white");
    expect(nav).toHaveStyle("position: fixed");
  });
});
