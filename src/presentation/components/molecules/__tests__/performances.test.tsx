import { render, screen } from "@testing-library/react";
import { Performances } from "../performances";

describe("Performances", () => {
  it("renders Performances text", () => {
    render(<Performances />);
    const performancesTitle = screen.getByTestId("performances-title");

    expect(performancesTitle).toBeInTheDocument();
  });
  // TODO write tests around carousel
});
