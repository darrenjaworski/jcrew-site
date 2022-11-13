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
    heading: "Female Swing",
    description:
      "Oklahoma! Interactive. Lyric Theatre of Oklahoma Educational Outreach tour.",
    date: "2022 through 2023",
    img: oklahoma,
    mode: SlideMode.dark,
  },
  {
    heading: "Ashley the Bride",
    description: (
      <>
        <PerformanceText mode={SlideMode.dark}>
          YES! THE MUSICAL in Concert at Ponyboy OKC
        </PerformanceText>
        <PerformanceText mode={SlideMode.dark}>
          Directed by Shea Sullivan
        </PerformanceText>
        <PerformanceText mode={SlideMode.dark}>
          Music Directed by Drew Wutke
        </PerformanceText>
        <PerformanceText mode={SlideMode.dark}>
          Written by Blaine Hopkins and Garrett Kotecki
        </PerformanceText>
      </>
    ),
    date: "November 6th, 2022",
    img: yes,
    mode: SlideMode.dark,
  },
  {
    heading: "Julie Jordan",
    description: "Carousel. Lyric Theatre of Oklahoma",
    date: "July 2022",
    img: carousel,
    mode: SlideMode.light,
  },
  {
    heading: "Sharon Graham",
    description: "Masterclass. Lyric Theatre of Oklahoma",
    date: "September 2021",
    img: masterclass,
    mode: SlideMode.dark,
  },
];

export const Carousel = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
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
    return <PerformanceBlock key="i" {...performance}></PerformanceBlock>;
  });

  return <PositionedSlider {...settings}>{PerformanceBlocks}</PositionedSlider>;
};
