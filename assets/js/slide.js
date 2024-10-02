$(document).ready(function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.getElementById('dots');

    function updateSlidePosition() {
        const slider = document.querySelector('.slider');
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateDots();
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSlidePosition();
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function createDots() {
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.onclick = () => goToSlide(index);
            dotsContainer.appendChild(dot);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlidePosition();
    }

    createDots();
    updateDots();

    setInterval(nextSlide, 15000);
});
