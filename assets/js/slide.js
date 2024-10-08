$(document).ready(function () {
    const track = document.getElementById('slider');
    const dotsContainer = document.getElementById('dots');
    const slides = document.querySelectorAll('.slide');

    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;
    let currentIndex = 0;
    let autoSlideInterval;

    // Hàm render dấu chấm (dot)
    function createDots() {
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.onclick = () => goToSlide(index);
            dotsContainer.appendChild(dot);
        });
        updateDots(); // Cập nhật dot active ban đầu
    }

    // Cập nhật dấu chấm active
    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Khi nhấn vào dấu chấm để chuyển slide
    function goToSlide(index) {
        currentIndex = index;
        setPositionByIndex();
        updateDots(); // Cập nhật dấu chấm khi chuyển slide
        resetAutoSlide(); // Đặt lại thời gian chuyển slide tự động
    }

    // Hàm xử lý khi nhấn giữ chuột
    const handleOnDown = (e) => {
        isDragging = true;
        startPos = getPositionX(e);
        track.style.cursor = 'grabbing';
        animationID = requestAnimationFrame(animation);
    };

    // Hàm xử lý khi nhả chuột
    const handleOnUp = () => {
        isDragging = false;
        cancelAnimationFrame(animationID);

        const movedBy = currentTranslate - prevTranslate;

        if (movedBy < -100 && currentIndex < slides.length - 1) {
            currentIndex += 1;
        }

        if (movedBy > 100 && currentIndex > 0) {
            currentIndex -= 1;
        }

        setPositionByIndex();
        updateDots(); // Cập nhật dấu chấm khi chuyển slide
        track.style.cursor = 'grab';
        resetAutoSlide(); // Đặt lại thời gian chuyển slide tự động
    };

    // Hàm xử lý khi di chuyển chuột
    const handleOnMove = (e) => {
        if (isDragging) {
            const currentPosition = getPositionX(e);
            currentTranslate = prevTranslate + currentPosition - startPos;
        }
    };

    // Lấy vị trí chuột X
    const getPositionX = (event) => {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    };

    // Đặt vị trí slide theo chỉ số hiện tại
    const setPositionByIndex = () => {
        currentTranslate = currentIndex * -window.innerWidth;
        prevTranslate = currentTranslate;
        setSliderPosition();
    };

    // Cập nhật vị trí slider
    const setSliderPosition = () => {
        track.style.transform = `translateX(${currentTranslate}px)`;
    };

    // Animation để mượt mà trong quá trình kéo
    const animation = () => {
        setSliderPosition();
        if (isDragging) requestAnimationFrame(animation);
    };

    // Tự động chuyển slide sau mỗi 15 giây
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            setPositionByIndex();
            updateDots(); // Cập nhật dấu chấm khi chuyển slide
        }, 15000);
    };

    // Đặt lại thời gian chuyển slide tự động
    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    };

    // Gán sự kiện chuột cho slider
    window.onmousedown = (e) => handleOnDown(e);
    window.onmouseup = handleOnUp;
    window.onmousemove = (e) => handleOnMove(e);

    // Gán sự kiện cho mobile
    window.ontouchstart = (e) => handleOnDown(e.touches[0]);
    window.ontouchend = handleOnUp;
    window.ontouchmove = (e) => handleOnMove(e.touches[0]);

    // Khởi tạo slider và dấu chấm
    window.onload = () => {
        track.style.cursor = 'grab';
        createDots(); // Tạo các dấu chấm
        setPositionByIndex();
        startAutoSlide(); // Bắt đầu chuyển slide tự động
    };
});
