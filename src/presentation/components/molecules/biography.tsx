import styled from "@emotion/styled";
import bioImage from "../../imgs/bio-image-3.jpg";

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
      I’m Julianne, a New Mexico-raised, Oklahoma City University-trained actor, musician, and voice teacher. I am a devotee of the unique power of performance and collective creative expression, whether on stage, on screen, in rehearsal, or in a classroom. Nothing makes me happier than collaborating with others on a shared artistic vision. If I’m not performing or teaching, you might find me gaming, snapping Fujifilm photos with my husband Darren, or cuddling with my cat Bingley. 
        </p>
        <p>
          I currently have residences in New York City and Oklahoma City, and am represented by Christopher Silveri at Center Stage Management.
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
