import { screen } from "@testing-library/react";
import { renderComponentWithTheme } from "../../../../test-config/renderComponentWith";
import { Hero } from "../hero";

describe("Hero", () => {
  it("renders Hero text", () => {
    renderComponentWithTheme(<Hero />);
    const welcomeText = screen.getByTestId("hero-text");

    expect(welcomeText).toBeInTheDocument();
    expect(welcomeText.textContent).toEqual("Julianne Reynolds");
  });
  // TODO write test around hero bg image
});
