import { Project } from "../../types/Project";
import { CodeProject } from "./CodeProject";

interface CodeProjectsProps {
  projects: Project[];
}

export const CodeProjects = (props: CodeProjectsProps) => {
  const {
    projects
  } = props;
  
  const ProjectList = projects.map((project, i) => (
    <CodeProject
      key={i}
      project={project}
    />
  ));

  return (
    <div className="mainContainer">
      {ProjectList}
    </div>
  );
};