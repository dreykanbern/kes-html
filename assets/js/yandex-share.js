(function() {
    let share = Ya.share2(document.querySelector('.yandex-share__real-button'), {
        theme: {
            limit: 0,
            moreButtonType: 'long',
            services: 'vkontakte,odnoklassniki,telegram',

        },
    });

    document.querySelector('.yandex-share__button').addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        const popupClasses = document.querySelector('.ya-share2__popup').classList;
        popupClasses.toggle('ya-share2__popup_visible');
        popupClasses.toggle('ya-share2__popup_x-direction_left')
    });
})();