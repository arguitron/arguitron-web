import styled from "styled-components";
import { CenterContainer } from "./General.styles";
export const ContactMeSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em 0;
`;

export const ContactIcon = styled.div`
  color: ${({ contactIcon }) =>
    contactIcon === "github" ? "#000" : "#1597E5"};
  transition: 0.4s;
  margin-right: ${({ contactIcon }) => contactIcon === "github" && "2em"};
  &:hover {
    color: ${({ contactIcon }) => (contactIcon === "github" ? "red" : "green")};
  }
`;

export const ContactContainer = styled(CenterContainer)`
  text-align: center;
`;
