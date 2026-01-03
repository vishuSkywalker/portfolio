import { Code, Palette, Zap, Download } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces that delight users.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Building fast and optimized applications for the best user experience.'
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 text-lg leading-relaxed">
                I'm a passionate Full Stack Developer with over 5 years of experience in building
                web applications. I specialize in React, TypeScript, and Node.js, and I'm always
                eager to learn new technologies and tackle challenging problems.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                My journey in web development started with a curiosity about how websites work,
                and it has evolved into a career focused on creating exceptional digital experiences.
                I believe in writing clean, maintainable code and designing interfaces that users love.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                When I'm not coding, you can find me contributing to open-source projects,
                reading tech blogs, or exploring new coffee shops.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="p-6 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors group"
                >
                  <div className="p-3 bg-blue-600 w-fit rounded-lg mb-4 group-hover:scale-110 transition-transform">
                    <highlight.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-600">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Skills Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Technical Skills</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux', 'HTML/CSS'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Express.js', 'MongoDB', 'REST API'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Download */}
            <div className="mt-12 text-center">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://docs.google.com/document/d/1UM7OOju50bRB5EexFi5zeafHgGeG624cl8z5zdmsWTs/edit?usp=sharing', '_blank');
                }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
