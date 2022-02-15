import React from "react";
import { projects } from "../helpers/projects";
import { CenterContainer } from "../styles/General.styles";
import {
  Project,
  ProjectDescription,
  ProjectHeader,
  ProjectImg,
  ProjectsContainer,
  ProjectSkillTag,
  ProjectTitle,
  TopIcon,
} from "../styles/Projects.styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

import { faEye } from "@fortawesome/free-solid-svg-icons";

export const Projects = () => {
  return (
    <CenterContainer>
      <ProjectsContainer>
        {projects.map((project) => (
          <Project key={project.id}>
            <ProjectHeader>
              <ProjectTitle>{project.title}</ProjectTitle>
              <div>
                <TopIcon targetIcon="github">
                  <FontAwesomeIcon icon={faGithubSquare} size="lg" />
                </TopIcon>
                <TopIcon targetIcon="watch">
                  <FontAwesomeIcon icon={faEye} size="lg" />
                </TopIcon>
              </div>
            </ProjectHeader>

            <ProjectImg imgSrc={project.src} />
            {project.tags.map((tag) => (
              <ProjectSkillTag key={tag.id} {...tag}>
                {tag.name}
              </ProjectSkillTag>
            ))}
            <ProjectDescription>{project.desc}</ProjectDescription>
          </Project>
        ))}
      </ProjectsContainer>
    </CenterContainer>
  );
};
