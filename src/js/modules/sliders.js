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
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: swiper,
            },
        });
    }
});
