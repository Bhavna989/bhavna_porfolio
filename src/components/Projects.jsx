import image1 from '../assets/images/image1.png';
function Projects() {
    const projects = [
      {
        title: 'Dynamic Gallery',
        description: 'This gallery showcases various tasks completed during my course. Each project demonstrates different web development skills and techniques.',
        image: image1,
        tags: ['HTML', 'CSS', 'JavaScript', 'Json', 'Boot Strap'],
        liveLink: 'https://bhavna989.github.io/dynamic_gallery',
        githubLink: 'https://github.com/Bhavna989/dynamic_gallery.git',
      },
      
    ];
  
    return (
      <section id="projects" className="py-16 bg-white dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:scale-105 dark:bg-gray-800"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 dark:text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-black font-medium dark:text-gray-300 dark:hover:text-white"
                    >
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;