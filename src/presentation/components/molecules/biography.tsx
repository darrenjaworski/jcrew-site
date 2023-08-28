import styled from "@emotion/styled";
import bioImage from "../../imgs/bio-image-2.jpg";

const BiographyContainer = styled.div`
  width: 50%;
  max-width: 50%;
  display: inline-block;
  padding: 3rem;
  min-height: 35rem;
  background-color: ${(props) => {
    // @ts-ignore
    return props.theme.colors.secondary;
  }};
  @media (max-width: 750px) {
    width: 100%;
    max-width: 100%;
    padding: 1rem;
  }
`;

const BioImage = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  border: 1px solid black;
  background-image: url("${bioImage}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 750px) {
    width: 15rem;
    height: 15rem;
  }
`;

export const Biography = () => {
  return (
    <section
      className="julianne_biography container row flip-mobile"
      id="biography"
    >
      <BiographyContainer>
        <p data-testid="bio-text">
          I’m Julianne, a New Mexico-raised, Oklahoma City University-trained
          singer and teaching artist. I am a devotee of the craft of singing,
          the therapeutic process of learning to take up space on stage, and the
          transformative power of the individual and collective artist’s
          journey. I love stepping up to a challenge and working on new
          projects, and have made a professional career as a cross-genre
          interpreter of plays, musicals, operas, and theatre for young
          audiences. I live with natural curiosity and investment in the artists
          around me, and believe in working in a way that brings out the best in
          everyone. You can count on me to bring presence, ideas, hard work, and
          inevitable silliness into every room.
        </p>
        {/* <ul>
          <li>Performing live in musicals, operas, plays and concerts</li>
          <li>Acting on camera</li>
          <li>Opportunities to assistant direct stage musicals or plays</li>
          <li>Voice acting and voice over work</li>
          <li>Teaching voice lessons virtually or in person</li>
          <li>Workshopping and performing new works</li>
        </ul> */}
      </BiographyContainer>
      <div
        className="split container row justify-centered align-items-center"
        style={{ flexDirection: "column" }}
      >
        <h2 data-testid="bio-title">Biography</h2>
        <BioImage />
      </div>
    </section>
  );
};
