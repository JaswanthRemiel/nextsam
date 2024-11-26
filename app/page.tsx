import { Header } from "../components/header";
import { Sections } from "../components/sections";
import { Now } from "../components/now";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { Navbar } from "@/components/navBar";
import { MarqueeDemo } from "@/components/marquee";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1c1c1c] text-white">
      <main className="flex-grow max-w-2xl mx-auto px-4 sm:px-6 py-16 space-y-12 w-full">
        <Navbar />
        <Header />
        <Sections />
        <Now />
        <MarqueeDemo />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
