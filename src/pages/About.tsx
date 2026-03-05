import { motion } from 'motion/react';
import { Target, Eye, Users } from 'lucide-react';

const About = () => {
  const team = [
    { name: 'Alex Rivera', role: 'Lead Developer', image: 'https://picsum.photos/seed/p1/400/400' },
    { name: 'Sarah Chen', role: 'UI/UX Designer', image: 'https://picsum.photos/seed/p2/400/400' },
    { name: 'Marcus Thorne', role: 'Cloud Architect', image: 'https://picsum.photos/seed/p3/400/400' },
    { name: 'Elena Vance', role: 'Project Manager', image: 'https://picsum.photos/seed/p4/400/400' },
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
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs">About Us</span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4 mb-8">
              We are a team of <span className="text-indigo-600">digital craftsmen</span>.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded on the principles of innovation and integrity, TechTeam has grown from a small group of enthusiasts to a full-service digital agency. We believe that technology should empower, not complicate.
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
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              To provide high-quality, scalable, and innovative digital solutions that help our clients achieve their business goals and stay ahead in a rapidly evolving technological landscape.
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
            <h2 className="text-2xl font-bold mb-6">Our Vision</h2>
            <p className="text-indigo-100 leading-relaxed">
              To be the global leader in digital transformation, recognized for our technical excellence, creative problem-solving, and unwavering commitment to client success.
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet the Experts</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our diverse team brings together decades of experience across various domains of technology and design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-indigo-600 text-sm font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
