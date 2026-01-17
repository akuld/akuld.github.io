
import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 'hermit',
      title: 'HERMIT',
      subtitle: 'Robotic Hand Mirror Therapy',
      description: 'A device utilizing a spiral CAM linkage for cerebral palsy rehabilitation.',
      link: '/project-hermit'
    },
    {
      id: 'phlexor',
      title: 'Phlexor',
      subtitle: 'Hand Exoskeleton',
      description: 'A residual force controlled, synergy-based hand exoskeleton for grasping assistance.'
    },
    {
      id: 'glass',
      title: 'GLASS',
      subtitle: 'Breath Acetone Spectroscopy',
      description: 'Glucose level measuring via near-UV laser spectroscopy.'
    },
    {
      id: 'wooden-clock',
      title: 'Wooden Clock',
      subtitle: 'Mechanical Timepiece',
      description: 'An intricate mechanical clock fabricated entirely from precision-cut wood.'
    },
    {
      id: 'wooden-chair',
      title: 'Wooden Chair',
      subtitle: 'Ergonomic Furniture',
      description: 'A custom-designed chair focusing on ergonomic curves and structural joinery.'
    },
    {
      id: 'ultragrasp',
      title: 'Ultragrasp',
      subtitle: 'Soft Robotic Gripper',
      description: 'An adaptive soft robotic end-effector for delicate object manipulation.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Project Hub</h1>
        <div className="h-1 w-20 bg-blue-600 mb-4"></div>
        <p className="text-gray-400 max-w-2xl">
          A selection of projects ranging from medical robotics and spectroscopy to traditional mechanical woodworking.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          project.link ? (
            <Link 
              to={project.link} 
              key={project.id}
              className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-blue-500/50 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col"
            >
              <ProjectCardContent project={project} />
            </Link>
          ) : (
            <div 
              key={project.id}
              className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 opacity-80 cursor-default flex flex-col"
            >
              <ProjectCardContent project={project} isLocked />
            </div>
          )
        ))}
      </div>
    </div>
  );
};

interface CardProps {
  project: any;
  isLocked?: boolean;
}

const ProjectCardContent: React.FC<CardProps> = ({ project, isLocked }) => (
  <>
    <div className="aspect-video bg-zinc-800 overflow-hidden relative">
      <img 
        src="https://placehold.co/600x400" 
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
      />
      {isLocked && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <span className="bg-zinc-900 text-xs px-3 py-1 rounded-full text-zinc-400">In Development</span>
        </div>
      )}
    </div>
    <div className="p-6 flex-grow">
      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1 uppercase tracking-tight">
        {project.title}
      </h3>
      <p className="text-blue-500 text-xs font-mono mb-3 tracking-widest">
        {project.subtitle}
      </p>
      <p className="text-gray-400 text-sm leading-relaxed">
        {project.description}
      </p>
    </div>
    <div className="px-6 py-4 border-t border-zinc-800 text-xs font-mono text-zinc-500 flex justify-between items-center group-hover:text-blue-400 transition-colors">
      <span>{isLocked ? 'DETAILS COMING SOON' : 'EXPLORE CASE STUDY'}</span>
      {!isLocked && <span>&rarr;</span>}
    </div>
  </>
);

export default Portfolio;
