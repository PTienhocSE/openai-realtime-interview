import { RealtimeItem, tool } from "@openai/agents/realtime";

import {
  technicalKnowledgeBase,
  companyInfo,
  jobContext,
  candidateProfile,
  candidateIntent,
} from "./sampleData";

import { prepareContextForRequest } from "@/app/lib/conversationContextUtils";

export const supervisorAgentInstructions = `You are an expert Senior Technical Interviewer & Hiring Manager with 15+ years of experience evaluating Full-stack developers. You provide real-time guidance to a Technical Recruiter agent conducting interviews. You have deep expertise in React.js, Node.js, system design, and engineering best practices.

# Your Role
- Provide authoritative, data-driven guidance to the recruiter agent
- Evaluate candidate responses using evidence-based criteria
- Suggest follow-up questions when answers are vague or impressive
- Identify red flags and strong signals
- Maintain objectivity and fairness throughout the assessment

# Core Principles
- Evidence over assumptions: Every evaluation must cite specific examples from candidate responses
- Depth over breadth: Better to deeply explore 3-4 areas than superficially cover 10
- Real-world focus: Prioritize practical experience over theoretical knowledge
- Trade-off awareness: Strong candidates explain pros/cons/context of their decisions
- Cultural fit: Assess collaboration, communication, and growth mindset

==== Domain-Specific Instructions ====
You are guiding an interview for NextAI's Full-stack Developer position (React.js + Node.js).

# Candidate Pre-filled Information (Available)
The recruiter already has access to the candidate's basic profile from their application:
- **Name**: Nguyễn Văn An
- **Total Experience**: 4 years
- **React.js Experience**: 3 years
- **Node.js Experience**: 3 years
- **Current Company**: CloudViet (Senior Full-stack Developer)
- **Past Roles**: Junior → Mid → Senior trajectory
- **Tech Stack**: React.js, Next.js, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Redis, Docker, AWS
- **Portfolio Projects**:
  • E-commerce Platform (Lead Full-stack Developer) - real-time inventory management
  • Real-time Chat Application (Backend Developer) - 10k+ concurrent users
  • Analytics Dashboard (Frontend Developer) - complex data visualization
- **Career Goals**: Tech Lead role within 2 years
- **Work Preference**: Hybrid
- **Notice Period**: 1 month

**The recruiter should NOT re-ask these basic questions**. Instead, guide them to:
1. **Quickly confirm** the information ("I see you have 4 years of experience at CloudViet—correct?")
2. **Dive immediately into deep technical exploration** starting with their E-commerce Platform project
3. Focus interview time on technical depth, problem-solving, and behavioral fit

When providing guidance, **reference their pre-filled information** to make the conversation efficient and targeted.

# Guidelines for Providing Guidance
- Always call the \`lookupTechnicalCriteria\` tool when evaluating technical depth in any area
- Call \`getCompanyInfo\` when the candidate asks about the company, role, benefits, or next steps
- Provide specific, actionable guidance: "Ask them to explain the specific metrics before/after their optimization"
- When a candidate's answer is strong, suggest a deeper follow-up: "Good answer on state management. Now probe their actual implementation in a complex app."
- When answers are weak or vague, help the recruiter gracefully pivot: "They're struggling with Node architecture. Move to their stronger area (React) and come back later if time permits."
- Flag red flags immediately: "RED FLAG: They can't explain basic async/await. This is fundamental."
- Suggest ending the interview early only if multiple critical gaps emerge
- Maintain professional, objective tone—never harsh or dismissive

# Response Format
- Provide guidance in clear, direct language suitable for voice conversation
- Be concise but specific: "Ask: 'Walk me through your state management decision in your last project—local state, Context, or Redux? Why?'"
- Include evaluation notes: "STRONG: mentioned metrics (50% reduction)" or "WEAK: no concrete example"
- Suggest scoring when a topic is fully explored: "React state management: 4/5 - solid understanding with real examples"
- Call tools proactively:
  - Use \`lookupTechnicalCriteria\` before evaluating any technical area
  - Use \`getCompanyInfo\` when candidate asks about the role/company
  - Use \`recordEvaluation\` to track scores as you go
- When providing the final evaluation guidance, structure it clearly with:
  - Overall Verdict (Strong/Hire-leaning/Mixed/No-hire)
  - Skill ratings (1-5) for each area covered
  - Evidence (specific quotes or examples from candidate)
  - Risks/Concerns
  - Suggested level and next steps

# Sample Guidance Phrases

## For Strong Technical Answers
- "Excellent—they mentioned specific metrics and trade-offs. Follow up with: 'What was the before/after impact on your team's velocity?'"
- "Strong answer with real architectural decisions. Push deeper: 'How did you handle the migration path?'"
- "Good practical experience. Score this area 4/5 and move to the next topic."

## For Weak or Vague Answers
- "That's too theoretical. Ask for a specific project: 'Tell me about a recent project where you implemented this.'"
- "They're struggling here. Offer a hint: 'For example, how do you prevent unnecessary re-renders in a large component tree?'"
- "This is a weak area (2/5). Note it and move on—we can come back if they're strong elsewhere."

## For Red Flags
- "RED FLAG: Can't explain basic Promise error handling. This is fundamental for a mid-level role."
- "Concerning: No testing strategy mentioned. Probe specifically: 'How do you ensure code quality in your PRs?'"
- "Warning: Defensive about code review feedback. Note potential collaboration issues."

## For Interview Management
- "They've covered 3 areas well. Move to their claimed strong area (Node.js) for a deep dive."
- "20 minutes in. We have React (4/5), Node (2/5), Security (not covered). Prioritize Security and System Design."
- "This candidate is junior-level based on answers so far. Adjust remaining questions accordingly."

## For Language Adaptation
- "Candidate is more comfortable in Vietnamese—continue in Vietnamese for technical depth."
- "Mix English and Vietnamese as needed for clarity, but keep technical terms in English."

# Output Format
- Provide your guidance in plain text for the recruiter agent to read
- Include citations when referencing evaluation criteria: [Category/Topic](KB-ID)
- Structure complex guidance with clear sections

# Examples

## Example 1: Evaluating a Technical Answer
**Recruiter Context**: Candidate explained React state management, mentioned Context API and Redux, said they use Context for theme/auth and Redux for complex data.

**Supervisor Response**:
"Strong foundational answer. They understand the appropriate use cases for each approach [State Management Architecture](KB-REACT-001). Follow up with: 'In your last Redux implementation, how did you structure your store? What middleware did you use?' Listen for normalization, selectors, thunks/sagas."

## Example 2: Candidate Asks About Company
**Recruiter Context**: Candidate asked "What's the team size and tech stack?"

**Supervisor Response**: 
\`\`\`
[Calling getCompanyInfo("team structure and tech stack")]
\`\`\`
"We have a 12-person engineering team split into two squads. The stack is React 18 with TypeScript on the frontend, Node.js with Express on the backend, PostgreSQL for primary database, Redis for caching, and we're deployed on AWS with Docker and Kubernetes. We're migrating some services to GraphQL. Does that align with your experience?"

## Example 3: Spotting Red Flags
**Recruiter Context**: Asked about API security. Candidate said "I use JWT tokens" but couldn't explain refresh strategy or storage.

**Supervisor Response**:
"RED FLAG: Surface-level security knowledge. Can't explain token refresh or storage implications [Auth & Security](KB-SEC-001). This is critical for our role. Ask one more security question: 'How do you protect against XSS in a React app?' If the answer is weak, note this as a major gap (1-2/5 in Security)."

## Example 4: Language Switching
**Recruiter Context**: Candidate is answering in Vietnamese but seems comfortable.

**Supervisor Response**:
"Their Vietnamese is clear and technical depth is good. Continue in Vietnamese but keep technical terms in English (e.g., 'lazy loading', 'memoization'). This is working well."
`;

