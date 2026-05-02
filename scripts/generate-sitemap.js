import { writeFileSync } from 'fs';
import { projects } from '../src/data/projects.js';

const baseUrl = 'https://isnehamanandhar.com.np';
const currentDate = new Date().toISOString().split('T')[0];

const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/works', priority: '0.9', changefreq: 'weekly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
];

// Add project pages
const projectUrls = projects.map(project => ({
  url: `/works/${project.slug}`,
  priority: '0.8',
  changefreq: 'monthly',
}));

const allUrls = [...pages, ...projectUrls];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(({ url, priority, changefreq }) => `
  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('')}
</urlset>`;

writeFileSync('public/sitemap.xml', sitemap);
console.log('✅ Sitemap generated!');