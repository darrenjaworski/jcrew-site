export const Contact = () => {
  return (
    <section className="julianne_contact container row" id="contact">
      <div className="split container row justify-centered align-items-center">
        <h2>Contact</h2>
      </div>
      <div className="split container column red block-padding">
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
        <div className="contact_block">
          <h3>Representation</h3>
          {/* TODO need a PDF for her CV */}
        </div>
      </div>
    </section>
  );
};
