import styled from "styled-components";

export const ProjectContent = styled.section``;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 128px;
  }
`;

export const ProjectImageContainer = styled.picture`
  @media screen and (min-width: 768px) {
    order: 2;
    flex: 1;
  }
`;

export const ProjectImage = styled.img`
  max-width: 100%;
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    flex: 1;
  }
`;

export const ProjectTitle = styled.h3`
  margin: 0;
  font: var(--heading-5);
  color: var(--mainblack);
  margin-top: 1rem;
`;

export const ProjectParagraph = styled.p`
  margin: 0;
  font: var(--sub-text);
  color: var(--maingray);
`;

export const ProjectButtons = styled.div`
  display: flex;
  gap: 1rem;
`;
