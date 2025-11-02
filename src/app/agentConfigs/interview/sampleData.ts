// ============================================================================
// 1) JOB CONTEXT - Role information
// ============================================================================
export const jobContext = {
  job_title: "Full-stack Developer",
  job_level: ["Intern", "Junior", "Mid"],
  department: "Software Development",
  job_description: `
    Join web/mobile software development projects for customers.
    Collaborate with PM, QA, DevOps, and UI/UX to deliver on schedule.
    Research, propose, and apply new technologies/solutions to improve products.
    Create technical documents related to development and deployment.
    Contribute to process improvements and team productivity.
  `,
  required_skills: [
    "HTML5, CSS3, JavaScript ES6+",
    "At least one Frontend framework: React/Vue/Angular/Svelte",
    "At least one Backend stack: Node.js (Express/NestJS) or Java/Go/Python",
    "Databases: MySQL/PostgreSQL or MongoDB; Redis is a plus",
    "Basic networking knowledge: TCP/IP, OSI, HTTP/HTTPS, DNS, load balancer, basic security (firewall, VPN, etc.)",
    "Ability to read technical documentation in English",
    "Git and collaborative workflows",
  ],
  nice_to_have_skills: [
    "CI/CD exposure",
    "Docker & Kubernetes",
    "Linux usage & troubleshooting",
    "API design (REST/GraphQL) and performance optimization",
    "Basic testing (unit/integration/e2e)",
  ],
  responsibilities: [
    "Develop and maintain full-stack applications",
    "Design/implement APIs; optimize queries and performance",
    "Build responsive, accessible user interfaces",
    "Write technical docs and deployment checklists",
    "Participate in code reviews; work in Agile/Scrum",
    "Debug issues and support operations when needed",
  ],
  location:
    "Floor 6, Vinaconex Office Building, 459C Bạch Mai, Bạch Mai Ward, Hà Nội",
  working_time: "Mon–Fri; first Saturday each month (08:30–12:00, 13:30–17:30)",
  compensation_benefits: {
    salary_range_vnd: "Up to 30,000,000 VND/month (based on capability)",
    review_policy: "Promotion/salary review twice per year",
    bonus: [
      "Monthly performance bonus",
      "Holiday bonuses",
      "13th-month salary",
    ],
    welfare: [
      "Social insurance per Vietnam Labor Law",
      "Annual leave & public holidays per regulations",
      "Annual domestic/overseas company trips",
      "Modern equipment and tooling",
    ],
    culture:
      "Flexible, friendly, open, and dynamic environment supporting young talent",
  },
};

// ============================================================================
// 2) CANDIDATE PROFILE - From CV (Trần Phúc Tiền)
// ============================================================================
export interface CandidateProfile {
  candidate_name: string;
  years_of_experience: {
    total: number;
    react: number;
    nodejs: number;
  };
  past_roles: string[];
  tech_stack: string[];
  portfolio_projects: Array<{
    name: string;
    description: string;
    role: string;
    technologies: string[];
  }>;
  education: string;
  current_company?: string;
}

export const candidateProfile: CandidateProfile = {
  candidate_name: "Trần Phúc Tiền",
  years_of_experience: {
    total: 1, // internship + team projects
    react: 1,
    nodejs: 1,
  },
  past_roles: ["UI Developer Intern – FPT Software (12/2024–04/2025)"],
  tech_stack: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Redux",
    "Node.js",
    "Express.js",
    "NestJS",
    "MongoDB",
    "MySQL",
    "SQL Server",
    "Mongoose",
    "Redis",
    ".NET",
    "JSP/Servlet",
    "Git",
    "Docker",
    "Postman",
    "C#",
    "Java",
    "C/C++",
    "HTML",
    "CSS",
  ],
  portfolio_projects: [
    {
      name: "StayHub",
      description:
        "Full-stack lodging management web app; responsible for React frontend, Node APIs, and basic DB performance considerations and Git workflow.",
      role: "Full-stack Developer (team lead)",
      technologies: ["React", "Node.js", "MongoDB", "Git"],
    },
    {
      name: "Kicks Shoes",
      description:
        "Real-time footwear commerce platform with chat/call using Socket.io/WebRTC; owned full-stack architecture and a simple CI flow.",
      role: "Full-stack Developer (team lead)",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Socket.io",
        "WebRTC",
        "Git",
      ],
    },
    {
      name: "UI Internship Projects",
      description:
        "UI development, testing, bug fixing, documentation during internship; focused on UI behavior in C#, Unity, SQLite, and Loxodon.",
      role: "UI Developer Intern",
      technologies: ["C#", "Unity", "SQLite", "Loxodon"],
    },
  ],
  education:
    "B.Eng. in Software Engineering – FPT University Đà Nẵng (2022–present), GPA 8.5/10",
  current_company: "Student – FPT University",
};

