"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "2rem",
        color: "#6b7b8f",
        fontSize: "0.9rem",
      }}
    >
      © {year ?? "----"} My Site
    </footer>
  );
}
