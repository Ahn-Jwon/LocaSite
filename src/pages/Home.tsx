import React from 'react';
import { Phone, MapPin, ArrowRight, Clock, Route } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] py-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-50 to-white dark:from-red-950/20 dark:to-gray-900">
        <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              {t('hero_title_part1')} <br />
              <span className="text-red-600">{t('hero_title_part2')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              {t('hero_subtitle')}
            </p>
            </div>

          <div className="flex-1 w-full max-w-2xl flex justify-center mt-8 lg:mt-0">
            <img src="/main-thumbnail.png" alt="LocaSOS Main Thumbnail" className="w-full h-auto rounded-3xl shadow-2xl object-cover border-4 border-white dark:border-gray-800 transform hover:-translate-y-2 transition-transform duration-500" />
          </div>
        </div>
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-red-100 dark:bg-red-900/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t('feature_title')}</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MapPin className="text-red-600" size={32} />,
                title: t('f1_title'),
                desc: t('f1_desc')
              },
              {
                icon: <Route className="text-red-600" size={32} />,
                title: t('f2_title'),
                desc: t('f2_desc')
              },
              {
                icon: <Clock className="text-red-600" size={32} />,
                title: t('f3_title'),
                desc: t('f3_desc')
              },
              {
                icon: <Phone className="text-red-600" size={32} />,
                title: t('f4_title'),
                desc: t('f4_desc')
              }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:shadow-xl transition-all border border-transparent hover:border-red-100 dark:hover:border-red-900/30 group">
                <div className="mb-6 bg-white dark:bg-gray-700 w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
