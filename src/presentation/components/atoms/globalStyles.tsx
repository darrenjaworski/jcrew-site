import { css, Global, useTheme } from "@emotion/react";

//@ts-ignore
const getStyles = (theme) => css`
  * {
    box-sizing: border-box;
  }
  html {
    font-family: "Karla", serif;
    background-color: ${theme.colors.tertiary};
  }

  body {
    margin: 0;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Playfair Display", serif;
  }

  h1 {
    font-size: 3.5rem;
  }

  h2 {
    font-size: 3rem;
    font-weight: 400;
  }

  h3 {
    font-size: 2.6rem;
  }
  p,
  li {
    font-size: 1.2rem;
    line-height: 1.3;
  }
  a {
    color: black;
  }
`;

export const GlobalStyles = () => {
  const theme = useTheme();
  return <Global styles={getStyles(theme)} />;
};
