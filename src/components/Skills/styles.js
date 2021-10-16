import styled from "styled-components";

export const SkillsContent = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 2.5rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 2rem;
  }
`;

export const SkillTitle = styled.h4`
  margin: 0;
  text-decoration: underline;
  @media screen and (min-width: 768px) {
    /* flex: 1; */
  }
`;

export const SkillParagraph = styled.p`
  @media screen and (min-width: 768px) {
    flex: 1;
    max-width: 500px;
  }
`;
