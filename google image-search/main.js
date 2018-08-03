var displayData = function(data) {
  var listItemHolder = document.createDocumentFragment();
  for (item of data.items){
    var itemDisplay = document.createElement('li');
    var imageDisplay = document.createElement('img');
    imageDisplay.setAttribute('src', item.image.thumbnailLink);
    imageDisplay.setAttribute('alt', item.snippet);
    itemDisplay.appendChild(imageDisplay);
    var imageCaption = document.createElement('p');
    imageCaption.textContent = item.snippet;
    listItemHolder.appendChild(itemDisplay);
  }
  document.querySelector('.image-list').appendChild(listItemHolder);
}
var search = function(query) {
  $.getJSON('https://www.googleapis.com/customsearch/v1/?cx=010289098104679464911:xwek1ikjodk&key=AIzaSyA_kqsDITB2TOWu5cVEY4Qi2v_4gizd4nE&searchType=image&q=' + query, displayData);
}
var searchForm = document.querySelector('.search-form');
console.log(searchForm);

searchForm.addEventListener('submit', function(event) {
  console.log('event logged');
  event.preventDefault();
  var query = document.querySelector('[name="search"]')
  search(query);
})
