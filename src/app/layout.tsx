import Providers from "@/components/providers";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Providers>
      <Outlet />
    </Providers>
  );
};
export default RootLayout;
