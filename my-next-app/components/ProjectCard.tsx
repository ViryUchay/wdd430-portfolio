interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article style={cardStyle}>
      <h2 style={{ marginTop: 0 }}>{title}</h2>
      <p>{description}</p>
      <ul style={{ paddingLeft: "1.2rem" }}>
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project →
        </a>
      )}
    </article>
  );
}

const cardStyle: React.CSSProperties = {
  border: "1px solid #e3e8ef",
  borderRadius: 12,
  padding: "1rem 1.25rem",
  background: "#fff",
  boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
  marginBottom: "1rem",
};
