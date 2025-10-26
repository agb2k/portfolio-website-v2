import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SITE_CONFIG } from "@/lib/constants";
import { AppErrorBoundary } from "@/components/providers/error-boundary";

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AppErrorBoundary>
            {children}
          </AppErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
