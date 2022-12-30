import { screen } from "@testing-library/react";
import { renderComponentWithTheme } from "../../../../test-config/renderComponentWith";
import { Carousel } from "../carousel";

describe("carousel", () => {
  it("renders custom arrows", () => {
    renderComponentWithTheme(<Carousel />);
    const prevArrow = screen.getByTestId('previous-arrow');
    const nextArrow = screen.getByTestId('next-arrow');

    expect(prevArrow).toBeInTheDocument();
    expect(nextArrow).toBeInTheDocument();
  });
});
