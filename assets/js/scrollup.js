const btnUp = {
    el: document.querySelector('.scrollup'),
    show() {
        this.el.classList.remove('scrollup_hide');
    },
    hide() {
        this.el.classList.add('scrollup_hide');
    },
    addEventListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            scrollY > 400 ? this.show() : this.hide();
        });
        document.querySelector('.scrollup').onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}

btnUp.addEventListener();