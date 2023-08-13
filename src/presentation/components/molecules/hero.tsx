import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import carouselBlue from "../../imgs/hero/carousel-blue-dress.jpg";
import carousel from "../../imgs/hero/carousel.jpg";
import masterclass from "../../imgs/hero/masterclass.jpg";

enum HeroImageMode {
  light,
  dark,
}

interface ImageData {
  url: string;
  credit: JSX.Element | string;
  mode: HeroImageMode;
  mobileAlignment?: MobileAlignment;
}

enum MobileAlignment {
  left,
  center,
  right,
  default,
}

const images: ImageData[] = [
  {
    url: carousel,
    credit: "Miki Galloway - Carousel at Lyric Theatre of Oklahoma",
    mode: HeroImageMode.dark,
  },
  {
    url: masterclass,
    credit:
      "Miki Galloway - Masterclass at Lyric Theatre of Oklahoma with Natalie Cordone",
    mode: HeroImageMode.dark,
  },
  {
    url: carouselBlue,
    credit: "Miki Galloway - Carousel at Lyric Theatre of Oklahoma",
    mode: HeroImageMode.dark,
  },
];

interface HeroImageProps {
  image: string;
  mobileAlignment?: MobileAlignment;
}

const HeroSection = styled.section`
  height: 100%;
  max-height: 1000px;
  position: relative;
`;

const HeroImage = styled.div<HeroImageProps>`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #000000 url(${(props) => props.image}) no-repeat top center;
  background-size: cover;
  transition: opacity 0.6s ease-in-out;
  @media (max-width: 850px) {
    background-position-x: ${(props) =>
      // @ts-ignore
      props?.mobileAlignment === MobileAlignment.left ? "80%" : "center"};
  }
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
const IMAGE_FADE_TIME = 600;

export const Hero = () => {
  const [imageRef, setImageRef] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageOpacity(0.01);
      setTimeout(() => {
        const numberOfImages = images.length;
        setImageRef((index) => (index + 1 >= numberOfImages ? 0 : index + 1));
        setImageOpacity(1);
      }, IMAGE_FADE_TIME);
    }, BG_LOOP_TIME);
    return () => clearInterval(interval);
  }, []);

  const { url, mode, credit, mobileAlignment } = images[imageRef];

  return (
    <HeroSection>
      <HeroImage
        image={url}
        mobileAlignment={mobileAlignment}
        style={{ opacity: imageOpacity }}
      />
      <HeroTextContainer>
        <HeroHeading mode={mode} data-testid="hero-text">
          Julianne Reynolds
        </HeroHeading>
        <HeroSubHeading mode={mode}>Performer & Teacher</HeroSubHeading>
      </HeroTextContainer>
      <HeroImageCredit>{credit}</HeroImageCredit>
    </HeroSection>
  );
};
