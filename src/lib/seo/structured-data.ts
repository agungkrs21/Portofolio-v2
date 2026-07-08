import { siteConfig } from '@/config/site';

export const personSchema = {
  '@context': 'https://schema.org',

  '@type': 'Person',

  name: siteConfig.name,

  alternateName: 'Agung',

  url: siteConfig.url,

  image: `${siteConfig.url}/og-image.png`,

  description: siteConfig.url,

  jobTitle: siteConfig.job,

  nationality: {
    '@type': 'Country',
    name: 'Indonesia',
  },

  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ID',
  },

  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: siteConfig.collage,
  },

  knowsLanguage: ['Indonesian', 'English'],

  knowsAbout: [
    'Frontend Development',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Tailwind CSS',
    'Three.js',
    'Framer Motion',
    'REST API',
    'Git',
    'GitHub',
    'Responsive Design',
    'Web Accessibility',
    'Web Performance',
    'SEO',
  ],

  sameAs: [
    'https://github.com/agungkrs21',
    'https://www.linkedin.com/in/agung-kurniawan-003954205/',
    'https://x.com/agungkrs21',
    'https://codepen.io/pcwyawdu-the-bashful',
    'https://agungkrs21.itch.io/',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',

  '@type': 'WebSite',

  name: siteConfig.name,

  url: siteConfig.url,

  description: siteConfig.description,

  inLanguage: 'en',

  author: {
    '@type': 'Person',
    name: siteConfig.name,
  },

  publisher: {
    '@type': 'Person',
    name: siteConfig.name,
  },

  // potentialAction: {
  //   '@type': 'SearchAction',

  //   target: 'https://your-domain.com/search?q={search_term_string}',

  //   'query-input': 'required name=search_term_string',
  // },
};

export const profilePageSchema = {
  '@context': 'https://schema.org',

  '@type': 'ProfilePage',

  name: siteConfig.name,

  description: siteConfig.description,

  mainEntity: {
    '@type': 'Person',

    name: siteConfig.name,
  },
};

// <JsonLd
//   data={[
//     websiteSchema,
//     personSchema,
//     profilePageSchema,
//   ]}
// />

// <JsonLd
//   data={softwareSourceCodeSchema({
//     name: project.title,
//     description: project.summary,
//     repo: project.github,
//     url: project.demo,
//   })}
// />
