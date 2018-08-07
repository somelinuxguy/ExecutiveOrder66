var myForm = document.querySelector(".submissionform");
var startPost = 0;
var numPosts = 5;
var displayPostTotal;
loadPosts(null, startPost, numPosts);

myForm.addEventListener('submit', newPost);

var filterElement = document.querySelector('[name="filterByType"]');
console.log(filterElement);
filterElement.addEventListener('change', function(event) {
  loadPosts({placeType: event.currentTarget.value});
})

var searchBar = document.querySelector("[name='searchInput'")
searchBar.addEventListener('input', function(event) {
  loadPosts({placeName: event.currentTarget.value});
});

var prevBtns = document.querySelectorAll('.previous');
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

var nextBtns = document.querySelectorAll('.next');
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

var nightMode = function() {
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

var nightButton = document.querySelector('.nightmode');
nightButton.addEventListener('click', nightMode);

