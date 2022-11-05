jQuery(function($) {
    $(document).on('change', '.select-content', function(e) {
        const selected = e.target.options[e.target.selectedIndex];
        const target = document.querySelector(e.target.dataset.target);

        if (selected.value === 'all') {
            target.querySelectorAll('.content__item').forEach(el => {
                el.classList.add('content__item_show');
            });
        } else {
            target.querySelectorAll('.content__item').forEach(el => el.classList.remove('content__item_show'));
            target.querySelectorAll('.content__item[data-option="'+selected.value+'"]').forEach(el => el.classList.add('content__item_show'));
        }

    });
});