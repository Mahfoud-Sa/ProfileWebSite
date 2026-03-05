import React from 'react';
import { motion } from 'motion/react';
import { PortfolioItem as PortfolioItemType } from '../services/portfolioService';

interface PortfolioItemProps {
  item: PortfolioItemType;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative group aspect-square overflow-hidden rounded-3xl bg-slate-100"
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-indigo-600/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
        <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {item.category}
        </p>
        <h3 className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {item.title}
        </h3>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;
