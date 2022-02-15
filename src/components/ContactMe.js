import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { ContactIcon, ContactMeSection } from "../styles/ContactMe.styles";

export const ContactMe = () => {
  return (
    <ContactMeSection>
      <ContactIcon contactIcon="github">
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </ContactIcon>
      <ContactIcon contactIcon="linkedin">
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </ContactIcon>
    </ContactMeSection>
  );
};
