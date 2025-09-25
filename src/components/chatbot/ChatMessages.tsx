import { cn } from "@/lib/utils";
import robot from "../../../public/assets/robot.jpg";
import { User2 } from "lucide-react";

// Component for animated dots loading
const LoadingDots = () => {
  return (
    <div className="flex items-center space-x-1">
      <div
        className="w-2 h-2 bg-white rounded-full animate-bounce"
        style={{ animationDelay: "0ms" }}
      ></div>
      <div
        className="w-2 h-2 bg-white rounded-full animate-bounce"
        style={{ animationDelay: "150ms" }}
      ></div>
      <div
        className="w-2 h-2 bg-white rounded-full animate-bounce"
        style={{ animationDelay: "300ms" }}
      ></div>
    </div>
  );
};

export default function ChatMessages({
  msg,
}: {
  msg: { type: "bot" | "user"; text: string; id?: string };
}) {
  const isLoading = msg.type === "bot" && msg.text === "...";

  return (
    <div className={cn("flex gap-2 max-w-full", msg.type === "user" ? "self-end" : "self-start")}>
      {msg.type === "bot" && (
        <div className="inline-flex h-9 w-9 items-center justify-center text-white flex-shrink-0">
          <img
            src={robot}
            alt="Coach bot avatar"
            className="w-full h-full rounded-full shadow-[0_0_10px_0] shadow-main object-cover"
            loading="lazy"
          />
        </div>
      )}

      <div
        className={cn(
          "p-2 px-4 text-white rounded-[20px] backdrop-blur-[30px] min-w-0",
          "max-w-[280px] break-words overflow-wrap-anywhere word-break",
          msg.type === "bot"
            ? "bg-[#242424]/50 rounded-tl-none"
            : "bg-[#ff6a00]/80 rounded-tr-none",
        )}
      >
        {isLoading ? (
          <div className="flex items-center justify-center py-2">
            <LoadingDots />
          </div>
        ) : (
          <div className="whitespace-pre-wrap break-words hyphens-auto">{msg.text}</div>
        )}
      </div>

      {msg.type === "user" && (
        <div className="inline-flex h-9 w-9 items-center justify-center text-white flex-shrink-0">
          <User2 className="w-6 h-6 rounded-full shadow-[0_0_10px_0] shadow-main/25" />
        </div>
      )}
    </div>
  );
}
