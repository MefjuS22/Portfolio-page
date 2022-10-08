import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src={require("./Video.mp4")} autoPlay muted></HeroVideo>
      <Container>
        <MainHeading>
          My name is Mateusz and I am a Front-End Developer
        </MainHeading>
        <HeroText>
          I code in ReactJS with TypeScript and Styled Compontns
        </HeroText>
        <ButtonWrapper>
          <Link to="contact">
            <Button>Contact me!</Button>
          </Link>
          <HeroButton onClick={()=> window.scrollTo({top: window.innerHeight, behavior:"smooth"})}>Learn more</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
