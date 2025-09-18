import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PencilLine } from "lucide-react";
import robot from "../../../public/assets/robot.jpg";
export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<{ type: "bot" | "user"; text: string }[]>([
    { type: "bot", text: "Hello! How can I assist you today?" },
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user's message
    setMessages([...messages, { type: "user", text: inputValue }]);
    setInputValue("");

    setTimeout(() => {
      setMessages((prev) => [...prev, { type: "bot", text: "Thanks for your message!" }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-16 right-6 z-50">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="rounded-full shadow-lg bg-orange-500 hover:bg-orange-600 px-5 h-12">
            Hey Ask Me
          </Button>
        </DialogTrigger>

        <DialogContent
          className="p-0 border-2 border-main w-[375px]  bg-[linear-gradient(#1a1a1a90,#1a1a1a80),url('/assets/chat.jpg')] 
  bg-cover bg-center backdrop-blur-xl text-white overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 backdrop-blur-md"></div>
          <DialogHeader className="p-4 pb-0">
            <DialogTitle className="text-left text-xl font-semibold">Smart Coach</DialogTitle>
          </DialogHeader>

          <div className="p-4 pt-2">
            <div className="relative h-[75vh]">
              <ScrollArea className="relative z-10 h-full">
                <div className="flex flex-col gap-4 p-2">
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex gap-1 ${msg.type === "user" ? "self-end" : "self-start"}`}
                    >
                      {msg.type === "bot" && (
                        <div className="inline-flex h-9 w-9 items-center justify-center   text-white">
                          <img
                            src={robot}
                            alt=""
                            className="w-full h-full rounded-full shadow-[0_0_10px_0] shadow-main"
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
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white">
                          🧑
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>

            <form
              onSubmit={handleSend}
              className="mt-3 flex items-center gap-2 rounded-full px-2 py-2"
            >
              <div className="relative w-full">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="relative ps-10 py-2 border-grayExtra placeholder:text-xs placeholder:text-grayLight"
                  placeholder="Ask me anything"
                />
                <PencilLine className="start-3 absolute top-1/2 z-50 size-5 -translate-y-1/2 cursor-pointer text-main" />
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
