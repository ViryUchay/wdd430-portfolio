export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string; // optional — drives conditional rendering
}

export const projects: Project[] = [
  {
    id: "p1",
    title: "Portfolio Site",
    description: "A personal portfolio built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://github.com/example/portfolio",
  },
  {
    id: "p2",
    title: "Weather Dashboard",
    description: "Fetches live weather from a public API and charts the results.",
    technologies: ["React", "Chart.js", "Fetch API"],
    // no link — demonstrates the conditional rendering fallback
  },
  {
    id: "p3",
    title: "Task Tracker",
    description: "A simple CRUD app with local storage persistence.",
    technologies: ["Next.js", "TypeScript"],
    link: "https://github.com/example/task-tracker",
  },
];