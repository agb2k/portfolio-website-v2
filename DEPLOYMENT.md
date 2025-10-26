# Vercel Deployment Guide

This guide covers deploying your portfolio to Vercel with proper configuration.

## 🚀 Quick Deploy to Vercel

### Option 1: Vercel CLI (Fastest)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Option 2: GitHub Integration (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Configure environment variables (optional)
5. Deploy!

### Environment Variables (Optional)
Set these in Vercel dashboard:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SITE_NAME="Your Name"
NEXT_PUBLIC_SITE_DESCRIPTION="Your description"
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourprofile
NEXT_PUBLIC_EMAIL=your.email@example.com
```

## 🔧 Pre-deployment Checklist

- [ ] Test locally: `npm run dev`
- [ ] Build successfully: `npm run build`
- [ ] Lint passes: `npm run lint`
- [ ] Type check passes: `npm run type-check`
- [ ] All images load correctly
- [ ] Resume PDF accessible
- [ ] Social links work
- [ ] Theme toggle functions
- [ ] Mobile responsive

## 🛠 Development Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run start           # Start production server

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues
npm run type-check      # TypeScript check
npm run format          # Format with Prettier
npm run format:check    # Check formatting

# Analysis
npm run analyze         # Bundle analysis
npm run clean           # Clean build files
npm run deploy          # Deploy to Vercel
```

## 📊 Performance Optimization

The project includes several optimizations:

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Static Generation**: Pre-rendered pages
- **Caching**: Proper cache headers for static assets
- **Bundle Analysis**: Use `npm run analyze`

## 🔍 Troubleshooting

### Build Errors
- Check TypeScript errors: `npm run type-check`
- Verify all imports are correct
- Ensure all required files exist

### Runtime Errors
- Check browser console
- Verify environment variables
- Test error boundary functionality

### Performance Issues
- Run bundle analysis: `npm run analyze`
- Check image sizes and formats
- Verify caching headers

## 📈 Monitoring

Consider adding:
- **Vercel Analytics**: Built-in performance monitoring
- **Google Analytics**: User behavior tracking
- **Sentry**: Error monitoring and reporting

## 🔄 CI/CD Pipeline

The project includes GitHub Actions workflow (`.github/workflows/deploy.yml`):

1. **Build & Test**: Runs on every PR
2. **Deploy**: Automatically deploys main branch to Vercel

Required secrets:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## 🎯 Vercel Features Used

- **Automatic HTTPS**: Secure by default
- **Global CDN**: Fast loading worldwide
- **Preview Deployments**: Test changes before going live
- **Custom Domains**: Easy DNS setup
- **Analytics**: Built-in performance monitoring
- **Edge Functions**: Serverless capabilities (if needed)
