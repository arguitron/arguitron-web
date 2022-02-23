import styled from "styled-components";
import { CenterContainer } from "./General.styles";

export const SkillsContainer = styled(CenterContainer)`
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 1fr));
  gap: 1.5em;
  @media (max-width: 900px) {
    grid-template-columns: repeat(1, minmax(auto, 1fr));
  }
`;
export const LeftSkills = styled.div`
  grid-column: 1/6;
  @media (max-width: 900px) {
    grid-column: auto;
    margin-bottom: 4em;
  }
`;

export const SkillsIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(auto, 1fr));
  gap: 0.5em;
  margin-top: 0.75em;
`;

export const RightSkills = styled.div`
  grid-column: 7/13;
  @media (max-width: 900px) {
    grid-column: auto;
  }
`;

export const SkillsTags = styled.div`
  padding: 1.5em;
  border-radius: 0.5em;
  min-height: 160px;
  background-color: #272727;
  margin-top: 0.75em;
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

export const SkillSubtitle = styled.div`
  border: 1px solid #50d890;
  background-color: #50d890;
  padding: 0.25em 0.5em;
  display: inline-block;
  color: #fff;
  border-radius: 0.5em 0 0.5em 0;
`;
