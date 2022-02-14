import React from "react";
import { projects } from "../helpers/projects";
import { CenterContainer } from "../styles/General.styles";
import {
  Project,
  ProjectDescription,
  ProjectImg,
  ProjectsContainer,
  ProjectSkillTag,
  ProjectTitle,
} from "../styles/Projects.styles";

export const Projects = () => {
  return (
    <CenterContainer>
      <ProjectsContainer>
        <Project>
          <ProjectTitle>ToDo App</ProjectTitle>
          <ProjectImg />
          {projects.map((project) =>
            project.tags.map((tag) => (
              <ProjectSkillTag {...tag}>{tag.name}</ProjectSkillTag>
            ))
          )}
          <ProjectDescription>Hello this is my project.</ProjectDescription>
        </Project>
        <Project>
          <ProjectTitle>ToDo App</ProjectTitle>
          <ProjectImg />
          {projects.map((project) =>
            project.tags.map((tag) => (
              <ProjectSkillTag {...tag}>{tag.name}</ProjectSkillTag>
            ))
          )}
          <ProjectDescription>Hello this is my project.</ProjectDescription>
        </Project>
      </ProjectsContainer>
    </CenterContainer>
  );
};
