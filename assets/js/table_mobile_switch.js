(function() {
    document.querySelectorAll('.table_mobile_switch').forEach(table => {
        const switches = table.querySelectorAll('.table__switch');
        switches.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();

                table.classList.remove('table_switch-show-first-column');

                switches.forEach(el => el.classList.remove('table__switch_active'));
                this.classList.add('table__switch_active');

                const column = [...this.parentNode.children].indexOf(this) + 1;

                table.querySelectorAll('.table__body .table__cell_show')
                    .forEach(cell => cell.classList.remove('table__cell_show'));
                table.querySelectorAll('.table__body .table__cell:nth-child(' + column + ')')
                    .forEach(cell => cell.classList.add('table__cell_show'));
            });
        });
    });
})();