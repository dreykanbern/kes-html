(function() {
    document.querySelectorAll('.dropdown-menu__item').forEach(elem => {
        elem.addEventListener('click', function(e) {
            if (e.target.closest('.menu-item').classList.contains('menu-item-has-children')) {
                e.preventDefault();
            } else {
                return;
            }

            let submenu = this.querySelector('.dropdown-menu__sub-menu');
            this.classList.toggle('dropdown-menu__item_opened');
            submenu.classList.toggle('dropdown-menu__sub-menu_show');
        });
    });
})();