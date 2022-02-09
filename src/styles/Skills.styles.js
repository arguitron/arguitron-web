import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 1fr));
`;
export const LeftSkills = styled.div`
  grid-column: 1/6;
  display: grid;
  grid-template-columns: repeat(5, minmax(auto, 1fr));
`;

export const RightSkills = styled.div`
  grid-column: 6/13;
`;

export const SkillIcon = styled.div`
  color: ${({ iconColor }) => iconColor};
`;

export const SkillTag = styled.div`
  padding: 0.5em 1em;
  background-color: yellow;
  color: #000;
  font-weight: bold;
  border-radius: 0.5em;
  display: inline-block;
`;
