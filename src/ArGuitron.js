import React from "react";
import { AboutMe } from "./components/AboutMe";
import { ContactMe } from "./components/ContactMe";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { GeneralMargin } from "./styles/General.styles";

export const ArGuitron = () => {
  return (
    <>
      <Navbar />
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
