import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ResumeButton } from "@/components/ui/resume-button";
import { Section } from "@/components/ui/section";
import { PROFILE_DATA } from "@/lib/constants";

/**
 * Hero Section - Main landing area with profile info and photo
 * This is the first thing visitors see when they land on the site
 */
export function Hero() {
  return (
    <Section id="home">
      {/* Theme toggle in top right */}
      <div className="flex items-center justify-between mb-6">
        <div />
        <ThemeToggle />
      </div>
      
      {/* Main hero content - profile info and photo */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left side - text content */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold">{PROFILE_DATA.name}</h1>
          <p className="mt-2 text-lg">{PROFILE_DATA.headline}</p>
          <p className="mt-3 text-sm opacity-80">{PROFILE_DATA.tagline}</p>
          <div className="mt-6">
            <ResumeButton />
          </div>
        </div>
        
        {/* Right side - profile photo */}
        <div className="flex-shrink-0">
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            <Image
              src="/abhinav-photo.jpg"
              alt="Abhinav George Basil"
              fill
              className="rounded-full object-cover border-4 border-gray-200 dark:border-gray-700"
              priority // Load this image immediately since it's above the fold
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
