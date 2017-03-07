

(function ($) {
    "use strict";

    $(window).load(function () {

        var preloaderDelay = 350,
            preloaderFadeOutTime = 800;

        function hidePreloader() {
            var loadingAnimation = $('#loading-animation'), loadingtext = $('#loading-text'),
                preloader = $('#preloader');

            loadingAnimation.fadeOut();
            loadingtext.fadeOut();
            preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);
        }

        hidePreloader();

        $('body').scrollspy({
            target: '.navbar',
            offset: 50
        });

        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });



        $('a[href*=#]').bind("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            $(anchor).parent().siblings().removeClass('active');
            $(anchor).parent().addClass('active');

            e.preventDefault();
        });


    });

    $('#home').backstretch(['./images/4.jpg']);


    $(".rotate").textrotator({
        animation: "dissolve",
        separator: "|",
        speed: 3000
    });

    var navbar = $('.navbar');
    var navHeight = navbar.height();

    $(window).scroll(function () {
        if ($(this).scrollTop() >= navHeight) {
            navbar.addClass('navbar-color');
        }
        else {
            navbar.removeClass('navbar-color');
        }

        $('a[href*=#]').blur();

    });

    if ($(window).width() <= 767) {
        navbar.addClass('custom-collapse');
    }

    $(window).resize(function () {
        if ($(this).width() <= 767) {
            navbar.addClass('custom-collapse');
        }
        else {
            navbar.removeClass('custom-collapse');
        }
    });

    new WOW({
        mobile: false
    }).init();


})(jQuery);