export type Lang = 'en' | 'ar';

export type Project = {
  slug: string;
  title: string;
  category: string;
  type: string; // "Solo" / "Team" (localized)
  image: string; // file name (no extension) in src/assets/projects/
  summary: string;
  problem: string;
  flow: string[];
  built: string[];
  outcomes: string[];
  stack: string[];
  links?: { label: string; href: string }[];
};

export type Job = {
  role: string;
  company: string;
  logo: 'aljawad' | 'nadeer' | 't2' | 'manafa';
  location: string;
  period: string;
  points: string[];
};

export type Content = {
  meta: { title: string; description: string; locale: string };
  ui: {
    skip: string;
    menu: string;
    close: string;
    backToTop: string;
    getInTouch: string;
    downloadCv: string;
    viewProjects: string;
    switchLang: string; // label of the *other* language
    switchLangAria: string;
    portfolio: string;
    openToWork: string;
    openToWorkLong: string;
    openToWorkRoles: string;
    sections: Record<'top' | 'about' | 'infrastructure' | 'projects' | 'experience' | 'stack' | 'studio' | 'credentials' | 'services' | 'contact', string>;
    heads: Record<'about' | 'infrastructure' | 'projects' | 'experience' | 'stack' | 'credentials', { kicker: string; title: string; lead?: string }>;
    hero: { terminalAria: string; headlineAria: string };
    about: { artAlt: string; artCaption: string };
    infra: { empty: string; connected: string; planned: string; hint: string; diagramAria: string; groups: [string, string, string] };
    projects: { open: string; read: string; caseStudy: string; closeCase: string; problem: string; architecture: string; built: string; outcome: string; stack: string; screenshotOf: string };
    stack: { also: string };
    credentials: { certs: string; education: string };
    contact: { kicker: string; titleA: string; titleEm: string; titleB: string; lead: string; leadStrong: string; leadAfter: string; copy: string; copied: string; copyFail: string };
    arrow: string; // "→" or "←"
  };
  profile: {
    name: string;
    shortFirst: string;
    shortLast: string;
    role: string;
    headline: string[];
    location: string;
    intro: string;
    summary: string[];
  };
  facts: { label: string; value: string }[];
  stats: { value: number; label: string }[];
  experience: Job[];
  studio: { kicker: string; name: string; description: string; visit: string };
  services: {
    kicker: string;
    title: string;
    lead: string;
    cta: string;
    // `id` matches an optional thumbnail at src/assets/services/<id>.(png|jpg|jpeg|webp|svg)
    items: { id: string; href: string; title: string; description: string; tags: string[] }[];
  };
  education: { title: string; org: string; period: string; note?: string }[];
  certifications: { title: string; issuer: string; year: string; badge: 'aws' | 'oci' | null }[];
  skills: { group: string; items: string[] }[];
  softSkills: string[];
  projects: Project[];
  infra: {
    categories: Record<string, string>;
    nodes: Record<string, { sub: string; description: string }>;
  };
};
