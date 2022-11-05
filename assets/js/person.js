(function() {
    document.querySelectorAll('.person__more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            this.closest('.person').querySelector('.person__content')
                .classList.toggle('person__content_hidden');
            this.classList.toggle('person__more_active');
        });
    });
})();