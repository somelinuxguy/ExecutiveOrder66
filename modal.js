var hideModal = function() {
    modal.classList.remove("showmodal");
}

var windowOnClick = function(event) {
    if (event.target === modal) {
        hideModal();
    }
    if (event.target === modalLOD) {
        modalLOD.classList.add("hide");
    }
}

var toggleModal = function(event) {
    event.preventDefault();
    console.log('Toggle form modal.');
    modal.classList.toggle("showmodal");
}

var toggleLODModal = function(event) {
    modalLOD.classList.remove("hide");
    modalLOD.classList.add("coolFadeIn");
}

const modal = document.querySelector('.modaloutter')
const submit = document.querySelector("[name='submit']")
const closeButton = document.querySelector(".closebutton")

const modalLOD = document.querySelector('.modalLOD');
const LODButton = document.querySelector(".legion");

submit.addEventListener('click', toggleModal);
closeButton.addEventListener('click', hideModal);
// legion of doom button
LODButton.addEventListener('click', toggleLODModal);

window.addEventListener('click', windowOnClick);