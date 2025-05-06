import image2 from '../assets/images/image2.jpeg';
function About() {
    return (
      <section id="about" className="py-16 bg-white dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img 
                  src={image2}
                  alt="Your Name" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-lg mb-4">
                Hello! I'm a passionate frontend developer with expertise in React and modern JavaScript. 
                With 3 years of experience in building web applications, I've developed a keen eye for design 
                and a strong understanding of user experience principles.
              </p>
              <p className="text-lg mb-4">
                My journey in web development started at Capgemini. Since then, 
                I've worked with various companies and clients to deliver high-quality, 
                performant web applications that solve real-world problems.
              </p>
              <p className="text-lg mb-6">
                When I'm not coding, you can find me painting.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/Resume SB.pdf"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                >
                  Download Resume
                </a>
                <a 
                  href="https://github.com/Bhavna989" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-black text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                >
                  GitHub Profile
                </a>
                <a 
                  href="https://www.linkedin.com/in/bhavana-samudrala-406a4822a/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;