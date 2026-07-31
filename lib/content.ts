import type { TranslationKey } from './i18n/dictionaries';

// ── NAV ── (labels are plain English in the original site, unaffected by the language toggle — preserved as-is)
export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

// ── HERO ── (typewriter roles are English-only in the original site regardless of language toggle — preserved as-is)
export const typewriterWords = [
  'Sistem Informasi Student',
  'Data Science Enthusiast',
  'Web Developer',
  'Problem Solver',
];

export type SocialIcon = 'github' | 'linkedin' | 'email' | 'phone';

export const heroSocials: { icon: SocialIcon; href: string; label: string }[] = [
  { icon: 'github', href: 'https://github.com/AmmarTyoPasaribu', label: 'GitHub' },
  { icon: 'linkedin', href: 'https://linkedin.com/in/ammartyopasaribu', label: 'LinkedIn' },
  { icon: 'email', href: 'mailto:ammar123tyo12@gmail.com', label: 'Email' },
  { icon: 'phone', href: 'tel:+62823964064360', label: 'Phone' },
];

export const footerSocials: { icon: SocialIcon; href: string; label: string }[] = [
  { icon: 'github', href: 'https://github.com/AmmarTyoPasaribu', label: 'GitHub' },
  { icon: 'linkedin', href: 'https://linkedin.com/in/ammartyopasaribu', label: 'LinkedIn' },
  { icon: 'email', href: 'mailto:ammar123tyo12@gmail.com', label: 'Email' },
];

// ── ABOUT ── (tag pills are plain English, not translated in the original site)
export const aboutTags = [
  'Web Development',
  'Mobile Development',
  'Data Science',
  'Data Analyst',
  'Machine Learning',
  'Deep Learning',
  'Data Visualization',
  'Artificial Intelligence',
];

// ── EDUCATION / EXPERIENCE (shared Timeline shape) ──
export interface TimelineItem {
  period: string;
  org: string;
  roleKey: TranslationKey;
  descKey: TranslationKey;
  descHtml: boolean;
}

export const educationItems: TimelineItem[] = [
  {
    period: '2022 — 2026',
    org: 'Universitas Hasanuddin',
    roleKey: 'edu.unhas.role',
    descKey: 'edu.unhas.desc',
    descHtml: true,
  },
  {
    period: '2019 — 2022',
    org: 'SMAN 1 Maros',
    roleKey: 'edu.sma.role',
    descKey: 'edu.sma.desc',
    descHtml: false,
  },
];

export const experienceItems: TimelineItem[] = [
  {
    period: 'Feb 2026 — Jul 2026',
    org: 'Laboratorium Sistem Informasi FMIPA UNHAS',
    roleKey: 'exp.silab.role',
    descKey: 'exp.silab.desc',
    descHtml: false,
  },
  {
    period: 'Feb 2025 — Jul 2025',
    org: 'Kantor Otoritas Bandar Udara Wilayah V Makassar',
    roleKey: 'exp.intern.role',
    descKey: 'exp.intern.desc',
    descHtml: false,
  },
  {
    period: 'Oct 2024 — Jul 2025',
    org: 'Badan Eksekutif Himatika FMIPA UNHAS',
    roleKey: 'exp.himatika.role',
    descKey: 'exp.himatika.desc',
    descHtml: false,
  },
  {
    period: '2020 — 2021',
    org: 'OSIS SMAN 1 Maros',
    roleKey: 'exp.osis.role',
    descKey: 'exp.osis.desc',
    descHtml: false,
  },
];

// ── ACHIEVEMENTS ──
export interface AchievementItem {
  icon: string;
  title: string;
  year: string;
  descKey: TranslationKey;
}

export const achievements: AchievementItem[] = [
  { icon: '🏆', title: 'Beasiswa Bakti BCA', year: '2024 — 2025', descKey: 'ach.bca.desc' },
  { icon: '🥇', title: 'Juara 1 KSN-K Bidang Informatika', year: '2020', descKey: 'ach.ksn20.desc' },
  { icon: '🥇', title: 'Juara 1 KSN-K Bidang Informatika', year: '2019', descKey: 'ach.ksn19.desc' },
];

// ── SKILLS (tech marquee) ──
// `slug` is looked up against the ICONS map in SkillsMarquee.tsx, which
// renders each icon as a local react-icons SVG component (not an external
// image) so LogoLoop's width measurement never races an async image load.
export interface TechItem {
  slug: string;
  label: string;
}

export const techRows: TechItem[][] = [
  [
    { slug: 'html', label: 'HTML5' },
    { slug: 'css', label: 'CSS3' },
    { slug: 'js', label: 'JavaScript' },
    { slug: 'ts', label: 'TypeScript' },
    { slug: 'react', label: 'React' },
    { slug: 'nextjs', label: 'Next.js' },
    { slug: 'tailwind', label: 'Tailwind CSS' },
  ],
  [
    { slug: 'nodejs', label: 'Node.js' },
    { slug: 'express', label: 'Express' },
    { slug: 'python', label: 'Python' },
    { slug: 'flask', label: 'Flask' },
    { slug: 'fastapi', label: 'FastAPI' },
    { slug: 'pandas', label: 'Pandas' },
    { slug: 'googlecolab', label: 'Google Colab' },
    { slug: 'laravel', label: 'Laravel' },
    { slug: 'php', label: 'PHP' },
    { slug: 'java', label: 'Java' },
    { slug: 'mysql', label: 'MySQL' },
  ],
  [
    { slug: 'git', label: 'Git' },
    { slug: 'github', label: 'GitHub' },
    { slug: 'vscode', label: 'VS Code' },
    { slug: 'vercel', label: 'Vercel' },
    { slug: 'postman', label: 'Postman' },
  ],
];

