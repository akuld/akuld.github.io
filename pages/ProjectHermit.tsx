
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectHermit: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Link to="/portfolio" className="inline-flex items-center text-blue-400 hover:text-white transition-colors mb-8 group">
        <span className="mr-2 group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Portfolio
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">HERMIT: A Robotic Hand Mirror Therapy Device</h1>
        <p className="text-xl text-blue-500 font-mono tracking-wide uppercase">
          Utilizing a Spiral CAM Linkage for Children with Cerebral Palsy
        </p>
      </header>

      <div className="aspect-video bg-zinc-800 rounded-2xl overflow-hidden mb-12 border border-zinc-800">
        <img 
          src="https://placehold.co/1200x800" 
          alt="HERMIT Main Visual" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="md:col-span-2 space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4 border-b border-blue-900 pb-2">Project Description</h2>
            <div className="text-gray-300 leading-relaxed space-y-4 text-lg">
              <p>
                HERMIT is a robotic rehabilitation device designed to facilitate Mirror Therapy (MT) for children with Cerebral Palsy. Mirror therapy is a well-established neuro-rehabilitation technique where the reflection of the unaffected limb moving is perceived as the affected limb.
              </p>
              <p>
                The primary innovation in HERMIT is the implementation of a <strong>Spiral CAM Linkage</strong> system. This mechanical design allows for precise, synchronized movement control that can be tailored to the unique range-of-motion requirements of pediatric patients.
              </p>
              <p>
                By automating the mirror therapy process, we can provide consistent, repeatable exercises that help improve hand function and neuroplasticity in young patients.
              </p>
              <div className="bg-zinc-900 p-4 border-l-4 border-blue-600 rounded">
                <p className="text-sm font-mono text-blue-400">
                  Publication: A Robotic Hand Mirror Therapy Device, Utilizing a Spiral CAM Linkage for Children with Cerebral Palsy. 
                  <a href="https://doi.org/10.13021/jssr2024.4313" className="block text-white hover:underline mt-1" target="_blank" rel="noopener noreferrer">
                    DOI: 10.13021/jssr2024.4313
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-b border-blue-900 pb-2">Technical Specifications</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono text-zinc-400">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">/</span> Custom Spiral CAM geometry for linear torque conversion.
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">/</span> Lightweight 3D printed ABS structural housing.
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">/</span> High-torque brushless DC motors with PID feedback.
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">/</span> Patient-safe emergency cutoff system.
              </li>
            </ul>
          </section>
        </div>

        <aside className="space-y-8">
          <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
            <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Core Concepts</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full">Rehabilitation Robotics</span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full">Kinematics</span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full">Pediatric Biomechanics</span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full">CAM Design</span>
            </div>
          </div>
          
          <div className="bg-blue-600/10 p-6 rounded-xl border border-blue-600/20">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-2">Impact</h3>
            <p className="text-sm text-gray-400">
              Designed to reduce therapist workload while increasing patient engagement through interactive feedback loops.
            </p>
          </div>
        </aside>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b border-blue-900 pb-2">Media & Visuals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 rounded-xl overflow-hidden aspect-video relative group border border-zinc-800">
            <img src="https://placehold.co/600x400" alt="Detail 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 bg-black/60 px-2 py-1 text-[10px] uppercase font-mono tracking-tighter">CAD Linkage Assembly</div>
          </div>
          <div className="bg-zinc-900 rounded-xl overflow-hidden aspect-video relative group border border-zinc-800">
             <video controls className="w-full h-full object-cover bg-zinc-900">
                <source src="" type="video/mp4" />
                Your browser does not support the video tag.
             </video>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-zinc-600 font-mono text-sm">
               Video Placeholder
             </div>
          </div>
          <div className="bg-zinc-900 rounded-xl overflow-hidden aspect-video relative group border border-zinc-800">
            <img src="https://placehold.co/600x400" alt="Detail 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 bg-black/60 px-2 py-1 text-[10px] uppercase font-mono tracking-tighter">Initial Prototyping Phase</div>
          </div>
          <div className="bg-zinc-900 rounded-xl overflow-hidden aspect-video relative group border border-zinc-800">
            <img src="https://placehold.co/600x400" alt="Detail 3" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 bg-black/60 px-2 py-1 text-[10px] uppercase font-mono tracking-tighter">User Interface Module</div>
          </div>
        </div>
      </section>

      <div className="flex justify-center pt-8 border-t border-zinc-800">
        <Link to="/portfolio" className="px-12 py-4 bg-transparent border border-blue-500 text-blue-400 font-bold rounded hover:bg-blue-500/10 transition-all uppercase tracking-widest text-sm">
          Return to All Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectHermit;
