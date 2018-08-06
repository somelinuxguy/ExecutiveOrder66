var getImgSrc = function(query, callback) {
  $.getJSON('https://www.googleapis.com/customsearch/v1/?cx=010289098104679464911:xwek1ikjodk&key=' + googleAPIKey + '&searchType=image&num=1&siteSearch=*.facebook.com/*&siteSearchFilter=e&safe=medium&q=' + query, data => callback(data.items[0].link));
}

var getLocation = function(query) {
  return 'https://www.google.com/maps/embed/v1/place?key=' + googleCloudAPIKey + '&q=' + query + ',Atlanta+GA';
}