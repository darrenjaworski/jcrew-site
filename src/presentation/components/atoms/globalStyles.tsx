import { css, Global } from "@emotion/react";

const styles = css`
  * {
    box-sizing: border-box;
  }
  html {
    font-family: "Karla", serif;
    background-color: #d2dfd6;
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
  p {
    font-size: 1.2rem;
    line-height: 1.3;
  }
`;

export const GlobalStyles = () => {
  return <Global styles={styles} />;
};
