import { render, screen } from "@testing-library/react";
import { Biography } from "../biography";

describe("biography", () => {
  it("renders bio text", () => {
    render(<Biography />);
    const title = screen.getByTestId("bio-title");
    const bioText = screen.getByTestId("bio-text");

    expect(title).toBeInTheDocument();
    expect(bioText).toBeInTheDocument();
  });
});
