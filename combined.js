//header mobile
$('#responsive-menu-button').sidr({
    name: 'sidr-main',
    source: '#navigation'
});
///header collapse
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $("header").addClass("header-scroll");
        $("header h1").addClass("h1-scroll");
        $(".nav").addClass("nav-scroll");
        $(".navbar-inverse").addClass("navbar-inverse-scroll");
        $("header ul a li").addClass("top-cat-scroll");
    } else {
        $("header").removeClass("header-scroll");
        $("header h1").removeClass("h1-scroll");
        $(".nav").removeClass("nav-scroll");
        $(".navbar-inverse").removeClass("navbar-inverse-scroll");
        $("header ul a li").removeClass("top-cat-scroll");
    }
});
//Carousel
$('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 740,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

function navLinkClicked(event) {
    //Stop links from actung like links
    event.preventDefault();
    var name = $(this).attr("name");
    $(window).scrollTo(name, 1000, {
        offset: -100
    });
}
$(".navigation").click(navLinkClicked);
$.stellar();
/// Proudct Page Image update
$(".product-image-one").append('<img src="imgs/TJS-coolcucumber.jpg"/>');
$(".product-image-two").append('<img src="imgs/TJS-naughtyornice.jpg"/>');
$(".product-image-three").append('<img src="imgs/TJS-thinktank.jpg"/>');
$(".product-image-four").append('<img src="imgs/TJS-watermelonwonder.jpg"/>');
//Quickview
$(".product-image-one").click(function() {
    $(".quickview-popup-productone").fadeIn(1000);
});
$(".product-image-two").click(function() {
    $(".quickview-popup-producttwo").fadeIn(1000);
});
$(".product-image-three").click(function() {
    $(".quickview-popup-productthree").fadeIn(1000);
});
$(".product-image-four").click(function() {
    $(".quickview-popup-productfour").fadeIn(1000);
});
$(".qv-close").click(function() {
    $(
        ".quickview-popup-productone,.quickview-popup-producttwo,.quickview-popup-productthree,.quickview-popup-productfour"
    ).fadeOut(1000);
});
$(".qv-button").click(function() {
    $(".qv-success-message").fadeIn(500);
});
$(".product-image-one").click(function() {
    $(".modal-wrapper-one").fadeIn(500);
    $(".modal-one").fadeIn(500);
    //$("body").css("overflow", "hidden");
    $("body").addClass("modal-on");
});
$(".modal-one").click(function(event) {
    // Stop the click from propagating to the modal wrapper
    event.stopPropagation();
});
$(".exit, .no, .modal-wrapper-one, .qv-close").click(function(event) {
    // Don't act like a link
    event.preventDefault();
    $(".modal-wrapper-one").fadeOut(500);
    //$("body").css("overflow", "auto");
    $("body").removeClass("modal-on");
});
//Quick Two
$(".product-image-two").click(function() {
    $(".modal-wrapper-two").fadeIn(500);
    $(".modal-two").fadeIn(500);
    //$("body").css("overflow", "hidden");
    $("body").addClass("modal-on");
});
$(".modal-two").click(function(event) {
    // Stop the click from propagating to the modal wrapper
    event.stopPropagation();
});
$(".exit, .no, .modal-wrapper-two, .qv-close").click(function(event) {
    // Don't act like a link
    event.preventDefault();
    $(".modal-wrapper-two").fadeOut(500);
    //$("body").css("overflow", "auto");
    $("body").removeClass("modal-on");
});
//Quick Three
$(".product-image-three").click(function() {
    $(".modal-wrapper-three").fadeIn(500);
    $(".modal-three").fadeIn(500);
    //$("body").css("overflow", "hidden");
    $("body").addClass("modal-on");
});
$(".modal-three").click(function(event) {
    // Stop the click from propagating to the modal wrapper
    event.stopPropagation();
});
$(".exit, .no, .modal-wrapper-three, .qv-close").click(function(event) {
    // Don't act like a link
    event.preventDefault();
    $(".modal-wrapper-three").fadeOut(500);
    //$("body").css("overflow", "auto");
    $("body").removeClass("modal-on");
});
//Quick Four
$(".product-image-four").click(function() {
    $(".modal-wrapper-four").fadeIn(500);
    $(".modal-four").fadeIn(500);
    //$("body").css("overflow", "hidden");
    $("body").addClass("modal-on");
});
$(".modal-four").click(function(event) {
    // Stop the click from propagating to the modal wrapper
    event.stopPropagation();
});
$(".exit, .no, .modal-wrapper-four, .qv-close").click(function(event) {
    // Don't act like a link
    event.preventDefault();
    $(".modal-wrapper-four").fadeOut(500);
    //$("body").css("overflow", "auto");
    $("body").removeClass("modal-on");
});