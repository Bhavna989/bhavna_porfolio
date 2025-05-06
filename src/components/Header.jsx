import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-10 bg-white shadow-md p-4 dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">
          <a href="#">Bhavana Samudrala</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <button 
            
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
    
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden pt-4 pb-2 px-2 space-y-2">
          <a 
            href="#about" 
            className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            onClick={toggleMenu}
          >
            About
          </a>
          <a 
            href="#skills" 
            className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;