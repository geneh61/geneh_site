"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { type Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      className="glass-card flex h-full flex-col overflow-hidden rounded-lg"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-grow flex-col p-6">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-2 flex-grow text-gray-300">{project.description}</p>
        <div className="my-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-gray-800 px-2 py-1 text-xs text-gray-300 rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 transition-colors hover:text-accent-teal">
              <ExternalLink size={20} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 transition-colors hover:text-accent-teal">
              <Github size={20} />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;