import img1 from "../../../../../../public/assets/why-1.png";
import img2 from "../../../../../../public/assets/why-2.png";
import img3 from "../../../../../../public/assets/why-3.png";
import img4 from "../../../../../../public/assets/why-4.png";
const WhyUsImages = () => {
  return (
    <div className="columns-2">
      <div className="break-inside-avoid mb-2">
        <div className="relative overflow-hidden rounded-xl">
          <img src={img1} className="w-full h-[380px] object-cover" />
        </div>
      </div>
      <div className="break-inside-avoid ">
        <div className="relative overflow-hidden rounded-xl">
          <img src={img2} className="w-full h-[344px] object-cover" />
        </div>
      </div>

      <div className="break-inside-avoid mb-2 pt-[70px]">
        <div className="relative overflow-hidden rounded-xl">
          <img src={img3} className="w-full h-[287px] object-cover" />
        </div>
      </div>
      <div className="break-inside-avoid ">
        <div className="relative overflow-hidden rounded-xl">
          <img src={img4} className="w-full h-[345px] object-cover" />
        </div>
      </div>
    </div>
  );
};
export default WhyUsImages;
