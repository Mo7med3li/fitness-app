import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowRight, Menu, Trash2 } from "lucide-react";
import emo from "../../../public/assets/emo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import ChatForm from "./ChatForm";
import ChatMessages from "./ChatMessages";

// Conversation type definition
type Conversation = {
  id: string;
  title: string;
  messages: { type: "bot" | "user"; text: string }[];
  timestamp: Date;
};

export default function ChatBot() {
  // Translation hook
  const { t } = useTranslation();

  // Component states
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<{ type: "bot" | "user"; text: string }[]>([
    { type: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [conversationHistory, setConversationHistory] = useState<Conversation[]>([]);
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);

  // Load conversation history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem("chatbot-history");
    if (savedHistory) {
      try {
        const parsed = JSON.parse(savedHistory);
        // Convert timestamp from string to Date object
        const historyWithDates = parsed.map((conv: any) => ({
          ...conv,
          timestamp: new Date(conv.timestamp),
        }));
        setConversationHistory(historyWithDates);
      } catch (error) {
        console.error("Error loading conversation history:", error);
      }
    }
  }, []);

  // Save conversation history to localStorage when updated
  useEffect(() => {
    if (conversationHistory.length > 0) {
      localStorage.setItem("chatbot-history", JSON.stringify(conversationHistory));
    }
  }, [conversationHistory]);

  // Generate conversation title from first user message
  const generateConversationTitle = (firstMessage: string) => {
    if (firstMessage.length > 30) {
      return firstMessage.substring(0, 30) + "...";
    }
    return firstMessage;
  };

  // Save current conversation to history
  const saveCurrentConversation = () => {
    if (messages.length <= 1) return; // Don't save if only welcome message exists

    const userMessages = messages.filter((msg) => msg.type === "user");
    if (userMessages.length === 0) return;

    const title = generateConversationTitle(userMessages[0].text);
    const conversationId = currentConversationId || Date.now().toString();

    const conversation: Conversation = {
      id: conversationId,
      title,
      messages: [...messages],
      timestamp: new Date(),
    };

    setConversationHistory((prev) => {
      // If conversation exists, replace it
      const existingIndex = prev.findIndex((conv) => conv.id === conversationId);
      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex] = conversation;
        return updated;
      }
      // Add new conversation and keep only last 10
      return [conversation, ...prev].slice(0, 10);
    });

    setCurrentConversationId(conversationId);
  };

  // Auto-save conversation when messages change
  useEffect(() => {
    if (messages.length > 1) {
      const timeoutId = setTimeout(() => {
        saveCurrentConversation();
      }, 1000); // Save after 1 second of last message

      return () => clearTimeout(timeoutId);
    }
  }, [messages]);

  // Load selected conversation from history
  const loadConversation = (conversation: Conversation) => {
    setMessages(conversation.messages);
    setCurrentConversationId(conversation.id);
    setInputValue("");
  };

  // Start new conversation
  const startNewConversation = () => {
    setMessages([{ type: "bot", text: "Hello! How can I assist you today?" }]);
    setCurrentConversationId(null);
    setInputValue("");
  };

  // Delete conversation from history
  const deleteConversation = (conversationId: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent conversation loading when clicking delete
    setConversationHistory((prev) => prev.filter((conv) => conv.id !== conversationId));

    // If deleted conversation is currently active, start new conversation
    if (currentConversationId === conversationId) {
      startNewConversation();
    }
  };

  // Format date for display
  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) {
      return t("today");
    } else if (days === 1) {
      return t("yesterday");
    } else if (days < 7) {
      return t("days-ago", { count: days });
    } else {
      return date.toLocaleDateString("ar");
    }
  };

  return (
    <div className={cn("fixed right-20 z-50", open ? "bottom-2" : "bottom-20")}>
      {/* Chatbot trigger button */}
      <div className="flex flex-col items-center">
        <img src={emo} alt="Smart Coach assistant" className="size-25" loading="lazy" />
        <Button
          className="rounded-full shadow-lg bg-main hover:bg-main/80 px-5 h-12"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close chatbot" : "Open chatbot"}
        >
          {open ? t("tab-to-close") : t("hey-ask-me")}
        </Button>
      </div>

      {/* Chatbot interface */}
      {open && (
        <section
          className="p-0 border-2 relative h-[550px] border-main w-[385px] shadow-[0_0_217px_0] shadow-black bg-[url('/assets/chat.jpg')] bg-cover bg-center
  text-white overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 backdrop-blur-md bg-[#1a1a1a80]">
            {/* Chat header with menu */}
            <div className="p-4 pb-0 flex items-center justify-between">
              <div className="text-xl text-yellow-50 font-semibold w-fit">{t("smart-coach")}</div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="w-fit border-none text-main hover:bg-[#2d2d2d] hover:text-white"
                    variant="ghost"
                  >
                    <Menu width={25} height={25} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-72 py-5 px-4 bg-charcoal/80 space-y-2 shadow-[0_0_10px_0] shadow-black/25 backdrop-blur-xl rounded-lg border-none max-h-96 overflow-y-auto"
                  align="start"
                >
                  <DropdownMenuLabel className="font-semibold text-xl text-center text-grayExtra font-baloo capitalize">
                    {t("previous-conversations")}
                  </DropdownMenuLabel>

                  {/* New conversation button */}
                  <DropdownMenuItem
                    className="text-main text-sm font-baloo font-medium border-b border-[#2d2d2d] pb-2 cursor-pointer hover:bg-[#2d2d2d]"
                    onClick={startNewConversation}
                  >
                    {t("new-conversation")}
                  </DropdownMenuItem>

                  <DropdownMenuSeparator className="bg-[#2d2d2d]" />

                  {/* Conversation history list */}
                  <DropdownMenuGroup>
                    {conversationHistory.length === 0 ? (
                      <DropdownMenuItem className="text-grayLight text-sm font-baloo text-center py-4">
                        {t("no-previous-conversations")}{" "}
                      </DropdownMenuItem>
                    ) : (
                      conversationHistory.map((conversation) => (
                        <DropdownMenuItem
                          key={conversation.id}
                          className="text-grayLight text-sm font-baloo font-medium border-b border-[#2d2d2d] pb-2 cursor-pointer hover:bg-[#2d2d2d] group"
                          onClick={() => loadConversation(conversation)}
                        >
                          <div className="flex-1 min-w-0">
                            <div className="truncate">{conversation.title}</div>
                            <div className="text-xs text-grayLight/60 mt-1">
                              {formatDate(conversation.timestamp)}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 ml-2">
                            {/* Delete conversation button */}
                            <button
                              onClick={(e) => deleteConversation(conversation.id, e)}
                              className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 transition-opacity p-1"
                              title={t("delete-conversation")}
                            >
                              <Trash2 size={14} />
                            </button>
                            <DropdownMenuShortcut className="text-main">
                              <ArrowRight />
                            </DropdownMenuShortcut>
                          </div>
                        </DropdownMenuItem>
                      ))
                    )}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Chat content area */}
            <div className="p-4 pt-2 flex flex-col justify-between">
              {/* Messages display area */}
              <div>
                <ScrollArea className="relative z-10 h-[415px]">
                  <div className="flex flex-col gap-4 p-2">
                    {messages.map((msg, idx) => (
                      <ChatMessages key={idx} msg={msg} />
                    ))}
                  </div>
                </ScrollArea>
              </div>

              {/* Chat input form */}
              <ChatForm
                setInputValue={setInputValue}
                setMessages={setMessages}
                inputValue={inputValue}
                messages={messages}
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
