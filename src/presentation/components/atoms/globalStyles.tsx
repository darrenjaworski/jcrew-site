import { css, Global, useTheme } from "@emotion/react";
import "@nishanths/zoom.js/dist/zoom.css";

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
    font-size: 1.4rem;
    line-height: 1.3;
  }
  a {
    color: black;
  }
  .split {
    width: 50%;
    max-width: 50%;
    display: inline-block;
  }

  .container {
    display: flex;
  }

  .row {
    flex-direction: row;
  }

  .justify-centered {
    justify-content: center;
  }

  .align-items-center {
    align-items: center;
  }

  .red {
    background-color: #fecac1;
  }

  .white {
    color: white;
  }

  .contact_block {
    margin-bottom: 2rem;
  }

  .contact_block:last-child {
    margin-bottom: 0;
  }

  .contact_block h3 {
    font-size: 2.5rem;
    font-weight: 400;
    margin: 0;
  }

  @media (max-width: 750px) {
    .row {
      flex-direction: column;
    }
    .split {
      width: 100%;
      max-width: 100%;
    }
    .flip-mobile {
      flex-direction: column-reverse;
    }
    .align-items-center {
      align-items: flex-start;
      padding-left: 1rem;
    }
  }
`;

export const GlobalStyles = () => {
  const theme = useTheme();
  return <Global styles={getStyles(theme)} />;
};
