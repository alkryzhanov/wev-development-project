'use strict';
// Adding current year 
$(document).ready(function () {
    let year = $('.footer__year');
    let currentYear = new Date().getFullYear();

    year.text(currentYear);

});