import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  ContactContainer,
  ContactIcon,
  ContactMeSection,
} from "../styles/ContactMe.styles";
import { CenterContainer, Subtitle } from "../styles/General.styles";

export const ContactMe = () => {
  return (
    <ContactContainer>
      <Subtitle>Contact me</Subtitle>
      <ContactMeSection>
        <ContactIcon contactIcon="github">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </ContactIcon>
        <ContactIcon contactIcon="linkedin">
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </ContactIcon>
      </ContactMeSection>
    </ContactContainer>
  );
};
