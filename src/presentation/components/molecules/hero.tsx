import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import carousel from "../../imgs/carousel.jpg";
import masterclass from "../../imgs/masterclass.jpg";
import paseoHero from "../../imgs/paseo.jpg";

enum HeroImageMode {
  light,
  dark,
}

interface ImageData {
  url: string;
  credit: JSX.Element | string;
  mode: HeroImageMode;
}

const images: ImageData[] = [
  { url: paseoHero, credit: "Heather", mode: HeroImageMode.light },
  { url: carousel, credit: "Some Credits...", mode: HeroImageMode.dark },
  { url: masterclass, credit: "Some More Credits", mode: HeroImageMode.light },
];

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

const HeroHeading = styled.h1<{ mode: HeroImageMode }>`
  line-height: 1.5;
  margin: 0;
  font-weight: 400;
  color: ${(props) => (props.mode === HeroImageMode.dark ? "white" : "black")};
  @media (max-width: 750px) {
    font-size: 2.5rem;
  }
`;
const HeroSubHeading = styled.h3<{ mode: HeroImageMode }>`
  line-height: 1.5;
  margin: 0;
  font-weight: 400;
  color: ${(props) => (props.mode === HeroImageMode.dark ? "white" : "black")};
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

const HeroImageCredit = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  color: black;
  background: white;
  padding: 0.25rem;
  opacity: 0.25;
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

  const { url, mode, credit } = images[imageRef];

  return (
    <HeroBGImage image={url}>
      <HeroTextContainer>
        <HeroHeading mode={mode} data-testid="hero-text">
          Julianne Reynolds
        </HeroHeading>
        <HeroSubHeading mode={mode}>Performer & Teacher</HeroSubHeading>
      </HeroTextContainer>
      <HeroImageCredit>{credit}</HeroImageCredit>
    </HeroBGImage>
  );
};