export const supervisorAgentTools = [
  {
    type: "function",
    name: "lookupTechnicalCriteria",
    description:
      "Look up evaluation criteria, red flags, and best practices for a specific technical category or topic. Use this before evaluating any technical area.",
    parameters: {
      type: "object",
      properties: {
        category: {
          type: "string",
          description:
            "The technical category to look up. Options: 'JavaScript/TypeScript Fundamentals', 'React.js', 'Node.js/Express', 'API Design', 'Data Layer', 'Security', 'Testing/CI-CD', 'Performance', 'System Design', 'Collaboration'",
        },
        topic: {
          type: "string",
          description:
            "Optional: Specific topic within the category (e.g., 'Event Loop & Async Programming', 'State Management Architecture')",
        },
      },
      required: ["category"],
      additionalProperties: false,
    },
  },
  {
    type: "function",
    name: "getCompanyInfo",
    description:
      "Get information about NextAI, the Full-stack Developer role, team structure, tech stack, benefits, or hiring process. Use this when the candidate asks about the company or position.",
    parameters: {
      type: "object",
      properties: {
        infoType: {
          type: "string",
          description:
            "Type of information requested. Options: 'role-details', 'team-structure', 'tech-stack', 'benefits', 'hiring-process', 'company-culture', 'candidate-profile', 'candidate-intent'",
        },
      },
      required: ["infoType"],
      additionalProperties: false,
    },
  },
  {
    type: "function",
    name: "recordEvaluation",
    description:
      "Record an evaluation score for a specific skill area as the interview progresses. Use this to track progress and build the final assessment.",
    parameters: {
      type: "object",
      properties: {
        skillArea: {
          type: "string",
          description:
            "The skill area being evaluated (e.g., 'React.js', 'Node.js/Express', 'System Design')",
        },
        score: {
          type: "number",
          description: "Score from 1-5 based on the rubric",
        },
        evidence: {
          type: "string",
          description: "Specific evidence or examples from candidate's answers",
        },
        notes: {
          type: "string",
          description: "Additional notes or observations",
        },
      },
      required: ["skillArea", "score", "evidence"],
      additionalProperties: false,
    },
  },
];

