import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { getProjects, Project } from '../services/projectService';
import ProjectCard from '../components/ProjectCard';
import { Loader2 } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs">Our Work</span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4 mb-8">
              Innovative <span className="text-indigo-600">projects</span> that deliver results.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Explore our portfolio of successful projects across various industries. Each project represents a unique challenge we solved through technical expertise and creative thinking.
            </p>
          </motion.div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-10 w-10 text-indigo-600 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
