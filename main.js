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

var searchBar = document.querySelector('.searchbar')
searchBar.addEventListener('input', function(event) {
  loadPosts({placeName: event.currentTarget.value});
});
var previousElement = document.querySelector('.previous');
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
})
var nextElement = document.querySelector('.next');
nextElement.addEventListener('click', function(){
  if (startPost <= displayPostTotal - numPosts) {
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
    if (filterElement.value) {
      filterObject.placeType = filterElement.value;
    }
    if (searchBar.value) {
      filterObject.placeName = searchBar.value;
    }
    startPost += numPosts;
    loadPosts(filterObject, startPost, numPosts);
  }
})

var nightButton = document.querySelector('.nightmode');
var body = document.querySelector('.mainbody');


var changeBG = function(event) {
  body.classList.add('daytimebody');
  console.log("SWITCHMODE!")
}

nightButton.addEventListener('click', changeBG);