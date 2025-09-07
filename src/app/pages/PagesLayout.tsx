import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const PagesLayout = () => {
  return (
    <main className="container flex flex-col gap-4">
      <Navbar />
      <Outlet />
    </main>
  );
};
export default PagesLayout;
