window.onload = function() {
	if ($(document).width() > 800) {
		$(".galleryBody img").css({
			"top":"calc(50vh - 300px)"
		})
		var images = $(".galleryBody > div:nth-child(2)").children().length
		,galleryName = $(".galleryBody > div:nth-child(2)").attr("class")
		,imageWidth = galleryName == "hebei02" ? 615 : (["d1010", "n1010"].indexOf(galleryName) > -1 ? 444 : 1083)
		,width = images * imageWidth;
		$(".galleryBody > div:nth-child(2)").css({
			"width":width.toString()
		});
	}
}