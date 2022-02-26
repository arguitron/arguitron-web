import React, { useState } from "react";
import { projects } from "../helpers/projects";
import { CenterContainer, Subtitle } from "../styles/General.styles";
import {
  GlassContainer,
  Project,
  ProjectDescription,
  ProjectHeader,
  ProjectIcons,
  ProjectImg,
  ProjectImgContainer,
  ProjectsContainer,
  ProjectSkillTag,
  ProjectTitle,
  RelativeContainer,
  TopIcon,
} from "../styles/Projects.styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

import { faEye } from "@fortawesome/free-solid-svg-icons";

export const Projects = () => {
  return (
    <CenterContainer>
      <Subtitle>Projects</Subtitle>
      <ProjectsContainer>
        {projects.map((project) => (
          <Project key={project.id}>
            <ProjectHeader>
              <ProjectTitle>{project.title}</ProjectTitle>
            </ProjectHeader>
            <ProjectImgContainer>
              <ProjectImg imgSrc={project.src} />

              <GlassContainer />
              <ProjectIcons>
                <TopIcon targetIcon="github" targetURL={project.githubURL}>
                  <FontAwesomeIcon icon={faGithubSquare} size="3x" />
                </TopIcon>
                <TopIcon targetIcon="watch" targetURL={project.webpageURL}>
                  <FontAwesomeIcon icon={faEye} size="3x" />
                </TopIcon>
              </ProjectIcons>
            </ProjectImgContainer>
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
