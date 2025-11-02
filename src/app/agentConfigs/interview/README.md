# Technical Interview Agent for Full-stack Developer (React.js + Node.js)

## Overview

This is a specialized AI agent designed to conduct professional technical interviews for Full-stack Developer positions at NextAI. The agent supports **multilingual interviews** (English, Vietnamese, or bilingual) and uses a supervisor-agent architecture for intelligent evaluation.

## Pre-filled Candidate Information

The system now expects **candidate basic information to be collected BEFORE the interview starts** (e.g., via application form). This allows the AI to:

- Skip redundant questions (name, experience, tech stack)
- **Dive immediately into deep technical assessment**
- Reference specific projects from their portfolio
- Optimize 30-40 minutes for maximum technical depth

### Pre-filled Data Structure

Located in `sampleData.ts`:

- **`candidateProfile`**: Name, experience years (total/React/Node), past roles, tech stack, portfolio projects, education
- **`candidateIntent`**: Career goals, work preference, notice period, motivation, long-term vision

**Example**: For demo/testing, we have a sample candidate **Nguyễn Văn An** with 4 years experience pre-configured.

## Architecture

### Main Components

1. **`index.ts`** - Interview Recruiter Agent

   - Reads pre-filled candidate information
   - **Confirms** (not collects) basic info in first 2 minutes
   - Asks targeted technical questions based on candidate's projects
   - Adapts to candidate's preferred language
   - Manages interview flow and timing
   - Defers evaluation and company info to Supervisor Agent

2. **`supervisorAgent.ts`** - Senior Technical Supervisor

   - Has access to candidate's pre-filled profile via `getCompanyInfo` tool
   - Provides expert evaluation guidance referencing their background
   - Access to technical knowledge base
   - Handles company information queries
   - Records evaluation scores
   - Generates final interview assessment

3. **`sampleData.ts`** - Knowledge Base & Candidate Data
   - **NEW**: `candidateProfile` and `candidateIntent` with demo data
   - Technical evaluation criteria for all skill areas
   - Company and position information
   - Interview session data structure

## Key Features

### Multilingual Support

- **English**: Full interview in English
- **Vietnamese**: Phỏng vấn hoàn toàn bằng tiếng Việt (technical terms in English)
- **Bilingual**: Flexible switching between languages

### Comprehensive Technical Assessment

Covers all essential areas for Full-stack developers:

- JavaScript/TypeScript Fundamentals
- React.js (state management, hooks, performance)
- Node.js/Express (architecture, concurrency, error handling)
- API Design (REST/GraphQL)
- Data Layer (SQL/NoSQL, optimization)
- Security (auth, OWASP awareness)
- Testing & CI/CD
- Performance (frontend & backend)
- System Design
- Collaboration & Communication

### Evidence-Based Evaluation

- Scenario-based questions focused on real projects
- Probes for: metrics, trade-offs, ownership, impact
- 5-point rubric for each skill area
- Red flag detection
- Structured final report with hiring recommendation

### Supervisor-Agent Pattern

- Recruiter Agent: Handles conversation and question flow
- Supervisor Agent: Provides evaluation expertise and company info
- Clean separation of concerns
- Scalable and maintainable

## Interview Flow

```
1. Opening (2-3 min)
   ├─ Language preference
   ├─ Collect basic info (name, years of experience)
   └─ Set expectations

2. Warm-up (5-7 min)
   └─ Fundamentals check (JS/TS, HTTP, async)

3. Core Technical (15-20 min)
   ├─ 5-7 technical areas
   ├─ One question at a time
   └─ Follow-ups based on answers

4. Deep Dive (5-7 min)
   └─ Candidate's strongest area

5. Collaboration (3-5 min)
   └─ Code review, communication, teamwork

6. Closing (2-3 min)
   ├─ Candidate questions
   └─ Next steps

7. Post-Interview (internal)
   └─ Generate evaluation report
```

## Usage

The interview agent is automatically loaded as the default agent configuration.

### URL Parameters

- Default: Uses interview agent
- `?agentConfig=interview` - Explicitly use interview agent
- `?agentConfig=chatSupervisor` - Backward compatibility alias

### Customization

To modify the interview:

1. **Questions**: Edit question bank in `index.ts`
2. **Evaluation Criteria**: Update `technicalKnowledgeBase` in `sampleData.ts`
3. **Company Info**: Modify `companyInfo` in `sampleData.ts`
4. **Interview Flow**: Adjust timing and structure in `index.ts`
5. **Supervisor Guidance**: Update `supervisorAgentInstructions` in `supervisorAgent.ts`

## Evaluation Rubric

### Scoring (1-5 for each skill)

- **1**: Vague, theoretical, few real examples
- **2**: Knows tools but lacks depth, shallow examples
- **3**: Basic hands-on, explains simple trade-offs
- **4**: Strong, systematic, clear evidence/metrics, proactive quality improvement
- **5**: Excellent, great architecture, thoughtful optimization, balanced trade-offs, can mentor

### Final Report Includes

- Overall Verdict (Strong Hire / Hire-leaning / Mixed / No-hire)
- Skill ratings for all covered areas
- Specific evidence from candidate answers
- Red flags and concerns
- Suggested level (Junior/Mid/Senior/Lead)
- Recommended next steps

## Best Practices

### For Interviewers

1. Let the agent run autonomously
2. Review the generated report
3. Use insights for follow-up interviews
4. Adjust questions based on role level

### For Customization

1. Keep questions scenario-based, not theoretical
2. Always ask for specific examples and metrics
3. Probe for trade-offs and decision-making process
4. Maintain language flexibility
5. Focus on depth over breadth

## Technical Details

### Tools Available to Recruiter Agent

- `getNextResponseFromSupervisor`: Consult the expert supervisor

### Tools Available to Supervisor Agent

- `lookupTechnicalCriteria`: Get evaluation criteria for any technical area
- `getCompanyInfo`: Retrieve company/role/team information
- `recordEvaluation`: Track scores during the interview

## Extending the Agent

To add new technical areas:

1. Add evaluation criteria to `technicalKnowledgeBase` in `sampleData.ts`
2. Add sample questions to the question bank in `index.ts`
3. Update the interview flow to include the new area
4. Test with various candidate responses

## Future Enhancements

Potential improvements:

- [ ] Audio analysis for communication skills
- [ ] Live coding integration
- [ ] Automated scheduling and follow-ups
- [ ] Integration with ATS systems
- [ ] Multi-interviewer collaboration
- [ ] Video recording and analysis
- [ ] Real-time translation for more languages

## License & Credits

Part of the OpenAI Realtime Agents framework.
Customized for NextAI technical recruiting.
