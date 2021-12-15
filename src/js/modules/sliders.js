import simpleLightBox from 'simple-lightbox';

document.addEventListener('DOMContentLoaded', () => {
    if(typeof Swiper !== 'undefined') {
        let swiper = new Swiper(".js-slider-thumbs", {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 4,
            direction: 'vertical',
            watchSlidesProgress: true,
        });
        let swiper2 = new Swiper(".js-slider-main", {
            loop: true,
            spaceBetween: 10,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: swiper,
            },
        });
    }


    $('.card-slider__slide-main-link').simpleLightbox();
});
