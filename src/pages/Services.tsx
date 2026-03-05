import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { getServices, Service } from '../services/serviceService';
import ServiceCard from '../components/ServiceCard';
import { Loader2 } from 'lucide-react';

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchServices = async () => {
      const data = await getServices();
      setServices(data);
      setLoading(false);
    };
    fetchServices();
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs">{t('services.expertise')}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4 mb-8">
              {t('services.scaleVision')}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t('services.expertiseDesc')}
            </p>
          </motion.div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-10 w-10 text-indigo-600 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}

        {/* Extra Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-white rounded-[3rem] p-12 md:p-20 border border-slate-100 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{t('services.processTitle')}</h2>
              <p className="text-slate-600 mb-8">
                {t('services.processDesc')}
              </p>
              <ul className="space-y-4">
                {(t('services.steps', { returnObjects: true }) as string[]).map((step, i) => (
                  <li key={step} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="text-slate-700 font-medium">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/process/600/600"
                alt="Process"
                className="rounded-3xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
