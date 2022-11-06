document.querySelectorAll('.modal__overlay').forEach(el => {
    el.addEventListener('click', function(e) {
        const modal = this.closest('.modal');
        modal.classList.remove('modal_show');
        modal.querySelector('iframe').remove();
    });
});