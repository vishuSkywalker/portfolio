import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import bannerImage from "@/public/assets/Gemini_Generated_Image.png";
import { motion } from "motion/react";

const AuroraBackground = () => (
  <div className="absolute inset-0 z-10 overflow-hidden">
    <motion.div
      className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-200/30 blur-[100px]"
      animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
      transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
    />
    <motion.div
      className="absolute top-[20%] right-[10%] w-[40%] h-[60%] rounded-full bg-cyan-200/30 blur-[100px]"
      animate={{ x: [0, -50, 0], y: [0, 100, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
    />
  </div>
);

const TypewriterText = ({ text }: { text: string }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 1.2 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      className="flex overflow-hidden "
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "UI/UX Design",
    "REST APIs",
    "Responsive Design",
  ];

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden" // Added relative and overflow-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AuroraBackground />
      <motion.div
        className="container z-10 mx-auto"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="space-y-2">
              <motion.p
                className="text-blue-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Hello, I'm
              </motion.p>
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-slate-900"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <TypewriterText text="Vishal Maurya" />
              </motion.h1>
              <motion.p
                className="text-2xl md:text-3xl text-slate-600"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                Front End Developer
              </motion.p>
            </div>

            <motion.p
              className="text-lg text-slate-600 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Passionate about creating beautiful, functional, and user-friendly
              web applications. I specialize in modern web technologies and love
              bringing ideas to life.
            </motion.p>

            {/* Skills Tags */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.4 }}
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.6 }}
            >
              <motion.a
                href="https://github.com/vishuSkywalker"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
                aria-label="GitHub"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/vishumaurya78285"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:vishumaurya7@gmail.com"
                className="p-3 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
                aria-label="Email"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.02 }} // Simple interactive hover
          >
            <div className="flex justify-center">
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-6"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 6 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                ></motion.div>
                <motion.div
                  className="relative bg-white p-2 rounded-2xl shadow-2xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <ImageWithFallback
                    src={bannerImage}
                    alt="Professional portrait"
                    className="h-600 rounded-xl w-full max-w-md object-cover aspect-square object-top"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.8 }}
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            className="animate-bounce p-2 text-slate-400 hover:text-blue-600 transition-colors"
            aria-label="Scroll to About section"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
