var qb = {};



qb.App = (function() {



    function initApp() {
        setup();
        scrolly();
        intro();
        transparentNav();
        form();
        mobileNav();
        navLinkClick();
        scrolly();

        $(window).resize();
    }



    function setup() {
        $(window).resize(function() {
            $('.full-height').height($(window).height());
        });
    }

    function scrolly() {
        $(function() {
            $.scrollify({
                section: ".qiana",
            });
            console.log("HIHI");
        });
    }

    function intro() {

        $('.intro').animate({
                opacity: 1
            }, 1000,
            (function() {
                firstCircle();
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
                heroCircle();
            })
        );
    }

    function heroCircle() {
        $('#header-hero').addClass('bg-animation');
        $('#header-hero').removeClass('d-none');
        $('.rocks').removeClass('d-none');
        hero();
        $('.intro').animate({
                opacity: 1
            }, 700,
            (function() {
                showAllSections();
                $('#header-hero').removeClass('bg-animation');

                $('.hero-text').animate({
                    opacity: 1
                }, 3700)

                $('.rocks').animate({
                    opacity: 1
                }, 1700)
            })
        )
    }

    function hero() {
        console.log("load hero");

        calcImgSize();

        $(window).scroll(function() {
            var scrolledY = $(window).scrollTop();
            //$('#header-hero').css('background-position', 'left ' + ((scrolledY)) + 'px'); for
            $('.hero-text').css('transform', 'translate3d(0px, ' + -(scrolledY * 0.9) + 'px , 0px)');
            $('.hero-img').css('width', 550 + scrolledY * 0.05 + 'px');

            var width = $('.hero-image').width();
            var height = $('.hero-image').height();
            $('.hero-text').css('margin-left', -width / 2 + 'px');
            $('.hero-text').css('margin-top', -height / 2 + 'px');
        });
    }

    function calcImgSize() {
        var height = $('.rocks img').height();
        $('.rocks').css('margin-top', -height / 2 + 5 + 'px');



    }

    function hideAllSections() {
        $('#header-hero').addClass('d-none');
        $('#caatch-this').addClass('d-none');
        $('#caatch-up').addClass('d-none');
        $('#caatch-us').addClass('d-none');
        $('#lets-caatch-up').addClass('d-none');
    }

    function showAllSections() {
        $('#caatch-this').removeClass('d-none');
        $('#caatch-up').removeClass('d-none');
        $('#caatch-us').removeClass('d-none');
        $('#lets-caatch-up').removeClass('d-none');
    }


    function transparentNav() {
        // Transition effect for navbar
        $(window).scroll(function() {
            // checks if window is scrolled more than x, adds/removes solid class\
            if ($(this).scrollTop() > $(".header-hero").height() / 2 - ($(".navbar").height() * 2)) {
                // scrolls to end of header div
                $(".navbar").addClass('solid');
                // should also swap logo image to light version
            } else {
                $(".navbar").removeClass('solid');
            }
        });
    }


    function form() {
        //material contact form animation
        $('.contact-form').find('.form-control').each(function() {
            var targetItem = $(this).parent();
            if ($(this).val()) {
                $(targetItem).find('label').css({
                    'top': '10px',
                    'fontSize': '14px'
                });
            }
        })
        $('.contact-form').find('.form-control').focus(function() {
            $(this).parent('.input-block').addClass('focus');
            $(this).parent().find('label').animate({
                'top': '10px',
                'fontSize': '14px'
            }, 300);
        })
        $('.contact-form').find('.form-control').blur(function() {
            if ($(this).val().length == 0) {
                $(this).parent('.input-block').removeClass('focus');
                $(this).parent().find('label').animate({
                    'top': '25px',
                    'fontSize': '18px'
                }, 300);
            }
        })
    }


    function mobileNav() {
        //Menu button on click event
        $('.mobile-nav-button').on('click', function() {
            // Toggles a class that slides the menu into view on the screen
            $('.mobile-menu').toggleClass('mobile-menu--open');
            return false;
        });

        $('.mobile-btn').click(function(e) {
            e.preventDefault
            $(this).toggleClass('cross');
        });

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if ($('.mobile-menu').hasClass('mobile-menu--open')) {
                if (event.target != $('.mobile-menu')) {
                    $('.mobile-menu').toggleClass('mobile-menu--open');
                    $('.mobile-btn').toggleClass('cross');
                }
            }
        }
    }

    function navLinkClick() {
        scrollToSection($(".nav-link"));
    }

    function scrollToSection(sourceClick) {
        sourceClick.click(function(event) {
            // animate scroll
            $('html, body').animate({
                scrollTop: ($(this.hash).offset().top - $(".navbar").height() - 15)
            }, 600);
        });
    }


    function disableScrolling() {
        var x = window.scrollX;
        var y = window.scrollY;
        window.onscroll = function() { window.scrollTo(x, y); };
    }

    function enableScrolling() {
        window.onscroll = function() {};
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