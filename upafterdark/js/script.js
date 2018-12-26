window.onload = function () {
	$("html").css({
		"backdrop-filter": "blur(10px)",
		"-webkit-backdrop-filter": "blur(10px)"
	});
	$(".loading").animate({opacity:0, zIndex:1}, 500);
	$(".enterTitle").animate({opacity:1}, 1000);
	$(".menu").animate({opacity:1}, 1500);
	
	$(".photosMenu img").click(function () {
		var url = $(this).attr("src");
		console.log(url);
		$(".photo").css({
			zIndex:9,
			opacity:1,
			backgroundImage: "url(" + url + ")",
			display:"block"
		});
		$(".photosMenu").css({opacity:0});
	});
	$(".photo").click(function () {
		$(".photo").css({
			opacity:0,
			zIndex:2
		});
		$(".photosMenu").animate({opacity:1},500);
	});
}

function reset() {
	$(".enterTitle a").css({lineHeight:"25vh"});
	$(".menu").css({top:"25%"});
	$(".menu div").css({display:"block"});
	$(".about").css({display:"none"});
	$(".photos").css({display:"none"});
}

function photos() {
	$(".enterTitle a").css({lineHeight:"10vh"});
	$(".menu").css({top:"8%"});
	$(".menu div:nth-child(2)").css({display:"none"});
	$(".menu div:nth-child(1)").css({display:"block"});
	
	$(".about").animate({opacity:0}, 500);
	$(".photos").css({display:"block"});
	$(".about").css({display:"none"});
	$(".photos").animate({opacity:1}, 500);
}

function about() {
	$(".enterTitle a").css({lineHeight:"10vh"});
	$(".menu").css({top:"8%"});
	$(".menu div:nth-child(1)").css({display:"none"});
	$(".menu div:nth-child(2)").css({display:"block"});
	
	$(".photos").animate({opacity:"0"}, 500);
	$(".about").css({display:"block"});
	$(".photos").css({display:"none"});
	$(".about").animate({opacity:"1"}, 500);
}