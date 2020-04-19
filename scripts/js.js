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
	
	$(".tab").css({
		"opacity":"1"
	});
	
	$("#about").css({
		"opacity":"1"
	});
}

if (isMobile) {
	function photoGallery(galleryname){
		console.log(galleryname);
		$("#title").css({
			"font-size":"5vh"
		});
		
		$("#gallery").css({
			"display":"block"
			,"z-index":1
			,"opacity":1
		});
		
		$("#aboutp").css({
			"display": "none"
		});
		
		document.getElementById("gallery").innerHTML = "";
		
		var photourl = "https://omimanav.com/img/" 
			+ galleryname 
			+ "/" 
			+ (galleryname.indexOf("hebei") == -1 ? galleryname : "hebei");

		var i = galleryname == "hebei02" ? 14 : 0;
		
		for (i;i<gallerycount[galleryname]; i++) {
			document.getElementById("gallery").innerHTML += "<img src='" + photourl+i+".jpg'" + "/>";
		}
	}
	
	function showmenu(id, notid) {
		[id, notid] = $(id).children("button").css("font-size")!="0px" ? [notid, id] : [id, notid];
		$(id).children("button").css({
			"font-size":"3vh"
		});

		$(notid).children("button").css({
			"font-size":"0vh"
		});
		
		$("#aboutp").css({
			"display":"none"
		});
	}
	
	function reset() {
		$("#title").css({
			"font-size":"8vh"
		});
		
		$("#gallery").css({
			"display":"none"
			,"z-index":0
		});
		
		$(".tab button").css({
			"font-size":"0vh"
		});
		
		$("#aboutp").css({
			"display": "block"
		});
	}
	
	function about() {
		console.log("why did you do this lmfao");
	} 
} else {
	function photoGallery(galleryname) {
		console.log(galleryname);
		document.getElementById("gallery").innerHTML = "";
		$("#gallery").scrollTop(0);
		
		$("#aboutp").css({
			"width":"0vw"
			,"z-index":"1"
		});
		
		$("#title").css({
			"font-size":"6.66vw"
		});
		
		$("#gallery").css({
			"display":"block"
		});
		
		$(".tab").css({
			"width":"125vw"
		}); $(".tab button").css({
			"font-size":"0vh"
		});
		
		var photourl = "https://omimanav.com/img/" 
			+ galleryname 
			+ "/" 
			+ (galleryname.indexOf("hebei") == -1 ? galleryname : "hebei");
		var photolist = [], key = [];
		var i = galleryname == "hebei02" ? 14 : 0;
		
		for (i;i<gallerycount[galleryname]; i++) {
			document.getElementById("gallery").innerHTML += "<img src='" + photourl+i+".jpg'" + "/>";
		}
	}
	
	function reset() {
		//reset to homepage
		$(".tab").css({
			"width":"100vw"
		});
		
		$("#title").css({
			"font-size":"12vw"
		});
		
		$("#gallery").css({
			"display":"none"
		});
		
		$("#aboutp").css({
			"width":"0vw"
			,"z-index":"1"
		});
	}
	
	function showmenu(id, notid) {
		//clear and show relevant menu
		$("#gallery").css({
			"display":"none"
		});
		$(".tab").css({
			"width":"100vw"
		});
		
		$(id).children("button").css({
			"font-size":"1.77vw"
		});
		
		$(notid).children("button").css({
			"font-size":"0vw"
		});
		
		$("#aboutp").css({
			"width":"0vw"
			,"z-index":"1"
		});
	}
	
	function about() {
		$("#aboutp").css({
			"width":"25vw"
			,"z-index":"3"
		});
		
		$("#gallery").css({
			"display":"none"
		});
		
		$(".tab").css({
			"width":"125vw"
		}); $(".tab button").css({
			"font-size":"0vh"
		});
	}
}