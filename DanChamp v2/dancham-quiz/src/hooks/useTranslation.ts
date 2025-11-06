import { useMemo } from 'react';
import { Language } from '../types/quiz.types';
import { translations } from '../data/translations';

export const useTranslation = (language: Language = 'da') => {
  const t = useMemo(() => {
    const langTranslations = translations[language];
    
    return (key: string, params?: Record<string, string | number>) => {
      const keys = key.split('.');
      let value: any = langTranslations;
      
      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) return key;
      }
      
      if (typeof value === 'string' && params) {
        return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
          return params[paramKey]?.toString() || match;
        });
      }
      
      return value || key;
    };
  }, [language]);

  return { t, language };
};

