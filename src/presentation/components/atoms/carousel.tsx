import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import carousel from "../../imgs/performances/carousel.png";
import christmas from "../../imgs/performances/christmas.jpg";
import masterclass from "../../imgs/performances/masterclass.jpg";
import oklahoma from "../../imgs/performances/oklahoma.png";
import yes from "../../imgs/performances/yes.jpg";
import { PerformanceBlock, PerformanceText } from "./performanceBlock";

const PositionedSlider = styled(Slider)`
  width: calc(100% - 2rem);
  padding: 2rem 0;
`;

export enum SlideMode {
  light,
  dark,
}

export interface Performance {
  heading: string;
  description: string | JSX.Element;
  date: string;
  img: string;
  mode: SlideMode;
}

const SliderButton = styled.button`
    padding: 0.4rem 0.5rem;
    background-color: white;
    border: ${(props) => {
      // @ts-ignore
      return `1px solid ${props.theme.colors.secondary};`;
    }}
    transition: all 0.2s;
    color: black;
    &:hover {
        background-color: ${(props) => {
          // @ts-ignore
          return props.theme.colors.primary;
        }};
        color: white;
        border-color: white;
    }
`;

const performances: Performance[] = [
  {
    heading: "Christmas Choral Concert",
    description:
      "Soloist for Christmas Choral Concert at St. Luke’s United Methodist Church of OKC",
    date: "December 7, 2022",
    img: christmas,
    mode: SlideMode.dark,
  },
  {
    heading: "Oklahoma! Interactive",
    description:
      "Female Swing. Lyric Theatre of Oklahoma Educational Outreach tour.",
    date: "2022 through 2023",
    img: oklahoma,
    mode: SlideMode.dark,
  },
  {
    heading: "YES! THE MUSICAL In Concert",
    description: (
      <>
        <PerformanceText mode={SlideMode.dark}>
          Ashley, The Bride
        </PerformanceText>
        <PerformanceText mode={SlideMode.dark}>
          Oklahoma City, OK
        </PerformanceText>
      </>
    ),
    date: "November 6th, 2022",
    img: yes,
    mode: SlideMode.dark,
  },
  {
    heading: "Carousel",
    description: "Julie Jordan. Lyric Theatre of Oklahoma",
    date: "July 2022",
    img: carousel,
    mode: SlideMode.light,
  },
  {
    heading: "Masterclass",
    description: "Sharon Graham. Lyric Theatre of Oklahoma",
    date: "September 2021",
    img: masterclass,
    mode: SlideMode.dark,
  },
];

// @ts-ignore
const NextArrow = ({ onClick }) => {
  return (
    <SliderButton
      data-testid={"next-arrow"}
      onClick={onClick}
      style={{ marginLeft: "0.5rem" }}
    >
      next
    </SliderButton>
  );
};

// @ts-ignore
const PrevArrow = ({ onClick }) => {
  return (
    <SliderButton data-testid={"previous-arrow"} onClick={onClick}>
      previous
    </SliderButton>
  );
};

export const Carousel = () => {
  let sliderRef: Slider;
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const PerformanceBlocks = performances.map((performance, i) => {
    return <PerformanceBlock key={i} {...performance}></PerformanceBlock>;
  });

  const handleNextClick = () => {
    sliderRef.slickNext();
  };
  const handlePrevClick = () => {
    sliderRef.slickPrev();
  };

  return (
    <>
      <PositionedSlider
        ref={(c) => {
          // @ts-ignore
          sliderRef = c;
        }}
        {...settings}
      >
        {PerformanceBlocks}
      </PositionedSlider>
      <PrevArrow onClick={handlePrevClick} />
      <NextArrow onClick={handleNextClick} />
    </>
  );
};
