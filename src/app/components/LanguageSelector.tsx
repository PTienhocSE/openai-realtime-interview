"use client";
import React from "react";

export type Language = "english" | "vietnamese" | "both";

interface LanguageSelectorProps {
  onLanguageSelect: (language: Language) => void;
  onClose: () => void;
}

export default function LanguageSelector({
  onLanguageSelect,
  onClose,
}: LanguageSelectorProps) {
  const handleSelect = (language: Language) => {
    // Save to localStorage
    localStorage.setItem("preferredLanguage", language);
    onLanguageSelect(language);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Select Interview Language
          </h2>
          <p className="text-2xl font-bold text-gray-900 mb-4">
            Chọn ngôn ngữ phỏng vấn
          </p>
          <p className="text-gray-600">
            Choose your preferred language for the technical interview
          </p>
          <p className="text-gray-600">
            Chọn ngôn ngữ bạn muốn sử dụng trong buổi phỏng vấn kỹ thuật
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => handleSelect("english")}
            className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-3"
          >
            <span className="text-2xl">🇬🇧</span>
            <span>English Only</span>
          </button>

          <button
            onClick={() => handleSelect("vietnamese")}
            className="w-full py-4 px-6 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-3"
          >
            <span className="text-2xl">🇻🇳</span>
            <span>Tiếng Việt</span>
          </button>

          <button
            onClick={() => handleSelect("both")}
            className="w-full py-4 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-3"
          >
            <span className="text-2xl">🌐</span>
            <span>Both / Cả hai</span>
          </button>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-gray-700 underline"
          >
            Cancel / Hủy
          </button>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> You can use English or Vietnamese during the
            interview. Technical terms will remain in English.
          </p>
          <p className="text-sm text-gray-700 mt-2">
            <strong>Lưu ý:</strong> Bạn có thể sử dụng tiếng Anh hoặc tiếng Việt
            trong buổi phỏng vấn. Các thuật ngữ kỹ thuật sẽ giữ nguyên bằng
            tiếng Anh.
          </p>
        </div>
      </div>
    </div>
  );
}
