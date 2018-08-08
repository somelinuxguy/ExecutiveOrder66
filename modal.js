const hideModal = function() {
    modal.classList.remove("showmodal");
}

const windowOnClick = function(event) {
    if (event.target === modal) {
        hideModal();
    }
}

const toggleModal = function(event) {
    event.preventDefault();
    console.log('Toggle form modal.');
    modal.classList.toggle("showmodal");
}

const modal = document.querySelector('.modaloutter')
const submit = document.querySelector("[name='submit']")
const closeButton = document.querySelector(".closebutton")

submit.addEventListener('click', toggleModal);
closeButton.addEventListener('click', hideModal);

window.addEventListener('click', windowOnClick);