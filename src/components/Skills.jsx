function Skills() {
    const skills = [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML5 & CSS3', level: 90 },
      { name: 'TypeScript', level: 75 },
      { name: 'Node.js', level: 70 },
      { name: 'UI/UX Design', level: 80 },
      { name: 'Responsive Design', level: 90 },
      { name: 'Git & GitHub', level: 85 },
    ];
  
    return (
      <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;