// ── CERTIFICATIONS ──
export interface CertItem {
  img: string; // relative to /assets/sertifikat/
  title: string;
  titleKey?: TranslationKey;
  org: string;
  year: string;
  visible: boolean;
}

export interface CertGroup {
  id: string;
  toggle: boolean;
  items: CertItem[];
}

export const certGroups: CertGroup[] = [
  {
    id: 'dicoding',
    toggle: true,
    items: [
      { img: 'dicoding/sertifikat_datascience_page-0001.jpg', title: 'Belajar Dasar Data Science', org: 'Dicoding Indonesia', year: '2024', visible: true },
      { img: 'dicoding/sertifikat_python_page-0001.jpg', title: 'Memulai Pemrograman dengan Python', org: 'Dicoding Indonesia', year: '2024', visible: true },
      { img: 'dicoding/sertifikat_visualisasi_data_page-0001.jpg', title: 'Belajar Dasar Visualisasi Data', org: 'Dicoding Indonesia', year: '2024', visible: true },
      { img: 'dicoding/sertifikat_SQL_page-0001.jpg', title: 'Belajar Dasar Structured Query Language (SQL)', org: 'Dicoding Indonesia', year: '2024', visible: false },
      { img: 'dicoding/sertifikat_AI_page-0001.jpg', title: 'Belajar Dasar AI', org: 'Dicoding Indonesia', year: '2024', visible: false },
    ],
  },
  {
    id: 'myskill',
    toggle: true,
    items: [
      { img: 'myskill/data-visualization.jpg', title: 'Data Visualization', org: 'MySkill', year: '2024', visible: true },
      { img: 'myskill/project-management.jpg', title: 'Introduction to Project Management', org: 'MySkill', year: '2024', visible: true },
      { img: 'myskill/ux-research.jpg', title: 'Introduction to UX Research', org: 'MySkill', year: '2024', visible: true },
      { img: 'myskill/frontend-fundamentals.jpg', title: 'Frontend Fundamentals', org: 'MySkill x SGU', year: '2024', visible: false },
      { img: 'myskill/brand-identity.jpg', title: 'Brand Identity Design', org: 'MySkill', year: '2024', visible: false },
      { img: 'myskill/corporate-finance.jpg', title: 'Corporate Finance Introduction', org: 'MySkill', year: '2024', visible: false },
      { img: 'myskill/pitch-deck.jpg', title: 'Creating Business Pitch Deck', org: 'MySkill x SGU', year: '2024', visible: false },
      { img: 'myskill/recruitment-process.jpg', title: 'Intro to Recruitment Process', org: 'Deloitte x MySkill', year: '2024', visible: false },
      { img: 'myskill/scholarship-interview.jpg', title: 'Scholarship Interview', org: 'MySkill x Deloitte', year: '2024', visible: false },
    ],
  },
  {
    id: 'kominfo',
    toggle: true,
    items: [
      { img: 'kominfo/ai-engineer.jpg', title: 'AI Engineer For Milenial', org: 'Kominfo — DTS', year: '2024', visible: true },
      { img: 'kominfo/fundamental-data-science.jpg', title: 'Fundamental Data Science', org: 'Kominfo — DTS', year: '2024', visible: true },
      { img: 'kominfo/intermediate-data-science.jpg', title: 'Intermediate Data Science', org: 'Kominfo — DTS', year: '2024', visible: true },
      { img: 'kominfo/pengenalan-data-science.jpg', title: 'Pengenalan Data Science dan Pemanfaatannya', org: 'Kominfo — DTS', year: '2024', visible: false },
      { img: 'kominfo/wawasan-karir-data-analytics.jpg', title: 'Wawasan Karir dalam Bidang Data Analytics', org: 'Kominfo — DTS', year: '2024', visible: false },
    ],
  },
  {
    id: 'other',
    toggle: false,
    items: [
      { img: 'other/bnsp-data-analyst.jpg', title: 'BNSP Data Analyst Certification', titleKey: 'cert.bnsp', org: 'BNSP — Bank Indonesia', year: '2024', visible: true },
      { img: 'other/ksn-k-2020.jpg', title: '1st Place KSN-K Informatics 2020', titleKey: 'cert.ksn20', org: 'Puspresnas, Kemdikbudristek', year: '2020', visible: true },
      { img: 'other/ksn-k-2021.jpg', title: '1st Place KSN-K Informatics 2021', titleKey: 'cert.ksn21', org: 'Puspresnas, Kemdikbudristek', year: '2021', visible: true },
    ],
  },
];

// ── CONTACT ──
export interface ContactLink {
  icon: SocialIcon | 'instagram';
  href: string;
  title: string;
  value: string;
}

export const contactLinks: ContactLink[] = [
  { icon: 'email', href: 'mailto:ammar123tyo12@gmail.com', title: 'Email', value: 'ammar123tyo12@gmail.com' },
  { icon: 'github', href: 'https://github.com/AmmarTyoPasaribu', title: 'GitHub', value: 'AmmarTyoPasaribu' },
  { icon: 'linkedin', href: 'https://www.linkedin.com/in/ammartyopasaribu', title: 'LinkedIn', value: 'ammartyopasaribu' },
  { icon: 'instagram', href: 'https://instagram.com/ammartyo', title: 'Instagram', value: '@ammartyo' },
  { icon: 'phone', href: 'tel:+62823964064360', title: 'Phone', value: '+62 823-9640-64360' },
];
