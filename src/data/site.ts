import { pending, type Fact } from '../lib/review';

/**
 * Site-wide identity and contact details.
 * Everything taken from the previous site that Hussein has not yet re-confirmed
 * is `pending` — shown highlighted in review builds, omitted in production.
 */
export const site = {
  name: 'Hussein Isaac',
  title: 'Hussein Isaac — Architecture Portfolio',
  description:
    'Architecture portfolio of Hussein Isaac — housing, technical lighting studies, drawings and design work.',
  discipline: 'Architecture · Documentation · Design',
  tagline: 'Designing thoughtful, buildable architecture for people, communities, and the future.',

  email: pending('boali9300@gmail.com', 'Address shown on the previous site'),
  linkedin: undefined as Fact | undefined,
  location: pending('Lexington, Kentucky'),
  languages: pending('English & Arabic'),
  education: pending('UK College of Design, 2016–2020', 'Wording from the previous site; degree title not yet supplied'),
} as const;

/** Main navigation. Items are added as their pages are completed and approved. */
export const nav: { label: string; href: string }[] = [
  { label: 'Work', href: '/#work' },
  { label: 'Profile', href: '/#profile' },
  { label: 'Contact', href: '/#contact' },
];
