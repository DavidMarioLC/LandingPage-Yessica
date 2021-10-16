import React from "react";
import { Wrapper } from "../styleGlobal";
import {
  FooterContent,
  FooterContainer,
  FooterLogo,
  FooterSocials,
  FooterSocialsItem,
} from "./styles";
const Footer = () => {
  return (
    <FooterContent>
      <Wrapper>
        <FooterContainer>
          <FooterLogo>Yessica</FooterLogo>
          <FooterSocials>
            <FooterSocialsItem>Linkedin</FooterSocialsItem>
            <FooterSocialsItem>Twitter</FooterSocialsItem>
            <FooterSocialsItem>Instagram</FooterSocialsItem>
          </FooterSocials>
        </FooterContainer>
      </Wrapper>
    </FooterContent>
  );
};

export default Footer;
