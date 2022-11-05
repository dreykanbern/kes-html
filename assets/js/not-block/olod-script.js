
if (document.querySelector('.olod__block')
    && document.querySelector('.olod-modal')){

    let OLODblock = document.querySelectorAll('.olod__block');
    let OLODmodal = document.querySelector('.olod-modal');
    let OLODmodalButtonClose = OLODmodal.querySelector('.olod-modal__button-close svg');
    let OLODmodalTitle = OLODmodal.querySelector('.olod-modal__content .title');
    let OLODmodalSubtitle = OLODmodal.querySelector('.olod-modal__content .subtitle');
    let OLODmodalText = OLODmodal.querySelector('.olod-modal__content .text');

    OLODblock.forEach(function(item, i, OLODblock){
        let OLODblockButton = OLODblock[i].querySelector('.olod__block__button');
        let OLODblockTitle = OLODblock[i].querySelector('.olod__block__content .title');
        let OLODblockSubtitle = OLODblock[i].querySelector('.olod__block__content .subtitle');
        let OLODblockText = OLODblock[i].querySelector('.olod__block__content .text');

        OLODblockButton.addEventListener('click', function () {
            OLODmodalTitle.innerHTML = OLODblockTitle.innerHTML;
            OLODmodalSubtitle.innerHTML = OLODblockSubtitle.innerHTML;
            OLODmodalText.innerHTML = OLODblockText.innerHTML;

            OLODmodal.classList.add('active');
            document.querySelector('body').classList.add('overflowhidden');
        });
    });

    OLODmodalButtonClose.addEventListener('click', function () {
        OLODmodal.classList.remove('active');
        document.querySelector('body').classList.remove('overflowhidden');

        OLODmodalTitle.innerHTML = '';
        OLODmodalSubtitle.innerHTML = '';
        OLODmodalText.innerHTML = '';
    });
}



if (document.querySelector('.olod-blag-swiper')){
    let OLODBLAGswiper = new Swiper('.olod-blag-swiper', {
        slidesPerView: 'auto',
        slideClass: 'olod-blag__block',
        navigation: {
            prevEl: ".olod-blag__controls__buttons-prev",
            nextEl: ".olod-blag__controls__buttons-next",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
}



if (document.querySelector('.olod-blag__block__button')
    && document.querySelector('.olod-blag-modal')){

    let OLODBLAGblock = document.querySelectorAll('.olod-blag__block');
    let OLODBLAGmodal = document.querySelector('.olod-blag-modal');
    let OLODBLAGmodalContent = OLODBLAGmodal.querySelector('.olod-blag-modal__content');

    OLODBLAGblock.forEach(function(item, i, OLODBLAGblock){
        let OLODBLAGblockImg = OLODBLAGblock[i].querySelector('.olod-blag__block__img');
        let OLODBLAGblockButton = OLODBLAGblock[i].querySelector('.olod-blag__block__button');

        OLODBLAGblockButton.addEventListener('click', function () {
            OLODBLAGmodalContent.innerHTML = OLODBLAGblockImg.innerHTML;

            OLODBLAGmodal.classList.add('active');
            document.querySelector('body').classList.add('overflowhidden');
        });
    });

    OLODBLAGmodal.addEventListener('click', function () {
        OLODBLAGmodal.classList.remove('active');
        document.querySelector('body').classList.remove('overflowhidden');

        OLODBLAGmodalContent.innerHTML = '';
    });
}
