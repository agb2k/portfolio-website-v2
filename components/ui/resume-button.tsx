import Link from "next/link";

/**
 * Resume Button Component
 * 
 * Demonstrates:
 * - Next.js Link component for client-side navigation
 * - External PDF handling with proper attributes
 * - Accessibility considerations (target="_blank", rel="noopener noreferrer")
 * - Consistent styling with design system
 * - Icon usage for visual clarity
 */
export function ResumeButton() {
  return (
    <Link
      href="/Abhinav_George_Basil_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium hover:shadow transition"
      aria-label="View resume in new tab"
    >
      👁️ View Resume
    </Link>
  );
}
