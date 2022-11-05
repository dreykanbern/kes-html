(function() {
    document.querySelectorAll('.accordion__title').forEach(title => {
        title.addEventListener('click', function(e) {
            let content = this.parentElement.querySelector('.accordion__content');
            this.classList.toggle('accordion__title_active');
            this.closest('.accordion__item').classList.toggle('accordion__item_active');

            if (content.classList.contains('accordion__content_visible')) {
                content.classList.remove('accordion__content_visible');
                content.style.maxHeight = 0;
            } else {
                content.classList.add('accordion__content_visible');
                content.style.maxHeight = (content.scrollHeight + 22) + 'px';
            }
        });
    });

    window.addEventListener('resize', () => {
        document.querySelectorAll('.accordion__content_visible').forEach(el => {
            el.style.maxHeight = (el.scrollHeight + 22) + 'px';
        });
    });
})();

