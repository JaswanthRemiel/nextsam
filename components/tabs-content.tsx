"use client";

import { Projects } from "@/components/projects";
import { ExperienceDemo } from "@/components/experience";
import { BlogTabContent } from "@/components/blog-tab-content";
import { ResearchContent } from "@/components/research";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import type { BlogPostMeta } from "@/lib/blog";

interface Research {
  title: string;
  href?: string;
  description: string;
  dates: string;
  technologies: string[];
}

interface ProjectData {
  title: string;
  href?: string;
  description: string;
  dates: string;
  technologies: string[];
  image?: string;
  video?: string;
  links?: { type: string; href: string; icon: string }[];
}

interface TabsSectionProps {
  blogPosts: BlogPostMeta[];
  research: Research[];
  projects: ProjectData[];
}

export function TabsSection({ blogPosts, research, projects }: TabsSectionProps) {
  return (
    <Tabs defaultValue="projects" className="max-w-4xl mx-auto">
      <TabsList className="mb-8">
        <TabsTrigger value="projects">projects</TabsTrigger>
        <TabsTrigger value="experience">experience</TabsTrigger>
        <TabsTrigger value="blog">blog</TabsTrigger>
        <TabsTrigger value="research">research</TabsTrigger>
      </TabsList>
      <TabsContent value="projects">
        <Projects projects={projects} />
      </TabsContent>
      <TabsContent value="experience">
        <ExperienceDemo />
      </TabsContent>
      <TabsContent value="blog">
        <BlogTabContent posts={blogPosts} />
      </TabsContent>
      <TabsContent value="research">
        <ResearchContent research={research} />
      </TabsContent>
    </Tabs>
  );
}
