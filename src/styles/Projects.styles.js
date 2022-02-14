import styled from "styled-components";
import { SkillTag } from "./Skills.styles";
export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
  gap: 1.5em;
`;
export const Project = styled.div`
  background-color: #272727;
  padding: 1.5em;
  color: #fff;
  border-radius: 0.5em; ;
`;

export const ProjectTitle = styled.h3``;
export const ProjectImg = styled.img.attrs({
  src: "/assets/projects/todoApp.png",
})`
  width: 100%;
`;

export const ProjectSkillTag = styled(SkillTag)`
  position: relative;
  z-index: 5;
`;

export const ProjectDescription = styled.div``;
