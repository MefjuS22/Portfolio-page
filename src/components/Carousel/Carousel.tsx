import { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { data, sliderSettings } from '../../data/CarouselData';
import { Row, Heading, Section, TextWrapper } from '../../globalStyles';
import {
  ButtonContainer,
  ReviewSlider,
  ImageWrapper,
  CarouselImage,
} from './CarouselStyles';
import { ContentButton } from '../Content/ContentStyles';
import Slider from 'react-slick';

function Carousel() {
  const sliderRef = useRef<Slider>(null);

  const carouselElements = data.map((el, index) => (
    <ImageWrapper key={index}>
      <CarouselImage src={el.image} />
      <TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
        {el.title}
      </TextWrapper>
      <TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
        {el.description}
      </TextWrapper>
      <ContentButton inverse onClick={el.onClick}>
        Check repository
      </ContentButton>
    </ImageWrapper>
  ))

  const handleLeftArrow = () => {
    sliderRef.current && sliderRef.current.slickPrev()
  }

  const handleRightArrow = () => {
    sliderRef.current && sliderRef.current.slickNext()
  }

  return (
    <Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
      <Row justify="space-between" margin="1rem" wrap="wrap">
        <Heading width="auto" inverse>
          My Projects
        </Heading>
        <ButtonContainer>
          <IconContext.Provider value={{ size: '3rem', color: '#003554' }}>
            <FaArrowLeft onClick={handleLeftArrow} />
            <FaArrowRight onClick={handleRightArrow} />
          </IconContext.Provider>
        </ButtonContainer>
      </Row>

      <ReviewSlider {...sliderSettings} ref={sliderRef}>
        {carouselElements}
      </ReviewSlider>
    </Section>
  );
}

export default Carousel;
