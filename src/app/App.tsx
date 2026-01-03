import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

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
        <footer className="bg-slate-900 text-white py-8">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}