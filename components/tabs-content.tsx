"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Projects } from "@/components/projects";
import { ExperienceDemo } from "@/components/experience";
import { BlogTabContent } from "@/components/blog-tab-content";
import { ResearchContent } from "@/components/research";

const tabs = [
  { id: "projects", label: "projects" },
  { id: "experience", label: "experience" },
  { id: "blog", label: "blog" },
  { id: "research", label: "research" },
];

export function TabsContent() {
  const [activeTab, setActiveTab] = useState("projects");

  const renderContent = () => {
    switch (activeTab) {
      case "projects":
        return <Projects />;
      case "experience":
        return <ExperienceDemo />;
      case "blog":
        return <BlogTabContent />;
      case "research":
        return <ResearchContent />;
      default:
        return <Projects />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Tabs Navigation */}
      <div className="flex gap-6 mb-8 border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative pb-3 text-sm font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? "text-white"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {renderContent()}
      </motion.div>
    </div>
  );
}
