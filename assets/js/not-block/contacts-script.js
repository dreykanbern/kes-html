//скрипт включаения активного блока
if (document.querySelector('.contacts-links__contents .block-links')){
    let CONTACTSblock = document.querySelectorAll('.contacts-links__contents .block-links');

    CONTACTSblock.forEach(function(item, i, CONTACTSblock){
        let CONTACTSblockButton = CONTACTSblock[i].querySelector('.block-links__title');

        CONTACTSblockButton.addEventListener('click', function () {
            CONTACTSblock[i].classList.toggle('active');
        });
    });
}



