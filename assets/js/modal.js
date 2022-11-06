// modalOverlay.forEach(el => {
//     el.addEventListener('click', function(e) {
//         const modal = this.closest('.modal');
//         modal.classList.remove('modal_show');
//         modal.querySelector('iframe').remove();
//     });
// });

//Пишу локальные классы, потому что хз почему не скрываете из дома элементы
let modal = document.querySelector('.modal_contact');
let modalOverlay = modal.querySelector('.modal__overlay');
let modalContent = modal.querySelector('.modal__elem');
let openModalButtons = document.querySelectorAll('.open-modal');
let closeModalButton = modal.querySelector('.modal__close')

openModalButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        modal.classList.add('active');
        modalOverlay.classList.add('active');
        modalContent.classList.add('active');
    })
});

closeModalButton.addEventListener('click', () => {
    modal.classList.remove('active');
    modalOverlay.classList.remove('active');
    modalContent.classList.remove('active');
});

//Убирает активный класс, если клик таргет за форму уходит
document.addEventListener('click', (e) => {
    if(e.target === modalOverlay) {
        modal.classList.remove('active');
        modalOverlay.classList.remove('active');
        modalContent.classList.remove('active');
    }
});