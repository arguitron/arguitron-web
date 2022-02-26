import React from "react";
import { AboutMe } from "./AboutMe";
import { Hero } from "./Hero";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { ContactMe } from "./ContactMe";
import { GeneralMargin } from "../styles/General.styles";

export const Resume = () => {
  return (
    <>
      <Hero />
      <GeneralMargin>
        <AboutMe />
        <Skills />
        <Projects />
      </GeneralMargin>
      <ContactMe />
    </>
  );
};
