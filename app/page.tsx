import { Header } from "../components/header";
import { Sections } from "../components/sections";
import { Now } from "../components/now";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { Navbar } from "@/components/navBar";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1c1c1c] text-white">
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12 w-full">
        <Navbar />
        <Header />
        <Sections />
        <Now />
        <Contact />
      </main>
      <Footer />
      {/* <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      /> */}
    </div>
  );
}
