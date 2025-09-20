import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Heading, Paragraph } from "../ui/typography";
import { Github } from "@/svgs/Icons";
import { LiveLabel, InProgressLabel } from "@/components/shared";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  images: string[];
  status: "Live" | "In Progress" | "Planned" | string; // Allow any string for flexibility
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <>
      <div className="relative bg-white dark:bg-gray-900 shadow-md overflow-hidden transition-transform duration-300  hover:shadow-xl max-w-md w-full rounded-b-4xl rounded-t-[10px]">
        <Dialog>
          {/* Make the existing image clickable */}
          <DialogTrigger asChild>
            <div className="relative w-full h-48 cursor-pointer">
              <Image
                src={project.images[0]}
                alt={`${project.title} thumbnail`}
                fill
                className="object-cover w-full h-full"
              />
              <span className="absolute top-2 right-3">
                {project.status === "Live" ? (
                  <LiveLabel />
                ) : (
                  <InProgressLabel />
                )}
              </span>
            </div>
          </DialogTrigger>

          {/* Dialog content showing only the image */}
          <DialogContent showCloseButton={false} className="w-full h-full max-h-[90vh] overflow-y-auto">
            {/* Custom close button (white, visible on dark mode) */}
            <DialogClose className="absolute top-3 right-3 text-white text-2xl z-10">
              X
            </DialogClose>
            <div className="w-full h-full relative">
              <Image
                src={project.images[0]}
                alt={`${project.title} full view`}
                fill
                className="object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>

        <div className="p-4 md:p-6">
          <Heading level="h3" className="text-light font-bold text-lg mb-2">
            {project.title}
          </Heading>
          <Paragraph className="text-light-muted text-sm mb-4">
            {project.description}
          </Paragraph>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-[#f97316]/10 text-[#f97316] dark:bg-[#f97316]/20 dark:text-[#f97316] rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Button className="flex items-center gap-2 bg-[#f97316] hover:bg-[#e06b15] text-white dark:bg-[#f97316] dark:hover:bg-[#e06b15]">
                <Github size={16} className="text-white" />
                GitHub
              </Button>
            </a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <Button className="flex items-center gap-2 bg-transparent border border-[#f97316] text-[#f97316] hover:bg-[#f97316]/10">
                  Demo
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
