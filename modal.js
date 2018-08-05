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
    modal.classList.toggle("showmodal");
}

var modal = document.querySelector('.modaloutter')
var submit = document.querySelector(".buttonclass")
var closeButton = document.querySelector(".closebutton")

submit.addEventListener('click', toggleModal);
closeButton.addEventListener('click', hideModal);

window.addEventListener('click', windowOnClick);