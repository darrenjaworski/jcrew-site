import { screen } from "@testing-library/react";
import { renderComponentWithTheme } from "../../../../test-config/renderComponentWith";
import { Performances } from "../performances";

describe("Performances", () => {
  it("renders Performances text", () => {
    renderComponentWithTheme(<Performances />);
    const performancesTitle = screen.getByTestId("performances-title");

    expect(performancesTitle).toBeInTheDocument();
  });
  // TODO write tests around carousel
});
