var myForm = document.querySelector(".submissionform");
loadPosts();

myForm.addEventListener('submit', newPost);

var filterElement = document.querySelector('[name="filterByType"]');
console.log(filterElement);
filterElement.addEventListener('change', function(event) {
  loadPosts({placeType: event.currentTarget.value});
})

var searchBar = document.querySelector('.searchbar')
searchBar.addEventListener('input', function(event) {
  loadPosts({placeName: event.currentTarget.value});
})