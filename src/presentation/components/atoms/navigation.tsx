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
  justify-content: flex-end;
`;

const NavListItem = styled.li`
  margin: 0 2rem;
  @media (max-width: 750px) {
    margin: 0 1.5rem;
  }
  @media (max-width: 500px) {
    margin: 0 0.75rem;
  }
  @media (max-width: 400px) {
    margin: 0 0.5rem;
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

const NavLogo = styled.img`
  height: 36px;
  width: auto;
  @media (max-width: 750px) {
    height: 29px;
  }
  @media (max-width: 400px) {
    display: none;
  }
`;

export const Navigation = () => {
  return (
    <Nav data-testid={"navigation-container"}>
      <NavList>
        <NavListItem>
          <NavLink href="#biography" data-testid="biography">Biography</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="#media" data-testid="media">Media</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="#contact" data-testid="contact">Contact</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink
            target="_blank"
            href="https://docs.google.com/document/d/1oQkMS850YCeL3G1cNVuByMch7PQu5ajZ1Ks-hf4EU_w/edit?usp=drive_link"
          >
            Résumé
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLogo src="jr-icon.jpg" />
        </NavListItem>
      </NavList>
    </Nav>
  );
};
