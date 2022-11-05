jQuery(function($) {
    document.querySelectorAll('.filter-bar_send-on_select').forEach(filter => {
        let form;
        if (filter.tagName === 'FORM') {
            form = filter;
        } else {
            form = filter.querySelector('form');
        }

        $(filter).on('change', '.filter-bar__select', function(e) {
            console.log('sending')
            form.submit();
        });

        filter.querySelectorAll('.date-input').forEach(el => {
            el._flatpickr.config.onChange.push(function(selectedDates, dateStr, instance) {
                if (selectedDates.length > 1) {
                    form.submit();
                }
            });
        });

    });
});