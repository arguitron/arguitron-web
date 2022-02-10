import React from "react";
import { PresentationCard } from "../styles/AboutMe.styles";
import { CenterContainer } from "../styles/General.styles";
import "./about.css";

export const AboutMe = () => {
  return (
    <CenterContainer>
      <PresentationCard>
        <div className="presentation-img">
          <img className="me" src="/assets/io.png" alt="me" />
        </div>
        <div>
          <h3>Abel Resendiz Guitron</h3>
          <p>
            I'm a passionate developer graduated from Instituto Politécnico
            Nacional (IPN). Currently I'm investing my time to master
            Javascript, but I also learnt some other programming languages from
            college.
          </p>
        </div>
      </PresentationCard>
    </CenterContainer>
  );
};
