import styled from "styled-components";

export const StyledNavbar = styled.nav`
  padding: 0.75em;
  background-color: #272727;
  color: #fff;
  position: fixed;
  width: 100%;
`;

export const CenterContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 1fr));
`;

export const LeftContainer = styled.div`
  grid-column: 1/6;
`;

export const RightContainer = styled.div`
  grid-column: 6/13;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
`;

export const NavbarItem = styled.li`
  @media (max-width: 480px) {
    display: none;
  }
`;
