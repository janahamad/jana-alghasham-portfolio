import type { Lang, Content } from './types';
import { en } from './en';
import { ar } from './ar';

export type { Lang, Content };
export const langs: Lang[] = ['en', 'ar'];
export const content: Record<Lang, Content> = { en, ar };
export const dirOf = (lang: Lang) => (lang === 'ar' ? 'rtl' : 'ltr');
export const homeOf = (lang: Lang) => (lang === 'ar' ? '/ar/' : '/');
export const otherLang = (lang: Lang): Lang => (lang === 'ar' ? 'en' : 'ar');

// Personal constants that never change per language.
export const person = {
  fullNameEn: 'Jana Hamad Alghasham',
  nameAr: 'جنى حمد الغشام',
  email: 'janahamadgh@gmail.com',
  cv: '/Jana-Alghasham-CV.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/janaalghasham',
    github: 'https://github.com/janahamad',
  },
};

export const sectionIds = ['top', 'about', 'infrastructure', 'projects', 'experience', 'stack', 'credentials', 'contact'] as const;
export const pad = (n: number) => String(n).padStart(2, '0');
