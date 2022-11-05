(function() {
    document.querySelectorAll('.drawer-card__title').forEach(title => {
        title.addEventListener('click', function(e) {
            e.preventDefault();

            this.closest('.drawer-card').classList.toggle('drawer-card_draw');

        });
    });

    document.body.addEventListener('click', function(e) {
        if (window.matchMedia('(min-width: 768px)').matches) {
            if (e.target.closest('.drawer-card__body') === null) {
                document.querySelectorAll('.drawer-card').forEach(card => {
                    card.classList.remove('drawer-card_draw');
                });
            }
        }
    });
})();