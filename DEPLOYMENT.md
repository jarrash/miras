# Deployment Guide - MIRAS Podcast Website

## Cloudflare Pages Deployment

This guide walks through deploying the MIRAS podcast website to Cloudflare Pages.

## Prerequisites

- Cloudflare account (free or paid)
- GitHub repository with this code
- Domain (optional, Cloudflare provides free `*.pages.dev` subdomain)

## Step 1: Connect Repository to Cloudflare

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select **Pages** from the left sidebar
3. Click **Create a project**
4. Select **Connect to Git**
5. Authorize Cloudflare to access your GitHub account
6. Select the `jarrash/miras` repository

## Step 2: Configure Build Settings

When prompted to configure your build, enter:

| Field | Value |
|-------|-------|
| **Framework preset** | None |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Environment variables** | (leave empty) |

## Step 3: Environment Variables (Optional)

If you need environment variables (e.g., for CMS API keys), add them:

1. In your project settings → **Environment variables**
2. Add variables as needed (currently none required)
3. Rebuild if you add new variables

## Step 4: Connect Custom Domain (Optional)

### Using Cloudflare Nameservers

1. In **Project settings** → **Custom domains**
2. Click **Add custom domain**
3. Enter your domain (e.g., `podcast.example.com`)
4. Update your domain registrar to use Cloudflare nameservers
5. Wait for DNS propagation (usually 24 hours)

### Using CNAME (Without Changing Nameservers)

1. In **Project settings** → **Custom domains**
2. Click **Add custom domain**
3. Create a CNAME record at your registrar pointing to the Cloudflare Pages URL
4. Example:
   ```
   podcast.example.com  CNAME  miras.pages.dev
   ```

## Step 5: Automatic Deployments

Every push to the `claude/cloudflare-pages-deploy-x0xo3a` branch automatically triggers a deployment:

```bash
# Development
git checkout -b your-feature
# Make changes...
git add .
git commit -m "Your changes"
git push origin your-feature

# Deploy to production
git checkout claude/cloudflare-pages-deploy-x0xo3a
git merge your-feature
git push origin claude/cloudflare-pages-deploy-x0xo3a
```

Cloudflare will:
1. Clone your repository
2. Run `npm install`
3. Run `npm run build`
4. Deploy files from `/out` directory
5. Provide a deployment URL in Cloudflare Dashboard

## Step 6: Monitor Deployments

1. Go to your project in Cloudflare Pages
2. Click **Deployments** tab
3. View:
   - Build status (pending, building, succeeded, failed)
   - Build logs
   - Deployment URL
   - Git branch/commit

### View Build Logs

Click on any deployment to see:
- `npm install` output
- `npm run build` output
- File list deployed
- Any errors or warnings

## Step 7: SSL/TLS Certificate

Cloudflare automatically provides:
- **Free SSL/TLS certificate** (Universal)
- HTTPS enabled by default
- Automatic renewal
- HTTP → HTTPS redirect (configured via **Settings**)

## Troubleshooting

### Build Failing

**Error**: `npm ERR! code ERESOLVE`

**Solution**: Add `.npmrc` with `legacy-peer-deps=true` (already included)

---

**Error**: `TypeError: Cannot find module '@next/react-dev-overlay'`

**Solution**: Ensure `next` is in `package.json` dependencies:
```bash
npm install next@latest react react-dom
```

---

### Site Not Loading

1. **Check deployment status** in Cloudflare Dashboard
2. **Clear browser cache**: Ctrl+Shift+Delete (Chrome) or Cmd+Shift+Delete (Mac)
3. **Test URL**: `https://<project>.pages.dev/`
4. **Check console errors**: Right-click → Inspect → Console tab

### Domain Not Resolving

1. Verify CNAME or nameservers are correct
2. Wait for DNS propagation: `nslookup podcast.example.com` (Mac/Linux)
3. In Cloudflare: Settings → **Zone settings** → Check nameservers

### Site is Slow

1. **Enable caching rules** in Cloudflare:
   - Settings → **Caching** → Set to "Cache Everything"
   - Rules → **Page Rules** → Add cache rules for `/assets/*`

2. **Enable compression**:
   - Settings → **Speed** → Enable Brotli compression

3. **Enable image optimization**:
   - Settings → **Image Optimization** → Enable Polish

## Local Testing Before Deployment

```bash
# Build locally
npm run build

# Test production build
npm start

# Should run on http://localhost:3000
```

## File Structure After Build

The `/out` directory contains:

```
out/
├── index.html          # Home page
├── blog/
│   └── index.html      # Blog listing
├── contact/
│   └── index.html      # Contact form
├── guest/
│   └── index.html      # Guest application
├── privacy/
│   └── index.html      # Privacy policy
├── consent/
│   └── index.html      # Consent management
├── terms/
│   └── index.html      # Terms and conditions
├── _next/              # Next.js runtime assets
│   ├── static/         # JS/CSS bundles
│   ├── data/           # ISR data
│   └── image/          # Optimized images
├── assets/             # Static files
│   ├── fonts/          # Thmanyah fonts
│   ├── img/            # Photos
│   └── *.png           # Logos
└── _not-found.html     # 404 fallback
```

## Performance Monitoring

### Check PageSpeed Insights

1. Build and deploy (or test locally with `npm start`)
2. Go to [PageSpeed Insights](https://pagespeed.web.dev/)
3. Enter your URL: `https://podcast.example.com`
4. View metrics:
   - **Largest Contentful Paint (LCP)**: Target < 2.5s
   - **First Input Delay (FID)**: Target < 100ms
   - **Cumulative Layout Shift (CLS)**: Target < 0.1

### Web Vitals

The site is optimized for:
- Fast static HTML rendering
- Minimal JavaScript (only for interactivity)
- Optimized font loading with `font-display: swap`
- Efficient image format (JPG/PNG)

## Rollback

If a deployment fails:

1. Go to **Deployments** in Cloudflare Pages
2. Find the last successful deployment
3. Click **Rollback**
4. Confirm to revert to that version

## Environment-Specific Deployments

To deploy to different environments (staging, production):

1. Create separate branches:
   - `production` → deploys to `production-*.pages.dev`
   - `staging` → deploys to `staging-*.pages.dev`

2. In Cloudflare, create separate projects for each

3. Use different custom domains for each environment

## Database/CMS Integration

Currently, the site uses static data in `lib/design-tokens.ts`. To connect a CMS:

### Strapi Example

```typescript
// lib/api.ts
export async function getEpisodes() {
  const res = await fetch(
    `${process.env.STRAPI_URL}/api/episodes?populate=*`,
    { cache: 'no-store' }
  );
  return res.json();
}
```

Then in your component:

```typescript
import { getEpisodes } from '@/lib/api';

export default async function EpisodesSection() {
  const data = await getEpisodes();
  // Render data...
}
```

## Analytics

Add analytics to track visits:

### Google Analytics

Add to `app/layout.tsx`:

```typescript
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=GA_ID`}
/>
<script>
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
  `}
</script>
```

## Support

- **Cloudflare Status**: [status.cloudflare.com](https://status.cloudflare.com)
- **Documentation**: [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)
- **Community**: [Discord](https://discord.gg/cloudflaredev)

---

**Next Steps**: After deployment, test all pages and forms, then consider:
1. Adding real analytics
2. Connecting to email provider for newsletter
3. Adding blog CMS
4. Setting up redirect rules
