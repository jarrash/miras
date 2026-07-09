export const colors = {
  // Backgrounds
  bgDark: '#050505',
  bgDarkPanel: '#0a0a0f',
  bgDarkPanelAlt: '#0a0a10',
  bgLight: '#F7F7F5',
  bgLightAlt: '#ECECE7',
  bgLightAltSecond: '#E8E8E4',

  // Text
  textLight: '#F7F7F5',
  textLightSecondary30: 'rgba(247,247,245,.3)',
  textLightSecondary38: 'rgba(247,247,245,.38)',
  textLightSecondary45: 'rgba(247,247,245,.45)',
  textLightSecondary50: 'rgba(247,247,245,.5)',
  textLightSecondary55: 'rgba(247,247,245,.55)',
  textLightSecondary65: 'rgba(247,247,245,.65)',
  textDark: '#050505',
  textDarkSecondary: '#4D4D4D',

  // Accents
  accent: '#5578FF',
  accentHover: '#6B8FFF',
  accentGlow: 'rgba(85,120,255,.35)',
  accentGlowStrong: 'rgba(85,120,255,.4)',
  accentGlowAlt: 'rgba(85,120,255,.5)',

  // Borders
  borderLight: 'rgba(255,255,255,.06)',
  borderLightAlt: 'rgba(255,255,255,.12)',
  borderLightDiv: '#D9D9D9',
  borderDark: 'rgba(255,255,255,.05)',
};

export const typography = {
  display: 'ThmanyahSerifDisplay, serif',
  text: 'ThmanyahSerifText, serif',
  sans: 'ThmanyahSans, sans-serif',
  mono: '"IBM Plex Mono", monospace',
};

export const spacing = {
  sectionVertical: '160px',
  sectionHorizontal: '52px',
  maxWidth: '1320px',
};

export const radius = {
  button: '6px',
  cardDefault: '0px',
  cardRounded: '16px',
  pill: '100px',
};

export const breakpoints = {
  tablet: '880px',
  mobile: '640px',
};

export const animations = {
  easeCustom: 'cubic-bezier(.16,1,.3,1)',
  scrollTransition: '0.5s',
  buttonTransition: '0.25s',
  linkTransition: '0.2s',
};

export const episodes = [
  {
    id: 1,
    number: '01',
    title: 'الحلقة الأولى',
    guest: 'أحمد المحمدي',
    role: 'الرئيس التنفيذي',
    duration: '52 MIN',
    topic: 'crisis',
    topicLabel: 'إدارة الأزمات',
    image: '/assets/img/Miras01.jpg',
  },
  {
    id: 2,
    number: '02',
    title: 'الحلقة الثانية',
    guest: 'فاطمة العوضي',
    role: 'مدير التحول الرقمي',
    duration: '48 MIN',
    topic: 'digital',
    topicLabel: 'التحول الرقمي',
    image: '/assets/img/Miras02.jpg',
  },
  {
    id: 3,
    number: '03',
    title: 'الحلقة الثالثة',
    guest: 'محمد الشمري',
    role: 'مستشار القيادة',
    duration: '55 MIN',
    topic: 'leadership',
    topicLabel: 'القيادة',
    image: '/assets/img/Miras03.jpg',
  },
  {
    id: 4,
    number: '04',
    title: 'الحلقة الرابعة',
    guest: 'ليلى الأحمدي',
    role: 'خبيرة استمرارية الأعمال',
    duration: '50 MIN',
    topic: 'continuity',
    topicLabel: 'استمرارية الأعمال',
    image: '/assets/img/Miras04.jpg',
  },
  {
    id: 5,
    number: '05',
    title: 'الحلقة الخامسة',
    guest: 'سالم البدري',
    role: 'محلل الأمن السيبراني',
    duration: '56 MIN',
    topic: 'crisis',
    topicLabel: 'إدارة الأزمات',
    image: '/assets/img/Miras05.jpg',
  },
];

export const guests = [
  {
    id: 1,
    name: 'أحمد المحمدي',
    title: 'الرئيس التنفيذي',
    image: '/assets/img/Miras00.jpg',
  },
  {
    id: 2,
    name: 'فاطمة العوضي',
    title: 'مدير التحول الرقمي',
    image: '/assets/img/Miras01.jpg',
  },
  {
    id: 3,
    name: 'محمد الشمري',
    title: 'مستشار القيادة',
    image: '/assets/img/Miras02.jpg',
  },
  {
    id: 4,
    name: 'ليلى الأحمدي',
    title: 'خبيرة استمرارية الأعمال',
    image: '/assets/img/Miras03.jpg',
  },
  {
    id: 5,
    name: 'سالم البدري',
    title: 'محلل الأمن السيبراني',
    image: '/assets/img/Miras04.jpg',
  },
  {
    id: 6,
    name: 'نورا الخليفة',
    title: 'مستشارة الأعمال',
    image: '/assets/img/Miras05.jpg',
  },
  {
    id: 7,
    name: 'خالد الدوسري',
    title: 'خبير الاستراتيجية',
    image: '/assets/img/Miras09.jpg',
  },
  {
    id: 8,
    name: 'مريم الحمادي',
    title: 'قائدة المشاريع',
    image: '/assets/img/Miras10.jpg',
  },
];

export const topics = [
  { id: 1, label: 'إدارة الأزمات', key: 'crisis' },
  { id: 2, label: 'التحول الرقمي', key: 'digital' },
  { id: 3, label: 'القيادة', key: 'leadership' },
  { id: 4, label: 'استمرارية الأعمال', key: 'continuity' },
  { id: 5, label: 'الأمن السيبراني', key: 'security' },
  { id: 6, label: 'التغيير التنظيمي', key: 'change' },
  { id: 7, label: 'التطور المستدام', key: 'sustainable' },
  { id: 8, label: 'التجارة الإلكترونية', key: 'ecommerce' },
  { id: 9, label: 'المؤشرات المالية', key: 'finance' },
];
