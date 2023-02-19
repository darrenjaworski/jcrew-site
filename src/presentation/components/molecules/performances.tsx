import styled from "@emotion/styled";
import { Carousel } from "../atoms/carousel";

const PerformancesSection = styled.section`
  background-color: ${(props) => {
    // @ts-ignore
    return props.theme.colors.secondary;
  }};
  padding: 3rem 0 3rem 3rem;
`;

const PerformancesHeading = styled.h2`
  margin: 0;
  @media (max-width: 750px) {
    margin-left: -2rem;
  }
`;

export const Performances = () => {
  return (
    <PerformancesSection id="performances">
      <PerformancesHeading
        className=" performance_heading"
        data-testid="performances-title"
      >
        Performances
      </PerformancesHeading>
      <Carousel />
    </PerformancesSection>
  );
};
