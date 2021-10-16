import styled from "styled-components";

export const ContactContent = styled.section`
  padding-bottom: 2.5rem;
`;

export const ContactTitle = styled.h4`
  font: var(--heading-2);
  color: var(--mainblack);

  @media screen and (min-width: 768px) {
    max-width: 700px;
  }
`;

export const ContactEmail = styled.a`
  font: var(--heading-3);
  color: var(--brown);
`;
