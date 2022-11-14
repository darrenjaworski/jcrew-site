import { ThemeProvider } from "@emotion/react";
import { render } from "@testing-library/react";
import { theme } from "../presentation/theme/theme";

export const renderComponentWithTheme = (
  componentToRender: JSX.Element | React.ReactElement
) => {
  return render(
    <ThemeProvider theme={theme}>{componentToRender}</ThemeProvider>
  );
};
