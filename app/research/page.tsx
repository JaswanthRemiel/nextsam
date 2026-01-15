import Link from "next/link";
import Markdown from "react-markdown";
import { getDetails } from "@/lib/data";
import ContactSection from "@/components/contact";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({ subsets: ["latin"], weight: ["300"] });

interface Research {
    title: string;
    href?: string;
    description: string;
    dates: string;
    technologies: string[];
}

interface ResearchItemProps {
    href?: string;
    title: string;
    description: string;
    dates: string;
    technologies: string[];
}

function ResearchItem({ href, title, description, dates, technologies }: ResearchItemProps) {
    return (
        <div>
            {href ? (
                <Link
                    href={href}
                    target="_blank"
                    className="group inline-flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
                >
                    <span className="text-sm underline underline-offset-4">{title}</span>
                </Link>
            ) : (
                <span className="text-sm text-white underline underline-offset-4">{title}</span>
            )}
            <div className="text-xs text-gray-500 mt-1">{dates}</div>
            <div className="text-sm md:text-justify font-mono text-gray-400 mt-1">
                <Markdown>{description}</Markdown>
            </div>
            {technologies && technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                    {technologies.map((tech) => (
                        <span key={tech} className="text-xs text-gray-500">
                            {tech}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

export default async function ResearchPage() {
    const data = await getDetails();
    const research = (data.research as Research[]) || [];

    return (
        <div className="flex flex-col min-h-screen bg-[#1c1c1c] text-white">
            <main className="flex-grow max-w-3xl mx-auto px-10 sm:px-6 py-20 space-y-12 w-full">
                <Link
                    href="/"
                    className={`${newsreader.className} text-gray-100 text-lg hover:text-gray-300 transition-colors inline-flex items-center gap-2`}
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 12L4 4M4 4H10M4 4V10"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    back to portfolio
                </Link>

                <section className="space-y-7">
                    <h2 className="font-medium text-gray-300">research</h2>
                    <div className="space-y-7">
                        {research.map((item: Research) => (
                            <ResearchItem
                                key={item.title}
                                href={item.href}
                                title={item.title}
                                description={item.description}
                                dates={item.dates}
                                technologies={item.technologies}
                            />
                        ))}
                    </div>
                </section>
            </main>
            <footer className="mt-auto max-w-3xl mx-auto px-10 sm:px-6 pb-20 w-full">
                <ContactSection />
            </footer>
        </div>
    );
}

