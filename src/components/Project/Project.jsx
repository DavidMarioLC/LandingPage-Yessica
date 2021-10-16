import { Button } from "../styleGlobal";
import {
  ProjectContent,
  ProjectContainer,
  ProjectImageContainer,
  ProjectImage,
  ProjectTitle,
  ProjectInfo,
  ProjectParagraph,
  ProjectButtons,
} from "./styles";

function Project({ title, paragraph, image }) {
  return (
    <ProjectContent>
      <ProjectContainer>
        <ProjectImageContainer>
          <ProjectImage src={image} />
        </ProjectImageContainer>
        <ProjectInfo>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectParagraph>{paragraph}</ProjectParagraph>
          <ProjectButtons>
            <Button as="a" href="#" primary>
              Ver en la web
            </Button>
            <Button as="a" href="#" secondary>
              Ver prototipo
            </Button>
          </ProjectButtons>
        </ProjectInfo>
      </ProjectContainer>
    </ProjectContent>
  );
}

export default Project;
