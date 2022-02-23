import styled from "styled-components";

export const StyledHero = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  margin-bottom: 2em;
  z-index: -1;
`;

export const HeroTitle = styled.h1`
  font-size: 6rem;
  animation-duration: 2s;
`;

export const HeroDesc = styled.p`
  font-size: 2rem;
  border-bottom: 5px solid #50d890;
  color: #272727;
  display: inline-block;
  padding: 0.2em;
`;

export const HeroImg = styled.img.attrs({
  src: "/assets/herobg4.svg",
})`
  position: absolute;
  min-width: 100%;
  z-index: -1;
  animation-duration: 2s;
  top: 0;
`;
