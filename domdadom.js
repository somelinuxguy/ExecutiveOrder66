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

// {   placeName: string,
//     author: string,
//     placeType: string,
//     placeExperience: string,
//     placeRating: Number,
//     placeImageURL : string
// }

var newPost = function(event) {
    event.preventDefault();
    var handleURL = function(url) {
        console.log('New Post. Saving...');
        var myAuthor = document.querySelector('[name="author"]');
        var myRating = document.querySelector('[name="rating"]');
        var myPlaceType = document.querySelector('[name="placeType"]');
        var myExperience = document.querySelector('[name="placeExperience"]');
        var newPostData = {
            placeName: myPlace.value,
            author: myAuthor.value,
            placeType: myPlaceType.value,
            placeExperience: myExperience.value,
            placeRating: myRating.value,
            placeImageURL: url
            };
        console.log(newPostData);
        savePost(newPostData);
    };
    var myPlace = document.querySelector('[name="placeName"]');
    getImgSrc(myPlace.value, handleURL);
}
