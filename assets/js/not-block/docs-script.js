
if (document.querySelector('.docs__buttons__btn-wrap') && 
    document.querySelector('.docs__contents__block')){
    let DOCSbuttons = document.querySelectorAll('.docs__buttons__btn-wrap');
    let DOCScontainers = document.querySelectorAll('.docs__contents__block');

    //фильтр
    DOCSbuttons.forEach(function(item, i, DOCSbuttons){
        //десктоп
        DOCSbuttons[i].addEventListener('click', function () {
            DOCSbuttons.forEach(function(item, e, DOCSbuttons){
                DOCSbuttons[e].classList.remove('active');
                DOCScontainers[e].classList.remove('active');
            });
            DOCSbuttons[i].classList.add('active');
            DOCScontainers[i].classList.add('active');
        });

        DOCScontainers[i].querySelector('.title').addEventListener('click', function () {
            DOCSbuttons.forEach(function(item, e, DOCSbuttons){
                DOCSbuttons[e].classList.remove('active');
                DOCScontainers[e].classList.remove('active');
            });
            DOCSbuttons[i].classList.add('active');
            DOCScontainers[i].classList.add('active');
        });
    });
}
