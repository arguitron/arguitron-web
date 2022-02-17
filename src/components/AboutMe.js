import React from "react";
import {
  AboutContainer,
  AboutMeBlob,
  AboutMeDesc,
  AboutMeImg,
  AboutMeImgContainer,
  AboutMeName,
  PresentationCard,
} from "../styles/AboutMe.styles";
import "./about.css";

export const AboutMe = () => {
  return (
    <AboutContainer>
      <PresentationCard>
        <h2>About me</h2>
        <AboutMeImgContainer>
          <AboutMeBlob />

          <AboutMeImg />
        </AboutMeImgContainer>

        <AboutMeName>Abel Resendiz Guitron</AboutMeName>
        <AboutMeDesc>
          I'm a passionate developer graduated from Instituto Politécnico
          Nacional (IPN). Currently I'm investing my time to master Javascript,
          but I also learnt some other programming languages from college.
        </AboutMeDesc>
      </PresentationCard>
    </AboutContainer>
  );
};
