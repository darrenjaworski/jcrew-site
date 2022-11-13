import { ThemeProvider } from "@emotion/react";
import "./main.css";
import { GlobalStyles } from "./presentation/components/atoms/globalStyles";
import { Home } from "./presentation/pages/home";
import { theme } from "./presentation/theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
