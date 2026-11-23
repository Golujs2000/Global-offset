import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, '..', p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('../dist-ssr/entry-server.js');

const ROUTES = [
  '/',
  '/about',
  '/products',
  '/products/paper-printing',
  '/products/diary-printing',
  '/products/register-printing',
  '/products/exam-copy-printing',
  '/products/study-material-printing',
  '/products/bill-book-printing',
  '/products/receipt-book-printing',
  '/products/office-stationery',
  '/products/notebook-printing',
  '/products/commercial-printing',
  '/products/book-binding-services',
  '/gallery',
  '/contact'
];

console.log('⚡ Starting static prerendering for search engine crawler readiness...');

for (const url of ROUTES) {
  const helmetContext = {};
  const { html, helmet } = render(url, helmetContext);

  let pageHtml = template;

  // Clean out default placeholder title and description from raw template head
  pageHtml = pageHtml.replace(/<title>.*?<\/title>/i, '');
  pageHtml = pageHtml.replace(/<meta name="description" content=".*?" \/>/i, '');

  // Inject Helmet metadata directly into <head>
  if (helmet) {
    const headElements = [
      helmet.title?.toString(),
      helmet.meta?.toString(),
      helmet.link?.toString(),
      helmet.script?.toString()
    ].filter(Boolean).join('\n    ');

    pageHtml = pageHtml.replace('</head>', `    ${headElements}\n  </head>`);
  }

  // Inject prerendered markup into root div
  pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  const filePath = url === '/' 
    ? 'dist/index.html' 
    : `dist${url}/index.html`;

  const dir = path.dirname(toAbsolute(filePath));
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(toAbsolute(filePath), pageHtml, 'utf-8');
  console.log(`✓ Pre-rendered: ${url} -> ${filePath}`);
}

// Clean up temporary dist-ssr
fs.rmSync(toAbsolute('dist-ssr'), { recursive: true, force: true });
console.log('🎉 Prerendering complete! Every route is fully rendered with JSON-LD schema & crawlable content.');
