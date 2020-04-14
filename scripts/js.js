const gallerycount = {
	"1010n":8
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
function photoGallery(galleryname) {
	var photourl = "https://omimanav.com/img/" 
		+ galleryname 
		+ "/" 
		+ (galleryname.indexOf("hebei") == -1 ? galleryname : "hebei");
	var photolist = [], key = [];
	var i = galleryname == "hebei02" ? 14 : 0;
	
	for (i;i<gallerycount[galleryname]; i++) {
		key.push(i);
		photolist.push(photourl+i+".jpg");
	}
	
	const photos = photolist.map((photo) => <img className="photo" src={photo}/>);
	
	ReactDOM.render(
		photos,
		$("#gallery")
	);
}

function loader() {
	$("#title").css("opacity","1");
}