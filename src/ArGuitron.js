import React from "react";
import { AboutMe } from "./components/AboutMe";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

export const ArGuitron = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
    </>
  );
};
