import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { Outlet } from "react-router";

export const ClientLayout = () => {
  return (
    <div className="bg-primary text-font flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex max-w-[1200px] grow flex-col justify-center">
        <Outlet />
        <WhatsAppButton />
      </main>
      <Footer />
    </div>
  );
};
