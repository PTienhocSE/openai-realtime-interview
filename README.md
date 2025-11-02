# 🎙️ OpenAI Realtime Interview Agent

> **AI-powered Technical Interview System** for Full-stack Developer recruitment using OpenAI Realtime API

A sophisticated conversational AI system that conducts professional technical interviews with **multilingual support** (English/Vietnamese/Bilingual), real-time evaluation, and structured assessment for Full-stack Developer positions (React.js + Node.js).

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15.3-black.svg)](https://nextjs.org/)
[![OpenAI Agents](https://img.shields.io/badge/OpenAI_Agents-0.0.5-green.svg)](https://github.com/openai/agents)
[![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://reactjs.org/)

---

## 📋 Table of Contents

- [Features](#-features)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Interview Flow](#-interview-flow)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [Development](#-development)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🤖 Intelligent AI Interviewer

- **Real-time voice conversation** using OpenAI Realtime API
- **Structured 11-phase interview flow** (30-40 minutes)
- **Evidence-based evaluation** with scoring rubrics
- **Adaptive questioning** based on candidate responses
- **Supervisor-Agent architecture** for expert guidance

### 🌐 Multilingual Support

- **English**: Full technical interview in English
- **Vietnamese**: Phỏng vấn kỹ thuật hoàn toàn bằng tiếng Việt
- **Bilingual**: Seamless language switching
- Technical terms maintained in English for clarity

### 📊 Pre-filled Candidate Information

- Candidate data collected **before** interview via application form
- AI references specific **portfolio projects** from candidate's background
- **Saves 5-8 minutes** of interview time
- More targeted and efficient questioning

### 🎯 Comprehensive Technical Assessment

Evaluates candidates across:

- JavaScript/TypeScript fundamentals
- React.js (hooks, state management, performance)
- Node.js/Express (architecture, concurrency, APIs)
- Database design (SQL/NoSQL)
- Security (authentication, OWASP)
- Testing & CI/CD
- System design & architecture
- Problem-solving & collaboration

### 📈 Structured Evaluation

- **5-criteria scoring rubric** (1-5 scale):
  - Technical Skill
  - Problem-Solving
  - Communication
  - Team Fit
  - Growth Mindset
- Evidence-based assessment with specific examples
- Real-time evaluation tracking
- Post-interview comprehensive report

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    OpenAI Realtime API                       │
└─────────────────────────────────────────────────────────────┘
                              ▲
                              │
┌─────────────────────────────┼─────────────────────────────┐
│          Next.js Application                               │
│  ┌──────────────────────────┴────────────────────────────┐ │
│  │         Realtime Session Manager                      │ │
│  │  - WebRTC connection                                  │ │
│  │  - Audio stream handling                              │ │
│  │  - Session history                                    │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌─────────────────┐        ┌─────────────────────────┐   │
│  │  Interview      │◄──────►│  Supervisor Agent       │   │
│  │  Recruiter      │  Tool  │  (Expert Evaluator)     │   │
│  │  Agent          │  Call  │                         │   │
│  │                 │        │  - Technical KB         │   │
│  │  - Conducts     │        │  - Company info         │   │
│  │    interview    │        │  - Evaluation guidance  │   │
│  │  - Asks         │        │  - Score tracking       │   │
│  │    questions    │        │                         │   │
│  │  - Manages flow │        │                         │   │
│  └─────────────────┘        └─────────────────────────┘   │
│           │                            │                    │
│           └────────────┬───────────────┘                    │
│                        ▼                                    │
│         ┌──────────────────────────────┐                   │
│         │     Knowledge Base           │                   │
│         │  - Job Context               │                   │
│         │  - Candidate Profile (demo)  │                   │
│         │  - Technical Criteria        │                   │
│         │  - Company Info              │                   │
│         │  - Interview Strategy        │                   │
│         │  - Scoring Rubric            │                   │
│         └──────────────────────────────┘                   │
└─────────────────────────────────────────────────────────────┘
```

### Core Components

1. **Interview Recruiter Agent** (`src/app/agentConfigs/interview/index.ts`)

   - Main conversational interface
   - Conducts structured technical interview
   - Multilingual support
   - Defers to Supervisor for evaluation

2. **Supervisor Agent** (`src/app/agentConfigs/interview/supervisorAgent.ts`)

   - Expert Technical Evaluator (15+ years experience persona)
   - Provides real-time guidance
   - Access to technical knowledge base
   - Generates structured assessment

3. **Knowledge Base** (`src/app/agentConfigs/interview/sampleData.ts`)

   - Job context and requirements
   - Candidate profile (pre-filled demo data)
   - Technical evaluation criteria
   - Company information
   - Interview strategy and flow

4. **Session Manager** (`src/app/hooks/useRealtimeSession.ts`)
   - WebRTC connection handling
   - Audio stream management
   - Session history tracking

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20+ and npm/yarn
- **OpenAI API Key** with Realtime API access
- Modern web browser with WebRTC support

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/openai-realtime-agents.git
cd openai-realtime-agents
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# OpenAI API Configuration
OPENAI_API_KEY=sk-your-openai-api-key-here

# Optional: Custom API endpoint
# OPENAI_API_BASE_URL=https://api.openai.com/v1
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**

```
http://localhost:3000
```

---

## 📁 Project Structure

```
openai-realtime-agents/
├── src/
│   └── app/
│       ├── agentConfigs/          # Agent configurations
│       │   ├── interview/         # ⭐ Main Interview Agent
│       │   │   ├── index.ts       #    - Interview Recruiter
│       │   │   ├── supervisorAgent.ts  # - Expert Evaluator
│       │   │   ├── sampleData.ts  #    - Knowledge Base
│       │   │   ├── README.md      #    - Agent docs
│       │   │   └── CHANGELOG.md   #    - Updates log
│       │   ├── guardrails.ts      # Content moderation
│       │   ├── index.ts           # Agent registry
│       │   └── types.ts           # Type definitions
│       │
│       ├── api/                   # API routes
│       │   ├── health/            # Health check
│       │   ├── responses/         # OpenAI responses
│       │   └── session/           # Session management
│       │
│       ├── components/            # React components
│       │   ├── BottomToolbar.tsx  # Recording controls
│       │   ├── Events.tsx         # Event stream display
│       │   ├── GuardrailChip.tsx  # Moderation status
│       │   └── Transcript.tsx     # Conversation transcript
│       │
│       ├── contexts/              # React contexts
│       │   ├── EventContext.tsx   # Event stream state
│       │   └── TranscriptContext.tsx # Transcript state
│       │
│       ├── hooks/                 # Custom React hooks
│       │   ├── useAudioDownload.ts        # Audio export
│       │   ├── useHandleSessionHistory.ts # Session history
│       │   └── useRealtimeSession.ts      # ⭐ Main session hook
│       │
│       ├── lib/                   # Utilities
│       │   ├── audioUtils.ts      # Audio processing
│       │   ├── codecUtils.ts      # Audio codecs
│       │   └── envSetup.ts        # Environment config
│       │
│       ├── App.tsx                # Main app component
│       ├── globals.css            # Global styles
│       ├── layout.tsx             # App layout
│       ├── page.tsx               # Root page
│       └── types.ts               # TypeScript types
│
├── public/                        # Static assets
├── .env.local                     # Environment variables (create this)
├── next.config.ts                 # Next.js configuration
├── package.json                   # Dependencies
├── tailwind.config.ts             # Tailwind CSS config
├── tsconfig.json                  # TypeScript config
└── README.md                      # ⭐ This file
```

---

## 🎯 Interview Flow

The AI conducts a structured **11-phase interview** (30-40 minutes):

### Phase 1: Greeting & Confirmation (2 min)

- Bilingual greeting (English + Vietnamese)
- Language preference selection
- Quick confirmation of pre-filled candidate info

### Phase 2: Recent Project Deep Dive (6-8 min)

- Explore candidate's most significant project
- Understand technical decisions and trade-offs
- Assess ownership and impact

### Phase 3: Core Technical Skills (18-22 min)

**One question at a time**, covering:

- React.js (state management, hooks, performance)
- Node.js (architecture, concurrency, APIs)
- Database design and optimization
- Security best practices
- Testing strategies
- Performance optimization

### Phase 4: Problem-Solving Scenario (3-5 min)

- Real-world technical challenge
- Assess analytical thinking and approach

### Phase 5: Teamwork & Mindset (3-5 min)

- Code review approach
- Collaboration skills
- Learning mindset

### Phase 6: Career Goals & Motivation (2-3 min)

- Alignment with role expectations
- Culture fit assessment

### Phase 7: Candidate Questions (3-5 min)

- Open floor for their questions
- AI calls Supervisor for accurate company info

### Phase 8: Wrap-up (1-2 min)

- Thank candidate
- Explain next steps

### Phase 9: Post-Interview Evaluation (Internal)

- Supervisor generates structured report
- 5-criteria scoring (1-5 scale)
- Overall verdict and recommendations

---

## ⚙️ Configuration

### Candidate Information

**For Testing/Demo** (current setup):

```typescript
// src/app/agentConfigs/interview/sampleData.ts
export const candidateProfile = {
  candidate_name: "Nguyễn Văn An",
  years_of_experience: { total: 4, react: 3, nodejs: 3 },
  current_company: "CloudViet",
  portfolio_projects: [
    {
      name: "E-commerce Platform",
      role: "Lead Full-stack Developer",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
    },
    // ... more projects
  ],
  // ... complete profile
};
```

**For Production**:

1. Create candidate application form
2. Collect: name, experience, tech stack, portfolio projects, career goals
3. Replace demo data in `sampleData.ts` with form data
4. Pass to interview agent

### Agent Configuration

Modify interview behavior in `src/app/agentConfigs/interview/index.ts`:

```typescript
export const interviewAgent = new RealtimeAgent({
  name: "interviewAgent",
  voice: "sage", // Change voice: alloy, echo, fable, onyx, nova, shimmer, sage
  instructions: `...`, // Customize interview instructions
  tools: [getNextResponseFromSupervisor],
});
```

### Technical Knowledge Base

Add/modify evaluation criteria in `sampleData.ts`:

```typescript
export const technicalKnowledgeBase = [
  {
    id: "KB-CUSTOM-001",
    category: "Your Category",
    topic: "Your Topic",
    evaluationCriteria: ["Criterion 1", "Criterion 2"],
    redFlags: ["Red flag 1", "Red flag 2"],
  },
  // ... more criteria
];
```

---

## 🎬 Usage

### Starting an Interview

1. **Open the application** in your browser
2. **Grant microphone permissions** when prompted
3. **Click "Start Recording"** to begin the interview
4. **Speak clearly** - the AI will respond in real-time
5. **Answer questions naturally** - one question at a time
6. **Stop recording** when the interview concludes

### Language Selection

At the start, the AI will ask:

```
"Which language would you prefer: English, Vietnamese, or both?
Bạn muốn phỏng vấn bằng: English, tiếng Việt, hay cả hai?"
```

Respond in your preferred language and the AI will adapt.

### Downloading Transcript

After the interview:

1. Click the **"Download Audio"** button to save the conversation
2. Transcript is automatically saved in the browser

---

## 🛠️ Development

### Running Tests

```bash
npm run test
# or
yarn test
```

### Linting

```bash
npm run lint
# or
yarn lint
```

### Building for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

### Environment Variables

Required:

- `OPENAI_API_KEY` - Your OpenAI API key with Realtime API access

Optional:

- `OPENAI_API_BASE_URL` - Custom API endpoint (default: https://api.openai.com/v1)
- `NEXT_PUBLIC_APP_URL` - Your app URL for production

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables:
   - `OPENAI_API_KEY`
4. Deploy

### Docker

```bash
# Build image
docker build -t interview-agent .

# Run container
docker run -p 3000:3000 -e OPENAI_API_KEY=your-key interview-agent
```

### Other Platforms

The app is a standard Next.js application and can be deployed to:

- AWS (Amplify, ECS, Lambda)
- Google Cloud (Cloud Run, App Engine)
- Azure (App Service)
- Railway, Render, Fly.io, etc.

---

## 📚 Documentation

- **Agent Configuration**: [`src/app/agentConfigs/interview/README.md`](src/app/agentConfigs/interview/README.md)
- **Changelog**: [`src/app/agentConfigs/interview/CHANGELOG.md`](src/app/agentConfigs/interview/CHANGELOG.md)
- **OpenAI Agents SDK**: [github.com/openai/agents](https://github.com/openai/agents)
- **OpenAI Realtime API**: [platform.openai.com/docs/guides/realtime](https://platform.openai.com/docs/guides/realtime)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **OpenAI** for the Realtime API and Agents SDK
- **Next.js** team for the amazing framework
- **Vercel** for hosting and deployment platform
- All contributors who helped improve this project

---

## 📧 Contact

For questions or support:

- **Issues**: [GitHub Issues](https://github.com/yourusername/openai-realtime-agents/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/openai-realtime-agents/discussions)

---

## 🌟 Star History

If you find this project useful, please consider giving it a ⭐️ on GitHub!

---

**Built with ❤️ using OpenAI Realtime API, Next.js, and TypeScript**

**Status**: ✅ Production Ready | **Version**: 0.1.0 | **Last Updated**: November 2, 2025