// ============================================================================
// 3) INTENT & FIT - Candidate goals & expectations
// ============================================================================
export interface CandidateIntent {
  career_goals: string;
  salary_expectation?: string;
  work_model_preference: "Remote" | "Hybrid" | "Onsite" | "Flexible";
  notice_period: string;
  motivation_to_join: string;
  long_term_vision: string;
  preferred_interview_language?: "English" | "Vietnamese" | "Bilingual";
}

export const candidateIntent: CandidateIntent = {
  career_goals:
    "Join a Full-stack team to strengthen React/Node skills and grow to Mid-level in 1–2 years.",
  salary_expectation:
    "Open to negotiation; aligned with Junior market in Hà Nội.",
  work_model_preference: "Onsite",
  notice_period: "Can start in 2–3 weeks (flexible with academic schedule).",
  motivation_to_join:
    "JD fits my React/Node background; I want hands-on CI/CD, Docker/K8s, and production deployment experience.",
  long_term_vision:
    "Become a well-rounded Full-stack Engineer with solid architecture (NestJS/Next.js, DB optimization, security) and the ability to lead a small squad.",
  preferred_interview_language: "Vietnamese",
};

// ============================================================================
// 4) INTERVIEW STRATEGY - Tailored to role & JD
// ============================================================================
export const interviewStrategy = {
  interview_type: "Technical Interview",
  interview_duration: "30-40 minutes",
  tone_of_interview: "Professional, friendly, clear, and encouraging",
  question_depth: {
    junior: "Basic – Focus on fundamentals and learning speed",
    mid: "Intermediate – Real project experience and problem-solving",
    senior: "Deep Dive – Architecture, trade-offs, mentoring, leadership",
  },
  evaluation_focus: [
    "Frontend React (state, performance, forms, routing)",
    "Backend Node/Nest (layering, validation, error handling)",
    "API & Database (REST, pagination, basic indexing/transactions)",
    "Networking basics (HTTP, DNS, HTTPS, load balancing, security)",
    "CI/CD basics and Docker (if any exposure)",
    "Communication, collaboration, and growth mindset",
  ],
  avoid_topics: [
    "Politics and religion",
    "Personal/private life details",
    "Discriminatory questions (age, marital status, etc.)",
    "Salary specifics (unless candidate brings it up)",
    "Internal company politics",
  ],
  language_options: ["English", "Vietnamese", "Bilingual"],
};

// ============================================================================
// 5) SCORING RUBRIC - Evaluation criteria
// ============================================================================
export interface ScoringRubric {
  technical_skill: {
    score: number; // 1-5
    notes: string;
    evidence: string[];
  };
  problem_solving: {
    score: number; // 1-5
    notes: string;
    evidence: string[];
  };
  communication: {
    score: number; // 1-5
    notes: string;
    evidence: string[];
  };
  team_fit: {
    score: number; // 1-5
    notes: string;
    evidence: string[];
  };
  growth_mindset: {
    score: number; // 1-5
    notes: string;
    evidence: string[];
  };
}

