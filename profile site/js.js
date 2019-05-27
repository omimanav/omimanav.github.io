window.onload = function () {
    $("#title").css({lineHeight:"100%"});
    $("#title").on({
        mouseenter: function() {
            $(this).css({
                textShadow:"4px 4px 4px #999",
                color: "gradient()"
            });
        },
        mouseleave: function() {
            $(this).css({
                textShadow: "0 0 0",
                fontSize: "5em",
                color: "#101010"
            });
        }
    });
    $("#loading").fadeOut(500);
    
    // card display
}