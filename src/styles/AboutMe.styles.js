import styled from "styled-components";
import blob from "../assets/blob.svg";
import io from "../assets/io.png";
export const AboutContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  @media (max-width: 525px) {
    width: 290px;
  }
`;

export const PresentationCard = styled.div`
  margin-bottom: 2.5em;
  text-align: center;
  position: relative;
  border-bottom: 5px solid #50d890;
  z-index: -1;
`;

export const AboutMeImgContainer = styled.div`
  position: relative;
  margin-top: 40px;
`;

export const AboutMeBlob = styled.img.attrs({
  src: blob,
})`
  width: 350px;
  position: absolute;
  right: 70px;
  top: -42px;

  @media (max-width: 525px) {
    right: -33px;
  }
`;

export const AboutMeImg = styled.img.attrs({
  src: io,
})`
  position: relative;
`;

export const AboutMeName = styled.h3`
  margin: 0.5em 0;
`;

export const AboutMeDesc = styled.p`
  padding-bottom: 0.5em;
`;
