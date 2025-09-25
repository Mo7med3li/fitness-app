import { type Dispatch, type FormEvent, type SetStateAction, useState } from "react";
import { Input } from "../ui/input";
import { PencilLine } from "lucide-react";
import { useTranslation } from "react-i18next";
import { GoogleGenAI } from "@google/genai";

// Props type definition for ChatForm component
type ChatFormProp = {
  setInputValue: Dispatch<SetStateAction<string>>;
  setMessages: Dispatch<SetStateAction<{ type: "bot" | "user"; text: string; id?: string }[]>>;
  inputValue: string;
  messages: {
    type: "bot" | "user";
    text: string;
    id?: string;
  }[];
};

export default function ChatForm({
  setInputValue,
  setMessages,
  inputValue,
  messages,
}: ChatFormProp) {
  // Translation hook
  const { t } = useTranslation();

  // Loading state for API calls
  const [isLoading, setIsLoading] = useState(false);

  // Initialize Gemini AI with API key
  const ai = new GoogleGenAI({ apiKey: `${import.meta.env.VITE_GEMINI_API_KEY}` });

  // Main function to handle AI communication
  async function main(userMessage: string) {
    // Add loading message with dots animation
    const loadingMessageId = Date.now().toString();
    setMessages((prev) => [...prev, { type: "bot", text: "...", id: loadingMessageId }]);

    try {
      setIsLoading(true);

      // Convert previous messages to Gemini format (exclude loading message)
      const history = messages.map((msg) => ({
        role: msg.type === "user" ? "user" : "model",
        parts: [{ text: msg.text }],
      }));

      // Add new user message to history
      const updatedHistory = [
        ...history,
        {
          role: "user",
          parts: [{ text: userMessage }],
        },
      ];

      // Send request to Gemini API
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: updatedHistory,
      });

      // Extract bot response with fallback
      const botResponse = response.text || t("i-couldnt-get-a-proper-response");
      console.log("Bot response:", botResponse);

      // Replace loading message with actual response
      setMessages((prev) =>
        prev.map((msg) => (msg.id === loadingMessageId ? { type: "bot", text: botResponse } : msg)),
      );
    } catch (error) {
      console.error("Error calling Gemini AI:", error);

      // Replace loading message with error message
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === loadingMessageId
            ? {
                type: "bot",
                text: t("sorry-there-was-a-connection-error-please-try-again"),
              }
            : msg,
        ),
      );
    } finally {
      // Reset loading state
      setIsLoading(false);
    }
  }

  // Handle form submission
  const handleSend = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Trim input from whitespace
    const trimmed = inputValue.trim();
    if (!trimmed || isLoading) return;

    // Add user message to chat
    setMessages((message) => [...message, { type: "user", text: trimmed }]);

    // Clear input field
    setInputValue("");

    // Call main function with user message
    await main(trimmed);
  };

  return (
    <form onSubmit={handleSend} className="flex items-center gap-2 rounded-full px-2 py-2">
      <div className="relative w-full">
        {/* Chat input field */}
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="relative ps-10 py-2 border-grayExtra placeholder:text-xs placeholder:text-grayLight"
          placeholder={t("ask-me-anything")}
          aria-label="Chat input"
          name="chat-input"
          autoComplete="off"
          disabled={isLoading}
        />

        {/* Pencil icon */}
        <PencilLine className="start-3 absolute top-1/2 z-50 size-5 -translate-y-1/2 cursor-pointer text-main" />

        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute end-3 top-1/2 -translate-y-1/2 text-xs text-grayLight">
            {t("writing")}
          </div>
        )}
      </div>
    </form>
  );
}
