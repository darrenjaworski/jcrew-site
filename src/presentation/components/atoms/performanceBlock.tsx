import styled from "@emotion/styled";
import React from "react";
import { Performance } from "./carousel";

const StyledPerformanceContainer = styled.div<{ img: string }>`
  min-height: 500px;
  background: #f5f4ca url(${(props) => props.img}) no-repeat center center;
  background-size: cover;
  width: 250px;
  padding: 2rem;
`;

interface PerformanceBlockProps extends Performance {}

export const PerformanceBlock = (props: PerformanceBlockProps) => {
  const { heading, description, date, img } = props;
  return (
    <StyledPerformanceContainer img={img}>
      <h4>{heading}</h4>
      {React.isValidElement(description) ? description : <p>{description}</p>}
      <p>{date}</p>
    </StyledPerformanceContainer>
  );
};
