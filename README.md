# omimanav.com — build system

The menubar and the gallery sidebar used to be copy-pasted into 17 HTML files
by hand. Now they're generated from one data file, so there's exactly one
place to edit for routine changes.

```
_build/data.json      content: galleries, nav labels, about-page text, work links
_build/templates.js    structure: the actual HTML each piece renders as
_build/build.js        reads data.json, calls templates.js, writes the .html files
```

Every generated file has an `AUTO-GENERATED` comment at the top. Don't
hand-edit `index.html`, `work.html`, `about.html`, `sitemap.xml`, or any of
the gallery pages (`eu1.html`, `bdq.html`, etc.) — edits will be silently
overwritten the next time someone runs the build. Edit `data.json` or
`templates.js` instead.

## Running the build

```
node _build/build.js
```

(or `npm run build`, same thing.) Requires only Node's built-in `fs`/`path` —
no `npm install` needed. It rewrites the HTML files and `sitemap.xml` in
place, in the repo root.

## Adding photos to an existing gallery

1. Drop the new image files into `img/<folder>/`, continuing the existing
   numbering (e.g. if `eu1` currently ends at `eu26.jpg`, add `eu27.jpg`...
   wait — that folder's actually shared with `eu2`, see below. For most
   galleries it's simpler: `food5.jpg` → add `food6.jpg`, `food7.jpg`, etc.)
2. In `data.json`, bump that gallery's `"count"`.
3. Run the build.

Each gallery in `data.json` looks like this:

```json
{ "slug": "food", "pageTitle": "food", "navLabel": "fanamanga",
  "folder": "food", "prefix": "food", "ext": "jpg", "start": 0, "count": 6,
  "section": "other" }
```

Filenames are generated as `img/{folder}/{prefix}{start...start+count-1}.{ext}`
— so the above produces `food0.jpg` through `food5.jpg`. This only works if
your numbering has no gaps. `eu1`/`eu2` and `pek1`/`pek2` share one image
folder split across two pages by number range (`eu1` = eu0–eu26, `eu2` =
eu27–eu56) — if you add photos to one of those, watch the ranges don't
overlap.

## Adding a whole new gallery

1. Put the images in `img/<new-folder>/`.
2. Add a new object to the `galleries` array in `data.json`, anywhere in the
   list — order in the array is the order it appears in the sidebar.
   `"section": "travel"` puts it with the main list; `"section": "other"`
   puts it after the `<br>` break, with portraits/food.
3. Run the build. The new page (`<slug>.html`) is created automatically and
   every other page's sidebar updates to include it — that's the whole point
   of this system.

`slug` becomes the filename and URL, so keep it short, lowercase, and
URL-safe. The build script will refuse to run (with a clear error) if you
reuse a slug, leave a required field blank, or use a reserved name
(`index`/`work`/`about`).

## Editing the about page

`data.json`'s `about` object holds the bio line, email, and the work-history
list — edit those instead of `about.html`. The commented-out draft entries
(tech solutions manager, etc.) that were sitting inertly in the original
`about.html` are preserved as-is in `templates.js` (`renderAboutPage`,
`draftComment`) rather than turned into data, since they're disabled anyway —
move them into `data.json`'s `workHistory` array when you're ready to
publish them.

## Editing nav labels / menubar / page structure

That's `templates.js`, not `data.json`. `renderMenubar()` is now the single
copy of the top bar; `renderSidebar()` is the single copy of the gallery
list (it adds the `<hr>` to whichever link matches the current page — that's
the underline-as-"you are here" indicator, preserved from the original).

## What else changed, and why

**Mobile gallery navigation.** In the original, `.container { display: none }`
on mobile meant that once you were looking at a gallery, there was no way to
jump to a different one without backing out to `/work` first — the sidebar
was just gone. `gallery.css` now hides it behind a small toggle button
(bottom-right, only on mobile) that opens it as a full-screen drawer instead.
`work.html` keeps its original mobile behaviour unchanged (it already showed
the list directly, and there's no photo content competing for space there,
so there was nothing to fix).

**Lazy loading.** Every image except the first one in each gallery gets
`loading="lazy"`, so a phone on mobile data isn't fetching 30 full-size
photos it hasn't scrolled to yet.

**`apple-mobile-web-app-capable` and `theme-color`** are now on every page
(previously only on a few) — minor, but free.

**Image protection** (`draggable="false"` on every `<img>`, `user-select:
none` / `-webkit-touch-callout: none` in CSS, right-click blocked on images
via `scripts/site.js`) removes the one-tap/one-click ways to save a photo.
**It is not real protection** — anyone who wants a copy can still use
view-source, browser devtools, or a screenshot. If you want something that
actually deters reuse, the effective options are watermarking or serving
deliberately lower-resolution images, both of which are bigger changes than
what was asked for here and aren't done in this pass.

**`robots.txt`** allows normal search engines and disallows a list of known
AI-training crawlers (GPTBot, CCBot, ClaudeBot, Google-Extended,
Applebot-Extended, etc. — see the file for the full list). Each page's
`<meta name="robots">` now also includes `noai, noimageai`, an emerging
(not universally honored) convention specifically flagging images as
opted out of AI training. Both mechanisms are voluntary compliance —
reputable crawlers respect `robots.txt`, but nothing here can force
compliance from one that doesn't.

**`about.html`'s menubar links** were `href="work"` / `href="about"`
(relative) while every other page used `href="/work"` / `href="/about"`
(absolute) — harmless at the root of a domain, but inconsistent. Now all
generated pages use absolute paths.

**A gallery `<span>` id bug**: `bkk.html`'s gallery container had
`id="n-i"`, apparently left over from having been copied from `n-i.html`
as a starting point — it doesn't actually share anything with the te ika
gallery, and nothing in the CSS/JS reads that id currently, so it was a
harmless but confusing bug. All gallery span ids are now just the page's
own slug (`id="bkk"`, `id="eu1"`, etc.) — simple, unique by construction,
easy to reason about.

## `travels.html`

Left untouched, outside the generator, on purpose. Your source had both
`work.html` and `travels.html` — both reachable, but with meaningfully
different content (different nav labels, e.g. "河北省-01" vs "passing by-07";
a different science/links section entirely). Since every page's menubar
links to `/work`, not `/travels`, and every other page's sidebar uses
`work.html`'s label style, I treated `work.html` as the live page and left
`travels.html` alone rather than guess which content you actually want live.
If you want it gone, merged into `data.json`, or kept as a real
second page (I can template it too, same system), let me know — it's a
five-minute change either way now that the system exists.

## `sitemap.xml`

Regenerated for the pages this system manages, with today's date. Five URLs
from the old sitemap don't correspond to any file I was given
(`/duo/`, `/arinano/`, `/startpage/null/`, `/startpage/pt/`, `/upafterdark/`)
plus `/travels` — these are preserved with their original (2021) `lastmod`
rather than dropped, since I have no way to confirm whether they're still
live. The one clear cleanup: the old sitemap had `/work` listed twice
(once as `http://`, once as `https://`) and `/index` *and* `/index.html`
as separate entries from `/` — those duplicates are gone.

## Files intentionally left alone

- `styles/about.css`, `styles/work.css`, `styles/main.css` — no changes
  needed for anything that was asked.
- `scripts/jq.js` — not referenced by any page in the source I was given
  (no `<script src="scripts/jq.js">` anywhere), consistent with your note
  that scripts/styles might have unrelated files in them. Not included here;
  copy it back in from your existing repo if you actually need it for
  something else.
