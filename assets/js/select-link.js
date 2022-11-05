jQuery(function($) {
    $(document).on('change', '.select-link__select', function(e) {
        location.replace(e.target.options[e.target.selectedIndex].value);
    });
});