window.onload = function() {
	// make a loading page that enters the site with two menus closing in to the middle
	$("#splash").css({
		"opacity":"0"
		,"z-index":"1"
		,"display":"none"
		,"position":"absolute"
	});
	
	$("#phalf").css({
		"left":"0vw"
	});
	$("#dhalf").css({
		"right":"0vw"
	});
	
	$("*").on({
		mouseenter:function() {
			if ($(this).attr("id") == "phalf") {
				$(this).css({
					"background-color":"rgba(0,0,0,0)"
					,"background-image":"linear-gradient(to left, rgba(0,0,0,0.2), rgba(255,255,255,0.1))"
					,"width":"75vw"
				});
				$("#dhalf").css({
					"width":"25vw"
				});
			};
			if ($(this).attr("id") == "dhalf") {
				$(this).css({
					"background-color":"rgba(255,255,255,0)"
					,"background-image":"linear-gradient(to right, rgba(255,255,255,0.7), rgba(0,0,0,0.1))"
					,"width":"75vw"
				});
				$("#phalf").css({
					"width":"25vw"
				});
			};
		}, 
		mouseleave:function() {
			if ($(this).attr("id") == "phalf") {
				$(this).css({
					"background-color":"rgba(0,0,0,1)"
					,"background-image":"linear-gradient(to left, rgba(0,0,0,0.2), rgba(255,255,255,0.1))"
					,"width":"50vw"
				});
				$("#photography").css({
					"line-height":"80vh"
				});
				$("#pmenu").css({
					"display":"none"
				});
				$("#gallery").css({
					"opacity":"0"
					,"display":"none"
				});
				$("#gallery img").css({
					"opacity":"0"
					,"display":"none"
				});
				
				$("#dhalf").css({
					"width":"50vw"
					,"opacity":"1"
				});
			};
			if ($(this).attr("id") == "dhalf") {
				$(this).css({
					"background-color":"rgba(255,255,255,1)"
					,"background-image":"linear-gradient(to left, rgba(0,0,0,0.2), rgba(255,255,255,0.1))"
					,"width":"50vw"
				});
				$("#design").css({
					"line-height":"80vh"
				});
				$("#dmenu").css({
					"display":"none"
				});
				
				$("#phalf").css({
					"width":"50vw"
					,"opacity":"1"
				});
			};
		},
		click:function() {
			if($(this).attr("id") == "phalf") {
				$("#phalf").css({
					"width":"100vw"
					,"background-image":"none"
					,"background-color":"rgba(2,2,2,1)"
				});
				$("#photography").css({
					"line-height":"2vh"
				});
				$("#pmenu").css({
					"display":"inline-block"
				});
				
				$("#dhalf").css({
					"width":"0vw"
					,"opacity":"0"
				});
			}

			if($(this).attr("id") == "dhalf") {
				$("#dhalf").css({
					"width":"100vw"
					,"background-image":"none"
					,"background-color":"rgba(255,255,255,1)"
				});
				$("#design").css({
					"line-height":"2vh"
				});
				$("#dmenu").css({
					"display":"inline-block"
				});
				
				$("#phalf").css({
					"width":"0vw"
					,"opacity":"0"
				});
			}
			
			if($(this).parent().parent().attr('id') == "pmenu") {
				//check which gallery is clicked and fetch images to display in #gallery
				var gallerytoshow = "#gallery ." + $(this).attr("name");
				$("#gallery").css({
					"opacity":"1"
					,"display":"block"
				});
				$("#gallery img").css({
					"opacity":"0"
					,"display":"none"
				});
				$(gallerytoshow).css({
					"opacity":"1"
					,"display":"block"
				});
				
			}
		}
	});
};