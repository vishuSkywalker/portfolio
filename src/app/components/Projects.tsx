import { ExternalLink, Github, Briefcase } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  motion,
  useInView,
  useAnimation,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useEffect } from "react";

// --- Types ---
interface Project {
  id: number;
  title: string;
  category: string; // Added for consistency
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl?: string; // Optional: If present, shows generic layout. If missing, shows client layout.
}

// --- Data ---
const projects: Project[] = [
  // --- Original Personal Projects (With GitHub) ---
  // --- Resume Client Projects (No GitHub) ---
  {
    id: 1,
    title: "Tata Communications",
    category: "Enterprise Platform",
    description:
      "Enterprise corporate platform featuring dynamic component implementation. Architected a scalable UI library and standardized design tokens.",
    technologies: ["HubSpot CMS", "JavaScript (ES6+)", "Design Tokens", "Performance", "API Integration"],
    imageUrl:
      "https://images.seeklogo.com/logo-png/28/1/tata-communications-company-logo-png_seeklogo-289639.png",
    liveUrl: "https://www.tatacommunications.com",
    // No githubUrl
  },
  {
    id: 2,
    title: "Kenworth Trucks",
    category: "Inventory System",
    description:
      "A custom inventory management system powered by HubDB. Features advanced filtering logic for vehicle specifications.",
    technologies: ["HubSpot CMS", "HubDB", "JavaScript (ES6+)", "Serverless Functions", "API Integration"],
    imageUrl:
      "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=1472&auto=format&fit=crop",
    liveUrl: "https://www.kenworthne.com/new-trucks",
    // No githubUrl
  },
  {
    id: 3,
    title: "MASA Seminars",
    category: "Event Web App",
    description:
      "A comprehensive event management application handling complex state logic for registrations and dynamic speaker sessions.",
    technologies: ["HubSpot CMS", "Serverless Functions", "JavaScript (ES6+)", "Custom Objects", "API Integration"],
    imageUrl:
      "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1470&auto=format&fit=crop",
    liveUrl: "https://masaseminars.com",
    // No githubUrl
  },
  {
    id: 4,
    title: "Grocery App",
    category: "E-Commerce",
    description:
      "A full-featured e-commerce platform with product management and shopping cart. Built with modern web technologies.",
    technologies: ["Skill Polishing", "JavaScript", "React", "Redux"],
    imageUrl:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1374&auto=format&fit=crop",
    liveUrl: "https://grocery-app-nu-nine.vercel.app",
    githubUrl: "https://github.com/vishuSkywalker/grocery_app",
  },
  {
    id: 5,
    title: "Task Manager",
    category: "Productivity",
    description:
      "A simple todo app with Redux for state management. Features a clean UI and responsive design for seamless use.",
    technologies: ["Skill Polishing", "JavaScript", "React", "Redux"],
    imageUrl:
      "https://images.unsplash.com/photo-1723505613384-b55168b80568?q=80&w=1376&auto=format&fit=crop",
    liveUrl: "https://todo-with-redux-xi.vercel.app",
    githubUrl: "https://github.com/vishuSkywalker/todo-with-redux",
  },
  {
    id: 6,
    title: "Expense Tracker",
    category: "Finance Tool",
    description:
      "An expense tracking application that helps users monitor their spending habits efficiently.",
    technologies: ["Skill Polishing", "React", "Redux", "Chart.js"],
    imageUrl:
      "https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?q=80&w=1470&auto=format&fit=crop",
    liveUrl: "https://expense-tracker-lime-eight-22.vercel.app",
    githubUrl: "https://github.com/vishuSkywalker/expense-tracker",
  },
];

// --- Sub-Component: 3D Tilt Card ---
const ProjectCard = ({ project }: { project: Project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);
  const shineOpacity = useTransform(mouseY, [-0.5, 0.5], [0, 0.4]);

  const hasGithub = Boolean(project.githubUrl);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      className="perspective-1000"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full bg-white rounded-2xl shadow-xl transition-shadow duration-500 hover:shadow-2xl border border-slate-100/50 group flex flex-col"
      >
        {/* Shine Overlay */}
        <motion.div
          style={{ opacity: shineOpacity }}
          className="absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-white/40 to-transparent rounded-2xl pointer-events-none"
        />

        {/* Image Section */}
         <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
        <div
          className="relative h-60 overflow-hidden rounded-t-2xl shrink-0"
          style={{ transform: "translateZ(20px)" }}
        >
         
            <ImageWithFallback
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          
          <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors" />

          {/* Conditional Badge: Only show "Client Work" if NO GitHub link */}
          {!hasGithub && (
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1.5">
              <Briefcase size={12} className="text-blue-600" />
              Project Lead + Contributer
            </div>
          )}
        </div>
</a>  

        {/* Content Section */}
        <div
          className="p-6 bg-white rounded-b-2xl flex flex-col grow"
          style={{ transform: "translateZ(50px)" }}
        >
          <div className="mb-1 text-xs font-bold tracking-wider text-blue-600 uppercase">
            {project.category}
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            {project.title}
          </h3>
          <p className="text-slate-600 mb-6 line-clamp-3 text-sm leading-relaxed grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-slate-50 text-slate-600 rounded-md text-xs font-medium border border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 mt-auto">
            {/* CONDITIONAL RENDERING BASED ON GITHUB LINK */}
            {hasGithub ? (
              // Option A: Original Layout (Live + GitHub)
              <div className="flex gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <Github size={16} />
                  Source Code
                </a>
              </div>
            ) : (
              // Option B: Client Layout (Single Button)
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium text-sm group/btn"
              >
                <ExternalLink size={16} />
                Visit Live Site
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Main Projects Component ---
export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="projects"
      className="min-h-screen pb-24 px-6 bg-slate-50 overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Featured Work
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A mix of personal applications and enterprise-grade client projects.
          </p>
        </motion.div>

        {/* 3D Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto perspective-2000"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* View More / GitHub Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-20"
        >
          <a
            href="https://github.com/vishuSkywalker"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2 font-medium">
              <Github size={20} />
              View Full Archive
            </span>
            <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
