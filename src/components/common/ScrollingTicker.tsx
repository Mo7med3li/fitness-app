import { Sparkle } from "lucide-react";

export default function ScrollingTicker() {
  return (
    <div className="w-full  my-8">
      <div className="bg-main text-white py-3 overflow-hidden relative">
        <div className="animate-marquee whitespace-nowrap">
          {Array.from({ length: 5 }, (_, index) => (
            <>
              <span key={index} className="text-lg font-semibold mx-4">
                live classes
              </span>
              <span>
                <Sparkle size={16} absoluteStrokeWidth className="inline" />
              </span>
              <span className="text-lg font-semibold mx-4">outdoor & online trainers</span>
              <span>
                <Sparkle size={16} absoluteStrokeWidth className="inline" />
              </span>
              <span className="text-lg font-semibold mx-4">personal training</span>
              <span>
                <Sparkle size={16} absoluteStrokeWidth className="inline" />
              </span>
              <span className="text-lg font-semibold mx-4">fitness programs</span>
              <span>
                <Sparkle size={16} absoluteStrokeWidth className="inline" />
              </span>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
