import styled from "styled-components";

export const ContactMeSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em 0;
`;

export const ContactIcon = styled.div`
  color: ${({ contactIcon }) => (contactIcon === "github" ? "#000" : "blue")};
  transition: 0.4s;
  margin-right: ${({ contactIcon }) => contactIcon === "github" && "2em"};
  &:hover {
    color: ${({ contactIcon }) => (contactIcon === "github" ? "red" : "green")};
  }
`;