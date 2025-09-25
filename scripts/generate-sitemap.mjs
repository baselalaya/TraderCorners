import { writeFileSync } from 'node:fs';
import { SITE, SEO_DATA } from '../client/src/seo/seo-data.ts';

const pages = Object.values(SEO_DATA);

const urls = pages.map(p => ({
  loc: new URL(p.path, SITE.baseUrl).toString(),
  changefreq: 'weekly',
  priority: p.path === '/' ? '1.0' : '0.8',
}));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>\n    <loc>${u.loc}</loc>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`).join('\n')}
</urlset>\n`;

// Output to public so it gets served statically
writeFileSync('public/sitemap.xml', xml, 'utf8');
console.log('Generated public/sitemap.xml with', urls.length, 'URLs');

