// jQuery for page scrolling feature; requires jQuery Easing plugin
$("#nav ul li a[href^='#']").on('click', function(e) {
    // store hash
    var target = this.hash;
    // prevent default anchor click behavior
    e.preventDefault();
    // animate
    $('html, body').animate({
	scrollTop: $(hash).offset().top
    }, 300, function(){
	// when done, add hash to url
	// (default click behaviour)
	window.location.hash = target;
    });
});
