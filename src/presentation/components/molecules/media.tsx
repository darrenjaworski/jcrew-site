import styled from "@emotion/styled";
import backstageImg from "../../imgs/media/backstage.jpg";
import carouselImg from "../../imgs/media/carousel.jpg";
import masterclassImg from "../../imgs/media/masterclass.jpg";
import oklahomanImg from "../../imgs/media/oklahoman.jpg";
import philImg from "../../imgs/media/phil.jpg";
import soundImg from "../../imgs/media/sound.jpg";
import { ZoomImage } from "../atoms/zoomImage";

const MediaSection = styled.section`
  background-color: ${(props) => {
    // @ts-ignore
    return props.theme.colors.primary;
  }};
  padding: 3rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 1rem;
`;

const SplitLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem 1rem;
`;

const MediaHeading = styled.h2`
  margin: 0;
  padding-bottom: 3rem;
  @media (max-width: 750px) {
    margin-left: -2rem;
  }
`;

const CreditsHeading = styled.h4`
  font-size: 1.75rem;
  font-weight: normal;
  margin-bottom: 0;
`;

const CreditsList = styled.ol`
  padding-left: 1rem;
  > li {
    font-size: 1rem;
  }
`;

const ReviewHighlight = styled.p`
  font-size: 2rem;
`;

const ItemCenter = styled.div`
  align-self: center;
  max-width: 75%;
`;

const VideoLayout = styled.div`
  width: 100%;
  // > iframe {
  //   width: 100%;
  //   height: auto;
  // }
`;

const VideoHeading = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const IframeWrapper = styled.div`
  overflow: hidden;
  height: 0;
  position: relative;
  padding-bottom: 56.25%;
  > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
  }
`;

const Media = () => {
  return (
    <MediaSection id="media">
      <MediaHeading>Performance Gallery</MediaHeading>
      <FlexContainer>
        <SplitLayout>
          <VideoLayout>
            <VideoHeading>Vocal Reel</VideoHeading>
            <IframeWrapper>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/3Vn0vHawSKU"
                title="YouTube video player"
                // @ts-ignore
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </IframeWrapper>
          </VideoLayout>
          <VideoLayout>
            <VideoHeading>
              "Never Enough" from <i>The Greatest Showman</i>
            </VideoHeading>
            <IframeWrapper>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/p80Cv-0bhMs"
                title="YouTube video player"
                // @ts-ignore
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </IframeWrapper>
          </VideoLayout>
        </SplitLayout>
        <VideoLayout>
          <VideoHeading>
            "Bring Him Home" from <i>Les Misérables</i>
          </VideoHeading>
          <IframeWrapper>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_9MoT6OwE_4"
              title="YouTube video player"
              // @ts-ignore
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </IframeWrapper>
        </VideoLayout>
      </FlexContainer>
      <MediaHeading style={{ paddingTop: "6rem" }}>Media Gallery</MediaHeading>
      <FlexContainer>
        <SplitLayout>
          <FlexContainer>
            <ZoomImage
              url={masterclassImg}
              altText="Julianne Reynolds performing during masterclass."
            />
            <ZoomImage
              url={oklahomanImg}
              altText="Julianne Reynolds as Laurey in Oklahoma! interactive."
            />
          </FlexContainer>
          <div>
            <ZoomImage
              url={carouselImg}
              altText="Julianne Reynolds as Julie Jordan in Carousel."
            />
          </div>
        </SplitLayout>
        <ItemCenter style={{ alignSelf: "center", maxWidth: "75%" }}>
          <ReviewHighlight>
            "Caskey and Reynolds... establish both a crackling chemistry and
            their vocal chops with <i>If I loved You</i>... and she lifts the
            wistful <i>What's the Use of Wond'rin</i> to great heights." -{" "}
            <a
              href="https://www.oklahoman.com/story/entertainment/2022/07/08/dazzling-classic-carousel-worth-a-whirl-for-okc-musical-theater-fans/65368129007/"
              target="_blank"
              rel="noreferrer"
            >
              Brandy Mcdonnell, The Oklahoman
            </a>
          </ReviewHighlight>
        </ItemCenter>
        <ZoomImage
          url={philImg}
          altText="Julianne Reynolds performing with the Philharmonic for the fourth of july."
        />
        <SplitLayout>
          <FlexContainer>
            <ZoomImage
              url={soundImg}
              altText="Julianne Reynolds performing as a nun in the Sound of Music"
            />
          </FlexContainer>
          <div>
            <ZoomImage
              url={backstageImg}
              altText="Julianne Reynolds backstage at the Sound of Music."
            />
          </div>
        </SplitLayout>
        <ItemCenter>
          <ReviewHighlight>
            "The principal singers have soaring vocals that are powerful and
            breathtaking. Julianne Reynolds is angelic and loving as Julie
            Jordan... The vocal abilities of Caskey and Reynolds are
            unparalleled... There's no denying the talents on stage are
            unmatched anywhere, and this cast could easily be found on a
            Broadway stage." -{" "}
            <a
              href="https://www.broadwayworld.com/oklahoma/article/Review-Lyric-Theatres-CAROUSEL-Dazzles-on-the-Civic-Center-stage-20220707"
              target="_blank"
              rel="noreferrer"
            >
              Adrienne Proctor, BroadwayWorld
            </a>
          </ReviewHighlight>
        </ItemCenter>
      </FlexContainer>
      <CreditsHeading>Photo Credits</CreditsHeading>
      <CreditsList>
        <li>
          Photo by Miki Galloway for Lyric Theatre of Oklahoma's{" "}
          <i> Master Class</i> (2021) starring Natalie Cordone as Maria Callas
        </li>
        <li>
          Miki Galloway for Lyric Theatre of Oklahoma's <i>Carousel</i> (2022)
        </li>
        <li>
          Alonzo J. Adams for The Oklahoman at the OKC Phil Red White & Boom
          Independence Day Concert at Scissortail Park (2023)
        </li>
        <li>
          Miki Galloway for Lyric Theatre of Oklahoma's{" "}
          <i>The Sound of Music</i> (2023)
        </li>
        <li>
          Bailey Maxwell backstage photograph at Lyric Theatre of Oklahoma's{" "}
          <i>The Sound of Music</i> (2023)
        </li>
      </CreditsList>
    </MediaSection>
  );
};

export { Media };
