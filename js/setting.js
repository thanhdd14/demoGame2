//menu header
$('.js-mobile').on('click', function(){
    $(this).toggleClass("js-mobile--close");
    $("html").toggleClass("js-locked");
    // $(".nav-menu").slideToggle();
    // e.preventDefault();
    $(".header-nav").fadeToggle();
});


$('.float-right__menu-option').on('click', function(){
    $(this).toggleClass("active");
    $(".float-right").toggleClass("active");
});

$('.news-block__heading--all').on('click', function(){
    $(".news-block__fill li").removeClass("event");
    $(".news-block__fill li").removeClass("support");
    $(".news-block__fill li").removeClass("news");
    $(".news-block__fill li").addClass("all");
    $(".news-block__heading li").removeClass("active");
    $(this).addClass("active");
});
$('.news-block__heading--news').on('click', function(){
    $(".news-block__fill li").removeClass("all");
    $(".news-block__fill li").removeClass("event");
    $(".news-block__fill li").removeClass("support");
    $(".news-block__fill .news-block__fill--news").addClass("news");
    $(".news-block__heading li").removeClass("active");
    $(this).addClass("active");
});
$('.news-block__heading--event').on('click', function(){
    $(".news-block__fill li").removeClass("all");
    $(".news-block__fill li").removeClass("support");
    $(".news-block__fill li").removeClass("news");
    $(".news-block__fill .news-block__fill--event").addClass("event");
    $(".news-block__heading li").removeClass("active");
    $(this).addClass("active");
});
$('.news-block__heading--support').on('click', function(){
    $(".news-block__fill li").removeClass("all");
    $(".news-block__fill li").removeClass("news");
    $(".news-block__fill li").removeClass("event");
    $(".news-block__fill .news-block__fill--support").addClass("support");
    $(".news-block__heading li").removeClass("active");
    $(this).addClass("active");
});

$('.js-popup-ytb').on('click', function(e){
    e.preventDefault();
    $("#popup-youtube").addClass("active");
    $("html").addClass("js-locked");
});

$(".procedure-show").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                dots: true,
                fade: true,
            }
        }
    ]
});


$('.gallery-show__for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.gallery-show__nav',
    infinite: true,
    autoplay: true,
    focusOnSelect: true,
    pauseOnHover:false,
});
$('.gallery-show__nav').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.gallery-show__for',
    dots: false,
    focusOnSelect: true,
    infinite: true,
});

$('.work-banner').slick({
    dots: true,
    focusOnSelect: true,
    pauseOnHover:false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    cssEase: 'linear'
});
$('.news-block__slider').slick({
    dots: true,
    focusOnSelect: true,
    pauseOnHover:false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    cssEase: 'linear'
});

$(function(){
    $('.js-bar').slimScroll();
});

$('.popup-show__close').on('click', function(){
    $(".popup").removeClass("active");
    $("html").removeClass("js-locked");
    // $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
});

$(document).ready(function() {
    var youTubeUrl = $('.youtube-video').attr('src');
    //the stop / close button
    $( '.popup-show__close' ).on( 'click', function(e) {
        e.preventDefault();
        $('.youtube-video').attr('src', '');
        $('.youtube-video').attr('src', youTubeUrl);
        
    } );
});


$(function () {
    var headerHeight = $('#header').outerHeight();
    var urlHash = location.hash;
    if (urlHash) {
        $('body,html').stop().scrollTop(0);
        setTimeout(function () {
            var target = $(urlHash);
            var position = target.offset().top ;
            $('body,html').stop().animate({scrollTop: position}, 1000);
        }, 100);
    }
    
    jQuery('.js-scroll').click(function(e) {
        $(".js-mobile").removeClass("js-mobile--close");
        $("html").removeClass("js-locked");
        $(".header-nav").fadeOut();
        jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top }, 1000);
        return false;
        e.preventDefault();
    });
    
});



//backtop
jQuery(document).ready(function ($) {
    $(window).on("scroll", function () {
        if($(window).scrollTop()> $("#footer").offset().top - $(window).outerHeight()){
            $(".float-right").addClass("fixd");
        }
        else {
            $(".float-right").removeClass("fixd");
        }
    });
    $('.js-backtop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});