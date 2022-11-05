(function() {
    document.querySelectorAll('.tabs_interactive').forEach(tabsElem => {
        const dataTabs = tabsElem.dataset.tabs;
        const contentElems = document.querySelectorAll('.content[data-tabs="'+dataTabs+'"]');
        const tabs = tabsElem.querySelectorAll('.tabs__tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', function(e) {
                e.preventDefault();
                const type = this.dataset.tab;

                contentElems.forEach(content => {
                    content.querySelectorAll('.content__item_show')
                        .forEach(item => item.classList.remove('content__item_show'));
                    content.querySelector('.content__item[data-tab="'+type+'"]').classList.add('content__item_show');
                });


                tabs.forEach(tab => {
                    tab.classList.remove('tabs__tab_active');
                });

                this.classList.add('tabs__tab_active');
            })
        });
    });

    document.querySelectorAll('.tabs__tab_active').forEach(tab => {
        const swipe = tab.closest('.swipe');
        if (swipe !== null) {
            const windowWidth = window.innerWidth;
            const containerWidth = getComputedStyle(document.documentElement).getPropertyValue('--container-width');
            let containerOffset;
            if (containerWidth === 'none') {
                containerOffset = 15;
            } else {
                containerOffset = (windowWidth - parseInt(containerWidth)) / 2;
            }

            const tabWidth = tab.offsetWidth;
            //container padding = 15px
            const tabOffset = tab.offsetLeft + containerOffset;

            const pos = tabOffset - (windowWidth - tabWidth) / 2;
            console.log(tabWidth, tabOffset, windowWidth);

            swipe.scroll(pos, 0);
        }
    });
})();