export const scoringCriteria = {
  technical_skill: {
    description:
      "Knowledge and application of JS/TS, React, Node.js, API, Database, Testing",
    levels: {
      1: "Very vague knowledge, no real examples",
      2: "Surface-level understanding, lacks depth",
      3: "Understands basics, can apply with guidance",
      4: "Solid, hands-on experience, can solve issues independently",
      5: "Expert-level, strong architecture, systematic optimization, can mentor",
    },
  },
  problem_solving: {
    description:
      "Ability to analyze, debug, and resolve complex technical issues",
    levels: {
      1: "Unclear approach, vague",
      2: "Needs many hints, simplistic approach",
      3: "Logical thinking for common problems",
      4: "Strong analysis, considers trade-offs and alternatives",
      5: "Systems thinking, elegant solutions, anticipates edge cases",
    },
  },
  communication: {
    description:
      "Clarity, listening, explaining technical concepts effectively",
    levels: {
      1: "Very hard to follow, unclear",
      2: "Unstructured and confusing explanations",
      3: "Understandable, occasionally needs clarification",
      4: "Clear, structured, easy to follow",
      5: "Excellent: simplifies complex topics, active listening",
    },
  },
  team_fit: {
    description:
      "Teamwork, code review, feedback handling, collaborative culture",
    levels: {
      1: "Poor teamwork signs, defensive",
      2: "Teamwork ability not evident",
      3: "Works in a team, accepts feedback",
      4: "Proactive collaboration, constructive feedback, supports peers",
      5: "Outstanding team player, mentors others, builds positive culture",
    },
  },
  growth_mindset: {
    description:
      "Continuous learning, self-improvement, adapts to new tech, owns mistakes",
    levels: {
      1: "No learning motivation",
      2: "Passive learning",
      3: "Willing to learn when needed",
      4: "Proactive learning, tracks trends, applies in work",
      5: "Passionate learner, shares knowledge, leads by example",
    },
  },
};

