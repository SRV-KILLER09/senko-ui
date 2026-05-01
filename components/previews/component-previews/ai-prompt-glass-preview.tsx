"use client";

import { PromptInputBox } from "@/registry/ai-prompt-box-glassmorphism";

export function AiPromptGlassDefault() {
  return (
    <div className="flex items-center justify-center p-8 w-full">
      <div className="w-full max-w-2xl">
        <PromptInputBox placeholder="Ask me anything..." onSend={(msg) => console.log("Sent:", msg)} />
      </div>
    </div>
  );
}
