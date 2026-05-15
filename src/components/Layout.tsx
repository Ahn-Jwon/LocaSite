import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-red-600 dark:text-red-500">
            <ShieldAlert size={28} />
            <span>LocaSOS</span>
          </Link>
          <div className="flex gap-6 text-sm font-medium">
            <Link to="/" className="hover:text-red-600 transition-colors">{t('nav_home')}</Link>
            <Link to="/privacy" className="hover:text-red-600 transition-colors">{t('nav_privacy')}</Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {t('footer_copy')}
          </p>
          <div className="mt-4 flex justify-center gap-4 text-xs text-gray-400">
            <Link to="/privacy" className="underline hover:text-gray-600">{t('nav_privacy')}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
