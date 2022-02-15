import styled from "styled-components";

export const StyledHero = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  margin-bottom: 2em;
`;

export const HeroTitle = styled.h1`
  font-size: 6rem;
  animation-duration: 1.5s;
`;

export const HeroDesc = styled.p`
  font-size: 2rem;
`;

export const HeroImg = styled.img.attrs({
  src: "/assets/herobg4.svg",
})`
  position: absolute;
  width: 100%;
  z-index: -1;
`;
