export const projects = {
  summary:
    "I'm currently building a portfolio mini-game that transforms a traditional portfolio into an interactive experience. Once completed, it will serve two purposes:",
  pourpose: [
    {
      title: 'For Recruiters & Visitors',
      body: 'A memorable and engaging way to explore my skills, projects, and experience through gameplay instead of static pages.',
    },
    {
      title: 'For Myself',
      body: 'A long-term playground for experimenting with new ideas, refining my frontend architecture, and continuously improving my skills in system design, performance, and accessibility.',
    },
  ],
  featured: [
    {
      title: 'Escape The Factory',
      url: 'https://agungkrs21.itch.io/escape-the-factory',
      gitLink: 'https://github.com/agungkrs21/platformer-game',
      image: '/images/projects/escape-factory.png',

      term: 'A fast-paced 2D action platformer where you play as a robot trapped inside a massive industrial factory.',
      keyFeatures: [
        'Object-Oriented Architecture — Modular and reusable game entities built with OOP principles for easy scalability.',
        'Optimized Pixel Art Rendering — Low-resolution assets scaled with pixel-perfect rendering for crisp visuals and improved performance.',
        'Simple Enemy AI — Enemies chase the player within a detection range and return to their original position when the player escapes.',
      ],
      tags: [
        { name: 'oop', color: 'blue' },
        { name: 'html5', color: 'red' },
        { name: 'css', color: 'gray' },
        { name: 'kaplay', color: 'green' },
        { name: 'javascript', color: 'yellow' },
      ],
    },
    {
      title: 'Job Tracker',
      url: 'https://lowonganku.vercel.app/',
      gitLink: 'https://github.com/agungkrs21/Lowonganku',
      image: '/images/projects/jobhunting.png',

      term: 'An interactive job management platform designed to help users organize job opportunities with an intuitive drag-and-drop interface.',
      keyFeatures: [
        'Drag & Drop — Interactive drag-and-drop with optimized rendering.',
        'Core Web Vitals Optimization — Skeleton loading to reduce layout shifts (CLS).',
        'React Performance Optimization — Memoized callbacks and stable refs to minimize re-renders.',
        'Client-Side State Synchronization — Batched updates to reduce unnecessary API requests.',
        'JWT Authentication — Secure authentication with JWT and bcrypt password hashing.',
      ],
      tags: [
        { name: 'hash', color: 'gray' },
        { name: 'jws', color: 'yellow' },
        { name: 'nextjs', color: 'gray' },
        { name: 'mongodb', color: 'green' },
        { name: 'dnd-kit', color: 'purple' },
      ],
    },
    {
      title: 'Web Animations',
      url: 'https://web-animations-agungkrs.netlify.app/',
      gitLink: 'https://github.com/agungkrs21/web-animation',
      image: '/images/projects/web-animations.png',

      term: 'An educational platform that teaches the fundamentals of web animations through interactive visualizations, practical examples, and a built-in playground.',
      keyFeatures: [
        'Animation Fundamentals — Covers the core concepts of modern web animations.',
        'Interactive Visualizations — Visual demonstrations for intuitive learning.',
        'Live Playground — Experiment with animations and inspect the source code.',
        'User Experience Design — Light/dark themes with smooth transitions and accessible visuals.',
      ],
      tags: [
        { name: 'web animations', color: 'pink' },
        { name: 'css', color: 'gray' },
        { name: 'javascript', color: 'yellow' },
        { name: 'html5', color: 'red' },
      ],
    },
  ],
};
