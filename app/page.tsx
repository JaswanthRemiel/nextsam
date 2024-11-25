import { Header } from "../components/header";
import { Sections } from "../components/sections";
import { Now } from "../components/now";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { Navbar } from "@/components/navBar";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-24 w-full">
        <Navbar />
        <Header />
        <Sections />
        <Now />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
