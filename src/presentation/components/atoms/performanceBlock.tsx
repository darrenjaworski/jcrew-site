import styled from "@emotion/styled";
import React from "react";
import { Performance, SlideMode } from "./carousel";

const StyledPerformanceContainer = styled.div<{ img: string }>`
  height: 500px;
  padding: 0.5rem;
  position: relative;
`;

const ImageBackground = styled.div<{ img: string }>`
  height: calc(500px - 1rem);
  background: #f5f4ca url(${(props) => props.img}) no-repeat center center;
  background-size: cover;
  filter: blur(4px);
`;

const TextContainer = styled.div`
  height: calc(500px - 2rem);
  margin: 1rem;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
`;

const PerformanceHeading = styled.h4<{ mode: SlideMode }>`
  margin-top: 0;
  font-size: 1.5rem;
  letter-spacing: 2px;
  color: ${(props) => (props.mode === SlideMode.dark ? "white" : "black")};
`;

const PerformanceDate = styled.p<{ mode: SlideMode }>`
  position: absolute;
  bottom: 0;
  color: ${(props) => (props.mode === SlideMode.dark ? "white" : "black")};
`;

export const PerformanceText = styled.p<{ mode: SlideMode }>`
  color: ${(props) => (props.mode === SlideMode.dark ? "white" : "black")};
`;

interface PerformanceBlockProps extends Performance {}

export const PerformanceBlock = (props: PerformanceBlockProps) => {
  const { heading, description, date, img, mode } = props;
  return (
    <StyledPerformanceContainer img={img}>
      <ImageBackground img={img} />
      <TextContainer>
        <PerformanceHeading mode={mode}>{heading}</PerformanceHeading>
        {React.isValidElement(description) ? (
          description
        ) : (
          <PerformanceText mode={mode}>{description}</PerformanceText>
        )}
        <PerformanceDate mode={mode}>{date}</PerformanceDate>
      </TextContainer>
    </StyledPerformanceContainer>
  );
};
