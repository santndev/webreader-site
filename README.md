# WebReader SEO landing page

Static, bilingual WebReader product site. It has no analytics JavaScript, external fonts, runtime API, or paid service dependency.

## Publishing target

The canonical URLs and sitemap are prepared for `https://santndev.github.io/webreader-site/`. To retain the zero-cost plan on GitHub Free, publish these files as the entire contents of a **separate public** repository named `santndev/webreader-site`. Do not make the private app repository public and do not copy app source into the site repository. GitHub Pages on GitHub Free requires a public repository; the published page and the repository contents will be public.

The included Actions workflow publishes the repository root to GitHub Pages when `main` is updated. After creating the repository, enable Pages with GitHub Actions as the build and deployment source, push these site files to `main`, and wait for the Pages workflow to finish. No custom domain or paid plan is required.

## Google Search Console

Once the site is live:

1. Add the URL-prefix property `https://santndev.github.io/webreader-site/` to the signed-in Search Console account.
2. Verify ownership with the HTML file or meta tag supplied by Search Console; put the exact verification token at the site root and redeploy.
3. Submit `https://santndev.github.io/webreader-site/sitemap.xml`.
4. Inspect the Vietnamese and English canonical URLs and request indexing.
5. Review impressions, clicks, queries, and indexed-page status after Google has recrawled the pages.

The existing `tripslay.com` Search Console property is for the travel site. It can be filtered by URL path, but this independent property gives WebReader a clearer baseline.

## Content and measurement

- Vietnamese is the root page; English is at `/en-us/`.
- `hreflang`, canonical URLs, Open Graph cards, `robots.txt`, XML sitemap, and `SoftwareApplication` JSON-LD are included.
- Play links use distinct `utm_source`, `utm_campaign`, and `utm_content` referrer values so Android Play acquisition reports can distinguish page and CTA traffic.
- The page discloses ads, in-app purchases, device TTS voice availability, extraction limits, and the privacy policy.
- Change the repository name only if canonical URLs, locale links, sitemap, robots file, and structured data are updated together.

## Assets

Screenshots and feature graphics are copied from the already-public Google Play asset set under `store-assets/final/polished` and `store-assets/final/common`.
