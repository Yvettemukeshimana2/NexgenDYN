import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import WhatsAppChatButton from "../Component/Whatsapchart";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-charcoal max-w-screen-3xl mx-auto flex justify-center flex-col font-lato">
      <NavBar />
      <div>{<Outlet />}</div>
      <WhatsAppChatButton />
      <Footer companyName="NEXGEN DYN" year={2026} />
    </div>
  );
};
export default AppLayout;
