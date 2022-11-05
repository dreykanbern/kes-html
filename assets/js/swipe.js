/* No scripts for swiping! Its pure css */
/* Here's container resize script */
(function() {
    function setContainerPadding() {
        if (window.matchMedia('(max-width: 576px)').matches) {
            this.style.paddingRight = '15px';
        } else if (window.matchMedia('(max-width: 992px)').matches) {
            const containerWidth = getComputedStyle(document.documentElement).getPropertyValue('--container-width');
            const padding = (document.body.clientWidth - parseInt(containerWidth)) / 2;
            this.style.paddingRight = Math.round(padding) + 'px';
        } else {
            this.style.paddingRight = null;
        }

    }

    document.querySelectorAll('.swipe__elem').forEach(el => {
        setContainerPadding.call(el);
        window.addEventListener('resize', setContainerPadding.bind(el));
    });
})();