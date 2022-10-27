import React from "react";
import { Container, Section } from "../../globalStyles";
import {
  FeatureTitle,
  FeatureColumn,
  FeatureImageWrapper,
  FeatureName,
  FeatureTextWrapper,
  FeatureWrapper,
} from "./FeaturesStyles";
import { featuresData } from "../../data/FeaturesData";

function Features() {
  const initial = {
    y: 40,
    opacity: 0,
  };
  const animate = {
    y: 0,
    opacity: 1,
  };

  return (
    <Section smPadding="50px 10px" position="relative" inverse id="about">
      <Container>
        <FeatureTextWrapper>
          <FeatureTitle>What I work with</FeatureTitle>
        </FeatureTextWrapper>
        <FeatureWrapper>
          {featuresData.map((el, index) => (
            <FeatureColumn
              initial={initial}
              animate={animate}
              transition={{ duration: 0.5 + index * 0.1 }}
              key={index}
            >
              <FeatureImageWrapper>{el.icon}</FeatureImageWrapper>
              <FeatureName>{el.name}</FeatureName>
            </FeatureColumn>
          ))}
        </FeatureWrapper>
      </Container>
    </Section>
  );
}

export default Features;
