import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 1fr));
  gap: 3em;
`;
export const LeftSkills = styled.div`
  grid-column: 1/6;
  /* display: grid;
  grid-template-columns: repeat(5, minmax(auto, 1fr));
  gap: 0.5em; */
`;

export const SkillsIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(auto, 1fr));
  gap: 0.5em;
`;

export const RightSkills = styled.div`
  grid-column: 6/13;
  /* box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2); */
  /* padding: 1.5em;
  border-radius: 0.5em;
  min-height: 160px;
  background-color: #272727; */
`;

export const SkillsTags = styled.div`
  padding: 1.5em;
  border-radius: 0.5em;
  min-height: 160px;
  background-color: #272727;
`;

export const SkillIcon = styled.div`
  color: ${({ currentSkill, id, iconColor }) =>
    currentSkill === id ? iconColor : "#000"};
  &:hover {
    background-color: transparent;
    color: ${({ iconColor }) => iconColor};
  }
  text-align: center;
  border-radius: 100%;
  transition: color 0.4s;
  max-height: 0;
`;

export const SkillTag = styled.div`
  padding: 0.25em 0.5em;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  font-weight: bold;
  display: inline-block;
  font-size: 0.9rem;
`;