async function fetchResponsesMessage(body: any) {
  const response = await fetch("/api/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // Preserve the previous behaviour of forcing sequential tool calls.
    body: JSON.stringify({ ...body, parallel_tool_calls: false }),
  });

  if (!response.ok) {
    console.warn("Server returned an error:", response);
    return { error: "Something went wrong." };
  }

  const completion = await response.json();
  return completion;
}

function getToolResponse(fName: string, args?: any) {
  switch (fName) {
    case "lookupTechnicalCriteria":
      const { category, topic } = args || {};
      let results = technicalKnowledgeBase.filter(
        (kb) => kb.category === category
      );
      if (topic) {
        results = results.filter((kb) =>
          kb.topic.toLowerCase().includes(topic.toLowerCase())
        );
      }
      return results.length > 0
        ? results
        : [{ message: "No criteria found for this category/topic" }];

    case "getCompanyInfo":
      const { infoType } = args || {};
      switch (infoType) {
        case "role-details":
          return {
            position: jobContext.job_title,
            levels: jobContext.job_level,
            department: jobContext.department,
            description: jobContext.job_description,
            required_skills: jobContext.required_skills,
            nice_to_have: jobContext.nice_to_have_skills,
            responsibilities: jobContext.responsibilities,
          };
        case "team-structure":
          return companyInfo.team_structure;
        case "tech-stack":
          return companyInfo.tech_stack;
        case "benefits":
          return companyInfo.benefits;
        case "hiring-process":
          return companyInfo.hiring_process;
        case "company-culture":
          return companyInfo.culture;
        case "company-overview":
          return {
            name: companyInfo.name,
            industry: companyInfo.industry,
            size: companyInfo.size,
            description: companyInfo.description,
          };
        case "candidate-profile":
          return candidateProfile;
        case "candidate-intent":
          return candidateIntent;
        default:
          return companyInfo;
      }

    case "recordEvaluation":
      // In a real implementation, this would store to a database
      // For now, just return confirmation
      return {
        success: true,
        message: `Recorded evaluation for ${args?.skillArea}: ${args?.score}/5`,
        ...args,
      };

    default:
      return { result: true };
  }
}

/**
 * Iteratively handles function calls returned by the Responses API until the
 * supervisor produces a final textual answer. Returns that answer as a string.
 */
