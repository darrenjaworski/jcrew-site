import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import carousel from "../../imgs/performances/carousel.png";
import christmas from "../../imgs/performances/christmas.jpg";
import masterclass from "../../imgs/performances/masterclass.jpg";
import oklahoma from "../../imgs/performances/oklahoma.png";
import yes from "../../imgs/performances/yes.jpg";
import { PerformanceBlock } from "./performanceBlock";

const PositionedSlider = styled(Slider)`
  width: calc(100% - 2rem);
  padding: 2rem 0;
`;

export interface Performance {
  heading: string;
  description: string | JSX.Element;
  date: string;
  img: string;
}

const performances: Performance[] = [
  {
    heading: "Christmas Choral Concert",
    description:
      "Soloist for Christmas Choral Concert at St. Luke’s United Methodist Church of OKC",
    date: "December 7, 2022",
    img: christmas,
  },
  {
    heading: "Female Swing",
    description:
      "Oklahoma! Interactive. Lyric Theatre of Oklahoma Educational Outreach tour.",
    date: "2022 through 2023",
    img: oklahoma,
  },
  {
    heading: "Ashley the Bride",
    description: (
      <>
        <p>YES! THE MUSICAL in Concert at Ponyboy OKC</p>
        <p>Directed by Shea Sullivan</p>
        <p>Music Directed by Drew Wutke</p>
        <p>Written by Blaine Hopkins and Garrett Kotecki</p>
      </>
    ),
    date: "November 6th, 2022",
    img: yes,
  },
  {
    heading: "Julie Jordan",
    description: "Carousel. Lyric Theatre of Oklahoma",
    date: "July 2022",
    img: carousel,
  },
  {
    heading: "Sharon Graham",
    description: "Masterclass. Lyric Theatre of Oklahoma",
    date: "September 2021",
    img: masterclass,
  },
];

export const Carousel = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
  };

  const PerformanceBlocks = performances.map((performance, i) => {
    return <PerformanceBlock key="i" {...performance}></PerformanceBlock>;
  });

  return <PositionedSlider {...settings}>{PerformanceBlocks}</PositionedSlider>;
};
