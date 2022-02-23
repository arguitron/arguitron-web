import styled from "styled-components";
import { SkillTag } from "./Skills.styles";
export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
  gap: 1.5em;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em; ;
`;
export const Project = styled.div`
  background-color: #272727;
  padding: 1.5em;
  padding-top: 1em;
  color: #fff;
  border-radius: 0.5em;
`;

export const TopIcon = styled.div`
  color: ${({ targetIcon }) => (targetIcon === "github" ? "gray" : "gray")};
  justify-content: space-between;
  display: inline-block;
  margin-left: 0.5em;
  transition: 0.4s;
  &:hover {
    color: #50d890;
  }
`;

export const ProjectTitle = styled.h3``;
export const ProjectImg = styled.img.attrs(({ imgSrc }) => ({
  src: imgSrc,
}))`
  width: 100%;
  border-radius: 0.5em;
  margin-bottom: 1em;
`;

export const ProjectSkillTag = styled(SkillTag)`
  position: relative;
  z-index: 5;
  margin-right: 0.5em;
  padding: 0.05em 0.2em;
`;

export const ProjectDescription = styled.div`
  margin-top: 1em;
`;
