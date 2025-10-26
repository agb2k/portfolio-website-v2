import { Hero } from "@/components/layout/hero";
import { About } from "@/components/layout/about";
import { ExperienceSection } from "@/components/layout/experience";
import { Projects } from "@/components/layout/projects";
import { Contact } from "@/components/layout/contact";

/**
 * Main Portfolio Page
 * 
 * This is the single-page application structure that showcases:
 * - Component composition and organization
 * - Proper import/export patterns
 * - Semantic HTML structure with main element
 * - Logical content flow (Hero → About → Experience → Projects → Contact)
 * 
 * Each section is a separate component for maintainability and reusability
 */
export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <ExperienceSection />
      <Projects />
      <Contact />
    </main>
  );
}