// ============================================================================
// 6) INTERVIEW FLOW - Standard AI-driven flow
// ============================================================================
export const interviewFlow = {
  phases: [
    {
      phase: 1,
      name: "Greeting & Introduction",
      duration: "2-3 minutes",
      objectives: [
        "Warm greeting (offer multilingual support)",
        "Ask preferred language",
        "Outline interview structure",
        "Set expectations: 30–40 min, one question at a time, real scenarios",
      ],
      sample_script: {
        english:
          "Hi! Welcome to the technical interview for the Full-stack Developer role. We’ll focus on real projects and scenarios around React and Node. The interview will take about 30–40 minutes. Which language would you prefer: English, Vietnamese, or both?",
        vietnamese:
          "Xin chào! Chào mừng bạn đến buổi phỏng vấn kỹ thuật vị trí Full-stack Developer. Chúng ta sẽ tập trung vào các dự án và tình huống thực tế xoay quanh React và Node. Buổi phỏng vấn kéo dài khoảng 30–40 phút. Bạn muốn phỏng vấn bằng tiếng Việt, tiếng Anh hay song ngữ?",
      },
    },
    {
      phase: 2,
      name: "Confirm Position & Level",
      duration: "1 minute",
      objectives: [
        "Confirm Full-stack Developer application",
        "Collect name and years of experience (total/React/Node)",
      ],
      sample_questions: [
        "What’s your name?",
        "How many years of total experience do you have?",
        "How many years specifically with React.js?",
        "How many years with Node.js?",
        "Which area do you feel strongest in?",
      ],
    },
    {
      phase: 3,
      name: "Brief Experience Summary",
      duration: "2-3 minutes",
      objectives: [
        "60–90 second summary: tech stack, role, team size, project types",
      ],
      sample_questions: [
        "Can you give me a 60–90 second overview of your background as a Full-stack developer?",
        "Bạn có thể tóm tắt 60–90 giây về background Full-stack của bạn không?",
      ],
    },
    {
      phase: 4,
      name: "Deep Dive: Recent Project",
      duration: "5-7 minutes",
      objectives: [
        "Pick the most recent or most complex project",
        "Understand ownership and decision-making",
        "Assess impact",
      ],
      probe_for: [
        "What was the project about?",
        "What was YOUR specific role?",
        "What technologies did you use and why?",
        "Main technical challenges and solutions?",
        "Key trade-offs?",
        "Measurable impact?",
      ],
    },
    {
      phase: 5,
      name: "Core Technical Skills",
      duration: "15-20 minutes",
      objectives: [
        "React, Node/Nest, API, DB, Security, Testing, Performance, Networking basics",
      ],
      approach:
        "Scenario-based; follow up 1–2 times; give a hint if stuck and move on.",
      sample_questions: [
        // React
        "When would you choose local state vs Context vs Zustand/Redux? How do you avoid unnecessary re-renders?",
        // Node/API
        "Design an API for /bookings with pagination and idempotent POST; where do you validate schemas (Zod/Joi)?",
        // DB
        "For MongoDB, what index strategies would you use for recent top-k queries? How do you avoid N+1 issues?",
        // Security
        "Compare session vs JWT; how do you handle refresh token rotation and protect cookies (HttpOnly/SameSite/Secure)?",
        // Performance (FE)
        "How would you improve TTFB/LCP/INP for a React app? How do you apply code-splitting and lazy-loading?",
        // Networking basics
        "Walk through DNS → HTTPS request flow; at which OSI layer does a load balancer operate?",
        // Testing/CI
        "Describe your test pyramid (unit/integration/e2e) and how you integrate it into CI.",
      ],
    },
    {
      phase: 6,
      name: "Problem-Solving / Case Study",
      duration: "3-5 minutes",
      objectives: ["Evaluate analytical thinking and trade-off awareness"],
      sample_scenarios: [
        "Your Node API times out under high load; what are your debugging steps?",
        "Design a real-time notification system for thousands of users.",
      ],
    },
    {
      phase: 7,
      name: "Teamwork, Mindset & Attitude",
      duration: "3-5 minutes",
      objectives: ["Collaboration, code review, feedback, learning mindset"],
      sample_questions: [
        "Tell me about your code review process. How do you handle disagreements?",
        "Describe a time you explained a technical decision to non-technical stakeholders.",
        "How do you keep up with new technologies and best practices?",
      ],
    },
    {
      phase: 8,
      name: "Career Goals & Expectations",
      duration: "2-3 minutes",
      objectives: ["Career goals, work model, start date, motivation"],
      sample_questions: [
        "What are your career goals for the next 1–2 years?",
        "Do you prefer onsite, hybrid, or remote work?",
        "If you receive an offer, when could you start?",
        "Why are you interested in joining our team?",
      ],
    },
    {
      phase: 9,
      name: "Candidate Questions",
      duration: "3-5 minutes",
      objectives: ["Open Q&A"],
      sample_prompt:
        "Do you have any questions about the team, tech stack, processes, or growth path?",
    },
    {
      phase: 10,
      name: "Wrap-up & Next Steps",
      duration: "1-2 minutes",
      objectives: ["Thank them, explain next steps, confirm contact channel"],
      sample_closing: {
        english:
          "Thank you for your time today. We’ll review your interview and get back to you within one week. Any final questions?",
        vietnamese:
          "Cảm ơn bạn đã tham gia hôm nay. Chúng tôi sẽ phản hồi trong vòng 1 tuần. Bạn còn câu hỏi cuối cùng nào không?",
      },
    },
    {
      phase: 11,
      name: "Post-Interview Evaluation (Internal)",
      duration: "Internal process",
      objectives: [
        "Summarize and score across all 5 criteria",
        "Suggest level (Intern/Junior/Mid)",
        "Final verdict: Strong Hire / Hire / Maybe / No Hire",
        "Key strengths and concerns",
        "Recommendations for next steps",
      ],
    },
  ],
};

