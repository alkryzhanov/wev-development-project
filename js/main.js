'use strict';
// Adding current year 
$(document).ready(() => {
    let year = $('.footer__year');
    let currentYear = new Date().getFullYear();

    year.text(currentYear);

});

//ARROW button code block
$(document).ready(() => {
    let arrowUpBtn = $('.arrow-up__btn');

    $(window).scroll(() => {
        if ($(window).scrollTop() > 300) {
            arrowUpBtn.addClass('show');
        } else {
            arrowUpBtn.removeClass('show');
        }
    });

    arrowUpBtn.on('click', (evt) => {
        evt.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, '1000');
    });
});

//SMOOTH SITE navigation

$(function () {
    $('.navbar-nav a[href^="#"]').on('click', function () {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
        return false;
    });
});
