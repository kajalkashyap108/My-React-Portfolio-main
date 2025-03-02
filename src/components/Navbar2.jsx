import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 w-full fixed top-0 left-0 z-50 border-none shadow-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-2xl font-bold">Logo</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link> 
          <Link to="/Education" className="hover:text-gray-300">Education</Link>
          <Link to="/Technologies" className="hover:text-gray-300">Technologies</Link>
          <Link to="/Projects" className="hover:text-gray-300">Projects</Link>
          <Link to="/services" className="hover:text-gray-300">Services</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link> 
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 p-4 flex flex-col space-y-4 w-full absolute left-0 top-16">
          <Link to="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/Education" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Education</Link>
          <Link to="/Technologies" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Technologies</Link>
          <Link to="/Projects" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/services" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/contact" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
