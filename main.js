const myForm = document.querySelector(".submissionform");
const startPost = 0;
const numPosts = 5;
var displayPostTotal;  // track number of posts currently displayed.
loadPosts(null, startPost, numPosts);

myForm.addEventListener('submit', newPost);

const filterElement = document.querySelector('[name="filterByType"]');
filterElement.addEventListener('change', function(event) {
  loadPosts({placeType: event.currentTarget.value});
})

const filterRating = document.querySelector('[name="filterByRating"]');
filterRating.addEventListener('change', function(event) {
  loadPosts({placeRating: event.currentTarget.value});
})

const searchBar = document.querySelector("[name='searchInput'")
searchBar.addEventListener('input', function(event) {
  loadPosts({placeName: event.currentTarget.value});
});

const prevBtns = document.querySelectorAll('.previous');
prevBtns.forEach(function(previousElement) {
  previousElement.addEventListener('click', function(){
    if (startPost >= numPosts) {
      var filterObject;
      if (filterElement.value) {
        if (!filterObject) {
          filterObject = {};
        }
        filterObject.placeType = filterElement.value;
      }
      if (searchBar.value) {
        if (!filterObject) {
          filterObject = {};
        }
        filterObject.placeName = searchBar.value;
      }
      startPost -= numPosts;
      loadPosts(filterObject, startPost, numPosts);
    }
  });
});

const nextBtns = document.querySelectorAll('.next');
nextBtns.forEach(function(nextElement) {
  nextElement.addEventListener('click', function(){
    if (startPost < displayPostTotal - numPosts) { 
       var filterObject;
       if (filterElement.value) {
         if (!filterObject) {
           filterObject = {};
         }
         filterObject.placeType = filterElement.value;
       }
       if (searchBar.value) {
         if (!filterObject) {
           filterObject = {};
         }
         filterObject.placeName = searchBar.value;
       }
       startPost += numPosts;
       loadPosts(filterObject, startPost, numPosts);
     }
   });
});

const nightMode = function() {
  var body = document.querySelector('.mainbody');
  var logo = document.querySelector('.logo');
  var btns = document.querySelectorAll('.buttonclass');
  var posts = document.querySelectorAll('.post, .daytimePosts');
  var textinputs = document.querySelectorAll('.searchbar');
  var modeBtn = document.querySelector('.nightmode');
  var modeIcon = document.querySelector('.colormodeicon');

  var whichLogo = logo.getAttribute('src');
  var whichBtn =  modeIcon.getAttribute('src');

  if (whichBtn === 'images/daymode.png') {
    modeIcon.setAttribute('src', 'images/nightmode.png');
  } else {
    modeIcon.setAttribute('src', 'images/daymode.png');
  }

  if (whichLogo === 'images/DaytimeLogo.png') {
    logo.setAttribute('src', 'images/gemBGwText.png');
  } else {
    logo.setAttribute('src', 'images/DaytimeLogo.png');
  }

  body.classList.toggle('daytimebody');

  textinputs.forEach(function(tbox) {
    tbox.classList.toggle('daytimeSearch');
  });

  posts.forEach(function(item) {
    item.classList.toggle('post');
    item.classList.toggle('daytimePosts');
    console.log(item);
  });

  btns.forEach(function(button) {
    button.classList.toggle('daytimeBTN');
  });
  console.log("SWITCHMODE!")
};

const nightButton = document.querySelector('.nightmode');
nightButton.addEventListener('click', nightMode);


const displayFlashMessage = function(message) {
  var flashMessageElement = document.createElement('div');
  flashMessageElement.classList.add('flashMessage');
  flashMessageElement.textContent = message;
  document.body.appendChild(flashMessageElement);
  setTimeout(() => {
    flashMessageElement.classList.add('flashMessage-hidden');
  }, 500);
};

displayFlashMessage("Everything is awesome!!!!!!");