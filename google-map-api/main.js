var search = function(query) {
  var mapDisplay = document.querySelector('.map');
  mapDisplay.setAttribute('src', 'https://www.google.com/maps/embed/v1/place?key=' + googleCloudAPIKey + '&q=' + query + ',Atlanta+GA');
}

var searchForm = document.querySelector('.search-form');
console.log(searchForm);

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var searchInput = document.querySelector('[name="search"]')
  var query = searchInput.value;
  search(query);
})