(function() {
    const modal =  document.querySelector('.gallery__modal');
    let oldPage = 1;

    document.querySelector('.gallery__modal-overlay').addEventListener('click', function(e) {
        modal.classList.remove('gallery__modal_show');
    });

    const thumbsSlider = new Swiper('.gallery__thumbs-slider', {
        // enabled: false,
        spaceBetween: 10,
        threshold: 15,
        centeredSlides: true,
        centeredSlidesBounds: true,
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 7,
            }
        },
        navigation: {
            nextEl: '.gallery-thumbs-arrow_next',
            prevEl: '.gallery-thumbs-arrow_prev',
        },
        preloadImages: false,
        // lazy: true,
    });

    const mainSlider = new Swiper('.gallery__main-slider', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.gallery__main-slider .slider__arrow_next',
            prevEl: '.gallery__main-slider .slider__arrow_prev',
        },
        speed: 400,
        spaceBetween: 10,
        preloadImages: false,
        lazy: true,
    });

    jQuery(document).on('click', '.gallery__link', function(e) {
        e.preventDefault();

        const index = this.dataset.index;

        modal.classList.add('gallery__modal_show');
        mainSlider.slideTo(index);

        const thumbs = document.querySelectorAll('.gallery__thumb');

        thumbs.forEach(el => el.classList.remove('gallery__thumb_active'));
        // document.querySelector('.gallery__thumb[data-index="'+index+'"]').classList.add('gallery__thumb_active');
    });

    thumbsSlider.on('click', function(swiper, e) {
        if (e.target.classList.contains('gallery__thumb')) {
            const index = e.target.dataset.index;
            mainSlider.slideTo(index);
        }
    });

    mainSlider.on('slideChange', function(swiper) {
        thumbsSlider.slideTo(swiper.activeIndex);


        document.querySelectorAll('.gallery__thumb').forEach(el => el.classList.remove('gallery__thumb_active'));
        document.querySelector('.gallery__thumb[data-index="'+swiper.activeIndex+'"]').classList.add('gallery__thumb_active');

        if (window.matchMedia('(max-width: 768px)').matches) {
            const number = swiper.slides.length;
            if (number - swiper.activeIndex < 3 && galleryPageLast * 21 < galleryTotal) {
                loadNextPage();
            }
        }
    });

    function loadNextPage() {
        const currentPage = ++galleryPageLast;
        fetch(ajaxUrl + '?page=' + currentPage + '&action=get_gallery_slides&id='+pageId)
            .then(response => response.json())
            .then(data => {
                if (data.hasOwnProperty('error')) {
                    return;
                }

                thumbsSlider.appendSlide(data.thumbs);
                mainSlider.appendSlide(data.main);

                document.querySelector('.gallery__previews[data-page="'+currentPage+'"]').innerHTML = data.cards;

                window.lazyLoadInstance.update();
            });
    }

    thumbsSlider.on('slideChange', function(swiper) {
        const number = swiper.slides.length;
        if (number - swiper.activeIndex < 7 && galleryPageLast * 21 < galleryTotal) {
            loadNextPage();
        }
    });

    document.querySelector('.gallery__all').addEventListener('click', function(e) {
        e.preventDefault();

        for (; oldPage < Math.ceil(galleryTotal / 21); oldPage++) {
            loadNextPage();
        }

        document.querySelectorAll('.gallery__previews').forEach(page => {
            page.classList.remove('gallery__previews_hidden');
        });

        document.querySelector('.gallery__pagination').classList.add('block', 'block_hidden');
        this.classList.add('block', 'block_hidden');
    });

    jQuery('.gallery__pagination').pagination({
        dataSource: pages,
        pageSize: 1,
        locator: 'items',
        callback: function (data, pagination) {
            window.scroll(0, 0);

            const page = pagination.pageNumber;
            jQuery('.gallery__previews').addClass('gallery__previews_hidden');
            jQuery('.gallery__previews').eq(page-1).removeClass('gallery__previews_hidden');

            for (; oldPage < page; oldPage++) {
                loadNextPage();
            }
        },
        prevText: `<div class="prev control pagination__control">
            <img class="control__icon" src="/wp-content/themes/kes/assets/img/icon/arrow-left.svg" alt="">
            Предыдущая страница
        </div>`,
        nextText: `<div class="next control pagination__control pagination__control_align_right">
            Следующая страница
            <img class="control__icon control__icon_reflect" src="/wp-content/themes/kes/assets/img/icon/arrow-left.svg" alt="">
        </div>`,
        pageRange: 1,
    });

})();