import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectList() {
  return (
    <section>
      <h1>My Projects</h1>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </section>
  );
}
