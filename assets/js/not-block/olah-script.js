
if (document.querySelector('.olah .olah-wrap-second .circle')){
    function funcOLAHblockscroll() {
        let OLAHblock = Array.from(document.querySelectorAll('.olah .olah-wrap-second .content__block'));
        let windowInnerHeight = (window.innerHeight || document.documentElement.innerHeight) / 2;
        document.addEventListener('scroll', function() {
            OLAHblock.forEach(function(item, i, OLAHblock){
                if(OLAHblock[i].getBoundingClientRect().top <= windowInnerHeight){
                    OLAHblock[i].querySelector('.circle').classList.add('active');
                } else{
                    OLAHblock[i].querySelector('.circle').classList.remove('active');
                };
            });
        });
    }
    funcOLAHblockscroll();

    window.addEventListener('resize', funcOLAHblockscroll);
}
