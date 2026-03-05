import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { getPortfolio, PortfolioItem as PortfolioItemType } from '../services/portfolioService';
import PortfolioItem from '../components/PortfolioItem';
import { Loader2 } from 'lucide-react';

const Portfolio = () => {
  const [items, setItems] = useState<PortfolioItemType[]>([]);
  const [filteredItems, setFilteredItems] = useState<PortfolioItemType[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  const categories = [
    { key: 'All', label: t('portfolio.categories.all') },
    { key: 'Web App', label: t('portfolio.categories.webApp') },
    { key: 'Mobile App', label: t('portfolio.categories.mobileApp') },
    { key: 'UI/UX Design', label: t('portfolio.categories.uiUx') },
    { key: 'Branding', label: t('portfolio.categories.branding') }
  ];

  useEffect(() => {
    const fetchPortfolio = async () => {
      const data = await getPortfolio();
      setItems(data);
      setFilteredItems(data);
      setLoading(false);
    };
    fetchPortfolio();
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter(item => item.category === activeCategory));
    }
  }, [activeCategory, items]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs">{t('portfolio.showcase')}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4 mb-8">
              {t('portfolio.latestCreations')}
            </h1>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat.key
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                    : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-10 w-10 text-indigo-600 animate-spin" />
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <PortfolioItem key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
