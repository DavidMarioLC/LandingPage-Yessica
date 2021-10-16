import styled from "styled-components";

const HeaderContent = styled.header``;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

const NavigationLogo = styled.a`
  font: var(--logo);
  color: var(--mainblack);
`;

const NavigationMenu = styled.ul`
  display: none;
  gap: 35px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const NavigationItem = styled.li``;

const NavigationLink = styled.a`
  font: var(--navigation);
  color: var(--mainblack);
`;

export {
  HeaderContent,
  Navigation,
  NavigationLogo,
  NavigationMenu,
  NavigationItem,
  NavigationLink,
};
