
if (document.querySelector('.olzzo__row__block')){
    let OLZZOblock = document.querySelectorAll('.olzzo__row__block');

    OLZZOblock.forEach(function(item, i, OLZZOblock){
        OLZZOblock[i].querySelector('.button').addEventListener('click', function () {
            OLZZOblock[i].classList.toggle('active');
        });
    });
}