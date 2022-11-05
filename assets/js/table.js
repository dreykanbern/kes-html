(function() {
    document.querySelectorAll('.table__open').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();

            this.closest('.table-wrap').querySelectorAll('.table__row')
                .forEach(row => row.classList.remove('table__row_hidden'));
            this.style.display = 'none';
        });
    });
})();