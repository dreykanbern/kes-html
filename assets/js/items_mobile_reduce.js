(function() {
    document.querySelectorAll('.items_mobile_reduce').forEach(items => {
        items.querySelector('.items__mobile-expand').addEventListener('click', function() {
            items.classList.remove('items_mobile_reduce');
            this.classList.add('block_hidden');
        });
    });
})();