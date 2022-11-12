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

const BG_LOOP_TIME = 6000;

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
      <div className="hero_text">
        <h1 data-testid="hero-text">Julianne Reynolds</h1>
        <h3>Performer & Teacher</h3>
      </div>
    </HeroBGImage>
  );
};
