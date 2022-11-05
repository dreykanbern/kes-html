(function() {
    document.querySelectorAll('.fade-card__mobile-open').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            this.closest('.fade-card').classList.toggle('fade-card_active');
            this.querySelector('.fade-card__mobile-open-icon').classList.toggle('fade-card__mobile-open-icon_active');
        });
    });
})();