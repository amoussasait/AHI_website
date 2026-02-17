# AHI Data Centre Website - Deployment Guide

## Production Deployment

### Prerequisites
- Node.js 18+ installed
- Vercel account (recommended for deployment)
- GitHub repository connected

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

\`\`\`bash
cp .env.example .env.local
\`\`\`

Required variables:
- `NEXT_PUBLIC_SITE_URL`: Your production domain
- `NEXT_PUBLIC_GA_ID`: Google Analytics ID (if using)
- `NEXT_PUBLIC_CONTACT_EMAIL`: Contact email address

### Build & Deploy

#### Local Build
\`\`\`bash
npm run build
npm run start
\`\`\`

#### Vercel Deployment
\`\`\`bash
vercel --prod
\`\`\`

### Performance Optimization

1. **Lighthouse Audit**
   \`\`\`bash
   npm run build
   npx lighthouse https://your-domain.com --view
   \`\`\`

2. **Core Web Vitals**
   - Monitor in Vercel Analytics dashboard
   - Target: Green metrics across all pages

3. **Image Optimization**
   - All images use Next.js Image component
   - Automatic AVIF/WebP conversion
   - Proper sizing and lazy loading

### SEO Verification

1. **Google Search Console**
   - Submit sitemap: `/sitemap.xml`
   - Monitor indexing status
   - Check for crawl errors

2. **Open Graph Testing**
   - Test with [og-image.xyz](https://og-image.xyz)
   - Verify Twitter cards
   - Check LinkedIn preview

3. **Structured Data**
   - Validate with [Schema.org validator](https://validator.schema.org/)
   - Check Organization and LocalBusiness schemas

### Monitoring & Analytics

1. **Vercel Analytics**
   - Web Analytics enabled
   - Speed Insights enabled
   - Monitor real-time metrics

2. **Google Analytics**
   - Set up GA4 property
   - Configure conversion tracking
   - Create custom dashboards

3. **Error Tracking**
   - Monitor error logs
   - Set up alerts for critical errors
   - Review error boundary logs

### Security Checklist

- [ ] HTTPS enabled
- [ ] Security headers configured (already in next.config.mjs)
- [ ] CSP policy validated
- [ ] No sensitive data in client bundle
- [ ] API routes protected if needed
- [ ] CORS policies configured

### Performance Checklist

- [ ] Images optimized and lazy-loaded
- [ ] CSS and JS minified
- [ ] Cache headers configured
- [ ] CDN caching enabled
- [ ] Font loading optimized
- [ ] Third-party scripts deferred

### Accessibility Checklist

- [ ] WCAG 2.1 Level AA compliance
- [ ] Keyboard navigation tested
- [ ] Screen reader compatibility verified
- [ ] Color contrast ratios verified
- [ ] Alt text on all images
- [ ] Accessibility statement published

### Post-Deployment

1. Update social media links in footer components
2. Configure email service for contact forms
3. Set up monitoring alerts
4. Document any custom configurations
5. Create runbook for common issues

## Troubleshooting

### Build Failures
\`\`\`bash
rm -rf .next node_modules
npm install
npm run build
\`\`\`

### Performance Issues
- Check Vercel Analytics for bottlenecks
- Review image optimization
- Analyze bundle size: `npm run analyze`

### SEO Issues
- Verify robots.txt and sitemap
- Check meta tags with browser DevTools
- Test with Google's Mobile-Friendly Test

## Support

Contact: info@havenzcorp.com
