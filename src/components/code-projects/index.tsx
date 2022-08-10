import { Project } from "../../types/Project";
import { CodeProject } from "../code-project";

interface CodeProjectsProps {
  projects: Project[];
}

export const CodeProjects = (props: CodeProjectsProps) => {
  const { projects } = props;

  const ProjectList = projects.map((project, i) => (
    <CodeProject
      key={i}
      project={project}
    />
  ));

  return <div className="mainContainer codeProjects">{ProjectList}</div>;
};
