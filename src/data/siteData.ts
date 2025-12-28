export const site = {
  brand: {
    name: 'SBB Software Engineer',
    tagline: 'Clean, modern software engineering for cloud-first products.',
    location: 'South Africa',
    email: 'salome.benita.becker@gmail.com',
    // Replace with your real links when ready
    links: {
      linkedin: 'https://www.linkedin.com/in/salome-becker-software-engineer/',
    },
  },
  hero: {
    headline: 'Build fast. Ship safely. Scale calmly.',
    subheadline:
      'I design and deliver dependable web and cloud systems — TypeScript-first, AWS-native, and obsessed with clean UX and maintainable code.',
    highlights: [
      'Serverless & AWS (Lambda, S3, EventBridge, API Gateway)',
      'Integrations (Xero, SAP/IDoc patterns, third-party APIs)',
      'React & mobile (Expo / React Native), performance-minded UI',
      'Documentation, testing, and pragmatic engineering processes',
    ],
  },
  about: {
    pills: ['TypeScript', 'AWS Serverless', 'Integrations', 'React / Expo', 'Docs-first', 'Pragmatic testing'],
    focus: [
      'Designing APIs and event-driven flows that stay predictable under load',
      'Integrations that don\'t fall over (retries, idempotency, tracing)',
      'Front-ends that feel fast and stay maintainable',
      'Reducing deployment friction when “just a small data change” happens',
    ],
  },
  services: [
    {
      title: 'Cloud & Serverless Build-outs',
      body: 'From idea to production: APIs, auth, queues, storage, and observability with a Serverless-first architecture.',
      bullets: ['TypeScript + AWS', 'IaC with Serverless Framework', 'Monitoring & cost guardrails'],
    },
    {
      title: 'Systems Integration',
      body: 'Reliable data flows between platforms with clear contracts, retries, and tracing — designed for messy real-world edge cases.',
      bullets: ['API & webhook design', 'Idempotency + retries', 'Data mapping + validation'],
    },
    {
      title: 'Product UX Engineering',
      body: 'Clean, modern front-ends with sensible component structure and a focus on speed, accessibility, and maintainability.',
      bullets: ['React UI architecture', 'Design system hygiene', 'Performance + accessibility'],
    },
    {
      title: 'Modernization & Refactoring',
      body: 'Tame legacy code: reduce deployment friction, improve clarity, and ship changes without fear.',
      bullets: ['Incremental migration plans', 'Test strategy improvements', 'Docs & knowledge transfer'],
    },
  ],
  work: [
    {
      title: 'Serverless internal APIs',
      body: 'Built secure internal endpoints that accept batches of identifiers, fetch domain data, and fan-out calls to external systems — with retries, idempotency, and audit trails.',
      tags: ['TypeScript', 'AWS Lambda', 'OpenAPI'],
    },
    {
      title: 'Finance & accounting automation',
      body: 'Implemented OAuth token handling, refresh persistence, and upload workflows to streamline finance operations and reduce manual admin.',
      tags: ['Xero API', 'Secrets Manager', 'Automation'],
    },
    {
      title: 'Mobile app delivery pipeline',
      body: 'Helped move an app into test distribution, aligned SDK versions, and documented the lowest-friction path to store testing and releases.',
      tags: ['Expo', 'TestFlight', 'Play Internal Testing'],
    },
  ],
  process: [
    {
      title: '1) Understand the goal',
      body: 'We clarify the outcome, constraints, and what “done” looks like — then pick the simplest path that won’t hurt later.',
    },
    {
      title: '2) Design the edges',
      body: 'Define interfaces, error cases, observability, and rollback plans before writing lots of code.',
    },
    {
      title: '3) Build in small slices',
      body: 'Ship increments with tests and docs, so you get value quickly and feedback stays cheap.',
    },
    {
      title: '4) Harden & hand over',
      body: 'Monitoring, runbooks, and clean documentation so your team can own the system with confidence.',
    },
  ],
  faq: [
    {
      q: 'What do you build most often?',
      a: 'Cloud APIs, integrations, internal tools, and clean front-ends — usually TypeScript + AWS with a modern React UI.',
    },
    {
      q: 'Do you work with existing codebases?',
      a: 'Yes. I’m comfortable untangling legacy patterns and improving quality without stopping delivery.',
    },
    {
      q: 'How do we start?',
      a: 'A short call to understand the need, then a 1–2 page technical plan with milestones and risks.',
    },
  ],
};
