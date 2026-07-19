// site.js — shared behaviour, loaded on every page.
//
// Two independent things happen here:
//  1. On mobile gallery pages, #navToggle opens/closes the gallery list drawer.
//     No-ops on pages that don't have both elements (about/index/work).
//  2. Right-click is blocked on <img> elements as light friction against
//     casual "save image as..." — see the note in styles/gallery.css. This is
//     NOT real protection: view-source, devtools, and screenshots still work.
//     Dragging is blocked via the draggable="false" attribute on each <img>
//     in the generated HTML, so it keeps working even if this script fails
//     to load.

(function () {
	'use strict';

	var toggle = document.getElementById('navToggle');
	var art = document.getElementById('art');

	if (toggle && art) {
		toggle.addEventListener('click', function () {
			var isOpen = art.classList.toggle('nav-open');
			document.body.classList.toggle('nav-open', isOpen);
			toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
			toggle.textContent = isOpen ? '\u2715' : '\u2630';
		});
	}

	document.addEventListener('contextmenu', function (e) {
		if (e.target && e.target.tagName === 'IMG') {
			e.preventDefault();
		}
	});
})();
