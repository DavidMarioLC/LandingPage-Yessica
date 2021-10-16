import styled from "styled-components";

export const FooterContent = styled.footer``;

export const FooterContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: 2rem;
  }
`;

export const FooterLogo = styled.p`
  font: var(--logo);
`;

export const FooterSocials = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  font: var(--navigationFooter);
`;

export const FooterSocialsItem = styled.li``;
