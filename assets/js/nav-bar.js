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
        document.querySelector('.search-input').focus();
    });

    document.getElementById('search-icon').addEventListener('mouseout', function () {
        const svg = document.getElementById('search-svg').querySelector('path');
    });

    $('.nav-item').hover(
        function () {
            $('<style>').prop('type', 'text/css').html('.nav-item:hover::after { width: 100%; }').appendTo('head');
        },
        function () {
            $('<style>').prop('type', 'text/css').html('.nav-item::after { width: 0%; }').appendTo('head');
        }
    );

    // Lấy các phần tử cần thiết
    const openMenuBtn = document.querySelector('.nav-bar-open-menu');
    const closeMenuBtn = document.querySelector('.nav-bar-close-menu');
    const navBarMain = document.querySelector('.nav-bar-main');

    openMenuBtn.addEventListener('click', () => {
        navBarMain.classList.add('active');
        openMenuBtn.classList.remove('active'); 
        closeMenuBtn.classList.add('active');
    });

    closeMenuBtn.addEventListener('click', () => {
        navBarMain.classList.remove('active');
        closeMenuBtn.classList.remove('active'); 
        openMenuBtn.classList.add('active'); 
    });
});
