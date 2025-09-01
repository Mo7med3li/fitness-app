import fitImage from "../../../../public/assets/O15_36.png";
import logo from "../../../../public/assets/fit 1.png";

export default function LeftSideImage() {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center gap-20 p-8">
      <img src={logo} alt="logo super fitness" className="w-32 lg:w-44" />
      <img src={fitImage} alt="fit Image" className="w-72 lg:w-[500px]" />
    </div>
  );
}
