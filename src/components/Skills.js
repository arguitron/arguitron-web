import React, { useState } from "react";
import { LeftContainer, RightContainer } from "../styles/Navbar.styles";
import {
  LeftSkills,
  RightSkills,
  SkillIcon,
  SkillsContainer,
  SkillTag,
} from "../styles/Skills.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./about.css";
import { skills } from "../helpers/skills";
import { CenterContainer } from "../styles/General.styles";

export const Skills = () => {
  const [subSkills, setSubskills] = useState([]);

  const handleSubskills = (subSkills) => {
    subSkills && setSubskills([...subSkills]);
  };
  return (
    <CenterContainer>
      <SkillsContainer>
        <LeftSkills>
          {skills.map((skill) => (
            <SkillIcon key={skill.id} iconColor={skill.iconColor}>
              <FontAwesomeIcon
                onClick={() => handleSubskills(skill.subSkills)}
                icon={skill.icon}
                size="3x"
              />
            </SkillIcon>
          ))}
        </LeftSkills>
        <RightSkills>
          {subSkills.map(
            (skill) => skill && <SkillTag key={skill.id}>{skill.name}</SkillTag>
          )}
        </RightSkills>
      </SkillsContainer>
    </CenterContainer>
  );
};
