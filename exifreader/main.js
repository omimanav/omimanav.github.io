function exif(ev) {
	var input = ev.target,
	reader = new FileReader(),
	imageFile = input.files[0];
	
	reader.readAsText(imageFile);
	
	reader.addEventListener("load", () => {
		var binString = reader.result;
		document.getElementById("text").innerText = binString;
  }, false);
}