(function() {

    //скрипт включения музыки
    if (document.querySelector('.mixtape__block')){
        let MIXTAPEblock = document.querySelectorAll('.mixtape__block');

        //перебираем все блоки с музыкой
        MIXTAPEblock.forEach(function(item, i, MIXTAPEblock){
            let MIXTAPEblockPlay = MIXTAPEblock[i].querySelector('.mixtape__block__img__content__play');
            let MIXTAPEblockAudio = MIXTAPEblock[i].querySelector('audio');

            MIXTAPEblockPlay.addEventListener('click', function () {

                //проверяем нажали ли мы на тот же самый блок или нет
                //если не тот же самый, то включаем/выключем звук
                //если на другой, то выключаем все и включаем текущий

                MIXTAPEblock.forEach(function(item, e, MIXTAPEblock){
                    let MIXTAPEblockAudioStop = MIXTAPEblock[e].querySelector('audio');

                    function MIXTAPEblockPlayBlockToggle() {
                        MIXTAPEblock[i].classList.toggle('active');
                        return MIXTAPEblockAudio.paused ? MIXTAPEblockAudio.play() : MIXTAPEblockAudio.pause();
                    };
                    function MIXTAPEblockPlayBlocksControl() {
                        MIXTAPEblock[e].classList.remove('active');
                        return !MIXTAPEblockAudioStop.paused ? MIXTAPEblockAudioStop.pause() : '';
                    };

                    if(MIXTAPEblock[e] == MIXTAPEblock[i]){
                        MIXTAPEblockPlayBlockToggle();
                    } else {
                        MIXTAPEblockPlayBlocksControl();
                    };
                });
            });
        });
    }

});
//Не вызывается