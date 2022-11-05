jQuery(function($) {
    $(document).on('change', '.select-season__select', function(e) {
        $(e.target).closest('.select-season').submit();
    });
});