'use strict';

const fs = require('fs');
const path = require('path');
const templates = require('./templates.js');

const ROOT = path.join(__dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8'));

// --- sanity checks (fail fast on data-entry mistakes) -----------------------
function fail(msg) {
	console.error(`\n[build] ERROR: ${msg}\n`);
	process.exit(1);
}

const seenSlugs = new Set();
data.galleries.forEach((g) => {
	['slug', 'pageTitle', 'navLabel', 'folder', 'prefix', 'ext', 'section'].forEach((key) => {
		if (!g[key]) fail(`gallery "${g.slug || '?'}" is missing required field "${key}"`);
	});
	if (seenSlugs.has(g.slug)) fail(`duplicate gallery slug "${g.slug}" — slugs must be unique (they become filenames)`);
	seenSlugs.add(g.slug);
	if (!Number.isInteger(g.count) || g.count < 1) fail(`gallery "${g.slug}" has an invalid count (${g.count}) — must be a positive integer`);
	if (!Number.isInteger(g.start) || g.start < 0) fail(`gallery "${g.slug}" has an invalid start (${g.start}) — must be 0 or greater`);
	if (/[\\/\s]/.test(g.slug)) fail(`gallery slug "${g.slug}" contains a space or slash — slugs must be safe filenames`);
});
const RESERVED = new Set(['index', 'work', 'about']);
data.galleries.forEach((g) => {
	if (RESERVED.has(g.slug)) fail(`gallery slug "${g.slug}" collides with a reserved page name`);
});

// --- write helper -------------------------------------------------------
let written = 0;
function write(relPath, contents) {
	const full = path.join(ROOT, relPath);
	fs.mkdirSync(path.dirname(full), { recursive: true });
	fs.writeFileSync(full, contents, 'utf8');
	written++;
}

// --- generate pages -------------------------------------------------------
const gaId = data.site.gaId;

write('index.html', templates.renderIndexPage(gaId));
write('work.html', templates.renderWorkPage(data.galleries, data.workLinks, gaId));
write('about.html', templates.renderAboutPage(data.about, gaId));

data.galleries.forEach((g) => {
	write(`${g.slug}.html`, templates.renderGalleryPage(g, data.galleries, gaId));
});

// --- sitemap ----------------------------------------------------------
// URLs from the previous sitemap that don't correspond to a source file we
// were given — preserved untouched rather than silently dropped.
const preservedSitemapEntries = [
	{ loc: 'https://omimanav.com/travels', lastmod: '2021-04-18T17:53:44.1741285+02:00' },
	{ loc: 'https://omimanav.com/duo/', lastmod: '2021-04-18T17:53:44.1741285+02:00' },
	{ loc: 'https://omimanav.com/arinano/', lastmod: '2021-04-18T17:53:44.1741285+02:00' },
	{ loc: 'https://omimanav.com/startpage/null/', lastmod: '2021-04-18T17:53:44.1741285+02:00' },
	{ loc: 'http://omimanav.com/startpage/pt/', lastmod: '2021-04-18T17:53:44.1741285+02:00' },
	{ loc: 'http://omimanav.com/upafterdark/', lastmod: '2021-04-18T17:53:44.1741285+02:00' }
];
const today = new Date().toISOString().slice(0, 10);
write('sitemap.xml', templates.renderSitemap(data.site.baseUrl, data.galleries, today, preservedSitemapEntries));

console.log(`[build] wrote ${written} files to ${ROOT}`);
console.log(`[build] galleries: ${data.galleries.length}, total photos referenced: ${data.galleries.reduce((s, g) => s + g.count, 0)}`);
