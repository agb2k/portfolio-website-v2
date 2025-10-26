import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Reusable Section Component
 * 
 * Provides consistent spacing and structure for page sections
 * - Automatic padding and margins
 * - Optional title with proper heading hierarchy
 * - Flexible content area
 * - Responsive design considerations
 * 
 * @param id - Unique identifier for navigation/scrolling
 * @param title - Optional section title (renders as h2)
 * @param children - Section content
 * @param className - Additional CSS classes
 */
export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("mx-auto max-w-3xl px-4 py-16", className)}>
      {title && (
        <h2 className="text-2xl font-semibold tracking-tight mb-6">{title}</h2>
      )}
      {children}
    </section>
  );
}
