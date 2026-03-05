import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Users, Rocket, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { getServices, Service } from '../services/serviceService';
import { getProjects, Project } from '../services/projectService';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const servicesData = await getServices();
      const projectsData = await getProjects();
      setServices(servicesData.slice(0, 3));
      setProjects(projectsData.slice(0, 3));
    };
    fetchData();
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
                Digital Excellence
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
                We Build <span className="text-indigo-600">Digital Future</span> Together.
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                Expert technical team delivering high-performance web, mobile, and cloud solutions tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center group"
                >
                  Start a Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  View Portfolio
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://picsum.photos/seed/tech/800/600"
                alt="Tech Team"
                className="rounded-3xl shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden sm:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">99%</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Who We Are</h2>
            <p className="text-slate-600 leading-relaxed">
              We are a collective of passionate developers, designers, and strategists dedicated to pushing the boundaries of what's possible in the digital realm. With years of experience and a commitment to excellence, we help businesses transform their vision into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Expert Team</h3>
              <p className="text-slate-600 text-sm">Highly skilled professionals with deep expertise in modern technologies.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Fast Delivery</h3>
              <p className="text-slate-600 text-sm">Agile methodologies ensuring rapid development and timely launches.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Scalable Solutions</h3>
              <p className="text-slate-600 text-sm">Future-proof architectures that grow alongside your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
              <p className="text-slate-600">Comprehensive digital services to help you stay ahead in the competitive market.</p>
            </div>
            <Link to="/services" className="mt-6 md:mt-0 text-indigo-600 font-bold flex items-center hover:text-indigo-700">
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Latest Projects</h2>
              <p className="text-slate-600">A glimpse into our recent successful collaborations and innovative solutions.</p>
            </div>
            <Link to="/projects" className="mt-6 md:mt-0 text-indigo-600 font-bold flex items-center hover:text-indigo-700">
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to start your digital journey?</h2>
              <p className="text-indigo-100 text-lg mb-12 max-w-2xl mx-auto">
                Let's collaborate to build something amazing. Our team is ready to turn your ideas into reality.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold hover:bg-indigo-50 transition-all shadow-xl"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
