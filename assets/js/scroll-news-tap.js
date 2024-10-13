// $(document).ready(function() {
//     // news tap
//     const newsTabs = document.querySelector('.news-tabs-box');

//     let isDown = false;
//     let startX;
//     let scrollLeft;

//     newsTabs.addEventListener('mousedown', (e) => {
//         isDown = true;
//         newsTabs.classList.add('active');
//         startX = e.pageX - newsTabs.offsetLeft;
//         scrollLeft = newsTabs.scrollLeft;
//     });

//     newsTabs.addEventListener('mouseleave', () => {
//         isDown = false;
//         newsTabs.classList.remove('active');
//     });

//     newsTabs.addEventListener('mouseup', () => {
//         isDown = false;
//         newsTabs.classList.remove('active');
//     });

//     newsTabs.addEventListener('mousemove', (e) => {
//         if (!isDown) return;
//         e.preventDefault();
//         const x = e.pageX - newsTabs.offsetLeft;
//         const walk = (x - startX) * 2; // Tốc độ kéo
//         newsTabs.scrollLeft = scrollLeft - walk;
//     });
// })