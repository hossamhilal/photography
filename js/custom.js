/*global $ */
(function ($) {
    "use strict";

    // Loader
    $(window).on('load', function () {
        $('body').addClass('stopScroll');
        $('.loader').fadeOut(500, function () {
            $(this).remove();
            $('body').removeClass('stopScroll');
        });
    });

    // OPEN SIDE  MENU 
    $('.menu-btn ').on('click', function () {
        $(this).toggleClass('animate');
        $('.side-menu').toggleClass('show');
        $('.overlay').toggleClass('show');
        $('.page-content').toggleClass('translated');
    });

    // Open DropDown
    $('.side-menu .dropDown').on('click', function () {
        $(this).find('.sub-menu').slideToggle(300);
    });

    $(window).on('scroll', function () {
        let sticky = 200;
        if ($(window).scrollTop() >= sticky) {
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    });

    // Header OWL 
    $('.owlHeader').owlCarousel({
        margin: 0,
        autoplay: true,
        loop: true,
        nav: true,
        dots: false,
        center: true,
        autoplaySpeed: 2000,
        autoplayTimeout: 2000,
        smartSpeed: 2000,
        navText: ["<i class='icofont-simple-right'></i>", "<i class='icofont-simple-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // var sync1 = $('.page-owl');
    // var sync2 = $('.page-thumbs');

    var bigimage = $('.page-owl');
    var thumbs = $('.page-thumbs');
    //var totalslides = 10;
    var syncedSecondary = true;

    bigimage
        .owlCarousel({
            items: 1,
            slideSpeed: 2000,
            nav: true,
            autoplay: true,
            dots: false,
            loop: true,
            center: true ,
            responsiveRefreshRate: 200,
            navText: ["<i class='icofont-simple-right'></i>", "<i class='icofont-simple-left'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        })
        .on("changed.owl.carousel", syncPosition);

    thumbs
        .on("initialized.owl.carousel", function () {
            thumbs
                .find(".owl-item")
                .eq(0)
                .addClass("current");
        })
        .owlCarousel({
            items: 11,
            margin: 5 ,
            dots: false,
            nav: false,
            center: true ,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: 1,
            autoplay: true,
            responsiveRefreshRate: 100
        })
        .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
        //if loop is set to false, then you have to uncomment the next line
        //var current = el.item.index;

        //to disable loop, comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        //to this
        thumbs
            .find(".owl-item")
            .removeClass("current center synced")
            .eq(current)
            .addClass("current");
        var onscreen = thumbs.find(".owl-item.active").length - 1;
        var start = thumbs
            .find(".owl-item.active")
            .first()
            .index();
        var end = thumbs
            .find(".owl-item.active")
            .last()
            .index();

        if (current > end) {
            thumbs.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            thumbs.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            bigimage.data("owl.carousel").to(number, 100, true);
        }
    }

    thumbs.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        bigimage.data("owl.carousel").to(number, 300, true);
        $('.owl-item').removeClass('center synced');
        $(this).addClass('center synced');
    });

    // Scroll Top
    let wheight = $(document).height() / 3;
    $(window).scroll(function () {
        if ($(window).scrollTop() > wheight) $('.scroll-top').addClass('show');
        else $('.scroll-top').removeClass('show');
    });

    $('.scroll-top').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 3000);
        return false;
    });

    // iniat WOW Js
    new WOW().init();

})(jQuery);