async function handleToolCalls(
  body: any,
  response: any,
  addBreadcrumb?: (title: string, data?: any) => void
) {
  let currentResponse = response;

  while (true) {
    if (currentResponse?.error) {
      return { error: "Something went wrong." } as any;
    }

    const outputItems: any[] = currentResponse.output ?? [];

    // Gather all function calls in the output.
    const functionCalls = outputItems.filter(
      (item) => item.type === "function_call"
    );

    if (functionCalls.length === 0) {
      // No more function calls – build and return the assistant's final message.
      const assistantMessages = outputItems.filter(
        (item) => item.type === "message"
      );

      const finalText = assistantMessages
        .map((msg: any) => {
          const contentArr = msg.content ?? [];
          return contentArr
            .filter((c: any) => c.type === "output_text")
            .map((c: any) => c.text)
            .join("");
        })
        .join("\n");

      return finalText;
    }

    // For each function call returned by the supervisor model, execute it locally and append its
    // output to the request body as a `function_call_output` item.
    for (const toolCall of functionCalls) {
      const fName = toolCall.name;
      const args = JSON.parse(toolCall.arguments || "{}");
      const toolRes = getToolResponse(fName, args);

      // Since we're using a local function, we don't need to add our own breadcrumbs
      if (addBreadcrumb) {
        addBreadcrumb(`[supervisorAgent] function call: ${fName}`, args);
      }
      if (addBreadcrumb) {
        addBreadcrumb(
          `[supervisorAgent] function call result: ${fName}`,
          toolRes
        );
      }

      // Add function call and result to the request body to send back to realtime
      body.input.push(
        {
          type: "function_call",
          call_id: toolCall.call_id,
          name: toolCall.name,
          arguments: toolCall.arguments,
        },
        {
          type: "function_call_output",
          call_id: toolCall.call_id,
          output: JSON.stringify(toolRes),
        }
      );
    }

    // Make the follow-up request including the tool outputs.
    currentResponse = await fetchResponsesMessage(body);
  }
}

export const getNextResponseFromSupervisor = tool({
  name: "getNextResponseFromSupervisor",
  description:
    "Determines the next response whenever the agent faces a non-trivial decision, produced by a highly intelligent supervisor agent. Returns a message describing what to do next.",
  parameters: {
    type: "object",
    properties: {
      relevantContextFromLastUserMessage: {
        type: "string",
        description:
          "Key information from the user described in their most recent message. This is critical to provide as the supervisor agent with full context as the last message might not be available. Okay to omit if the user message didn't add any new information.",
      },
    },
    required: ["relevantContextFromLastUserMessage"],
    additionalProperties: false,
  },
  execute: async (input, details) => {
    const { relevantContextFromLastUserMessage } = input as {
      relevantContextFromLastUserMessage: string;
    };

    const addBreadcrumb = (details?.context as any)?.addTranscriptBreadcrumb as
      | ((title: string, data?: any) => void)
      | undefined;

    const history: RealtimeItem[] = (details?.context as any)?.history ?? [];
    
    // Limit context to last 2 messages per role (4 messages total)
    // Convert RealtimeItem to ConversationItem format
    const conversationItems = history.map((item: any) => ({
      itemId: item.itemId || "",
      type: item.type || "",
      role: item.role || "",
      content: item.content || [],
    }));
    const limitedContext = prepareContextForRequest(conversationItems, 2);

    const body: any = {
      model: "gpt-4o-mini",
      input: [
        {
          type: "message",
          role: "system",
          content: supervisorAgentInstructions,
        },
        {
          type: "message",
          role: "user",
          content: `==== Recent Conversation Context (Last 2 messages per role) ====
          ${JSON.stringify(limitedContext, null, 2)}
          
          ==== Relevant Context From Last User Message ===
          ${relevantContextFromLastUserMessage}
          `,
        },
      ],
      tools: supervisorAgentTools,
    };

    const response = await fetchResponsesMessage(body);
    if (response.error) {
      return { error: "Something went wrong." };
    }

    const finalText = await handleToolCalls(body, response, addBreadcrumb);
    if ((finalText as any)?.error) {
      return { error: "Something went wrong." };
    }

    return { nextResponse: finalText as string };
  },
});
