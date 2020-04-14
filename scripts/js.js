var isMobile = navigator.userAgent.match("iPhone|iPad|iPod|Android");

const gallerycount = {
	"1010n":7
	,"1010d":7
	,"n-i":12
	,"s-i":17
	,"dxb":11
	,"kef":13
	,"seoul":19
	,"gor":14
	,"hebei01":13
	,"hebei02":23
	,"ind":15
	,"sdc":11
	,"portraits":11
};

function loader() {
	//smooth opening
	
	$("#title").css({
		"opacity":"1"
	});
	
	$(".tabtitle").css({
		"opacity":"1"
	});
	
	$("#about").css({
		"opacity":"1"
	});
}

if (isMobile) {
	function showmenu(id, notid) {
		[id, notid] = $(notid).css("width")=="0px" ? [notid, id] : [id, notid];
		$(notid).css({
			"width":"0vw"
			,"height":"0vh"
		});
		
		$(id).css({
			"width":"auto"
			,"height":"75vh"
		});
		
		$(id + " button").css({
			"display":"block"
		});
		
		$("#about").css({
			"width":"0vw"
		});
		
		$("#gallery").css({
			"z-index":"0"
			,"opacity":"0"
		});
	}
	
	function reset() {
		$("#gallery").css({
			"z-index":"0"
			,"opacity":"0"
		});
		
		$(".tab").css({
			"width":"100vw"
			,"height":"6vh"
			,"top":"5vh"
		});
		
		$("#about").css({
			"width":"35vw"
			,"height":"auto"
			,"top":"20vh"
		});
		
		$("#aboutp").css({
			"height":"0vh"
			,"padding":"0px"
		});
	}
	
	function about() {
		$(".tab").css({
			"width":"0vw"
			,"top":"-6vh"
		});
		
		$("#about").css({
			"top":"1.5vh"
		});
		
		$("#aboutp").css({
			"height":"auto"
			,"padding":"10px"
		});
	}
	console.log("Is mobile.");
} 

if (!isMobile) {
	function reset() {
		//reset to homepage
		$(".tab").css({
			"right":"1vw"
			,"height":"6vw"
			,"width":"auto"
		});
		
		$("#title").css({
			"font-size":"12vw"
		});
		
		$(".tabtitle").css({
			"right":"0vw"
		});
		
		$("#aboutp").css({
			"width":"0vw"
		});
		
		window.setTimeout(
			function () {
				$("#aboutp").css({
					"display":"none"
				});
				
				$("#gallery").css({
					"opacity":"0"
					,"z-index":"2"
				});
			}
			,50
		);
	}
	
	function showmenu(id, notid) {
		//clear and show relevant menu
		
		$("#gallery").css({
			"opacity":"0"
			,"z-index":"0"
		});
		
		$(".tab").css({
			"right":"1vw"
			,"width":"auto"
		});
		
		$(".tabtitle").css({
			"right":"0vw"
		});
		
		$("#title").css({
			"font-size":"12vw"
		});
		
		$(notid).css({
			"height":"6vw"
			,"color":"#000"
		});
		
		$(id).css({
			"color":"#fff"
			,"right":"10vw"
		});
		
		window.setTimeout(
			function () {
				$(notid).css({
					"right":"-30vw"
				});
			}
			,200
		);
		
		window.setTimeout(
			function () {
				$(id).css({
					"height":"80vh"
				});
			}
			,500
		);
		
		$("#aboutp").css({
			"width":"0vw"
		});
		
		window.setTimeout(
			function () {
				$("#aboutp").css({ 
					"display":"none"
				});
			}
			,50
		);
	}
	
	function about() {
		$("#gallery").css({
			"opacity":"0"
			,"z-index":"0"
		});
		
		$(".tab").css({
			"height":"6vw"
			,"width":"auto"
		}); 
		
		$("#title").css({
			"font-size":"9vw"
		});
		
		window.setTimeout(
			function () {
				$(".tab").css({
					"right":"-30vw"
				});
				
				$(".tabtitle").css({
					"right":"0vw"
				});
			}
			,200
		);
		
		$("#aboutp").css({
			"display":"inline-block"
			,"width":"50vw"
		});
	}
	console.log("Is desktop.");
}