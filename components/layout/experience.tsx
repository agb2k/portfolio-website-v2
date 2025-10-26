"use client";

import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Experience } from "@/types";
import { EXPERIENCE_DATA } from "@/lib/constants";
import { useState } from "react";

/**
 * Individual experience item component
 * Handles logo loading with error fallback for better UX
 */
function ExperienceItem({ experience: exp }: { experience: Experience }) {
  // State to handle logo loading errors gracefully
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="flex gap-4">
      {/* Company logo with error handling */}
      {exp.logo && !logoError && (
        <div className="flex-shrink-0 w-12 h-12 relative">
          <Image
            src={exp.logo}
            alt={`${exp.company} logo`}
            fill
            className="rounded-lg object-contain"
            onError={() => setLogoError(true)}
            sizes="48px"
            style={{ maxWidth: '48px', maxHeight: '48px' }}
          />
        </div>
      )}
      
      {/* Experience details */}
      <div className="flex-1">
        <h3 className="font-semibold">{exp.role} — {exp.company}</h3>
        <p className="text-sm opacity-70">{exp.location} • {exp.period}</p>
        
        {/* Achievement bullets */}
        <ul className="mt-2 list-disc pl-5 space-y-1">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="text-sm opacity-90">{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 * Experience Section - Professional work history
 * Displays chronological work experience with company logos and achievements
 * Uses client-side rendering for image error handling
 */
export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        {EXPERIENCE_DATA.map((exp, index) => (
          <ExperienceItem 
            key={`${exp.company}-${exp.role}-${index}`} 
            experience={exp} 
          />
        ))}
      </div>
    </Section>
  );
}
