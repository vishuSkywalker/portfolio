import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "sonner";
import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { motion } from "framer-motion";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <Toaster position="top-right" richColors />
        <Navigation />
        <main>
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>
        <motion.footer
          className="bg-slate-900 text-white py-8"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-6 text-center">
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              &copy; {new Date().getFullYear()} Vishal Maurya. All rights
              reserved.
            </motion.p>
          </div>
        </motion.footer>
      </div>
    </Router>
  );
}
