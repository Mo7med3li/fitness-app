import { useState } from "react";
import ReactPlayer from "react-player";
import { Play } from "lucide-react";

const ExercisePlay = ({ exercise }: { exercise: Exercise | null }) => {
  // States
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div
      className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg bg-[linear-gradient(#0000001A,#242424),url('/assets/fitness-9180669_1280.jpg')] 
                 bg-cover bg-center backdrop-blur-2xl"
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center p-2">
        {!showVideo && exercise && (
          <button
            onClick={() => setShowVideo(true)}
            className="w-20 h-20 flex items-center justify-center bg-orange-600/40 rounded-full shadow-lg hover:bg-orange-700 transition"
          >
            <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-main/60">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-main">
                <Play className="text-white" width={20} height={20} fill="#D3D3D3" />
              </div>
            </div>
          </button>
        )}

        {showVideo && (
          <div className="w-full h-full mt-4">
            <ReactPlayer
              src={exercise?.short_youtube_demonstration_link}
              playing
              controls
              width="100%"
              height="100%"
              onPlay={() => setShowVideo(true)}
              onEnded={() => setShowVideo(false)}
            />
          </div>
        )}

        <h2 className="text-2xl font-bold text-white mt-4">
          {exercise?.exercise || "Choose an exercise to play"}
        </h2>
      </div>
    </div>
  );
};

export default ExercisePlay;
