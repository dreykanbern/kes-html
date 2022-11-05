(function() {
    document.querySelectorAll('.open-video').forEach(video => {
        video.addEventListener('click', function(e) {
            e.preventDefault();

            const modal = document.querySelector('.modal_video');

            document.querySelector('.modal__video-container')
                .insertAdjacentHTML('beforeend',
                `<iframe src="`+video.dataset.video+`" class="modal__video" frameborder="0" allowfullscreen></iframe>`);
            modal.classList.add('modal_show');
        });
    });
})();