export const Biography = () => {
  return (
    <section className="julianne_biography container row" id="biography">
      <div className="split block-padding red">
        <p data-testid="bio-text">
          I’m Julianne Reynolds, an Oklahoma City-based singer, actor and voice
          teacher. I am passionate about performing across styles and have
          experience in plays, operas, musical theater, choral singing, and
          theater for young audiences. I am happiest when I’m collaborating with
          other artists on and off stage, in the rehearsal room, or in the voice
          studio.
        </p>
        <p>
          I am always looking for new opportunities to connect and grow as an
          artist. Reach out to me if you’d like to collaborate! I am currently
          available to work in the following areas:
        </p>
        <ul>
          <li>Performing live in musicals, operas, plays and concerts</li>
          <li>Acting on film or television</li>
          <li>Opportunities to assistant direct stage musicals or plays</li>
          <li>Voice acting and voice over work</li>
          <li>Teaching voice lessons virtually or in person</li>
        </ul>
      </div>
      <div className="split container row justify-centered align-items-center">
        <h2 data-testid="bio-title">Biography</h2>
      </div>
    </section>
  );
};
