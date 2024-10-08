import { screen } from "@testing-library/react";
import { renderComponentWithTheme } from "../../../../test-config/renderComponentWith";
import { Contact } from "../contact";

describe("contact", () => {
  it("renders contact text", () => {
    renderComponentWithTheme(<Contact />);
    const email = screen.getByTestId("contact-email-manager");

    expect(email).toBeInTheDocument();
    expect(email.textContent).toEqual("theatrical@uiatalent.com");
  });
});