// ============================================================================
// 7) TECHNICAL KNOWLEDGE BASE - Full list
// ============================================================================
export const technicalKnowledgeBase = [
  {
    id: "KB-JS-001",
    category: "JavaScript/TypeScript Fundamentals",
    topic: "Event Loop & Async Programming",
    evaluationCriteria: [
      "Understanding of call stack, event loop, microtasks, macrotasks",
      "Practical experience with async/await, Promises, error handling",
      "Real-world debugging experience with timing issues",
      "Knowledge of performance implications",
    ],
    redFlags: [
      "Cannot explain event loop basics",
      "No experience with async error handling",
      "Confuses async patterns",
    ],
  },
  {
    id: "KB-JS-002",
    category: "JavaScript/TypeScript Fundamentals",
    topic: "TypeScript Type Safety",
    evaluationCriteria: [
      "Proper type definitions for API responses",
      "Use of utility types (Pick, Omit, Partial, etc.)",
      "Generic types implementation",
      "Avoiding 'any' and proper type inference",
    ],
    redFlags: [
      "Overuses 'any' type",
      "No understanding of type guards",
      "Cannot explain when to use interfaces vs types",
    ],
  },
  {
    id: "KB-REACT-001",
    category: "React.js",
    topic: "State Management Architecture",
    evaluationCriteria: [
      "Local state vs Context vs Redux/Zustand decision criteria",
      "Performance optimization (memo, useCallback, useMemo)",
      "Understanding of re-render triggers",
      "State normalization strategies",
    ],
    redFlags: [
      "No clear state management strategy",
      "Prop drilling without consideration",
      "No performance optimization awareness",
    ],
  },
  {
    id: "KB-REACT-002",
    category: "React.js",
    topic: "Modern React Patterns",
    evaluationCriteria: [
      "Hooks best practices",
      "Suspense/SSR/Streaming implementation",
      "Form handling at scale (React Hook Form, Zod)",
      "Error boundaries and error handling UX",
    ],
    redFlags: [
      "Still using class components without reason",
      "No experience with modern React features",
      "Poor form validation strategy",
    ],
  },
  {
    id: "KB-NODE-001",
    category: "Node.js/Express",
    topic: "Backend Architecture",
    evaluationCriteria: [
      "Layered architecture (routes → services → repositories)",
      "Dependency injection understanding",
      "DTO/schema validation (Zod, Joi)",
      "Error handling middleware patterns",
    ],
    redFlags: [
      "Mixing business logic with routes",
      "No validation layer",
      "Poor error handling",
    ],
  },
  {
    id: "KB-NODE-002",
    category: "Node.js/Express",
    topic: "Performance & Concurrency",
    evaluationCriteria: [
      "I/O-bound vs CPU-bound workload handling",
      "Worker threads/queue implementation",
      "Connection pooling strategies",
      "Backpressure handling",
    ],
    redFlags: [
      "No concurrency strategy",
      "Blocking operations in main thread",
      "No connection pool management",
    ],
  },
  {
    id: "KB-API-001",
    category: "API Design",
    topic: "REST/GraphQL Best Practices",
    evaluationCriteria: [
      "Versioning strategies",
      "Idempotency implementation",
      "Pagination patterns",
      "Rate limiting & backoff strategies",
      "GraphQL N+1 problem solutions",
    ],
    redFlags: [
      "No API versioning strategy",
      "Ignores idempotency",
      "No rate limiting consideration",
    ],
  },
  {
    id: "KB-DATA-001",
    category: "Data Layer",
    topic: "Database Selection & Optimization",
    evaluationCriteria: [
      "SQL vs NoSQL decision criteria",
      "Index strategies",
      "Query optimization",
      "Transaction handling",
      "Migration strategies",
    ],
    redFlags: [
      "No indexing strategy",
      "Ignores transactions for critical operations",
      "N+1 query problems",
    ],
  },
  {
    id: "KB-SEC-001",
    category: "Security",
    topic: "Authentication & Authorization",
    evaluationCriteria: [
      "JWT vs session-based auth trade-offs",
      "Token rotation & refresh strategies",
      "Cookie security (HttpOnly, SameSite, Secure)",
      "OWASP Top 10 awareness (XSS, CSRF, SSRF)",
      "Secret management",
    ],
    redFlags: [
      "Stores passwords in plain text",
      "No CSRF protection",
      "Exposes secrets in code",
    ],
  },
  {
    id: "KB-TEST-001",
    category: "Testing/CI-CD",
    topic: "Testing Strategy",
    evaluationCriteria: [
      "Test pyramid understanding (unit/integration/e2e)",
      "Mocking strategies",
      "Contract testing",
      "Flaky test handling",
      "CI/CD pipeline optimization",
    ],
    redFlags: [
      "No testing strategy",
      "Only manual testing",
      "No CI/CD experience",
    ],
  },
  {
    id: "KB-PERF-001",
    category: "Performance",
    topic: "Frontend & Backend Performance",
    evaluationCriteria: [
      "Core Web Vitals (TTFB, LCP, CLS, INP)",
      "Code splitting & lazy loading",
      "Image optimization",
      "Backend throughput/latency optimization",
      "Caching strategies",
      "Circuit breaker patterns",
    ],
    redFlags: [
      "No performance monitoring",
      "No optimization strategies",
      "Ignores bundle size",
    ],
  },
  {
    id: "KB-SYS-001",
    category: "System Design",
    topic: "Scalable Architecture",
    evaluationCriteria: [
      "Microservices vs monolith trade-offs",
      "Pub/sub patterns",
      "Caching strategies",
      "At-least-once delivery",
      "Idempotency in distributed systems",
    ],
    redFlags: [
      "No scaling strategy",
      "Ignores distributed system challenges",
      "No failure handling",
    ],
  },
  {
    id: "KB-COLLAB-001",
    category: "Collaboration",
    topic: "Team & Code Quality",
    evaluationCriteria: [
      "Code review best practices",
      "PR etiquette",
      "Incident handling",
      "Communication with product/design",
      "Technical debt management",
    ],
    redFlags: [
      "Poor communication skills",
      "Defensive about feedback",
      "No teamwork examples",
    ],
  },
];

