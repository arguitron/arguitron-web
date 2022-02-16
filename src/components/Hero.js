import React from "react";
import {
  HeroDesc,
  HeroImg,
  HeroTitle,
  StyledHero,
} from "../styles/Hero.styles";

export const Hero = () => {
  return (
    <StyledHero>
      <HeroImg className="animate__animated animate__fadeIn" />
      <div>
        <HeroTitle className="animate__animated animate__fadeInRight">
          Hi, I'm Abel
        </HeroTitle>
        <HeroDesc className="animate__animated animate__fadeIn animate__delay-2s">
          a front end developer
        </HeroDesc>
      </div>
    </StyledHero>
  );
};
