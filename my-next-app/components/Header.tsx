import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        gap: "1.5rem",
        alignItems: "center",
        padding: "1rem 2rem",
        borderBottom: "1px solid #e3e8ef",
        background: "#fff",
      }}
    >
      <strong>My Site</strong>
      <Link href="/">Home (Server)</Link>
      <Link href="/projects">Projects (Client)</Link>
      <Link href="/about">About</Link>
    </header>
  );
}
