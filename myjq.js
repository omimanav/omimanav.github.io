var images = ["url(1.jpg)", "url(2.jpg)", "url(3.jpg)", "url(4.jpg)", "url(5.jpg)", "url(6.jpg)",  "url(7.jpg)", "url(8.jpg)", "url(9.jpg)", "url(10.jpg)", "url(11.jpg)", "url(12.jpg)", "url(13.jpg)"];
var count = 0;
// To show initialise background.
$("#wrapper").css("background-image", images[Math.floor(Math.random() * 13) + 1]);

// Wrapper is a division block
$(document).ready(function () {$("#wrapper").click(function () {
    if (count > images.length) count = 0;

    $("#wrapper").css("background-image", images[++count]);
    
});
});