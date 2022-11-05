(function() {
    const swiper = new Swiper('.footer__slides', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,

        breakpoints: {
            768: {
                slidesPerView: 5,
                spaceBetween: 45,
            },
            992: {
                slidesPerView: 7,
                spaceBetween: 60,
            }
        },

        navigation: {
            nextEl: '.footer__slider-arrow_next',
            prevEl: '.footer__slider-arrow_prev',
        },

    });
})();