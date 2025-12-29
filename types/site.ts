export type NavItem = string;

export type Hero = {
  title: string;
  subtitle?: string;
  buttonText?: string;
  image?: string;
};

export type ProgramItem = {
  id: string;
  name: string;
  image?: string;
  price?: string;
  slug?: string;
  description?: string;
  details?: string[];
  duration?: string;
  frequency?: string;
  level?: string;
};

export type Section = {
  id: string;
  title: string;
  description?: string;
  items?: ProgramItem[];
};

export type SiteContent = {
  site: { title: string; nav: NavItem[] };
  hero: Hero;
  sections: Section[];
  footer: { text: string };
};
