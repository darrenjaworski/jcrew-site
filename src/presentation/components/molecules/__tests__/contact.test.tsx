import { render, screen } from "@testing-library/react";
import { Contact } from "../contact";

describe("contact", () => {
  it("renders contact text", () => {
    render(<Contact />);
    const email = screen.getByTestId("contact-email");

    expect(email).toBeInTheDocument();
    expect(email.textContent).toEqual("julianne.e.reynolds@gmail.com");
  });
});
