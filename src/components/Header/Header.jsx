import React from "react";
import { Wrapper } from "../styleGlobal";
import {
  HeaderContent,
  Navigation,
  NavigationLogo,
  NavigationMenu,
  NavigationItem,
  NavigationLink,
} from "./styles";

const Header = () => {
  return (
    <HeaderContent>
      <Wrapper>
        <Navigation>
          <NavigationLogo href="#">Yessica</NavigationLogo>
          <NavigationMenu>
            <NavigationItem>
              <NavigationLink href="#project">Proyectos</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink href="#skill">
                Habilidades y herramientas
              </NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink href="#contact">Contacto</NavigationLink>
            </NavigationItem>
          </NavigationMenu>
        </Navigation>
      </Wrapper>
    </HeaderContent>
  );
};

export default Header;
