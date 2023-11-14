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
        <h2>Contact</h2>
      </ContactHeadingContainer>
      <ContactContainer>
        <div className="contact_block">
          <h3>Performance Résumé</h3>
          <p>
            <a
              href="https://drive.google.com/file/d/1OCkqekl0kuVFR3dgkA7Df_yXR9RBI8bQ/view"
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
            <a
              href="mailto:julianne.e.reynolds@gmail.com"
              data-testid="contact-email"
            >
              julianne.e.reynolds@gmail.com
            </a>
          </p>
        </div>
        <div className="contact_block">
          <h3>Voice Lessons</h3>
          <p>I am available to teach private lessons in person or virtually.</p>
          <p>
            I have experience teaching students of all ages and across multiple
            styles of singing.
          </p>
        </div>
      </ContactContainer>
    </section>
  );
};
