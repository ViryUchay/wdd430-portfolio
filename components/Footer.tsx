export default function Footer() {
  const currentYear = new Date().getFullYear(); // Move it out here

  return (
    <footer className="bg-gray-800 text-white py-4 mt-12">
      <div className="container mx-auto text-center">
        <p>Copyright &copy; {currentYear} | Vivian Eze | All rights reserved</p>
      </div>
    </footer>
  );
}