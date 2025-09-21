import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowRight, Menu, PencilLine, User2 } from "lucide-react";
import robot from "../../../public/assets/robot.jpg";
import emo from "../../../public/assets/emo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export default function ChatBot() {
  // Translation
  const { t } = useTranslation();

  // States
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<{ type: "bot" | "user"; text: string }[]>([
    { type: "bot", text: "Hello! How can I assist you today?" },
  ]);

  // Functions
  const handleSend = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Trim input from whitespace
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { type: "user", text: trimmed }]);
    setInputValue("");

    setTimeout(() => {
      setMessages((prev) => [...prev, { type: "bot", text: "Thanks for your message!" }]);
    }, 500);
  };

  return (
    <div className={cn("fixed right-20 z-50", open ? "bottom-2" : "bottom-20")}>
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

      {open && (
        <section
          className="p-0 border-2 relative h-[550px] border-main w-[385px] shadow-[0_0_217px_0] shadow-black bg-[url('/assets/chat.jpg')] bg-cover bg-center 
  text-white overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 backdrop-blur-md bg-[#1a1a1a80]">
            <div className="p-4 pb-0 flex items-center justify-between">
              <div className="text-xl text-yellow-50 font-semibold w-fit">Smart Coach</div>
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
                  className="w-72 py-5 px-4 bg-charcoal/80 space-y-2 shadow-[0_0_10px_0] shadow-black/25 backdrop-blur-xl rounded-lg border-none"
                  align="start"
                >
                  <DropdownMenuLabel className="font-semibold text-xl text-center text-grayExtra font-baloo capitalize">
                    {t("previous-conversations")}
                  </DropdownMenuLabel>
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="text-grayLight text-sm font-baloo font-medium border-b border-[#2d2d2d] pb-2">
                      {t("chest-day")}
                      <DropdownMenuShortcut className="text-main">
                        <ArrowRight />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="p-4 pt-2 flex flex-col justify-between">
              <div>
                <ScrollArea className="relative z-10 h-[415px]">
                  <div className="flex flex-col gap-4 p-2">
                    {messages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={cn(
                          "flex gap-2",
                          msg.type === "user" ? "self-end" : "self-start",
                        )}
                      >
                        {msg.type === "bot" && (
                          <div className="inline-flex h-9 w-9 items-center justify-center text-white">
                            <img
                              src={robot}
                              alt="Coach bot avatar"
                              className="w-full h-full rounded-full shadow-[0_0_10px_0] shadow-main"
                              loading="lazy"
                            />
                          </div>
                        )}

                        <div
                          className={`p-2 px-4 text-white rounded-[20px] backdrop-blur-[30px] ${
                            msg.type === "bot"
                              ? "bg-[#242424]/50 rounded-tl-none"
                              : "bg-[#ff6a00]/80 rounded-tr-none"
                          }`}
                        >
                          {msg.text}
                        </div>

                        {msg.type === "user" && (
                          <div className="inline-flex h-9 w-9 items-center justify-center text-white">
                            <User2 className="w-full h-full rounded-full shadow-[0_0_10px_0] shadow-main/25" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              <form
                onSubmit={handleSend}
                className="flex items-center gap-2 rounded-full px-2 py-2"
              >
                <div className="relative w-full">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="relative ps-10 py-2 border-grayExtra placeholder:text-xs placeholder:text-grayLight"
                    placeholder={t("ask-me-anything")}
                    aria-label="Chat input"
                    name="chat-input"
                    autoComplete="off"
                  />
                  <PencilLine className="start-3 absolute top-1/2 z-50 size-5 -translate-y-1/2 cursor-pointer text-main" />
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
