
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen selection:bg-zinc-700 selection:text-white">
        <Navbar />
        
        <main className="max-w-6xl mx-auto px-4 md:px-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectDetailPage />} />
          </Routes>
        </main>

        <footer className="py-12 border-t border-zinc-800 bg-black mt-20">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-zinc-600 text-xs tracking-widest uppercase">
              &copy; {new Date().getFullYear()} ENGINEER STUDENT // TECHNICAL PORTFOLIO
            </div>
            <div className="flex gap-8 text-zinc-500 text-xs uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
