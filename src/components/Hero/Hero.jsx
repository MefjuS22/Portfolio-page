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
import video from "./Video.mp4";

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src={video} type="video/mp4" autoPlay muted></HeroVideo>
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
          <HeroButton>Learn more</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
