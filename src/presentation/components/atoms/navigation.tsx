import styled from "@emotion/styled";

const Nav = styled.nav`
  position: fixed;
  background: white;
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
  @media (max-width: 400px) {
    margin: 0 1.25rem;
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

export const Navigation = () => {
  return (
    <Nav data-testid={"navigation-container"}>
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
