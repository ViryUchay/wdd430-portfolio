"use client";

import { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects);
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <h1>Projects (Client Component)</h1>
      <p style={{ color: "#6b7b8f", fontSize: "0.9rem" }}>
        Fetched at runtime from <code>/api/projects</code> using
        <code> useEffect </code> + <code> fetch </code>.
      </p>
      {loading ? (
        <p>Loading…</p>
      ) : (
        projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))
      )}
    </section>
  );
}
