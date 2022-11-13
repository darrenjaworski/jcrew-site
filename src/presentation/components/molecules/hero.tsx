import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import carousel from "../../imgs/carousel.jpg";
import masterclass from "../../imgs/masterclass.jpg";
import paseoHero from "../../imgs/paseo.jpg";

const images = [paseoHero, carousel, masterclass];

interface HeroImageProps {
  image: string;
}

const HeroBGImage = styled.section<HeroImageProps>`
  height: 100%;
  max-height: 1000px;
  background: #ffffff url(${(props) => props.image}) no-repeat top center;
  background-size: cover;
  position: relative;
`;

const HeroHeading = styled.h1`
  line-height: 1.5;
  margin: 0;
  font-weight: 400;
  @media (max-width: 750px) {
    font-size: 2.5rem;
  }
`;
const HeroSubHeading = styled.h3`
  line-height: 1.5;
  margin: 0;
  font-weight: 400;
  @media (max-width: 750px) {
    font-size: 2rem;
  }
`;
const HeroTextContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(50%, 30%);
  @media (max-width: 1000px) {
    transform: translate(30%, 30%);
  }
  @media (max-width: 750px) {
    transform: translate(1rem, 10%);
  }
`;

const BG_LOOP_TIME = 10000;

export const Hero = () => {
  const [imageRef, setImageRef] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const numberOfImages = images.length;
      setImageRef((index) => (index + 1 >= numberOfImages ? 0 : index + 1));
    }, BG_LOOP_TIME);

    return () => clearInterval(interval);
  }, []);

  return (
    // TODO update the bg image on a rotation
    // TODO add photo credits
    <HeroBGImage image={images[imageRef]}>
      <HeroTextContainer>
        <HeroHeading data-testid="hero-text">Julianne Reynolds</HeroHeading>
        <HeroSubHeading>Performer & Teacher</HeroSubHeading>
      </HeroTextContainer>
    </HeroBGImage>
  );
};
