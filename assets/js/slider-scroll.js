(function() {
    document.querySelectorAll('.slider-scroll').forEach(slider => {
        let args = {
            slidesPerView: 1,
            spaceBetween: 40,
            threshold: 10,

            breakpoints: {
                768: {
                    slidesPerView: 2,
                }
            },

            scrollbar: {
                el: '.slider__scroll',
                draggable: true,
                dragClass: 'slider__scroll-drag',
            },

            navigation: {
                nextEl: '.slider-scroll__arrow_next',
                prevEl: '.slider-scroll__arrow_prev',
            },

            pagination: {
                el: slider.querySelector('.slider__dots'),
                type: 'bullets',
                bulletClass: 'slider__dot',
                bulletActiveClass: 'slider__dot_active',
            },
        };

        if (typeof slider.dataset.hasOwnProperty('initialSlide')) {
            args.initialSlide = slider.dataset.initialSlide;
            // args.initialSlide = ;
        }

        new Swiper(slider, args);
    });
})();