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
      <HeroImg />
      <div>
        <HeroTitle className="animate__animated animate__fadeIn">
          Hi, I'm Abel
        </HeroTitle>
        <HeroDesc className="animate__animated animate__fadeInLeft animate__delay-1s">
          a front end developer
        </HeroDesc>
      </div>
    </StyledHero>
  );
};
