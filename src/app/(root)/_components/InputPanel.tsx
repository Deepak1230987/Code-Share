
"use client";

import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { Terminal, CheckCircle, Copy } from "lucide-react";
import React, { useState } from "react";

const InputPanel: React.FC = () => {
  const { userInput, setUserInput } = useCodeEditorStore();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    if (!userInput) return;
    await navigator.clipboard.writeText(userInput);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="relative bg-[#181825] rounded-xl p-4 ring-1 ring-gray-800/50">
      {/* Input Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-[#1e1e2e] ring-1 ring-gray-800/50">
            <Terminal className="w-4 h-4 text-blue-400" />
          </div>
          <span className="text-sm font-medium text-gray-300">Input</span>
        </div>

        {userInput && (
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-gray-400 hover:text-gray-300 bg-[#1e1e2e] 
            rounded-lg ring-1 ring-gray-800/50 hover:ring-gray-700/50 transition-all"
          >
            {isCopied ? (
              <>
                <CheckCircle className="w-3.5 h-3.5" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copy
              </>
            )}
          </button>
        )}
      </div>

      {/* Input Area */}
      <div className="relative w-full h-[150px] sm:h-[200px]"> {/* Ensure this div takes full width */}
  <textarea
    value={userInput}
    onChange={(e) => setUserInput(e.target.value)}
    className="relative bg-[#1e1e2e]/50 backdrop-blur-sm border border-[#313244] 
    rounded-xl p-4 h-[200px] w-full overflow-auto font-mono text-sm text-gray-300 
    focus:border-cyan-500 focus:ring focus:ring-cyan-500 transition-all outline-0"
    placeholder="Enter your input here..."
  />
</div>
</div>
  );
};

export default InputPanel;