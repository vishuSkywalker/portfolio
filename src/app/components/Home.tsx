import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import bannerImage from '@/public/assets/Gemini_Generated_Image.png';

export function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const skills = ['React', 'TypeScript', 'Node.js', 'UI/UX Design', 'REST APIs', 'Responsive Design'];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-blue-600">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900">
                Vishal Maurya
              </h1>
              <p className="text-2xl md:text-3xl text-slate-600">
                Front End Developer
              </p>
            </div>

            <p className="text-lg text-slate-600 max-w-lg">
              Passionate about creating beautiful, functional, and user-friendly web applications.
              I specialize in modern web technologies and love bringing ideas to life.
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/vishuSkywalker"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/vishumaurya78285"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:vishumaurya7@gmail.com"
                className="p-3 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                <ImageWithFallback
                  src={bannerImage}
                  alt="Professional portrait"
                  className="h-600 rounded-xl w-full max-w-md object-cover aspect-square object-top"                  
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce p-2 text-slate-400 hover:text-blue-600 transition-colors"
            aria-label="Scroll to About section"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
