(function() {
    document.querySelectorAll('.slider-grid__slides').forEach(slider => {
        new Swiper(slider, {
            loop: false,

            spaceBetween: 40,
            navigation: {
                nextEl: slider.querySelector('.slider-grid__real-arrow_next'),
                prevEl: slider.querySelector('.slider-grid__real-arrow_prev'),
            },

            pagination: {
                el: slider.querySelector('.slider__dots'),
                type: 'bullets',
                bulletClass: 'slider__dot',
                bulletActiveClass: 'slider__dot_active',
            },

            slidesPerViews: 1,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    grid: {
                        rows: 2,
                        fill: 'row'
                    },
                },
                992: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    grid: {
                        rows: 2,
                        fill: 'row',
                    },
                }
            },
        });
    });

    document.querySelectorAll('.slider-grid__arrow[data-emulate]').forEach(arrow => {
        arrow.addEventListener('click', function(e) {
            const emulated = document.querySelector(this.dataset.emulate);
            emulated.click();
        });
    });
})();