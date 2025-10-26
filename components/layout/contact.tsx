import { Github, Linkedin, Mail } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SOCIAL_LINKS } from "@/lib/constants";

/**
 * Contact Section - Social links and contact information
 * 
 * Demonstrates:
 * - Icon usage with Lucide React
 * - External link handling with proper attributes
 * - Accessibility considerations (target="_blank", rel="noopener noreferrer")
 * - Responsive design with hover states
 */
export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="space-y-4">
        {/* Email contact */}
        <a 
          className="flex items-center gap-3 text-lg hover:opacity-80 transition" 
          href={`mailto:${SOCIAL_LINKS.email}`}
          aria-label="Send email"
        >
          <Mail className="w-5 h-5" />
          {SOCIAL_LINKS.email}
        </a>
        
        {/* GitHub profile */}
        <a 
          className="flex items-center gap-3 text-lg hover:opacity-80 transition" 
          href={SOCIAL_LINKS.github} 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View GitHub profile"
        >
          <Github className="w-5 h-5" />
          GitHub
        </a>
        
        {/* LinkedIn profile */}
        <a 
          className="flex items-center gap-3 text-lg hover:opacity-80 transition" 
          href={SOCIAL_LINKS.linkedin} 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View LinkedIn profile"
        >
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </a>
      </div>
    </Section>
  );
}
