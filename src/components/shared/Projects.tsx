"use client";
import data from "@/data/data.json";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#F9FAFB] dark:bg-[#141421]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex gap-2 justify-center items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-[0_0_10px_rgba(156,163,175,0.8)]">
                Projects
              </h2>
              <div className="w-16 h-0.5 mx-auto mt-2 bg-gray-200 drop-shadow-[0_0_6px_rgba(156,163,175,0.8)] rounded-full" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full place-content-center mx-auto">
        {Object.entries(data.projects).map(([category, projects]) =>
          projects.map((project, index) => (
            <ProjectCard key={`${category}-${index}`} project={project} />
          ))
        )}
      </div>
      </div>
    </section>
  );
}
