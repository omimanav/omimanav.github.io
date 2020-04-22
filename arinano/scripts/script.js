window.onload = function () {
	document.getElementsByTagName("hr")[0].style.width = "70vw";
	document.getElementById("menu").style.width = "65vw";
	document.getElementById("mainTitle").style.opacity = "1";
	document.getElementById("aboutTitle").style.opacity = "1";
	document.getElementById("artTitle").style.opacity = "1";
}

function showArt() {
	document.getElementById("container").innerHTML = "";
	for (let i=0; i<10;i++) {
		document.getElementById("container").innerHTML += 
			`<span class="art" style="background-image: url(img/${i}.png)">
				<img onmouseover="this.style.opacity=1;" onmouseout="this.style.opacity=0;" style="background-image: url(img/${i}-hover.png);" class="artImage" src="img/placeholder.png"/>
			</span>`;
	}
}

function showAbout() {
	document.getElementById("container").style.display = "none";
	document.getElementById("container").style.display = "grid";
	document.getElementById("container").innerHTML = `<span class="about" id="iris">French-Canadian illustrator inspired by anime/manga, retro-culture, silly patterns and neon colors.<br>Currently based in Québec.</span>
	<span class="about" id="contact"><br>Instagram: <a href="https://instagram.com/arinanodraws">@arinanodraws</a><br>email: <a href="mailto:arinanocontact@gmail.com">arinanocontact@gmail.com</a></span>`;
}