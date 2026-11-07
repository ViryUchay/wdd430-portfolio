interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
      <h3 className="text-lg font-semibold mb-2 text-blue-700">{category}</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}