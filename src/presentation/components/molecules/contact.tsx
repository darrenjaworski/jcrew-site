import styled from "@emotion/styled";

const ContactContainer = styled.div`
  width: 50%;
  max-width: 50%;
  display: inline-block;
  display: flex;
  background-color: ${props => {
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
  background-color: ${props => {
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
              href="https://drive.google.com/file/d/1UVRAucV2XZGoibcKIZOf0q8k1Pu37PtK/view?usp=drive_link"
              data-testid="contact-resume"
              target="_blank"
              rel="noreferrer"
            >
              Download Headshot and Résumé
            </a>
          </p>
        </div>
        <div className="contact_block">
          <h3>Reach Me</h3>
          <p>
          UIA Talent Agency
            <HeadshotLink
              href="mailto:theatrical@uiatalent.com"
              data-testid="contact-email-manager"
            >
              theatrical@uiatalent.com
            </HeadshotLink>
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
