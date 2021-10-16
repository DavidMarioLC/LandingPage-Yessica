import { SkillsContent, SkillTitle, SkillParagraph } from "./styles";

const Skills = ({ title, list }) => {
  return (
    <SkillsContent>
      <SkillTitle>{title}</SkillTitle>
      <SkillParagraph>{list}</SkillParagraph>
    </SkillsContent>
  );
};

export default Skills;
