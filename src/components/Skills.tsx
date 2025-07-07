import React from 'react';
import { Code, Database, Globe, Wrench, Palette, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "HTML5 & CSS3", level: 90 },
        { name: "Bootstrap", level: 90 },
        { name: "Responsive Design", level: 90 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "React.js", level: 80 },
        
        
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 90 },
        { name: "RESTful APIs", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "SQL Databases", level: 75 },
        { name: "Authentication", level: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Postman", level: 80 },
        { name: "npm", level: 85 },
        
      ]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: [
        { name: "HTTP/HTTPS", level: 80 },
        { name: "JSON", level: 85 },
        { name: "AJAX/Fetch API", level: 80 },
    
      ]
    },
    {
      title: "Design & UX",
      icon: Palette,
      skills: [
        { name: "UI/UX Principles", level: 75 },
        { name: "Figma", level: 90 },
        { name: "Color Theory", level: 80 },
        { name: "Typography", level: 75 },
        { name: "Accessibility", level: 70 }
      ]
    },
    {
      title: "Security & Testing",
      icon: Shield,
      skills: [
        { name: "JWT Authentication", level: 80 },
        { name: "Data Validation", level: 85 },
        { name: "API Security", level: 75 },
        { name: "Code Review", level: 80 }
      ]
    }
  ];

  const getBarColor = (level: number) => {
    if (level >= 85) return 'from-green-500 to-emerald-500';
    if (level >= 75) return 'from-blue-500 to-indigo-500';
    if (level >= 65) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  return (
    <section id="skills" className="py-20 bg-white/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels 
              across various technologies and development tools.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/20"
              >
                {/* Category Header */}
                <div className="p-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <category.icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold">{category.title}</h3>
                  </div>
                </div>

                {/* Skills List */}
                <div className="p-6 space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-700">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-slate-600">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${getBarColor(skill.level)} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Always Learning, Always Growing
              </h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Technology evolves rapidly, and so do I. I'm constantly learning new technologies, 
                improving my existing skills, and staying up-to-date with industry best practices 
                to deliver the best possible solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['Continuous Learning', 'Team Collaboration', 'Agile Development'].map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;