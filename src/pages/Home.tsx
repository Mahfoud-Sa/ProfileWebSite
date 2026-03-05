import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Rocket, Zap, Code2, Layout, Database, Terminal, BarChart3, PieChart, UserCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { getServices, Service } from '../services/serviceService';
import { getProjects, Project } from '../services/projectService';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const { t } = useTranslation();

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
                {t('hero.badge')}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center group"
                >
                  {t('hero.startProject')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
                </Link>
                <Link
                  to="/portfolio"
                  className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  {t('hero.viewPortfolio')}
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
                src="https://picsum.photos/seed/developer/800/600"
                alt="Developer"
                className="rounded-3xl shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden sm:block rtl:-left-auto rtl:-right-6">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">100%</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">{t('hero.satisfaction')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('skills.title')}</h2>
            <p className="text-slate-600">{t('skills.subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(t('skills.list', { returnObjects: true }) as string[]).map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center space-x-4 rtl:space-x-reverse group hover:bg-indigo-600 hover:text-white transition-all duration-300"
              >
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-white/20">
                  {i % 4 === 0 && <Code2 className="h-5 w-5 text-indigo-600 group-hover:text-white" />}
                  {i % 4 === 1 && <Layout className="h-5 w-5 text-indigo-600 group-hover:text-white" />}
                  {i % 4 === 2 && <Database className="h-5 w-5 text-indigo-600 group-hover:text-white" />}
                  {i % 4 === 3 && <Terminal className="h-5 w-5 text-indigo-600 group-hover:text-white" />}
                </div>
                <span className="font-bold">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('services.title')}</h2>
              <p className="text-slate-600">{t('services.description')}</p>
            </div>
            <Link to="/services" className="mt-6 md:mt-0 text-indigo-600 font-bold flex items-center hover:text-indigo-700">
              {t('services.viewAll')} <ArrowRight className="ml-2 h-5 w-5 rtl:rotate-180" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('projects.title')}</h2>
              <p className="text-slate-600">{t('projects.description')}</p>
            </div>
            <Link to="/projects" className="mt-6 md:mt-0 text-indigo-600 font-bold flex items-center hover:text-indigo-700">
              {t('projects.viewAll')} <ArrowRight className="ml-2 h-5 w-5 rtl:rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Success Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">{t('projects.innovative')}</h2>
              <p className="text-slate-400 text-lg mb-12">
                {t('projects.workDesc')}
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-bold text-indigo-400 mb-2">50+</p>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Projects Delivered</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-indigo-400 mb-2">100%</p>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-indigo-600/20 p-8 rounded-[3rem] border border-white/10 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center">
                      <Rocket className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold">{t('projects.herfah')}</h4>
                      <p className="text-sm text-slate-400">Marketplace Solution</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold">{t('projects.accounting')}</h4>
                      <p className="text-sm text-slate-400">Enterprise System</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">{t('cta.title')}</h2>
              <p className="text-indigo-100 text-lg mb-12 max-w-2xl mx-auto">
                {t('cta.description')}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold hover:bg-indigo-50 transition-all shadow-xl"
              >
                {t('cta.getInTouch')}
                <ArrowRight className="ml-2 h-5 w-5 rtl:rotate-180" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
