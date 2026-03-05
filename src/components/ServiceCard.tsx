import React from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';
import { Service } from '../services/serviceService';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // Dynamically get the icon component
  const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group"
    >
      <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
        <IconComponent className="h-7 w-7 text-indigo-600 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm">
        {service.description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
