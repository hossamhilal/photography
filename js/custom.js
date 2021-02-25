/*global $ */
(function ($) {
    "use strict";

    $(window).on('load', function(){
        $('body').addClass('stopScroll');
        $('.loader').fadeOut(500, function () {
            $(this).remove();
            $('body').removeClass('stopScroll');
        }); 
    });

    // OPEN SIDE  MENU 
    $('.menu-btn ').on('click', function(){
        $(this).toggleClass('animate');
        $('.side-menu').toggleClass('show');
        $('.overlay').toggleClass('show');
        $('.page-content').toggleClass('translated');  
    });

    // Open DropDown
    $('.side-menu .dropDown').on('click', function(){
        $(this).find('.sub-menu').slideToggle(300);
    });

    $(window).on('scroll', function(){
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

    // Scroll Top
    let wheight = $(document).height() / 3;
    $(window).scroll(function(){
        if ($(window).scrollTop() > wheight) $('.scroll-top').addClass('show');
        else $('.scroll-top').removeClass('show');
    });

    $('.scroll-top').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 4000);
        return false;
    });

    // $(window).on("load", function(){
    //     let slider = document.querySelector('.slider') ,
    //         { width } = slider.getBoundingClientRect() ,
    //         halfWidth = width / 2;

    //     slider.addEventListener("mousemove", function (e) {
    //         const xPos = e.pageX - slider.offsetLeft;

    //         this.classList.remove("cursor-prev", "cursor-next");
    //         if (xPos > halfWidth) {
    //             this.classList.add("cursor-next");
    //         } else {
    //             this.classList.add("cursor-prev");
    //         }
    //     });
    // });


    // Testimonials OWL 
    // $('.owlTestimonials').owlCarousel({
    //     margin: 20,
    //     autoplay: true,
    //     loop: false,
    //     nav: true,
    //     dots: false,
    //     center : false ,
    //     autoplaySpeed : 5000,
    //     autoplayTimeout : 5000,
    //     smartSpeed: 5000 ,
    //     navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 2
    //         },
    //         1000: {
    //             items: 2
    //         }
    //     }
    // });

    // // Upload File 
    // $('.uploadFile').on('change', function(e) {
    //     let fileName = e.target.value.split( '\\' ).pop();
    //     console.log(fileName);
    //     let files = $(this).parent('.uploadBox').prev('.uploadedFiles');
    //     files.append(
    //         '<div class="file">' +
    //             '<h3 class="fileName">' + fileName  + '</h3>' +
    //             '<span class="deleteFile"> <i class="icofont-ui-delete"></i> </span>' +
    //         '</div>'
    //     );               
    // });

    // // Delete File
    // $(document).on('click','.deleteFile' , function(){
    //     $(this).parent('.file').remove();
    // });

    // iniat WOW Js
    new WOW().init();

})(jQuery);

