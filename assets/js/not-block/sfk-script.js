
if (document.querySelector('.sfk__buttons__button') && 
    document.querySelector('.sfk__content__container')){
    let SFKbuttons = document.querySelectorAll('.sfk__buttons__button');
    let SFKcontainers = document.querySelectorAll('.sfk__content__container');



    //фильтр контейнеров
    SFKbuttons.forEach(function(item, i, SFKbuttons){
        SFKbuttons[i].addEventListener('click', function () {
            SFKbuttons.forEach(function(item, e, SFKbuttons){
                SFKbuttons[e].classList.remove('active');
                SFKcontainers[e].classList.remove('active');
            });
            SFKbuttons[i].classList.add('active');
            SFKcontainers[i].classList.add('active');
        });
    });



    //вывод фильтра блоков
    //перебираем все контейнеры
    SFKcontainers.forEach(function(item, i, SFKcontainers){
        let SFKcontainersfiltersticky = SFKcontainers[i].querySelector('.sfk__content__container__filter__sticky');
        let SFKcontainersblock = SFKcontainers[i].querySelectorAll('.sfk__content__container__blocks [data-scroll]');
        let SFKcontainersblockDataArray = [];
        let SFKcontainersfilterstickyHtml = '';

        //добавляем все data элементы в массив и чистим его от дубликатов
        SFKcontainersblock.forEach(function(item, e, SFKcontainersblock){
            SFKcontainersblockDataArray.push(SFKcontainersblock[e].getAttribute('data-scroll'))
        });
        SFKcontainersblockDataArray = [...new Set(SFKcontainersblockDataArray)]
        
        //перебираем чистый массив и выводим фильтр
        SFKcontainersblockDataArray.forEach(function(item, o, SFKcontainersblockDataArray){
            if(o == 0){
                SFKcontainersfilterstickyHtml = '<div class="title-h4-b active" data-scroll="' + SFKcontainersblockDataArray[o] + '">' + SFKcontainersblockDataArray[o] + '</div>';
            } else {
                SFKcontainersfilterstickyHtml = '<div class="title-h4-b" data-scroll="' + SFKcontainersblockDataArray[o] + '">' + SFKcontainersblockDataArray[o] + '</div>';
            };
            SFKcontainersfiltersticky.insertAdjacentHTML('beforeend', SFKcontainersfilterstickyHtml);
        });
    });



    //скролл до блока
    //перебираем все контейнеры
    SFKcontainers.forEach(function(item, i, SFKcontainers){
        let SFKcontainersfilter = SFKcontainers[i].querySelectorAll('.sfk__content__container__filter [data-scroll]');
        let SFKcontainersblock = SFKcontainers[i].querySelectorAll('.sfk__content__container__blocks [data-scroll]');
        
        //перебираем все кнопки фильтра в контейнере
        SFKcontainersfilter.forEach(function(item, e, SFKcontainersfilter){
            SFKcontainersfilter[e].addEventListener('click', function () {

                //добавляем активный класс при клике у выбранного фильтра и удаляем у других
                SFKcontainersfilter.forEach(function(item, o, SFKcontainersfilter){
                    SFKcontainersfilter[o].classList.remove('active');
                });
                SFKcontainersfilter[e].classList.add('active');

                //получаем data у выбранного фильтра, ищем такой же атрибут у блоков в контейнере
                let firstblock = true; //проверка на первый блок
                let SFKcontainersfilterData = SFKcontainersfilter[e].getAttribute('data-scroll');

                SFKcontainersblock.forEach(function(item, u, SFKcontainersblock){
                    let SFKcontainersblockData = SFKcontainersblock[u].getAttribute('data-scroll');

                    //скроллим до элемента
                    if(SFKcontainersfilterData == SFKcontainersblockData && firstblock){
                        SFKcontainersblock[u].scrollIntoView({
                            behavior: 'smooth',
                            block: 'center',
                            inline: 'center',
                        })
                        firstblock = false;
                    }
                });
            });
        });
    });
}
