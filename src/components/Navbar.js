import React from "react";
import {
  CenterContainer,
  LeftContainer,
  NavbarItem,
  RightContainer,
  StyledNavbar,
} from "../styles/Navbar.styles";

export const Navbar = () => {
  return (
    <>
      <StyledNavbar className="animate__animated animate__fadeIn">
        <CenterContainer>
          <LeftContainer>AR Guitron</LeftContainer>
          <RightContainer>
            <NavbarItem>About me</NavbarItem>
            <NavbarItem>Skills</NavbarItem>
            <NavbarItem>Experience</NavbarItem>
          </RightContainer>
        </CenterContainer>
      </StyledNavbar>
    </>
  );
};
