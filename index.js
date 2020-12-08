//jshint esversion:6
$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $(".nav-bar").css("background", "#257A37");
            $(".navbar-brand").css("color", "#fff");
            $(".nav-link").css("color", "#fff");
        } else {
            $(".nav-bar").css("background", "#fff");
            $(".nav-link").css("color", "#8A8A8A");
            $(".navbar-brand").css("color", "black");
        }
    });
});
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            // window.location.hash = target;
        });
    });
});