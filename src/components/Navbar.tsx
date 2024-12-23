import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full bg-expo-black/80 backdrop-blur-md z-50 border-b border-expo-cyan/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-white font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-expo-cyan to-expo-neonPurple">
          LORD KRISHNA SCHOOL OF SCIENCE
        </div>
        <div className="hidden md:flex space-x-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#categories">Categories</NavLink>
          <NavLink href="#register">Register</NavLink>
        </div>
        <Button variant="ghost" className="md:hidden text-white hover:text-expo-cyan">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-expo-cyan transition-colors duration-200"
  >
    {children}
  </a>
);

export default Navbar;
