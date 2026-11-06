import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectList() {
  return (
    <section>
      <h1>My Projects</h1>

      {/* Concept 3: iterate with map(), spread each project into <ProjectCard>,
          and use the stable `id` as the key (not the array index) */}
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </section>
  );
}