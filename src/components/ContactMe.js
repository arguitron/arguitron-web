import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { ContactIcon, ContactMeSection } from "../styles/ContactMe.styles";
import { CenterContainer } from "../styles/General.styles";

export const ContactMe = () => {
  return (
    <CenterContainer>
      <h2>Contact me</h2>
      <ContactMeSection>
        <ContactIcon contactIcon="github">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </ContactIcon>
        <ContactIcon contactIcon="linkedin">
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </ContactIcon>
      </ContactMeSection>
    </CenterContainer>
  );
};
