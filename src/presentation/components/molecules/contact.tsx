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
          <h3>I'm free to teach</h3>
          <p>$50 an hour. $25 a half hour.</p>
        </div>
        <div className="contact_block">
          <h3>Representation</h3>
          <p>Link to my resume...</p>
        </div>
      </div>
    </section>
  );
};
