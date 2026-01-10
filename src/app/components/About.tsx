import {
  Code,
  Palette,
  Zap,
  Download,
  Database,
  Layout,
  Server,
  Cpu,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useRef } from "react";

// --- Components ---

// 1. Spotlight Card Component
function SpotlightCard({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative border border-slate-200 bg-slate-50 overflow-hidden rounded-xl px-8 py-8 shadow-sm transition-all hover:shadow-md"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(37, 99, 235, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10">
        <div className="mb-4 inline-block rounded-lg bg-blue-100 p-3 text-blue-600">
          <Icon size={24} />
        </div>
        <h3 className="mb-2 text-xl font-bold text-slate-900">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// 2. Infinite Marquee Component
function InfiniteMarquee({
  items,
  direction = "left",
  speed = 20,
}: {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
}) {
  return (
    <div className="flex overflow-hidden whitespace-nowrap mask-gradient relative z-10 py-4">
      <motion.div
        className="flex gap-8"
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {[...items, ...items, ...items].map(
          (
            item,
            idx // Tripled for smoothness
          ) => (
            <span
              key={idx}
              className="inline-flex items-center rounded-full bg-blue-600 border border-slate-200 px-6 py-2 text-sm font-medium text-white shadow-sm"
            >
              {item}
            </span>
          )
        )}
      </motion.div>
    </div>
  );
}

// --- Main Component ---
export function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [200, -200]); // Parallax effect

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating intuitive and visually appealing user interfaces that delight users.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Building fast and optimized applications for the best user experience.",
    },
  ];

  const frontendSkills = [
    // Your provided skills
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Redux",
    "Framer Motion",
    "HubL",
    "HTML5",
    "CSS3",

    // Added from your resume
    "JavaScript (ES6+)", // [cite: 6, 9]
    "Bootstrap", // [cite: 9]
    "Responsive Design", // [cite: 9]
    "Component Architecture",
    "DOM Manipulation",
    "WCAG Accessibility",
    "Cross-Browser Compatibility",
    "Design Tokens",
  ];

  const backendSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "REST APIs",
    "HubDB",
    "GraphQL",
    "Firebase",
    "Serverless Functions",
    "JSON",
    "Custom CRM Objects",
    "Dynamic Modular Themes",
  ];

  const workflowAndTools = [
    "Git/GitHub",
    "Postman",
    "Lighthouse Optimization",
    "Core Web Vitals",
    "Critical Rendering Path",
    "Lazy Loading Strategies",
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen py-24 bg-white overflow-hidden"
      ref={containerRef}
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-5">
        <Code size={400} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-slate-900">More than just</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Lines of Code.
              </span>
            </h2>
            <div className="w-24 h-2 bg-blue-600 rounded-full mb-8" />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Biography (Spread out for readability) */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-lg text-slate-600">
              <p className="lead font-medium text-slate-900 text-xl">
                Senior Front-End Developer | HubSpot Expert | Project Lead
              </p>
              <p className="mt-4">
                I architect scalable, high-performance web solutions for global
                enterprise clients. With a background in MERN stack development
                and HubSpot CMS expertise, I specialize in translating complex
                business requirements into high-speed technical execution.
              </p>
              <p className="mt-4">
                <b>What I bring to the table:</b>
              </p>
              <ul className="list-disc mt-2 pl-5 space-y-2">
                <li>
                  <b>Performance Engineering:</b> Expert in cutting page load
                  latency by 30% via Critical Rendering Path optimization.
                </li>
                <li>
                  <b>System Architecture:</b> Creator of framework-agnostic UI
                  component libraries that standardize design across accounts.
                </li>
                <li>
                  <b>Complex Integrations:</b> Experienced in building custom
                  API connectors and dynamic HubDB themes that handle thousands
                  of records.
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="https://docs.google.com/document/d/1UM7OOju50bRB5EexFi5zeafHgGeG624cl8z5zdmsWTs/edit?usp=sharing"
                target="_blank"
                className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download size={18} /> Download Resume
                </span>
                <div className="absolute inset-0 bg-blue-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Spotlight Cards Grid */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-4"
            style={{ y }} // Parallax movement
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              >
                <SpotlightCard {...item} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scrolling Skills Section - Viral Element */}
        <motion.div
          className="mt-24 space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold uppercase tracking-widest text-slate-800">
              Technical Arsenal
            </h3>
          </div>

          {/* Marquee 1: Frontend */}
          <div className="text-center mb-1">
            <h3 className="text-sm uppercase tracking-widest text-slate-800">
              Frontend
            </h3>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-20" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-20" />
            <InfiniteMarquee
              items={frontendSkills}
              direction="left"
              speed={40}
            />
          </div>

          {/* Marquee 2: Backend */}
          <div className="text-center mb-1">
            <h3 className="text-sm uppercase tracking-widest text-slate-800">
              Backend
            </h3>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-20" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-20" />
            <InfiniteMarquee
              items={backendSkills}
              direction="right"
              speed={40}
            />
          </div>

          {/* Marquee 2: Workflow */}
          <div className="text-center mb-1">
            <h3 className="text-sm uppercase tracking-widest text-slate-800">
              Workflow & Tools
            </h3>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-20" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-20" />
            <InfiniteMarquee
              items={workflowAndTools}
              direction="left"
              speed={20}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
