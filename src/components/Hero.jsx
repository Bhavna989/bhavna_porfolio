import { ArrowDown } from 'lucide-react';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Bhavana Samudrala</span>
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8">
          Frontend Developer | UI/UX Enthusiast | React Specialist
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-12">
          I create beautiful, responsive websites with modern technologies 
          to help businesses achieve their goals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#projects" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            Contact Me
          </a>
        </div>
        <div className="mt-16 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="mx-auto text-gray-500 dark:text-gray-400" size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
