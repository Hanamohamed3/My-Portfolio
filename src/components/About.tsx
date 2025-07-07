import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
    icon: Globe,
    title: "Full Stack Development",
    description: "Creating complete, end-to-end web solutions."
  },
  {
    icon: Code,
    title: "Frontend Development",
    description: "Building responsive, interactive UIs with modern React."
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Designing secure APIs and scalable data systems."
  },
  
  {
    icon: Zap,
    title: "App Performance",
    description: "Delivering fast, reliable, and optimized experiences."
  }
];

  return (
    <section id="about" className="py-20 bg-white/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Description */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                Building Digital Experiences That Matter
              </h3>
              
              <p className="text-lg text-slate-600 leading-relaxed">
  I'm a passionate Full Stack Developer who recently graduated from the Faculty of Science, 
  Computer Science Department. I specialize in building complete web solutions that blend 
  appealing frontend experiences with reliable and efficient backend systems.
</p>


              <p className="text-lg text-slate-600 leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the latest 
                industry trends. My goal is to contribute to innovative projects while continuously 
                learning and growing as a developer.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {['JavaScript', 'Bootstrap', 'React', 'Node.js', 'Express', 'MongoDB', 'SQL', 'Git'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column - Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-white/20"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg text-white">
                      <item.icon size={24} />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '5+', label: 'Projects Completed' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Availability' },
              { number: '∞', label: 'Learning Mindset' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;