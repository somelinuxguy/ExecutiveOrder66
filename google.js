var getImgSrc = function(query, callback) {
  var regEx = /^[A-Za-z0-9 _]*$/;
  if (regEx.test(query)) {
    var googleImagePromise = fetch('https://www.googleapis.com/customsearch/v1/?cx=010289098104679464911:xwek1ikjodk&key=' + googleAPIKey + '&searchType=image&num=1&siteSearch=*.facebook.com/*&siteSearchFilter=e&q=' + query);
    googleImagePromise.then(response => response.json())
    .then(data => {
      if (data.items) {
        callback(data.items[0].link)
        displayFlashMessage('You have successfully created a new post.');
      } else {
        displayFlashMessage("We failed to find your gem.  Try a different place name.");
      }
    });
  } else {
    displayFlashMessage('Place names must be letters or numbers only. Try again.');
  }
}

var getLocation = function(query) {
  return 'https://www.google.com/maps/embed/v1/place?key=' + googleCloudAPIKey + '&q=' + query + ',Atlanta+GA';
}