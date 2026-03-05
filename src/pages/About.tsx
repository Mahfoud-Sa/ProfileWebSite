import { motion } from 'motion/react';
import { Target, Eye, Code2, Layout, Database, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  
  const skills = [
    { name: 'Frontend', icon: Layout, desc: 'React, Next.js, Tailwind CSS' },
    { name: 'Backend', icon: Database, desc: 'ASP.NET Core, Node.js, SQL Server' },
    { name: 'API & Docs', icon: Terminal, desc: 'RESTful APIs, Swagger, GraphQL' },
    { name: 'Design', icon: Code2, desc: 'Figma, UI/UX Principles' },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs">{t('about.badge')}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4 mb-8">
              {t('about.title')}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t('about.description')}
            </p>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100"
          >
            <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center mb-8">
              <Target className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t('about.mission')}</h2>
            <p className="text-slate-600 leading-relaxed">
              {t('about.missionDesc')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-indigo-600 rounded-[2.5rem] text-white"
          >
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
              <Eye className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-6">{t('about.vision')}</h2>
            <p className="text-indigo-100 leading-relaxed">
              {t('about.visionDesc')}
            </p>
          </motion.div>
        </div>

        {/* Expertise Section */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('about.expertise')}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('about.expertiseDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <skill.icon className="h-6 w-6 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{skill.name}</h3>
                <p className="text-slate-500 text-sm">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
