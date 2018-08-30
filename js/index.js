var qb = {};

qb.App = (function() {

    function initApp() {
        setup();
        intro();

        $(window).resize();
    }

    function setup() {
        $(window).resize(function() {
            $('.full-height').height($(window).height());
        });

        if ($(window).width() <= 768) {
            $('.hero-text').removeClass('text-left');
            $('.hero-text').addClass('text-center');
        }
    }

    function intro() {
        var length = 0;


        if ($(window).width() <= 768) {
            length = 3000;

        } else {
            length = 1500;
        }

        $('.intro').animate({
                opacity: 1
            }, length,
            (function() {

                if ($(window).width() <= 768) {
                    $('.intro').addClass('d-none');
                    $('#header-hero').removeClass('d-none');
                    $('.hero-text').animate({
                        opacity: 1
                    }, 1500)
                    showAllSections();

                } else {
                    firstCircle();
                }
            })
        );
    }

    function firstCircle() {

        $('.first-circle').addClass('bg-animation');
        $('.first-circle').removeClass('d-none');

        $('.intro').animate({
                opacity: 1
            }, 700,
            (function() {
                $('.first-circle').removeClass('bg-animation');
                $('.intro').addClass('d-none');
                heroCircle();
            })
        );
    }

    function heroCircle() {

        $('#header-hero').addClass('bg-animation');
        $('#header-hero').removeClass('d-none');
        hero();
        $('.intro').animate({
                opacity: 1
            }, 700,
            (function() {
                $('.first-circle').addClass('d-none');
                showAllSections();
                $('#header-hero').removeClass('bg-animation');

                $('.hero-text').animate({
                    opacity: 1
                }, 1500)
            })
        )
    }

    function hero() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            $('.header-hero').css('transform', 'translate3d(-0%, -' + (scroll / 300) + '%, 0) scale(' + (300 + scroll / 50) / 300 + ')');

            if ($(window).width() <= 768) {
                $('.header-hero').css('background-position', '80% ' + ((scroll)) + 'px');
            }
        });
    }

    function showAllSections() {
        $('#caatch-this').removeClass('d-none');
        $('#caatch-us').removeClass('d-none');
        $('#more-info').removeClass('d-none');
        $('#who-are-we').removeClass('d-none');
        $('#newsletter').removeClass('d-none');
        $('#lets-caatch-up').removeClass('d-none');

        $(window).scroll(function() {
            if (checkVisible($('#caatch-this')[0])) {
                $('#section-1-content').addClass('animated fadeInUp');
            }

            if (checkVisible($('#caatch-us')[0])) {
                $('#section-2-content').addClass('animated fadeInUp');
            }

            if (checkVisible($('#more-info')[0])) {
                $('#more-info-content').addClass('animated fadeInUp');
            }

            if (checkVisible($('#who-are-we')[0])) {
                $('#section-3-content').addClass('animated fadeInUp');
            }

            if (checkVisible($('#section-4-content')[0])) {
                $('#section-4-content').addClass('animated fadeInUp');
            }




            if (checkVisible($('#lets-caatch-up')[0])) {
                //  $('#section-5-content').addClass('animated fadeInUp');
            }

        });
    }

    function checkVisible(elm) {
        var rect = elm.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= -300);
    }

    /* ------------------------------------------------- */
    return {
        init: function() {
            initApp();
        }
    }

})();

$(document).ready(function($) {
    new qb.App.init();
});