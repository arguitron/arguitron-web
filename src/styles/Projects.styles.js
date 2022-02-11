import styled from "styled-components";

export const ProjectsSection = styled.div`
  padding: 1.5em;
  border: 1px solid black;
`;
export const Project = styled.div`
  position: relative;
  overflow: hidden;
`;
export const ProjectImg = styled.img.attrs({
  src: "/assets/projects/todoApp.png",
})`
  display: absolute;
  z-index: -10;
  width: 100%;
`;

export const ProjectGradient = styled.div`
  background-image: linear-gradient(0deg, #0703f0, transparent);
  width: 100%;
  height: 100%;
  position: absolute;
`;
