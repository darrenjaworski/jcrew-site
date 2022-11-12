import styled from "@emotion/styled";

const Nav = styled.nav`
  position: fixed;
  background-color: rgba(255, 255, 255, 0.6);
  width: 100%;
  z-index: 1;
`;

const NavList = styled.ul`
  padding: 0;
  margin: 1rem 0;
  list-style: none;
`;

const NavListItem = styled.li`
  margin: 0 4rem;
`;

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1.5em;
  font-family: "Playfair Display", serif;
`;

export const Navigation = () => {
  return (
    <Nav>
      <NavList className="container row justify-centered">
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
