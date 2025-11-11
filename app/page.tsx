import { Header } from "../components/header";
import Projects from "../components/Projects";
import Writing from "../components/Writing";
import { Now } from "../components/now";
import ContactSection from "@/components/contact";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1c1c1c] text-white">
      <main className="flex-grow max-w-3xl mx-auto px-10 sm:px-6 py-20 space-y-12 w-full">
        <Header />
        <Projects />
        <Now />
        <Writing />
        <ContactSection />
      </main>
    </div>
  );
}
