function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="#" className="text-xl font-bold">YourName</a>
              <p className="text-gray-400 mt-1">Frontend Developer</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#about" className="hover:text-blue-400 transition duration-300">About</a>
              <a href="#skills" className="hover:text-blue-400 transition duration-300">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-6 pt-6 text-center">
            <p>&copy; {currentYear} YourName. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;