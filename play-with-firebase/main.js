// Initialize Firebase
var config = {
  apiKey: firebaseAPIKey,
  databaseURL: "https://play-with-firebase-" + firebaseIdentifier + ".firebaseio.com",
  projectId: "play-with-firebase-" + firebaseIdentifier,
  messagingSenderId: "493241063763"
};
firebase.initializeApp(config);
var database = firebase.database();

// Clear values in form
function clearForm(formClass){
  var inputElements = document.querySelectorAll('.' + formClass + ' input, .'+ formClass + ' textarea');
  for (element of inputElements) {
    element.value = '';
  };
  var submitButton = document.querySelector('.' + formClass + ' [type="submit"]');
  submitButton.value = 'Submit';
}

//Write User to database with username as key
function writeUserData(userData) {
  firebase.database().ref('users/' + userData.username).set(userData);
}

var createFormElement = document.querySelector('.create');
createFormElement.addEventListener('submit', (event) => {
  event.preventDefault();
  var userInput = document.querySelector('.create [name="user"]');
  var commentInput = document.querySelector('.create [name="comment"]');
  var userData = {username: userInput.value,
                  comment: commentInput.value};
  writeUserData(userData);
  clearForm('create');
})

// Write user to database with Unique ID as key
function createIdAndWriteUserData(userData) {
  firebase.database().ref('users').push(userData);
}

var createWithIdFormElement = document.querySelector('.create-with-id');
createWithIdFormElement.addEventListener('submit', (event) => {
  event.preventDefault();
  var userInput = document.querySelector('.create-with-id [name="user"]');
  var commentInput = document.querySelector('.create-with-id [name="comment"]');
  var userData = {username: userInput.value,
                  comment: commentInput.value};
  createIdAndWriteUserData(userData);
  clearForm('create-with-id');
})

var clearDisplay = function(dataDisplayElement) {
  while (dataDisplayElement.firstChild) {
    dataDisplayElement.firstChild.remove();
  }
}

// Display data from database
var displayData = function(userData, dataDisplayElement) {
  var userDataObject = userData.val();
  for (userKey in userDataObject) {
    var user = userDataObject[userKey];
    var userDisplay = document.createElement('div');
    userDisplay.textContent = `Key: ${userKey} | Username: ${user.username} | Comment: ${user.comment}`;
    dataDisplayElement.appendChild(userDisplay);
  }
}

// Read data from database
var users = firebase.database().ref('users');
users.on('value', (userData) => {
  var dataDisplayElement = document.querySelector('.user-data');
  clearDisplay(dataDisplayElement);
  displayData(userData, dataDisplayElement);
})

// Update data with unique key
function updateUserData(key, userData) {
  console.log('users/' + key);
  firebase.database().ref('users/' + key).once('value').then((oldUser) => {
    if (oldUser.val() === null) {
      console.log('No such user');
    } else {
      firebase.database().ref('users/' + key).set(userData);
    }
  });
}

var updateFormElement = document.querySelector('.update-with-id');
updateFormElement.addEventListener('submit', (event) => {
  event.preventDefault();
  var keyInput = document.querySelector('.update-with-id [name="id"]');
  var userInput = document.querySelector('.update-with-id [name="user"]');
  var commentInput = document.querySelector('.update-with-id [name="comment"]');
  var userData = {username: userInput.value,
                  comment: commentInput.value};
  updateUserData(keyInput.value, userData);
  clearForm('update-with-id');
})

// Delete user from database by key

var removeUser = function(userKey) {
  firebase.database().ref('users/' + userKey).remove();
}

var removeFormElement = document.querySelector('.remove');
removeFormElement.addEventListener('submit', (event) => {
  event.preventDefault();
  var userInput = document.querySelector('.remove [name="user"]');
  removeUser(userInput.value);
  clearForm('remove');
})

// Update user by looking up username, then manipulating data;
var updateUser = function(userName) {

}