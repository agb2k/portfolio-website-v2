"use client";

import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Project } from "@/types";
import { PROJECTS_DATA } from "@/lib/constants";
import { useState } from "react";

/**
 * Projects Section - Portfolio project showcase
 * 
 * Demonstrates:
 * - Grid layout with responsive design
 * - Conditional rendering (link vs placeholder)
 * - Dynamic styling with Tailwind
 * - Type-safe data mapping
 * - Accessibility with proper link attributes
 */
function ProjectCard({ project }: { project: Project }) {
  const [logoError, setLogoError] = useState(false);

  // Generate initials from company name as fallback
  const getInitials = (company: string) => {
    return company
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const cardContent = (
    <>
      {/* Company logo and project header */}
      <div className="flex items-start gap-3 mb-3">
        {project.logo ? (
          !logoError ? (
            <div className="flex-shrink-0 w-8 h-8 relative">
              <Image
                src={project.logo}
                alt={`${project.company} logo`}
                fill
                className="rounded object-contain"
                onError={() => setLogoError(true)}
                onLoadingComplete={() => {}}
                sizes="32px"
                unoptimized
              />
            </div>
          ) : (
            <div className="flex-shrink-0 w-8 h-8 rounded bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-[10px] font-semibold text-gray-600 dark:text-gray-300">
                {getInitials(project.company)}
              </span>
            </div>
          )
        ) : (
          <div className="flex-shrink-0 w-8 h-8 rounded bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-[10px] font-semibold text-gray-600 dark:text-gray-300">
              {getInitials(project.company)}
            </span>
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-medium">{project.name}</h3>
          <p className="text-xs opacity-70">{project.company}</p>
        </div>
        {!project.link && (
          <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md">
            Professional Work
          </span>
        )}
      </div>
      
      <p className="text-sm opacity-80 mb-3">{project.description}</p>
      
      {/* Technology stack tags */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="rounded-md border px-2 py-0.5 text-xs">
            {tech}
          </span>
        ))}
      </div>
    </>
  );

  // If project has a link, render as clickable card
  if (project.link) {
    return (
      <a
        href={project.link}
        className="rounded-xl border p-4 hover:shadow transition block"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.name} project`}
      >
        {cardContent}
      </a>
    );
  }
  
  // If no link, render as non-clickable card
  return (
    <div className="rounded-xl border p-4 bg-gray-50 dark:bg-gray-900">
      {cardContent}
    </div>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}
