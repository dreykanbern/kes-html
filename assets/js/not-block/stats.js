let statIframe = document.querySelector(".stat-iframe");
let timesLoaded = 0;

statIframe.addEventListener('load', function() {
    const query = encodeURIComponent(statIframe.contentWindow.location.search);
    const file = encodeURIComponent(statIframe.contentWindow.location.pathname.split('/').pop());

    if (timesLoaded > 0) {
        window.scroll(0, 250);
    }

    history.replaceState({}, 'stat', window.location.pathname + '?query=' + query + '&file=' + file);
    timesLoaded++;
});

window.addEventListener('message', function(e) {
    if (e.origin !== location.origin) {
        return;
    }

    if (typeof e.data === 'object') {
        if (e.data.type === 'stats') {
            if (e.data.height > 500) {
                statIframe.style.height = e.data.height + 'px';
            }
        }
    }


}, false);