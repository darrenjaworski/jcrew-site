import styled from "@emotion/styled";

const FooterElement = styled.footer`
  background-color: ${(props) => {
    // @ts-ignore
    return props.theme.colors.primary;
  }};
  padding: 3rem 0;
  border-top: 1px solid white;
`;

const FooterHeading = styled.h2`
  text-align: center;
  margin: 0;
  font-size: 2rem;
  color: white;
`;

export const Footer = () => {
  return (
    <FooterElement>
      <FooterHeading>Julianne Reynolds</FooterHeading>
    </FooterElement>
  );
};
