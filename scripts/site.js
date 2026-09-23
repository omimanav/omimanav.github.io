// site.js — shared behaviour, loaded on every page.
//
// Right-click is blocked on <img> elements as light friction against
// casual "save image as..." — see the note in styles/gallery.css. This is
// NOT real protection: view-source, devtools, and screenshots still work.
// Dragging is blocked via the draggable="false" attribute on each <img>
// in the generated HTML, so it keeps working even if this script fails
// to load.

(function () {
	'use strict';

	document.addEventListener('contextmenu', function (e) {
		if (e.target && e.target.tagName === 'IMG') {
			e.preventDefault();
		}
	});
})();
