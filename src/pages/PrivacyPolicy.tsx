import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  const sections = [
    { title: t('privacy_s1_title'), desc: t('privacy_s1_desc') },
    { title: t('privacy_s2_title'), desc: t('privacy_s2_desc') },
    { title: t('privacy_s3_title'), desc: t('privacy_s3_desc') },
    { title: t('privacy_s4_title'), desc: t('privacy_s4_desc') },
    { title: t('privacy_s5_title'), desc: t('privacy_s5_desc') },
    { title: t('privacy_s6_title'), desc: t('privacy_s6_desc') },
    { title: t('privacy_s7_title'), desc: t('privacy_s7_desc') },
    { title: t('privacy_s8_title'), desc: t('privacy_s8_desc') },
    { title: t('privacy_s9_title'), desc: t('privacy_s9_desc') },
    { title: t('privacy_s10_title'), desc: t('privacy_s10_desc') },
  ];

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl bg-white dark:bg-gray-800 p-8 md:p-16 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">{t('privacy_title')}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">{t('privacy_effective_date')}</p>
        </div>
        
        <div className="space-y-12 text-gray-600 dark:text-gray-300 leading-relaxed">
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200 bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border-l-4 border-red-600">
            {t('privacy_intro')}
          </p>

          {sections.map((section, index) => (
            <section key={index} className="scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-red-600 rounded-full"></span>
                {section.title}
              </h2>
              <div className="whitespace-pre-wrap pl-4 border-l border-gray-100 dark:border-gray-700">
                {section.desc}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-700 text-center text-sm text-gray-400 italic">
          LocaSOS Team
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
