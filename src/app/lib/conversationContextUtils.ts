/**
 * Utility to manage conversation context by keeping only the last N messages per role
 * This helps reduce token usage and stay focused on recent context
 */

export interface ConversationItem {
  itemId: string;
  type: string;
  role: string;
  content?: any[];
}

/**
 * Filter conversation items to keep only the last N messages from each role
 * @param items - Array of conversation items
 * @param messagesPerRole - Number of messages to keep per role (default: 2)
 * @returns Filtered array with limited context
 */
export function limitConversationContext(
  items: ConversationItem[],
  messagesPerRole: number = 2
): ConversationItem[] {
  // Separate messages by role
  const userMessages: ConversationItem[] = [];
  const assistantMessages: ConversationItem[] = [];
  const otherItems: ConversationItem[] = [];

  items.forEach((item) => {
    if (item.type === "message") {
      if (item.role === "user") {
        userMessages.push(item);
      } else if (item.role === "assistant") {
        assistantMessages.push(item);
      }
    } else {
      otherItems.push(item);
    }
  });

  // Keep only the last N messages from each role
  const limitedUserMessages = userMessages.slice(-messagesPerRole);
  const limitedAssistantMessages = assistantMessages.slice(-messagesPerRole);

  // Combine and sort by original order (if items have timestamps or indices)
  const limitedMessages = [...limitedUserMessages, ...limitedAssistantMessages];

  // Sort to maintain chronological order
  limitedMessages.sort((a, b) => {
    const aIndex = items.indexOf(a);
    const bIndex = items.indexOf(b);
    return aIndex - bIndex;
  });

  // Include system messages and other non-message items
  return [...otherItems, ...limitedMessages];
}

/**
 * Prepare conversation context for API requests
 * Extracts text content and limits to recent messages only
 */
export function prepareContextForRequest(
  items: ConversationItem[],
  messagesPerRole: number = 2
): Array<{ role: string; content: string }> {
  const limitedItems = limitConversationContext(items, messagesPerRole);

  return limitedItems
    .filter((item) => item.type === "message")
    .map((item) => {
      // Extract text from content array
      let text = "";
      if (Array.isArray(item.content)) {
        text = item.content
          .map((c: any) => {
            if (c.type === "input_text") return c.text || "";
            if (c.type === "text") return c.text || "";
            if (c.type === "audio") return c.transcript || "";
            return "";
          })
          .filter(Boolean)
          .join(" ");
      }

      return {
        role: item.role,
        content: text,
      };
    })
    .filter((msg) => msg.content.trim().length > 0);
}
