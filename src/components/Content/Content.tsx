import React, { useEffect } from 'react';
import { Container, Section } from '../../globalStyles';
import {
  ContentRow,
  ContentButton,
  ContentColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Img,
  ImgWrapper,
} from './ContentStyles';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const initial = {
  opacity: 0,
  y: 30,
};

interface types {
  topLine?: {
    text: string;
  };
  headline?: string;
  description?: string;
  buttonLabel?: string;
  img: string;
  alt?: string;
  inverse?: boolean;
  reverse?: boolean;
  linkTo?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
function Content({
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  inverse,
  reverse,
  onClick,
}: types) {
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

 const button = buttonLabel && (
  <ContentButton
    initial={initial}
    transition={{ delay: 1, duration: 0.6 }}
    animate={animation}
    inverse={inverse}
    onClick={onClick}
  >
    {buttonLabel}
  </ContentButton>
)

  return (
    <Section inverse={inverse} ref={ref}>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <TopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                {topLine?.text}
              </TopLine>
              <Heading
                initial={initial}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                {headline}
              </Heading>
              <Subtitle
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                {description}
              </Subtitle>
              {button}
            </TextWrapper>
          </ContentColumn>
          <ContentColumn
            initial={initial}
            transition={{ delay: 0.5, duration: 0.6 }}
            animate={animation}
          >
            <ImgWrapper>
              <Img
                src={img}
                alt={alt}
                whileHover={{ rotate: 3, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
            </ImgWrapper>
          </ContentColumn>
        </ContentRow>
      </Container>
    </Section>
  );
}

export default Content;
