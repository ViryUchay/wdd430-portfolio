import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-8">
        This about page shares more information about my background and work.
        I&apos;m currently studying web development and building full-stack
        applications with Next.js, React, and TypeScript.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <SkillCard
          category="Frontend"
          skills={["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]}
        />
        <SkillCard
          category="Backend & Tools"
          skills={["Node.js", "Next.js", "TypeScript", "Git", "GitHub"]}
        />
      </div>
    </main>
  );
}