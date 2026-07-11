export const projects = {
  summary: {
    text: "I'm currently building an interactive portfolio {{minigame}} with two goals. Once it's finished, I'll integrate it into this website:",
    links: [
      {
        id: 'minigame',
        text: 'mini-game',
        href: 'https://github.com/agungkrs21/portofolio-game',
      },
    ],
  },

  pourpose: [
    {
      title: 'For Recruiters & Visitors',
      body: 'Create a memorable and interactive way to explore my work.',
    },
    {
      title: 'For Myself',
      body: 'Continue growing as a developer by combining web development, game development, and design into a single project.',
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
        { name: 'react', color: 'cyan' },
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
  commisionProjects: [
    {
      title: 'Kalosi Health Center Information System',
      url: '',
      gitLink: 'https://github.com/agungkrs21/web-kalosi-kesehatan',
      image: '/images/projects/web-apkalosi.png',

      term: 'A web-based healthcare management system developed for the Kalosi Health Center.',
      keyFeatures: [
        'Realtime Chat — Communicate with users via real-time messaging, featuring notifications across both mobile and web platforms.',
        'Article Management — Create, edit, and publish health articles using the Quill Rich Text Editor, allowing healthcare staff to write formatted content with images, headings, lists, and other rich-text features.',
        'User Management — Manage registered users, monitor user information, and maintain account data',
        'Education Video Management — Upload, organize, update, and remove educational health videos that are accessible from the mobile application.',
      ],
      tags: [
        { name: 'react', color: 'cyan' },
        { name: 'expo', color: 'gray' },
        { name: 'quill', color: 'yellow' },
        { name: 'express', color: 'gray' },
        { name: 'appwrite', color: 'red' },
      ],
    },
    {
      title: 'PT Nuansa Cipta Magello Distribution Management System',
      url: '',
      gitLink:
        'https://github.com/agungkrs21/aplikasi-distribusi-makanan-kaleng',
      image: '/images/projects/web-ptmagello.png',

      term: 'A web-based distribution management system developed for PT Nuansa Cipta Magello to streamline the distribution of canned food products.',
      keyFeatures: [
        'Analytics Dashboard — Monitor key business metrics through an interactive dashboard and provides instant insights into warehouse operations.',
        'Active Shipment Tracking — Track ongoing product deliveries in real time using geolocation and data provided by the delivery app.',
        'Automated Report Generation — Generate comprehensive distribution reports with flexible filtering capabilities and multi-format export options (Excel/PDF).',
        'Database Design — The application uses a relational database structure to maintain data consistency and support complex business workflows.',
      ],
      tags: [
        { name: 'react', color: 'cyan' },
        { name: 'neosql', color: 'green' },
        { name: 'geolocation', color: 'gray' },
        { name: 'sql', color: 'cyan' },
      ],
    },
    {
      title: 'PT Yusran Karya Nusantara AI Customer Service',
      url: '',
      gitLink: 'https://github.com/agungkrs21/chat-bot-pt-yusran',
      image: '/images/projects/android-ptyusran.png',

      term: 'An AI-powered Android customer service application developed for PT Yusran Karya Nusantara.',
      keyFeatures: [
        "AI Customer Assistant — Using OpenAI's LLM with Retrieval-Augmented Generation (RAG) to answer customer inquiries based on data retrieved from a vector database.",
        'Real-time Chat — Built using Appwrite Realtime subscriptions for instant message delivery and synchronization across connected clients.',
        'Server-Side Processing — Critical operations are handled by Appwrite Functions, enabling the client application to focus on rendering data and delivering a responsive user experience.',
        "Database Design — Uses ChromaDB for the company's knowledge base and Appwrite Database for application data.",
      ],
      tags: [
        { name: 'expo', color: 'gray' },
        { name: 'openAi', color: 'green' },
        { name: 'rag', color: 'cyan' },
        { name: 'nlpm', color: 'purple' },
        { name: 'chromaDb', color: 'pink' },
        { name: 'appwrite', color: 'red' },
      ],
    },
  ],
};
