import styled from "@emotion/styled";
import hexRgb from "hex-rgb";
import React, { useEffect, useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";

const Nav = styled.nav<{ opacity: number }>`
  position: fixed;
  background-color: rgba(
    ${(props) => {
      // @ts-ignore
      const rgb = hexRgb(props.theme.colors.secondary);
      return `${rgb.red}, ${rgb.green}, ${rgb.blue}, ${props.opacity}`;
    }}
  );
  width: 100%;
  z-index: 1;
`;

const NavList = styled.ul`
  padding: 0;
  margin: 0.5rem 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const NavListItem = styled.li`
  margin: 0 4rem;
  @media (max-width: 750px) {
    margin: 0 3rem;
  }
  @media (max-width: 500px) {
    margin: 0 2rem;
  }
`;

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1.25em;
  font-family: "Playfair Display", serif;
  @media (max-width: 750px) {
    font-size: 0.9rem;
  }
`;

const headerRef = React.createRef();

export const Navigation = () => {
  const [opacity, setOpacity] = useState(0.6);
  const { height } = useWindowSize();

  useEffect(() => {
    // @ts-ignore
    const didScrollPage = (_e) => {
      const { scrollY } = window;
      if (scrollY > height) {
        setOpacity(1);
        return;
      }

      const calc = 0.6;
      setOpacity(calc);
    };

    window.addEventListener("scroll", didScrollPage);

    return () => {
      window.removeEventListener("keydown", didScrollPage);
    };
  }, []);
  return (
    // @ts-ignore
    <Nav ref={headerRef} opacity={opacity}>
      <NavList>
        <NavListItem>
          <NavLink href="#biography">Biography</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="#performances">Performances</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="#contact">Contact</NavLink>
        </NavListItem>
      </NavList>
    </Nav>
  );
};
