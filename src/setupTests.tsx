// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { matchers } from "@emotion/jest";
import "@testing-library/jest-dom";

jest.mock("./presentation/components/atoms/zoomImage", () => ({
  ZoomImage: () => <h1>zoom</h1>,
}));

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

expect.extend(matchers);
