import styled from "styled-components";

const HeroContent = styled.section`
  padding: 2rem 0;
`;

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 1rem 0;
  padding-bottom: 2.5rem;

  @media screen and (min-width: 768px) {
    /* flex-direction: row; */
  }

  @media screen and (min-width: 902px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.figure`
  @media screen and (min-width: 768px) {
    /* order: 2; */
  }

  @media screen and (min-width: 902px) {
    order: 2;
  }
`;

const HeroImage = styled.img`
  max-width: 100%;
`;

const HeroInformation = styled.div`
  @media screen and (min-width: 768px) {
    flex: 1;
  }
`;

const HeroTitle = styled.h1`
  font: var(--heading-2);

  @media screen and (min-width: 768px) {
    font: var(--heading-1);
  }
`;

const HeroParagraph = styled.p`
  font: var(--heading-4);

  @media screen and (min-width: 768px) {
    font: var(--heading-3);
  }
`;

export {
  HeroContent,
  HeroContainer,
  ImageContainer,
  HeroImage,
  HeroInformation,
  HeroTitle,
  HeroParagraph,
};