// ============================================================================
// 8) COMPANY & TEAM INFORMATION - Completed from JD (no placeholders)
// ============================================================================
export const companyInfo = {
  name: "Hiring Company (per JD)",
  industry: "Software & IT Services",
  size: "Not specified in JD",
  founded: "Not specified in JD",
  description:
    "Software company delivering web/mobile applications for enterprise customers.",
  team_structure: {
    engineering_team_size: "Cross-functional squads (size varies by project)",
    structure: "PM, BA, Dev (FE/BE/FS), QA, DevOps",
    roles: ["Frontend", "Backend", "Full-stack", "DevOps"],
    reporting_to: "Engineering Manager / Project Manager",
    collaboration: "Agile/Scrum with 1–2 week sprints",
  },
  tech_stack: {
    frontend: ["React", "TypeScript", "Vue/Angular (project-dependent)"],
    backend: ["Node.js (Express/NestJS)", "Java/Go/Python (project-dependent)"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    infrastructure: ["Docker", "Kubernetes"],
    tools: ["Git", "CI/CD (GitHub Actions/GitLab CI)", "Postman"],
    practices: ["Code Review", "CI/CD", "Basic Security & Networking"],
  },
  benefits: {
    compensation: "Up to 30,000,000 VND/month (capability-based)",
    work_model: "Onsite in Hà Nội; flexible and supportive environment",
    insurance: "Social insurance per Vietnam Labor Law",
    leave: "Annual leave & public holidays per regulations",
    learning: "Encouraged to learn and adopt new tech",
    equipment: "Modern, fully-equipped workstation",
    perks: [
      "Annual company trips (domestic/overseas)",
      "Internal appreciation and wellness events",
    ],
  },
  culture: {
    values: [
      "Proactiveness",
      "Ownership",
      "Continuous Learning",
      "Collaboration",
      "Efficiency",
    ],
    work_style: "Disciplined yet flexible, outcome-driven",
    growth_opportunities:
      "Clear progression with semiannual reviews; opportunities to try new technologies",
    impact:
      "Work on real-user projects; room to expand across full-stack and DevOps",
  },
  hiring_process: {
    steps: [
      "1. CV screening",
      "2. Technical interview (30–40 minutes)",
      "3. Coding test / Pair programming (if needed)",
      "4. Culture fit / HR interview",
      "5. Offer negotiation",
    ],
    timeline: "Approx. 2–3 weeks from application to offer",
    next_steps_after_this:
      "Feedback within one week after the technical interview, including next-round details if proceeding",
  },
};
