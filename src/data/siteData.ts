export const site = {
  brand: {
    name: 'Software Engineer',
    location: 'South Africa',
    email: 'salome.benita.becker@gmail.com',
    // Replace with your real links when ready
    links: {
      linkedin: 'https://www.linkedin.com/in/salome-becker-software-engineer/',
    },
  }, 
  about: 'Salome is a software engineer with BSc degree in Computer Science and 30+ years of experience in software development for major banks, logistics, and steel companies. She specializes in building cloud integrations and automating accounting workflows, delivering robust and scalable solutions that streamline operations and enhance efficiency.',
  services: [
    {
      title: 'Freelance Contract Work',
      body: 'Project-based work for teams and businesses.',
      bullets: [
        { title: 'Flexible timelines', desc: 'Adapt to your schedule' },
        { title: 'Full ownership', desc: 'Take control of your project' },
        { title: 'Clear deliverables', desc: 'Know what you\'re getting' },
      ],
    },
    {
      title: 'Cloud Integrations',
      body: 'Serverless APIs and event-driven pipelines on AWS.',
      bullets: [
        { title: 'Lambda', desc: 'Serverless compute functions' },
        { title: 'EventBridge', desc: 'Event routing and processing' },
        { title: 'Observability', desc: 'Monitoring, logs, and alerts' },
      ],
    },
    {
      title: 'Accounting Automation',
      body: 'OAuth flows and automation for finance systems.',
      bullets: [
        { title: 'OAuth', desc: 'Secure authentication flows' },
        { title: 'Document workflows', desc: 'Automated file handling' },
        { title: 'Production-ready', desc: 'Built to scale and handle failures' },
      ],
    },
  ],
  work: [
    {
      title: 'Cloud integrations',
      body: 'Batch endpoints with retries and idempotency.',
      tags: ['TypeScript', 'AWS Lambda'],
    },
    {
      title: 'Accounting workflows',
      body: 'OAuth and automations for finance documents.',
      tags: ['OAuth', 'Document workflows'],
    },
  ],
  faq: [
    {
      q: 'What do you build?',
      a: 'Cloud integrations and accounting automation.',
    },
    {
      q: 'How do we start?',
      a: 'A call to align on goals, then a technical plan.',
    },
  ],
};
