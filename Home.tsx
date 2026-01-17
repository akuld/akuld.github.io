
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-24 pb-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-20">
          
          {/* Left Side: Rectangular Headshot */}
          <div className="w-full md:w-1/3 lg:w-1/4 shrink-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src="https://placehold.co/400x500" 
                alt="Professional Headshot" 
                className="relative w-full aspect-[4/5] object-cover rounded-lg border border-blue-900/50 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          
          {/* Right Side: About Me Section */}
          <div className="flex-grow space-y-8 text-center md:text-left">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">
                Mechanical & <span className="text-blue-500">Robotics</span> Engineer
              </h1>
              <div className="h-1 w-20 bg-blue-600 mx-auto md:mx-0"></div>
            </div>
            
            <div className="space-y-4 text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              <p>
                I am a dedicated engineer focused on creating robotic solutions that address complex human-centric challenges. My expertise lies in mechanical design, biomechanics, and the integration of precision instrumentation to bridge the gap between human capability and technology.
              </p>
              <p>
                From developing assistive hand exoskeletons for rehabilitation to precision spectroscopy systems for healthcare diagnostics, my work is driven by technical excellence and a commitment to improving lives through thoughtful engineering.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Link 
                to="/portfolio" 
                className="px-8 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20"
              >
                VIEW MY PORTFOLIO
              </Link>
              <a 
                href="mailto:engineer@example.com" 
                className="px-8 py-3 bg-transparent border border-blue-500 text-blue-400 font-bold rounded hover:bg-blue-500/10 transition-all"
              >
                CONTACT ME
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interests, Weaknesses, and Strengths Section */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="border-2 border-dashed border-blue-500/40 rounded-2xl p-10 md:p-14 bg-blue-950/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-blue-500 font-mono text-xs mb-3 tracking-[0.2em] uppercase">Interests</div>
              <div className="text-white font-bold text-xl md:text-2xl">Medical Robotics & Biomechanics</div>
            </div>
            <div>
              <div className="text-blue-500 font-mono text-xs mb-3 tracking-[0.2em] uppercase">Weaknesses</div>
              <div className="text-white font-bold text-xl md:text-2xl">Perfectionism in Prototyping</div>
            </div>
            <div>
              <div className="text-blue-500 font-mono text-xs mb-3 tracking-[0.2em] uppercase">Strengths</div>
              <div className="text-white font-bold text-xl md:text-2xl">System-Level Rapid Iteration</div>
            </div>
          </div>
        </div>
        
        {/* Button below the section */}
        <div className="flex justify-center mt-12">
          <button 
            className="px-12 py-4 bg-transparent border border-blue-500 text-blue-400 font-bold rounded hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 uppercase tracking-[0.25em] text-sm shadow-xl shadow-blue-500/5"
            onClick={() => window.print()}
          >
            Download Full Resume
          </button>
        </div>
      </section>

      {/* Contact Link in Footer style */}
      <section id="contact" className="py-24 border-t border-blue-900/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-500 font-mono text-xs mb-4 tracking-[0.3em] uppercase">Let's Connect</p>
          <a 
            href="mailto:engineer@example.com" 
            className="inline-flex items-center text-2xl md:text-3xl font-mono text-blue-400 hover:text-blue-300 transition-colors border-b-2 border-transparent hover:border-blue-300 pb-2"
          >
            engineer@example.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
