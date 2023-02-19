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

export const Contact = () => {
  return (
    <section className="julianne_contact container row" id="contact">
      <div className="split container row justify-centered align-items-center">
        <h2>Contact</h2>
      </div>
      <ContactContainer>
        <div className="contact_block">
          <h3>Performance Resume</h3>
          <p>
            <a
              href="https://drive.google.com/file/d/1LK7qLjydexOK7Q2PtXc1nL1cg8gJfNui/view?usp=sharing"
              data-testid="contact-resume"
              target="_blank"
              rel="noreferrer"
            >
              Download Performance Resume
            </a>
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
          <p>
            I am available to teach private lessons in person or virtually, and
            am a proud affiliate of Kismet Arts Collective OKC
          </p>
          <p>
            I have experience teaching students of all ages and across multiple
            styles of singing.
          </p>
        </div>
      </ContactContainer>
    </section>
  );
};
