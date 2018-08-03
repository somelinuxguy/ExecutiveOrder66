var displayData = function(data) {
  console.log(data);
  var listItemHolder = document.createDocumentFragment();
  for (item of data.items){
    var itemDisplay = document.createElement('li');
    var imageDisplay = document.createElement('img');
    imageDisplay.setAttribute('src', item.link);
    imageDisplay.setAttribute('alt', item.snippet);
    itemDisplay.appendChild(imageDisplay);
    var imageCaption = document.createElement('p');
    imageCaption.textContent = item.snippet;
    listItemHolder.appendChild(itemDisplay);
  }
  document.querySelector('.image-list').appendChild(listItemHolder);
}
var search = function(query) {
  $.getJSON('https://www.googleapis.com/customsearch/v1/?cx=010289098104679464911:xwek1ikjodk&key=' + googleAPIKey + '&searchType=image&num=1&siteSearch=*.facebook.com/*&siteSearchFilter=e&q=' + query, displayData);
}
var searchForm = document.querySelector('.search-form');
console.log(searchForm);

searchForm.addEventListener('submit', function(event) {
  console.log('event logged');
  event.preventDefault();
  var searchInput = document.querySelector('[name="search"]')
  var query = searchInput.value;
  search(query);
})
