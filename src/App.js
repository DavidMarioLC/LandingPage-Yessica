import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Title from "./components/Title/Title";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import {
  ListProject,
  Divide,
  Wrapper,
  DecorationOne,
} from "./components/styleGlobal";

import project01 from "./images/project-01.png";
import project02 from "./images/project-02.png";
import project03 from "./images/project-03.png";

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <Hero />
        <Title value="Proyectos" />
        <ListProject>
          <Project
            title="Landing Page de Pruebas Remotas"
            paragraph="Aprende a construir una eficiente y bonita Landing Page que puedes aplicar para todo tipo de proyecto personal."
            image={project01}
          />
          <Divide />
          <Project
            title="Cards de precios"
            paragraph="Una sección de precios es importante en todo tipo de plataforma, en este ejercicio podrás practicar creando Cards de precios para Dektop y Mobile, dándoles un estilo visual simple y hermoso. "
            image={project02}
          />
          <Divide />
          <Project
            title="Sector"
            paragraph="Sector es una aplicación que se encarga en la venta de tablas de skate de la más alta calidad, complementos, ruedas y accesorios."
            image={project03}
          />
          <Divide />
        </ListProject>
        <Title value="Habilidades y herramientas" />
        <Skills
          title="Habilidades principales"
          list="User Research, Wireframing, Architecture Information, Visual Design, Prototyping, Usability, Design Thinking."
        />
        <Skills
          title="Habilidades principales"
          list="Sketch, Invision, Protopie, Proto.io, Adobe Photoshop, Adobe Illustrator, Adobe Premiere, WordPress."
        />
        <Contact
          id="contact"
          title="Estoy encantada de responder a su próximo proyecto."
          email="yessica@gmail.com"
        />
      </Wrapper>
      <Footer />

      <DecorationOne />
    </>
  );
}

export default App;
