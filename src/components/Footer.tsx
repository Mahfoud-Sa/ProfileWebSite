import { Link } from 'react-router-dom';
import { Terminal, Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse text-white mb-6">
              <Terminal className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold tracking-tight">TechTeam</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Mail className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">{t('footer.services')}</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">{t('footer.webDev')}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">{t('footer.mobileDev')}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">{t('footer.cloudSolutions')}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">{t('footer.uiUxDesign')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">{t('nav.projects')}</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">{t('nav.portfolio')}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">{t('footer.newsletterTitle')}</h3>
            <p className="text-sm mb-4">{t('footer.newsletterDesc')}</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                {t('footer.subscribe')}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {currentYear} TechTeam Digital Services. {t('footer.allRightsReserved')}</p>
          <div className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacyPolicy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.termsOfService')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
