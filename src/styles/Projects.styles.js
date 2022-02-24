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
    color: ${({ targetIcon }) =>
      targetIcon === "github" ? "#000" : "#008cff"};
  }
`;

export const ProjectTitle = styled.h3``;
export const ProjectImg = styled.img.attrs(({ imgSrc }) => ({
  src: imgSrc,
}))`
  width: 100%;
  border-radius: 0.5em;
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

export const GlassContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  border-radius: 0.5em;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  transition: all 0.4s;
  &:hover {
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0)
    );
    backdrop-filter: unset;
    transition: all 0.4s;
  }
`;

export const ProjectImgContainer = styled.div`
  position: relative;
  margin-bottom: 1em;
`;

export const ProjectIcons = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const RelativeContainer = styled.div`
  position: relative;
`;
