# website-sofiekerkhove

Statische website (geen build-stap) voor Sofie Kerkhove, medisch pedicure in Wielsbeke.
Live: https://website-sofiekerkhove.vercel.app — push naar `main` = live (Vercel).

## Structuur
- `index.html` — de site (NL server-gerenderd; FR/EN/DE via de taalknop, `?lang=fr|en|de`)
- `css/site.css` — gedeelde stylesheet · `js/boot.js` + `js/site.js` — gedrag en vertalingen
- `fonts/` — zelf gehoste woff2 (Cormorant Garamond, Barlow, JetBrains Mono; SIL OFL)
- `privacy.html`, `voorwaarden.html`, `cookies.html`, `404.html` — noindex
- `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, `.well-known/ai.txt`, `ai/summary.json`
- `vercel.json` — cleanUrls, security headers, CSP (`script-src 'self'`, geen inline scripts)

## Bij een inhoudelijke wijziging
1. De FAQ staat op drie plaatsen en moet letterlijk gelijk blijven: zichtbaar in `index.html`,
   in de JSON-LD (`FAQPage`) en in `js/site.js` (`T.nl.faq` + `EXTRA.nl.faq_extra`).
2. Datum bijwerken op vier plaatsen: zichtbaar "Laatst bijgewerkt" (ook in `js/site.js`),
   `dateModified` in de JSON-LD, `lastmod` in `sitemap.xml`, en de AI-bestanden.
3. Geen inline `<script>` toevoegen: de CSP laat alleen bestanden van de eigen host toe.
4. Controle: `audit.mjs index.html` en `site-audit.mjs .` (SMSAK v5.5).

Regels: `* text=auto eol=lf` (.gitattributes). `*.md` wordt niet gepubliceerd (.vercelignore).
