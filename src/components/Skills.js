import React, { useState } from "react";
import { LeftContainer, RightContainer } from "../styles/Navbar.styles";
import {
  LeftSkills,
  RightSkills,
  SkillIcon,
  SkillsContainer,
  SkillsIcons,
  SkillsTags,
  SkillTag,
} from "../styles/Skills.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./about.css";
import { skills } from "../helpers/skills";
import { CenterContainer } from "../styles/General.styles";

export const Skills = () => {
  const [subSkills, setSubskills] = useState([]);
  const [currentSkill, setCurrentSkill] = useState("");

  const handleSubskills = (skill) => {
    setCurrentSkill(skill.id);
    subSkills && setSubskills([...skill.subSkills]);
  };
  return (
    <CenterContainer>
      <h2>Skills</h2>
      <SkillsContainer>
        <LeftSkills>
          Hover for details
          <SkillsIcons>
            {skills.map((skill) => (
              <SkillIcon key={skill.id} {...skill} currentSkill={currentSkill}>
                <FontAwesomeIcon
                  className="skillIcon"
                  onMouseEnter={() => handleSubskills(skill)}
                  icon={skill.icon}
                  size="3x"
                  title={skill.name}
                />
              </SkillIcon>
            ))}
          </SkillsIcons>
        </LeftSkills>

        <RightSkills>
          Frameworks, libraries and more...
          <SkillsTags>
            {subSkills.map(
              (skill) =>
                skill && (
                  <SkillTag
                    className="tag animate__animated animate__fadeIn"
                    key={skill.id}
                    {...skill}
                  >
                    {skill.name}
                  </SkillTag>
                )
            )}
          </SkillsTags>
        </RightSkills>
      </SkillsContainer>
    </CenterContainer>
  );
};
