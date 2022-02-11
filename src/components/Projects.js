import React from "react";
import { projects } from "../helpers/projects";
import {
  Project,
  ProjectGradient,
  ProjectImg,
  ProjectsSection,
} from "../styles/Projects.styles";
import { SkillTag } from "../styles/Skills.styles";

export const Projects = () => {
  return (
    <ProjectsSection>
      <Project>
        <ProjectGradient />
        <ProjectImg />
        {projects.map((project) =>
          project.tags.map((tag) => <SkillTag {...tag}>{tag.name}</SkillTag>)
        )}
      </Project>
    </ProjectsSection>
  );
};
