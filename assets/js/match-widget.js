(function() {
    const open = document.querySelectorAll('.open-match-widget');
    const widgetElement = document.querySelector('.match-widget');

    open.forEach(el => {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            toggleWidget();
        });
    });

    function toggleWidget() {
        widgetElement.classList.toggle('match-widget_visible');
        open.forEach(el => el.querySelector('.rotate').classList.toggle('rotate_180'));
    }

    let swiper = new Swiper('.match-widget__games', {
        slidesPerView: 'auto',
        freeMode: true,
        navigation: {
            enabled: true,
            nextEl: '.match-widget__games-next',
            prevEl: '.match-widget__games-prev',
        },
    });

    let widget = {
        propertyNames: [
            'showAllGames',
        ],
        properties: {},

        init(swiper) {
            const self = this;
            this.swiper = swiper;

            this.propertyNames.forEach(propertyName => {
                if (widgetElement.dataset.hasOwnProperty(propertyName)) {
                    let value = widgetElement.dataset[propertyName];
                    if (value === 'true') {
                        value = true;
                    } else if (value === 'false') {
                        value = false;
                    }
                    self.properties[propertyName] = value;
                }
            });
        },

        loadCategory(id) {
            const self = this;

            this.getCategoryGames(id)
                .then(games => self.replaceGames(games));
        },

        getCategoryGames(id) {
            if (Array.isArray(id)) {
                id = id.join(',');
            }

            return fetch('https://reg.infobasket.su/Comp/GetCalendar/?comps='+id+'&format=json&max=50')
                .then(resp => resp.json());
        },

        replaceGames(games) {
            const self = this;
            swiper.removeAllSlides();
            games.forEach(game => {
                const date = new Date(game.GameDate);


                let status = game.DisplayDateTimeLocal;
                if (game.GameStatus === 1) {
                    status += ' завершен';
                }

                let class1 = '', class2 = '';
                const winnerClass = 'match-widget__contestant_winner';

                if (game.ScoreA > game.ScoreB) {
                    class1 = winnerClass;
                } else if (game.ScoreB > game.ScoreA) {
                    class2 = winnerClass;
                }

                let link = '/games/?game=%gameId%&apiUrl=%apiUrl%'
                    .replace('%gameId%', game.GameID)
                    .replace('%apiUrl%', 'https://reg.infobasket.su');

                const scoreA = game.ScoreA !== null ? game.ScoreA : '--';
                const scoreB = game.ScoreB !== null ? game.ScoreB : '--';

                const replace = {
                    '%link%': link,
                    '%game_status%': status,
                    '%contestant-1-img%': game.TeamLogoA,
                    '%contestant-1-name%': game.ShortTeamNameAru,
                    '%contestant-1-result%': scoreA,
                    '%contestant-1-class%': class1,
                    '%contestant-2-img%': game.TeamLogoB,
                    '%contestant-2-name%': game.ShortTeamNameBru,
                    '%contestant-2-result%': scoreB,
                    '%contestant-2-class%': class2,
                };

                let html = self.gameHTML;
                for (let key in replace) {
                    html = html.replace(key, replace[key]);
                }

                swiper.appendSlide(html);
            });
        },

        gameHTML: `
            <a target="_blank" href="%link%" class="match-widget__game swiper-slide">
                <div class="match-widget__game-top">
                    <div class="match-widget__game-status">%game_status%</div>
                    <div class="match-widget__game-more">
                        <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.99998 0.600098C1.2268 0.600098 0.599976 1.22689 0.599976 2.0001C0.599976 2.7733 1.2268 3.4001 1.99998 3.4001C2.77318 3.4001 3.39998 2.7733 3.39998 2.0001C3.39998 1.22689 2.77318 0.600098 1.99998 0.600098ZM7.99998 0.600098C7.2268 0.600098 6.59998 1.22689 6.59998 2.0001C6.59998 2.7733 7.2268 3.4001 7.99998 3.4001C8.77318 3.4001 9.39998 2.7733 9.39998 2.0001C9.39998 1.22689 8.77318 0.600098 7.99998 0.600098ZM14 0.600098C13.2268 0.600098 12.6 1.22689 12.6 2.0001C12.6 2.7733 13.2268 3.4001 14 3.4001C14.7732 3.4001 15.4 2.7733 15.4 2.0001C15.4 1.22689 14.7732 0.600098 14 0.600098Z" fill="#151A25"/>
                        </svg>
                    </div>
                </div>
                <div class="match-widget__contest">
                    <div class="match-widget__contestant %contestant-1-class%">
                        <div class="match-widget__contestant-left">
                            <img src="%contestant-1-img%" class="match-widget__contestant-img">
                            <div class="match-widget__contestant-name">%contestant-1-name%</div>
                        </div>
                        <div class="match-widget__contestant-result">%contestant-1-result%</div>
                    </div>
                    <div class="match-widget__contestant %contestant-2-class%">
                        <div class="match-widget__contestant-left">
                            <img src="%contestant-2-img%"" class="match-widget__contestant-img">
                            <div class="match-widget__contestant-name">%contestant-2-name%</div>
                        </div>
                        <div class="match-widget__contestant-result">%contestant-2-result%</div>
                    </div>
                </div>

            </a>
        `,


    };
    widget.init(swiper);

    window.widget = widget;

    function getIdFromCategory(categoryOptionElement) {
        if (categoryOptionElement.value) {
            return categoryOptionElement.value;
        } else {
            const index = categoryOptionElement.dataset.index;
            const subcategory = document
                .querySelector('.match-widget__select-subcategory_category_' + index + ' option:checked');

            if (!subcategory) {
                return null;
            }

            return subcategory.value;
        }
    }

    window.addEventListener('DOMContentLoaded', function() {
        if (widget.properties.showAllGames === true) {
            const ids = [];

            const options = document.querySelectorAll(
                '.match-widget__select-category option, .match-widget__select-subcategory option',
            );
            options.forEach(option => {
                if (option.value !== '') {
                    ids.push(option.value);
                }
            });

            if (ids.length > 0) {
                widget.loadCategory(ids);
            }
        } else {
            const category = document.querySelector('.match-widget__select-category option:checked');
            const id = getIdFromCategory(category);
            if (id) {
                widget.loadCategory(id);
            }
        }
    });

    jQuery(function($) {
        $(document).on('change', '.match-widget__select-category', function(e) {
            const selectedCategory = e.target.options[e.target.selectedIndex];
            const selectedIndex = selectedCategory.dataset.index;

            document.querySelectorAll('.match-widget__select-subcategory').forEach(el => {
                el.classList.remove('match-widget__select-subcategory_show');
            });

            if (typeof selectedIndex !== 'undefined') {
                const subcategories = document.querySelector('.match-widget__select-subcategory_category_' + selectedIndex);
                if (!selectedCategory.value) {
                    subcategories.classList.add('match-widget__select-subcategory_show');
                }

                id = getIdFromCategory(selectedCategory);

                widget.loadCategory(id);
            }


        });

        $(document).on('change', '.match-widget__select-subcategory', function(e) {
            const selected = e.target.options[e.target.selectedIndex];
            widget.loadCategory(selected.value);
        });
    });
})();

