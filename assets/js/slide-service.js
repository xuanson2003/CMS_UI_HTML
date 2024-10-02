let currentSlide = 0;
const slides = document.querySelectorAll('.service-slide');

function updateSlidePosition() {
    const slider = document.querySelector('.service-slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlidePosition();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlidePosition();
}

document.getElementById('search-icon').addEventListener('mouseover', function () {
    const svg = document.getElementById('search-svg').querySelector('path');
    svg.setAttribute('fill', '#333333');
    $('.search-input').focus();
});

document.getElementById('search-icon').addEventListener('mouseout', function () {
    const svg = document.getElementById('search-svg').querySelector('path');
    svg.setAttribute('fill', 'white');
});
