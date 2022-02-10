import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 1fr));
  gap: 3em;
`;
export const LeftSkills = styled.div`
  grid-column: 1/6;
  display: grid;
  grid-template-columns: repeat(5, minmax(auto, 1fr));
  gap: 0.5em;
`;

export const RightSkills = styled.div`
  grid-column: 6/13;
  background-color: #362706;
  padding: 1.5em;
  border-radius: 0.5em;
  min-height: 160px;
`;

export const SkillIcon = styled.div`
  color:${({ currentSkill, id, iconColor }) =>
    currentSkill === id ? iconColor : "#000"};
  &:hover {
    background-color: transparent;
    color: ${({ iconColor }) => iconColor};
  }
  text-align: center;
  border-radius: 100%
  transition: color 2s;
  max-height: 0;
  
`;

export const SkillTag = styled.div`
  padding: 0.5em 1em;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  font-weight: bold;
  border-radius: 0.5em;
  display: inline-block;
`;
