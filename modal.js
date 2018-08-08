var hideModal = function() {
    modal.classList.remove("showmodal");
}

var hideModal2 = function() {
    modal2.classList.remove("showmodal");
}

var hideModal3 = function() {
    modal3.classList.remove("showmodal");
}

var windowOnClick = function(event) {
    if (event.target === modal) {
        hideModal();
    } else if (event.target === modal2) {
        hideModal2();
    } else if (event.target === modal3) {
        hideModal3();
    }
}

var toggleModal = function(event) {
    event.preventDefault();
    console.log('Toggle form modal.');
    modal.classList.toggle("showmodal");
}

var toggleModal2 = function(event) {
    event.preventDefault();
    console.log('Toggle modal 2');
    modal2.classList.toggle("showmodal");    
}

var toggleModal3 = function(event) {
    modal3.classList.add("showmodal");
    modalLOD.classList.add("coolFadeIn");
}

var signupBtn = document.querySelector('[name="signUp"]');
var modal = document.querySelector('.modaloutter');
var modal2 = document.querySelector('.modaloutter2');
var modal3 = document.querySelector('.modaloutter3');
var submit = document.querySelector("[name='submit']");
var closeButton = document.querySelector("[name='closebutton']");
var closeButton2 = document.querySelector("[name='closebutton2']");
var closeButton3 = document.querySelector("[name='closebutton3']");
const modalLOD = document.querySelector('.modalLOD');
const LODButton = document.querySelector(".legion");

signupBtn.addEventListener('click', toggleModal2);
submit.addEventListener('click', toggleModal);
LODButton.addEventListener('click', toggleModal3);

closeButton.addEventListener('click', hideModal);
closeButton2.addEventListener('click', hideModal2);
// legion of doom button
window.addEventListener('click', windowOnClick);
