(function() {
    function $(selector) {
        return document.querySelector(selector);
    }

    $('.header__menu-button').addEventListener('click', function(e) {
        e.preventDefault();
        $('.header__full').classList.add('header__full_show');
        $('body').classList.add('no-scroll');
    });

    $('.header__close').addEventListener('click', function(e) {
        e.preventDefault();
        $('.header__full').classList.remove('header__full_show');
        $('body').classList.remove('no-scroll');
    });
})();