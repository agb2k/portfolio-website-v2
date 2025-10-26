import { Section } from "@/components/ui/section";
import { PROFILE_DATA } from "@/lib/constants";

/**
 * About Section - Brief introduction and skills
 * Shows who you are and what technologies you work with
 */
export function About() {
  return (
    <Section id="about" title="About">
      <p className="opacity-90">
        Software Engineer at MoneyLion, specializing in fintech solutions and distributed systems architecture. 
        Based in {PROFILE_DATA.location}, I design and scale high-performance systems handling millions of transactions monthly. 
        Passionate about microservices, event-driven architecture, machine learning integration, and building robust, scalable backend solutions.
      </p>
      
      {/* Skills tags - visual representation of technical stack */}
      <ul className="mt-4 flex flex-wrap gap-2">
        {PROFILE_DATA.skills.map((skill) => (
          <li key={skill} className="rounded-lg border px-2 py-1 text-xs">
            {skill}
          </li>
        ))}
      </ul>
    </Section>
  );
}
