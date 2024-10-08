const slideItems = document.querySelectorAll('.slide-item');
let currentIndex = 0;

const prevButton = document.querySelector('.slider-control-prev');
const nextButton = document.querySelector('.slider-control-next');

function updateSlideItems() {
    slideItems.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentIndex) {
            item.classList.add('active');
        }
    });
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideItems.length; 
    updateSlideItems(); 
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideItems.length) % slideItems.length; 
    updateSlideItems(); 
});

function autoSlide() {
    currentIndex = (currentIndex + 1) % slideItems.length;
    updateSlideItems();
}

setInterval(autoSlide, 20000); 

updateSlideItems();
