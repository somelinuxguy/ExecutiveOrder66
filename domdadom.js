var clearDisplay = function() {
    console.log("Clearing Display");
    var container = document.querySelector(".postbody");
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
}

var populatePosts = function(postList) {
    console.log(postList);
    clearDisplay();

    var container = document.querySelector(".postbody");
    // write the posts in to the new currentOrders div (named container)
    postList.forEach(function(post) {
        var postContainer = document.createElement('div');
        postContainer.classList.add('post');

        var postImage = document.createElement('img');
        postImage.classList.add('googleIMG');
        postImage.setAttribute('src', post.placeImageURL);
        postContainer.appendChild(postImage);

        var postText = document.createElement('div');
        postText.classList.add('posttext');
        postContainer.appendChild(postText);

        var postLocation = document.createElement('div');
        postLocation.classList.add('location');
        postLocation.textContent = post.placeName;
        postText.appendChild(postLocation);

        var postAuthor = document.createElement('div');
        postAuthor.classList.add('author');
        postAuthor.textContent = post.author;
        postText.appendChild(postAuthor);

        var postContent = document.createElement('div');
        postContent.classList.add('postcontent');
        postContent.textContent = post.placeExperience;
        postText.appendChild(postContent);

        var postRating = document.createElement('div');
        postRating.classList.add('rating');
        postText.appendChild(postRating);

        for (var i = 0; i < Number(post.placeRating); i++) {
            var ratingGem = document.createElement('img');
            ratingGem.setAttribute('src', 'Images/gem.png');
            ratingGem.classList.add('ratinggem');
            postRating.appendChild(ratingGem);
        }

        var postMap = document.createElement('iframe');
        postMap.classList.add('googleIMG');
        postMap.classList.add('map');
        postMap.setAttribute('width', '300');
        postMap.setAttribute('height', '300');
        postMap.setAttribute('frameborder', '0');
        postMap.setAttribute('allowfullscreen', true);
        postMap.src = getLocation(post.placeName);
        postContainer.appendChild(postMap);

        container.appendChild(postContainer);
    });
}

var newPost = function(event) {
    event.preventDefault();
    console.log('New Post.');
    var myEmail = document.querySelector('[name="emailAddress"]');
    var myCoffee = document.querySelector('[name="coffee"]');
    var myFlavor = document.querySelector('[name="flavor"]');
    var myStrength = document.querySelector('[name="strength"]');
    var mySize = document.querySelector('[name="size"]:checked');
    var orderInfo = {
        emailAddress: myEmail.value,
        coffee: myCoffee.value,
        flavor: myFlavor.value,
        strength: myStrength.value,
        size: mySize.value
        };
    console.log(orderInfo);
    saveOrder(orderInfo);
}
