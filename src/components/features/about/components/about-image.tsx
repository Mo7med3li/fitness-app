import anime1 from "./../../../../../public/assets/image-anime1.webp";
import anime2 from "./../../../../../public/assets/image-anime2.webp";
import anime3 from "./../../../../../public/assets/image-anime3.webp";

export default function AboutImage() {
  return (
    <div className="relative h-[700px] lg:col-span-1 hidden lg:block">
      <img src={anime1} className="absolute h-auto left-0" alt={"anime1"} />
      <img src={anime2} className="absolute h-auto left-1/3 bottom-0" alt={"anime2"} />
      <img src={anime3} className="absolute h-auto left-1/2 top-10" alt={"anime3"} />
    </div>
  );
}
