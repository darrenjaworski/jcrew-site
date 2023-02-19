import styled from "@emotion/styled";

const ReviewsSection = styled.section`
  background-color: ${(props) => {
    // @ts-ignore
    return props.theme.colors.primary;
  }};
`;

const ReviewsContainer = styled.div`
  width: 50%;
  max-width: 50%;
  display: inline-block;
  padding: 3rem;
  background-color: ${(props) => {
    // @ts-ignore
    return props.theme.colors.primary;
  }};
  @media (max-width: 750px) {
    width: 100%;
    max-width: 100%;
    padding: 1rem;
  }
`;

export const Reviews = () => {
  return (
    <ReviewsSection id="reviews" className="container row">
      <div className="split container row justify-centered align-items-center">
        <h2 className="white">Reviews</h2>
      </div>
      <ReviewsContainer>
        <p>
          "The principal singers have soaring vocals that are powerful and
          breathtaking. Julianne Reynolds is angelic and loving as Julie
          Jordan... The vocal abilities of Caskey and Reynolds are
          unparalleled... There's no denying the talents on stage are unmatched
          anywhere, and this cast could easily be found on a Boardway stage." -{" "}
          <a
            href="https://www.broadwayworld.com/oklahoma/article/Review-Lyric-Theatres-CAROUSEL-Dazzles-on-the-Civic-Center-stage-20220707"
            target="_blank"
            rel="noreferrer"
          >
            Adrienne Proctor, BroadwayWorld
          </a>
        </p>
        <p>
          Caskey and Reynolds... establish both a crackling chemistry and their
          vocal chops with 'If I loved You'... and she lifts the wistful 'What's
          the Use of Wond'rin' to great heights." -{" "}
          <a
            href="https://www.oklahoman.com/story/entertainment/2022/07/08/dazzling-classic-carousel-worth-a-whirl-for-okc-musical-theater-fans/65368129007/"
            target="_blank"
            rel="noreferrer"
          >
            Brandy Mcdonnell, The Oklahoman
          </a>
        </p>
      </ReviewsContainer>
    </ReviewsSection>
  );
};
