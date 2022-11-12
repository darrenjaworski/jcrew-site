import { render, screen } from "@testing-library/react";
import { Hero } from "../hero";

describe("Hero", () => {
  it("renders Hero text", () => {
    render(<Hero />);
    const welcomeText = screen.getByTestId("hero-text");

    expect(welcomeText).toBeInTheDocument();
    expect(welcomeText.textContent).toEqual("Julianne Reynolds");
  });
  // TODO write test around hero bg image
});
