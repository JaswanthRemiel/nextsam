import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import Writing from "@/components/writing";
import ContactSection from "@/components/contact";
import { ExperienceDemo } from "@/components/experience";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1c1c1c] text-white">
      <main className="flex-grow w-full max-w-4xl lg:max-w-7xl mx-auto px-10 sm:px-6 lg:px-12 py-20 space-y-12">
        <div className="max-w-4xl mx-auto">
          <Header />
        </div>
        <Projects />

        <div className="max-w-4xl mx-auto">
          <ExperienceDemo />
        </div>
        <div className="max-w-4xl mx-auto">
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
