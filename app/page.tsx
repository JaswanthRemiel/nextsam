import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import Writing from "@/components/writing";
import ContactSection from "@/components/contact";
import { ExperienceDemo } from "@/components/experience";
import { FloatingDock } from "@/components/ui/floating-dock";
import { getDetails } from "@/lib/data";

export default async function Page() {
  const details = await getDetails();
  const dockIcons = details.dockIcons || [];

  return (
    <div className="flex flex-col min-h-screen bg-[#1c1c1c] text-white">
      <main className="flex-grow max-w-3xl mx-auto px-10 sm:px-6 py-20 space-y-12 w-full">
        <Header />
        <Projects />
        <ExperienceDemo />
        <Writing />
        <ContactSection />
      </main>
      <FloatingDock icons={dockIcons} />
    </div>
  );
}
