import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Grocery App',
      description: 'A full-featured e-commerce platform with product management, shopping cart. Built with modern web technologies for optimal performance.',
      technologies: ['JavaScript', 'React', 'Redux', 'CSS'],
      imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1374&auto=format&fit=crop',
      liveUrl: 'https://grocery-app-nu-nine.vercel.app',
      githubUrl: 'https://github.com/vishuSkywalker/grocery_app'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A simple todo app with Redux for state management, allowing users to create, edit, and delete tasks. Features a clean UI and responsive design for seamless use across devices.',
      technologies: ['JavaScript', 'React', 'Redux', 'CSS'],
      imageUrl: 'https://images.unsplash.com/photo-1723505613384-b55168b80568?q=80&w=1376&auto=format&fit=crop',
      liveUrl: 'https://todo-with-redux-xi.vercel.app',
      githubUrl: 'https://github.com/vishuSkywalker/todo-with-redux'
    },
    {
      id: 3,
      title: 'Tic Tac Toe Game',
      description: 'A classic Tic Tac Toe game built with React and TypeScript. Features a clean UI, responsive design, and game state management.',
      technologies: ['React', 'JavaScript', 'Redux', 'CSS'],
      imageUrl: 'https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?q=80&w=880&auto=format&fit=crop',
      liveUrl: 'https://tic-tac-toe-redux.vercel.app',
      githubUrl: 'https://github.com/vishuSkywalker/tic-tac-toe-redux'
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-slate-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
            in web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-slate-200">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/vishuSkywalker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
