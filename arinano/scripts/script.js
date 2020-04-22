window.onload = function () {
	document.getElementById("mainTitle").style.opacity = "1";
	document.getElementById("aboutTitle").style.opacity = "1";
	document.getElementById("artTitle").style.opacity = "1";
}

const aboutText = `
	<span class="about" id="iris">French-Canadian illustrator inspired by anime/manga, retro-culture, silly patterns and neon colors.<br>Currently based in Québec.</span>
	<span class="about" id="contact"><br>Instagram: <a href="https://instagram.com/arinanodraws">@arinanodraws</a><br>email: <a href="mailto:arinanocontact@gmail.com">arinanocontact@gmail.com</a></span>
	`;

if (window.innerWidth >= 900) {
	document.getElementsByTagName("hr")[0].style.width = "70vw";
	document.getElementById("menu").style.width = "65vw";
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
		document.getElementById("container").innerHTML = aboutText;
	}
	console.log("Hi");
} else {
	setTimeout(() => {
		document.getElementById("menu").style.opacity = "1";
	} ,1000);
	function showArt() {
		document.getElementById("mainTitle").style.fontSize = "10vmin";
		document.getElementById("mainTitle").style.paddingLeft = "0";
		document.getElementById("mainTitle").style.paddingRight = "0";
		document.getElementById("mainTitle").style.paddingTop = "5vmin";
		document.getElementById("artTitle").style.display = "none";
		document.getElementById("aboutTitle").style.display = "none";
		document.getElementById("menu").style.height = "15vh";
		
		document.getElementById("container").innerHTML = "";
		document.getElementById("container").style.opacity = "1";
		for (let i=0; i<10;i++) {
			document.getElementById("container").innerHTML += 
				`<span class="art" style="background-image: url(img/${i}-hover.png)">
					<img class="artImage" src="img/placeholder.png"/>
				</span>`;
		}
	}
	
	function showAbout() {
		document.getElementById("mainTitle").style.fontSize = "10vmin";
		document.getElementById("mainTitle").style.paddingLeft = "0";
		document.getElementById("mainTitle").style.paddingRight = "0";
		document.getElementById("mainTitle").style.paddingTop = "5vmin";
		document.getElementById("artTitle").style.display = "none";
		document.getElementById("aboutTitle").style.display = "none";
		document.getElementById("menu").style.height = "15vh";
		
		document.getElementById("container").style.opacity = "1";

		document.getElementById("container").innerHTML = aboutText;
	}
}