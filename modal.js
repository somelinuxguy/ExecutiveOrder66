var hideModal = function() {
    modal.classList.remove("showmodal");
}

var windowOnClick = function(event) {
    if (event.target === modal) {
        hideModal();
    }
}

var toggleModal = function(event) {
    event.preventDefault();
    console.log('Toggle form modal.');
    modal.classList.toggle("showmodal");
}

var modal = document.querySelector('.modaloutter')
var submit = document.querySelector("[name='submit']")
var closeButton = document.querySelector(".closebutton")

submit.addEventListener('click', toggleModal);
closeButton.addEventListener('click', hideModal);

window.addEventListener('click', windowOnClick);