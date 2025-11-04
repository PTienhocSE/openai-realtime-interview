"use client";
import React, { useEffect, useState } from "react";

interface TokenWarningProps {
  isConnected: boolean;
  onReconnect: () => void;
}

const WARNING_TIME_MS = 4 * 60 * 1000; // 4 minutes
const DANGER_TIME_MS = 5 * 60 * 1000; // 5 minutes (close to rate limit)

export default function TokenWarning({
  isConnected,
  onReconnect,
}: TokenWarningProps) {
  const [connectionTime, setConnectionTime] = useState(0);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if (!isConnected) {
      setConnectionTime(0);
      setShowWarning(false);
      return;
    }

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setConnectionTime(elapsed);

      if (elapsed >= WARNING_TIME_MS) {
        setShowWarning(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isConnected]);

  if (!showWarning || !isConnected) return null;

  const isDanger = connectionTime >= DANGER_TIME_MS;
  const timeLeft = Math.max(
    0,
    Math.ceil((DANGER_TIME_MS + 60000 - connectionTime) / 1000)
  );

  return (
    <div
      className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 ${
        isDanger ? "bg-red-500" : "bg-yellow-500"
      } text-white px-6 py-3 rounded-lg shadow-lg animate-pulse`}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{isDanger ? "⚠️" : "⏰"}</span>
        <div>
          <div className="font-bold">
            {isDanger
              ? "🚨 Token Limit Warning!"
              : "⚠️ Long Conversation Detected"}
          </div>
          <div className="text-sm">
            {isDanger
              ? `Rate limit trong ~${timeLeft}s! Hãy reconnect ngay!`
              : "Cuộc hội thoại dài sẽ tốn nhiều tokens. Cân nhắc reconnect."}
          </div>
        </div>
        {isDanger && (
          <button
            onClick={onReconnect}
            className="ml-4 bg-white text-red-600 px-4 py-2 rounded font-bold hover:bg-gray-100 transition-colors"
          >
            Reconnect Now
          </button>
        )}
      </div>
    </div>
  );
}
