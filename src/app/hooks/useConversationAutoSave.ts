import { useEffect, useRef, useState, useCallback } from "react";
import { TranscriptItem } from "@/app/types";

const AUTO_SAVE_INTERVAL_MS = 2 * 60 * 1000; // 2 minutes

interface ConversationMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export function useConversationAutoSave(
  transcriptItems: TranscriptItem[],
  isConnected: boolean
) {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const lastSaveRef = useRef<number>(0);
  const transcriptItemsRef = useRef<TranscriptItem[]>(transcriptItems);
  const saveCountRef = useRef<number>(0);
  const [nextSaveIn, setNextSaveIn] = useState<number>(AUTO_SAVE_INTERVAL_MS);
  const [saveCount, setSaveCount] = useState<number>(0);

  // Update ref when transcriptItems change
  useEffect(() => {
    transcriptItemsRef.current = transcriptItems;
  }, [transcriptItems]);

  const exportConversationToJSON = useCallback(() => {
    // Filter only messages (not breadcrumbs) and extract relevant data
    const conversation: ConversationMessage[] = transcriptItemsRef.current
      .filter((item) => item.type === "MESSAGE" && !item.isHidden)
      .map((item) => ({
        role: item.role as "user" | "assistant",
        content: item.title || "",
        timestamp: item.timestamp,
      }));

    saveCountRef.current += 1;
    const currentSaveCount = saveCountRef.current;

    const exportData = {
      exportedAt: new Date().toISOString(),
      messageCount: conversation.length,
      conversation,
      autoSaveNumber: currentSaveCount,
    };

    // Save to localStorage
    try {
      localStorage.setItem("conversation_backup", JSON.stringify(exportData));

      const saveTime = new Date().toLocaleTimeString();
      console.log(
        `%c🔄 [AutoSave #${currentSaveCount}] Conversation saved at ${saveTime}`,
        "color: green; font-weight: bold; font-size: 14px"
      );
      console.log(
        `%c📊 Messages: ${conversation.length} | Next save in: 2 minutes`,
        "color: blue; font-size: 12px"
      );
    } catch (error) {
      console.error("❌ [AutoSave] Failed to save conversation:", error);
    }

    // Also download as JSON file
    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filename = `conversation_backup_${currentSaveCount}_${timestamp}.json`;

    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    lastSaveRef.current = Date.now();
    setSaveCount(currentSaveCount); // Update state for UI
    setNextSaveIn(AUTO_SAVE_INTERVAL_MS);
  }, []); // No dependencies - stable function

  useEffect(() => {
    if (!isConnected) {
      // Clear timer when disconnected
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      saveCountRef.current = 0;
      setSaveCount(0);
      setNextSaveIn(AUTO_SAVE_INTERVAL_MS);
      return;
    }

    console.log(
      "%c🚀 [AutoSave] Started - will save every 2 minutes",
      "color: orange; font-weight: bold; font-size: 14px"
    );

    // Start auto-save timer when connected
    timerRef.current = setInterval(() => {
      console.log(
        "%c⏰ [AutoSave] Timer triggered!",
        "color: blue; font-weight: bold"
      );
      exportConversationToJSON();
    }, AUTO_SAVE_INTERVAL_MS);

    // Cleanup on unmount or when connection changes
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isConnected, exportConversationToJSON]);

  // Separate effect for countdown
  useEffect(() => {
    if (!isConnected) return;

    const countdownInterval = setInterval(() => {
      setNextSaveIn((prev) => {
        const newValue = prev - 1000;
        if (newValue <= 0) return AUTO_SAVE_INTERVAL_MS;
        return newValue;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [isConnected]);

  // Save immediately when disconnecting
  useEffect(() => {
    return () => {
      if (transcriptItemsRef.current.length > 0) {
        console.log(
          "%c💾 [AutoSave] Final save on disconnect",
          "color: red; font-weight: bold"
        );
        exportConversationToJSON();
      }
    };
  }, [exportConversationToJSON]);

  const formatTimeRemaining = (ms: number): string => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return {
    exportConversationToJSON,
    nextSaveIn: formatTimeRemaining(nextSaveIn),
    saveCount,
  };
}
