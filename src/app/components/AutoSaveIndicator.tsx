"use client";
import React from "react";

interface AutoSaveIndicatorProps {
  isConnected: boolean;
  nextSaveIn: string;
  saveCount: number;
  onManualSave?: () => void;
}

export default function AutoSaveIndicator({
  isConnected,
  nextSaveIn,
  saveCount,
  onManualSave,
}: AutoSaveIndicatorProps) {
  if (!isConnected) return null;

  return (
    <div className="fixed bottom-20 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-3 text-sm z-40">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="font-semibold text-gray-700">Auto-Save Active</span>
        </div>
      </div>
      
      <div className="mt-2 space-y-1 text-gray-600">
        <div className="flex items-center justify-between gap-4">
          <span>Next save:</span>
          <span className="font-mono font-bold text-blue-600">{nextSaveIn}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span>Saves:</span>
          <span className="font-bold text-green-600">#{saveCount}</span>
        </div>
      </div>

      {onManualSave && (
        <button
          onClick={onManualSave}
          className="mt-2 w-full py-1 px-2 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded transition-colors"
          title="Save conversation now"
        >
          💾 Save Now
        </button>
      )}

      <div className="mt-2 pt-2 border-t border-gray-200 text-xs text-gray-500">
        💡 Files auto-download every 2 minutes
      </div>
    </div>
  );
}
