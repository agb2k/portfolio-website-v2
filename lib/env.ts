// Environment configuration
export const ENV = {
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || 'Abhinav George Basil',
  SITE_DESCRIPTION: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Backend engineer building scalable systems with Java, Spring Boot, Kafka, and AWS.',
  GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/agb2k',
  LINKEDIN_URL: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/in/agb2k',
  EMAIL: process.env.NEXT_PUBLIC_EMAIL || 'abhinav.basil@gmail.com',
  GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  VERCEL_ANALYTICS_ID: process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID,
} as const;

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
