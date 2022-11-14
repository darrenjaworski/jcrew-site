import { screen } from "@testing-library/react";
import { renderComponentWithTheme } from "../../../../test-config/renderComponentWith";
import { Biography } from "../biography";

describe("biography", () => {
  it("renders bio text", () => {
    renderComponentWithTheme(<Biography />);
    const title = screen.getByTestId("bio-title");
    const bioText = screen.getByTestId("bio-text");

    expect(title).toBeInTheDocument();
    expect(bioText).toBeInTheDocument();
  });
});
