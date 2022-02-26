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
        <ContactIcon
          contactIcon="github"
          contactURL="https://github.com/arguitron"
        >
          <FontAwesomeIcon title="github" icon={faGithub} size="3x" />
        </ContactIcon>
        <ContactIcon
          contactIcon="linkedin"
          contactURL="https://www.linkedin.com/in/abel-resendiz-guitron-342486224/"
        >
          <FontAwesomeIcon title="linkedin" icon={faLinkedin} size="3x" />
        </ContactIcon>
      </ContactMeSection>
    </ContactContainer>
  );
};
