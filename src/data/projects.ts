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
      image: '/images/projects/escape-factory.png',

      term: 'A fast-paced 2D action platformer where you play as a robot trapped inside a massive industrial factory.',
      keyFeatures: [
        'Object-Oriented Architecture — Built using object-oriented programming principles, making game entities modular, reusable, and easy to extend as new mechanics and features are introduced.',
        'Optimized Pixel Art Rendering — Uses a low-resolution pixel art style where maps and game assets are created at a small scale and enlarged with image-rendering: pixelated, preserving crisp visuals while improving rendering',
        'Simple Enemy AI — Enemies detect and pursue the player when they enter a defined detection radius, then return to their original position once the player leaves their attack range, creating predictable and responsive gameplay.',
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
      image: '/images/projects/jobhunting.png',

      term: 'An interactive job management platform designed to help users organize job opportunities with an intuitive drag-and-drop interface.',
      keyFeatures: [
        'Interactive Drag & Drop — Organize job listings effortlessly with a smooth, responsive drag-and-drop experience.',
        'Optimized Core Web Vitals — Minimized layout shifts by rendering skeleton placeholders that preserve component dimensions while content is loading.',
        'High-Performance Drag & Drop — Prevented unnecessary React re-renders during drag operations by memoizing core logic with useCallback and maintaining stable references with useRef.',
        "Reduced Server Load — Stored changes locally in the user's browser and synchronized them with the database only after the user confirmed their modifications, reducing unnecessary network requests.",
        'Secure Authentication — Protected user passwords using bcrypt hashing and implemented JSON Web Tokens (JWT) for secure authentication and session management.',
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
      image: '/images/projects/web-animations.png',

      term: 'An educational platform that teaches the fundamentals of web animations through interactive visualizations, practical examples, and a built-in playground.',
      keyFeatures: [
        'Animation Fundamentals — Covers the core principles behind modern web animations, providing the foundation needed to understand and build a wide variety of animation techniques.',
        'Interactive Visualizations — Explains animation concepts with clear visual demonstrations, making complex ideas easier to understand.',
        'Built-in Playground — Experiment with live animation examples, tweak parameters, and inspect the source code to learn how each effect is implemented.',
        'Thoughtful User Experience — Supports both light and dark themes with smooth transitions and a carefully crafted color palette that keeps the focus on the learning experience.',
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
