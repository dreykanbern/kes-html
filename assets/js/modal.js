document.querySelectorAll('.modal__overlay').forEach(el => {
    el.addEventListener('click', function(e) {
        const modal = this.closest('.modal');
        modal.classList.remove('modal_show');
        modal.querySelector('iframe').remove();
    });
});
const link = document.getElementById("link")
const popupEdit = document.getElementById("popup")
const closeAdd = document.getElementById("close_popup")

function openPopup (popup) {
    popup.classList.add ('modal_show');
    document.addEventListener("keydown", keyHandler);
  }
function closePopup (popup) {
    popup.classList.remove ('modal_show');
    document.removeEventListener("keydown", keyHandler);
  }
function keyHandler(evt) {    
    if (evt.key === 'Escape') {
    const popup = document.querySelector('.modal_show');
    closePopup (popup);
  }
  } 
function editPopup(){    
    openPopup (popupEdit);
    editFormValidator.resetValidForm();
  }
  function closePopupAdd(evt) {
    closePopup(popupEdit, evt)
    /* formAdd.reset() */
}
link.addEventListener ('click', editPopup);//добавить
closeAdd.addEventListener ('click', closePopupAdd);
