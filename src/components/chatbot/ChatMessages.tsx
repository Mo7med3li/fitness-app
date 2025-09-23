import { cn } from "@/lib/utils";
import robot from "../../../public/assets/robot.jpg";
import { User2 } from "lucide-react";

export default function ChatMessages({ msg }: { msg: { type: "bot" | "user"; text: string } }) {
  return (
    <div className={cn("flex gap-2", msg.type === "user" ? "self-end" : "self-start")}>
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
          msg.type === "bot" ? "bg-[#242424]/50 rounded-tl-none" : "bg-[#ff6a00]/80 rounded-tr-none"
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
  );
}
