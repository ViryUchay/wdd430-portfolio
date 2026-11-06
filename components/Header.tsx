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
      {/* Concept 5: Next.js <Link> for INTERNAL routes */}
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </header>
  );
}