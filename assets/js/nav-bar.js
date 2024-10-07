$(document).ready(function () {
    var headerHeight = $('.nav-bar').outerHeight();
    var navbar = $('.nav-bar');

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > headerHeight) {
            setTimeout(() => navbar.addClass('sticky'), 200);
        } else {
            navbar.removeClass('sticky');
        }
    });

    document.getElementById('search-icon').addEventListener('mouseover', function () {
        const svg = document.getElementById('search-svg').querySelector('path');
        svg.setAttribute('fill', '#333333');
        document.querySelector('.search-input').focus();
    });

    document.getElementById('search-icon').addEventListener('mouseout', function () {
        const svg = document.getElementById('search-svg').querySelector('path');
        svg.setAttribute('fill', 'white');
    });
});
