import React from "react";
import { PresentationCard } from "../styles/AboutMe.styles";
import { CenterContainer } from "../styles/General.styles";
import "./about.css";

export const AboutMe = () => {
  return (
    <CenterContainer>
      <PresentationCard>
        <div className="presentation-img">
          <img className="blob" src="/assets/blob-haikei2.svg" alt="blob" />
          <img className="me" src="/assets/io.png" alt="me" />
        </div>
        <div>
          <h3>Abel Resendiz Guitron</h3>
          <p>Una descripción muy chida</p>
        </div>
      </PresentationCard>
    </CenterContainer>
  );
};
