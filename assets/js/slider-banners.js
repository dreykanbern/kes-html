(function() {
    const progress = {
        bar: null,
        swiper: null,
        value: 0,

        init: function(barElement, swiper) {
            this.bar = barElement;
            this.swiper = swiper;

            this.correct();

            if (this.bar) {
                this.bar.style.width = '100%';
            }

            setInterval(() => {
                this.increase();
            }, 200);
        },

        increase: function() {
            if (this.value >= 100) {
                this.moveTo(0);
                this.swiper.slideTo(0);
                return;
            }

            this.value++;

            if (this.value % 25 === 0) {
                this.swiper.slideNext();
            }

            this.correct();
        },

        correct: function() {
            if (this.bar !== null) {
                this.bar.style.transform = 'translate3d(0px, 0px, 0px) scaleX('+this.value/100+') scaleY(1)';
            }
        },

        moveTo(slide) {
            this.value = slide * 25;
            this.correct();
        },
    }


    document.querySelectorAll('.slider-banners').forEach(slider => {
        const navItems = slider.querySelectorAll('.slider-banners__nav-item');

        const swiper = new Swiper(slider.querySelector('.slider-banners__slides'), {
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            navigation: false,

            pagination: {
                el: slider.querySelector('.slider__dots'),
                type: 'bullets',
                bulletClass: 'slider__dot',
                bulletActiveClass: 'slider__dot_active',
                //css fix
                horizontalClass: 'slider__dots_horizontal',
            },

            breakpoints: {
                992: {
                    pagination: {
                        el: ".progress",
                        type: "progressbar",
                        progressbarFillClass: 'progress__bar',
                    },

                    allowTouchMove: false,
                },
            },

            on: {
                init: function (swiper) {
                    const progressBar = slider.querySelector('.progress__bar');
                    progress.init(progressBar, swiper);
                },
                slideChange: function(swiper) {
                    const curItem = slider.querySelector('.slider-banners__nav-item[data-slide="'+swiper.activeIndex+'"]')
                    navItems.forEach(item => item.classList.remove('slider-banners__nav-item_active'));
                    curItem.classList.add('slider-banners__nav-item_active');
                }
            },
        });

        navItems.forEach(item => {
            item.addEventListener('click', function(e) {
                if (!this.classList.contains('slider-banners__nav-item_active')) {
                    e.preventDefault();

                    swiper.slideTo(this.dataset.slide);
                    progress.moveTo(this.dataset.slide);
                }
            });
        });
    });
})();