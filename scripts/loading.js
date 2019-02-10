$(".menuContainer").css({"display": "none"
						 ,"opacity": "0"});
$("div").css({"display": "none"
			  ,"opacity": "0"});
$("#loading").css("display", "block");

window.onload = function() {
	$("#loading").animate({
		"display":"none",
	}, 500);
	$(".menuContainer").animate({
		"display": "block"
		,"opacity": "1"
	}, 500);
	$("div").animate({
		"display": "block"
		,"opacity": "1"
	}, 500);
}