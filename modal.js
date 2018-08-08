var hideModal = function() {
    modal.classList.remove("showmodal");
}

var hideModal2 = function() {
    modal2.classList.remove("showmodal");
}

var windowOnClick = function(event) {
    if (event.target === modal) {
        hideModal();
    } else if (event.target === modal2) {
        hideModal2();
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


var signupBtn = document.querySelector('[name="signUp"]');
var modal = document.querySelector('.modaloutter');
var modal2 = document.querySelector('.modaloutter2')
var submit = document.querySelector("[name='submit']");
var closeButton = document.querySelector("[name='closebutton']");
var closeButton2 = document.querySelector("[name='closebutton2']");


signupBtn.addEventListener('click', toggleModal2);

submit.addEventListener('click', toggleModal);

closeButton.addEventListener('click', hideModal);
closeButton2.addEventListener('click', hideModal2);

window.addEventListener('click', windowOnClick);
