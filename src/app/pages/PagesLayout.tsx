import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "@/components/chatbot/Chatbot";

const PagesLayout = () => {
  return (
    <main className="container flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
      <Chatbot />
    </main>
  );
};
export default PagesLayout;
