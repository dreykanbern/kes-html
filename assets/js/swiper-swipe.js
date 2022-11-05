(function() {
    document.querySelectorAll('.swiper-swipe').forEach(swipe => {
        new Swiper(swipe, {
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: '.swiper-swipe__scroll',
                dragClass: 'slider__scroll-drag',
            },
            resistanceRatio: 0,

            breakpoints: {
                992: {
                    enabled: false,
                }
            }
        });
    });
})();