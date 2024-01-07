import styled from "@emotion/styled";

const ContactContainer = styled.div`
  width: 50%;
  max-width: 50%;
  display: inline-block;
  display: flex;
  background-color: ${(props) => {
    // @ts-ignore
    return props.theme.colors.secondary;
  }};
  flex-direction: column;
  padding: 3rem;
  @media (max-width: 750px) {
    width: 100%;
    max-width: 100%;
    padding: 1rem;
  }
`;
const ContactHeadingContainer = styled.div`
  background-color: ${(props) => {
    // @ts-ignore
    return props.theme.colors.secondary;
  }};
`;

const HeadshotLink = styled.a`
  display: block;
`;

export const Contact = () => {
  return (
    <section className="julianne_contact container row" id="contact">
      <ContactHeadingContainer className="split container row justify-centered align-items-center">
        <h2 data-testid="contact-header">Contact</h2>
      </ContactHeadingContainer>
      <ContactContainer>
        <div className="contact_block">
          <h3>Resources</h3>
          <p>
            <a
              href="https://drive.google.com/file/d/1bIevVlfmdeaNgMVYG1teTZfKG55pXr1g/view"
              data-testid="contact-resume"
              target="_blank"
              rel="noreferrer"
            >
              Download my Performance Résumé
            </a>
            <HeadshotLink
              href="https://drive.google.com/file/d/1VPZQCVgWbfTjWZYXmxVEM5-nvjdiEffU/view"
              target="_blank"
              rel="noreferrer"
            >
              Download my headshot
            </HeadshotLink>
          </p>
        </div>
        <div className="contact_block">
          <h3>Reach Me</h3>
          <p>
            Represented by Resolute Artists Agency
            <HeadshotLink
              href="mailto:team@resoluteartistsagency.com"
              data-testid="contact-email"
            >
              team@resoluteartistsagency.com
            </HeadshotLink>
            <a href="tel:212.739.7856">212.739.7856</a>
          </p>
        </div>
        <div className="contact_block">
          <h3>Voice Lessons</h3>
          <p>
            I am available to teach private lessons in person or virtually. I
            have experience teaching students of all ages and across multiple
            styles of singing.
          </p>
          <p>
            For more information about lessons, please email me at{" "}
            <a href="mailto:julianne.e.reynolds@gmail.com">
              julianne.e.reynolds@gmail.com
            </a>
          </p>
        </div>
      </ContactContainer>
    </section>
  );
};
