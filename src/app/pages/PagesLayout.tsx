import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatBot from "@/components/chatbot/Chatbot";

const PagesLayout = () => {
  // Pathname
  const { pathname } = useLocation();
  return (
    <main className="flex flex-col">
      {pathname !== "/" && <Navbar />}
      <Outlet />
      <Footer />
      <ChatBot />
    </main>
  );
};
export default PagesLayout;
