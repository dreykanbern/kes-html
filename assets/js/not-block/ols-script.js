
if (document.querySelector('.ols__block')){
    let OLSblock = document.querySelectorAll('.ols__block');

    OLSblock.forEach(function(item, i, OLSblock){
        OLSblock[i].querySelector('.icon').addEventListener('click', function () {
            OLSblock[i].classList.toggle('active');
        });
    });
}
