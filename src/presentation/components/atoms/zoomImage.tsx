import styled from "@emotion/styled";
import { zoom } from "@nishanths/zoom.js";
import { useRef } from "react";

const ImageLayout = styled.img`
  width: 100%;
`;

interface ZoomImageProps {
  url: string;
  altText: string;
}

const ZoomImage = (props: ZoomImageProps) => {
  const { url, altText } = props;
  const ref = useRef(url);
  return (
    <ImageLayout
      // @ts-ignore
      ref={ref}
      src={url}
      alt={altText}
      className="zoom-cursor"
      // @ts-ignore
      onClick={() => zoom(ref.current)}
    />
  );
};

export { ZoomImage };
