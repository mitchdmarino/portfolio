export const featuredProject = {
  id: 'usc-agile-tracker',
  title: 'Agile Dev Cycle Tracker',
  context: 'University of Southern California — Research Technology Services',
  period: '2023',
  problem:
    'The team lacked a formal system for tracking development work, making it difficult to manage sprints, prioritize tasks, or measure output — all of which slowed support ticket resolution.',
  built:
    'Designed and built an internal application within the iStar platform featuring sprint structures, story point tracking, priority assignments, and a four-stage kanban-style board. Formalized the team\'s Agile adoption end-to-end.',
  outcome: 'Reduced support ticket resolution time by 40%.',
  skills: ['Requirements Design', 'iStar Platform', 'Agile/SCRUM', 'Kanban', 'Stakeholder Management', 'JavaScript'],
}

export const projects = [
  {
    id: 'stratego',
    title: 'Stratego',
    description:
      'A browser-based recreation of the classic Stratego board game. My first software project — built entirely with vanilla HTML, CSS, and JavaScript.',
    skills: ['HTML', 'CSS', 'JavaScript'],
    image: '/Stratego.png',
    github: 'https://github.com/mitchdmarino/Stratego-mock',
    live: 'https://mitchdmarino.github.io/Stratego-mock/',
  },
  {
    id: 'simplifry',
    title: 'Simplifry',
    description:
      'Personal recipe library with nutritional info lookup. Users can save, organize, and explore recipes with integrated nutritional data.',
    skills: ['React', 'Node.js', 'Express', 'Tailwind CSS'],
    image: '/Simplifry.png',
    github: 'https://github.com/mitchdmarino/Simplifry',
    live: null,
  },
]

export const inProgressProjects = [
  {
    id: 'budget-buddy',
    title: 'Budget Buddy',
    description:
      'Personal budgeting app with transaction tracking, category management, and spending insights. Built with a TypeScript/React frontend and a Node.js/Express/PostgreSQL backend — currently migrating to Electron for a native desktop experience.',
    skills: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Electron'],
  },
  {
    id: 'rsa-demo',
    title: 'RSA Encryption Demo',
    description:
      'An interactive demonstration of RSA public-key cryptography, exploring concepts from my discrete mathematics coursework — prime generation, modular exponentiation, and key pair construction.',
    skills: ['Discrete Mathematics', 'Number Theory', 'RSA Cryptography'],
  },
]
