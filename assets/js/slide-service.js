$(document).ready(function () {
    let currentSlideService = 0;
    const slidesService = document.querySelectorAll('.service-slide');

    function updateSlidePosition() {
        slidesService.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentSlideService) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlideService = (currentSlideService + 1) % slidesService.length;
        updateSlidePosition();
    }

    function prevSlide() {
        currentSlideService = (currentSlideService - 1 + slidesService.length) % slidesService.length;
        updateSlidePosition();
    }

    document.getElementById('next-btn').addEventListener('click', nextSlide);
    document.getElementById('prev-btn').addEventListener('click', prevSlide);

    updateSlidePosition();
});
