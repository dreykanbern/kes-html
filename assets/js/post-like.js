(function() {
    const likeButtons = document.querySelectorAll('.post-like_usable');

    likeButtons.forEach(el => el.addEventListener('click', function(e) {
        e.preventDefault();

        const id = this.dataset.id;

        const data = {
            action: 'like_post',
            id,
        };

        likeButtons.forEach(btn => {
            const counter = btn.querySelector('.post-like__counter');

            if (btn.classList.contains('post-like_set')) {
                counter.innerText--;
            } else {
                counter.innerText++;
            }

            btn.classList.toggle('post-like_set');
        });

        fetch(ajaxUrl, {
            method: 'POST',
            credentials: 'same-origin',
            body: new URLSearchParams(data).toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(response => response.json())
            .then(data => {

            });
    }));
})();