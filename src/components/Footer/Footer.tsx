import React from "react";
import {
  FooterAddress,
  FooterColumn,
  FooterGrid,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterRights,
  FooterSocialIcon,
  FooterWrapper,
} from "./FooterStyles";
import { footerSocialData } from "../../data/FooterData";
import { Row, Section } from "../../globalStyles";

function Footer() {
  return (
    <Section padding="4rem 0 2rem 0">
      <FooterWrapper>
        <FooterGrid>
          <FooterColumn>
            <FooterAddress>
              Mateusz Smyda<br></br>
              Kraków <br></br>
              Polska
            </FooterAddress>
            <Row align="center" margin="auto 0 0 0" gap="1rem">
              {footerSocialData.map((social, index) => (
                <FooterSocialIcon
                  key={index}
                  href={social.link}
                  target="_blank"
                  aria-label={social.name}
                >
                  {social.icon}
                </FooterSocialIcon>
              ))}
            </Row>
          </FooterColumn>
          <FooterColumn>
            <FooterLinkItems>
              <FooterLinkTitle>Menu</FooterLinkTitle>
              <FooterLink
                to={"/portfolio-page/"}
                onClick={() => window.scrollTo(0, 0)}
              >
                Home
              </FooterLink>
              <FooterLink
                to={"/portfolio-page/Contact"}
                onClick={() => window.scrollTo(0, 0)}
              >
                Contact
              </FooterLink>
            </FooterLinkItems>
          </FooterColumn>
        </FooterGrid>
        <FooterRights>Mateusz Smyda 2022</FooterRights>
      </FooterWrapper>
    </Section>
  );
}

export default Footer;
