export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "2rem",
        color: "#6b7b8f",
        fontSize: "0.9rem",
      }}
    >
      © {new Date().getFullYear()} My Site
    </footer>
  );
}