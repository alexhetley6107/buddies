import translations from './resources.json';

const keys = Object.keys(translations);

const getTranslationsByLang = (lang: keyof typeof translations.signin) => {
  const result: Record<string, string> = {};
  for (const key of keys) {
    result[key] = (translations as any)[key][lang];
  }

  return result;
};

export const resources = {
  en: {
    translation: {
      ...getTranslationsByLang('en'),
    },
  },
  ru: {
    translation: {
      ...getTranslationsByLang('ru'),
    },
  },
};
