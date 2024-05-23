import styled from "@emotion/styled";
import bioImage from "../../imgs/bio-image-2.jpg";

const BiographyContainer = styled.div`
  width: 50%;
  max-width: 50%;
  display: inline-block;
  padding: 3rem;
  min-height: 35rem;
  background-color: ${props => {
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
          performer, musician and teaching artist. I am a devotee of the craft
          of singing, the transformative power of learning to take up space on
          stage, and the beauty of the individual and collective artist’s
          journey. When I am not performing or teaching, you might find me
          gaming with my husband Darren, and cuddling with my cats Toulouse and
          Bingley.
        </p>
        <p>
          Raised by a parent with disabilities, and as a neurodivergent artist
          living with mental illness myself, I am a passionate advocate for
          accessibility and trauma awareness in professional and educational
          performing arts. I believe artists and audience members of all ages,
          abilities, bodies, and brain chemistries should get to experience the
          therapeutic and healing gifts that only live theatre can give.
        </p>
        <p>
          I currently have residences in New York City and Oklahoma City, and am
          represented by Center Stage Management and Resolute Artists Agency.
        </p>
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
