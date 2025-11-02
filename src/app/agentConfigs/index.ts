import { interviewScenario } from "./interview";

import type { RealtimeAgent } from "@openai/agents/realtime";

// Map of scenario key -> array of RealtimeAgent objects
// Technical interview agent for Full-stack Developer recruiting
export const allAgentSets: Record<string, RealtimeAgent[]> = {
  interview: interviewScenario,
};

export const defaultAgentSetKey = "interview";
