import React from "react";
import heroImage from "../../images/hero-image.png";
import { Button } from "../styleGlobal";
import {
  HeroContent,
  HeroContainer,
  ImageContainer,
  HeroImage,
  HeroInformation,
  HeroTitle,
  HeroParagraph,
} from "./styles";
function Hero() {
  return (
    <HeroContent>
      <HeroContainer>
        <ImageContainer>
          <HeroImage src={heroImage} />
        </ImageContainer>
        <HeroInformation>
          <HeroTitle>¡Hola! 👋🏼 Soy Yessica, UX/UI Designer</HeroTitle>
          <HeroParagraph>
            Soy una diseñadora de productos e interacción independiente y
            centrada en aplicaciones móviles innovadoras, aplicaciones web y
            tecnología del futuro.
          </HeroParagraph>
          <Button primary>Descargar currículum</Button>
        </HeroInformation>
      </HeroContainer>
    </HeroContent>
  );
}

export default Hero;
