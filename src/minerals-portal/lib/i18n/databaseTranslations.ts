// Comprehensive Database Translations
// This file contains translations for ALL database content across ALL languages
import { Language } from './translations';

// Translation maps for database content
export const databaseTranslations: Record<Language, Record<string, any>> = {
  en: {}, // English is the base language, no translations needed
  ps: {}, // Pashto translations
  fa: {}, // Dari translations
  ar: {}, // Arabic translations
  zh: {}, // Chinese translations
  ru: {}, // Russian translations
};

// Helper function to translate database content
export const translateDatabaseContent = <T extends Record<string, any>>(
  content: T,
  language: Language
): T => {
  if (language === 'en') {
    return content; // English is the base
  }

  const translations = databaseTranslations[language];
  if (!translations) {
    return content; // Fallback to English if translation not available
  }

  // Deep clone and translate
  const translated = JSON.parse(JSON.stringify(content));
  
  // Translate common fields
  if (translations[content.title]) {
    translated.title = translations[content.title].title || content.title;
  }
  if (translations[content.subtitle]) {
    translated.subtitle = translations[content.subtitle].subtitle || content.subtitle;
  }
  if (translations[content.overview]) {
    translated.overview = translations[content.overview].overview || content.overview;
  }

  // Translate sections
  if (translated.sections && Array.isArray(translated.sections)) {
    translated.sections = translated.sections.map((section: any) => {
      const sectionKey = `${content.title}_section_${section.title}`;
      if (translations[sectionKey]) {
        return {
          ...section,
          title: translations[sectionKey].title || section.title,
          content: translations[sectionKey].content || section.content,
        };
      }
      return section;
    });
  }

  // Translate stats
  if (translated.stats && Array.isArray(translated.stats)) {
    translated.stats = translated.stats.map((stat: any) => {
      const statKey = `${content.title}_stat_${stat.label}`;
      if (translations[statKey]) {
        return {
          ...stat,
          label: translations[statKey].label || stat.label,
          description: translations[statKey].description || stat.description,
        };
      }
      return stat;
    });
  }

  // Translate timeline
  if (translated.timeline && Array.isArray(translated.timeline)) {
    translated.timeline = translated.timeline.map((item: any) => {
      const timelineKey = `${content.title}_timeline_${item.year}`;
      if (translations[timelineKey]) {
        return {
          ...item,
          event: translations[timelineKey].event || item.event,
        };
      }
      return item;
    });
  }

  return translated;
};
