// Initialize Firebase
var config = {
  apiKey: firebaseAPIKey,
  authDomain: "legionofdoom-" + firebaseIdentifier + ".firebaseapp.com",
  databaseURL: "https://legionofdoom-" + firebaseIdentifier + ".firebaseio.com",
  projectId: "legionofdoom-" + firebaseIdentifier,
  storageBucket: "legionofdoom-" + firebaseIdentifier + ".appspot.com",
  messagingSenderId: "179515365777"
  };

firebase.initializeApp(config);
var database = firebase.database();
var postList = [];

var convertToArray = function(data, orderList) {
  Object.values(data).forEach(function(post) {
      console.log('Push post to post list: ' + post.placeName)
      postList.push(post);
  });
  console.log('Converted to array...');
  console.log(postList);
}

var savePost = function(postData) {
  console.log('saving post: ' + postData.placeName);
  var myPostKey = firebase.database().ref().child('posts').push().key;
  postData.postKey = myPostKey;
  firebase.database().ref('posts/' + myPostKey).set(postData);
  loadPosts();
}

var loadPosts = function(filter, startPost = 0, numPosts = 5) {
  postList = [];
  console.log('loading saved posts...');
  firebase.database().ref('posts').once('value').then(function(data) {
    console.log(data.val());
    convertToArray(data.val(), postList);
    displayPostTotal = postList.length;
    var filteredPostList;
    console.log(filter);
    if (filter) {
      if (filter.hasOwnProperty('placeType')) {
        if (filter.placeType === "") {
          populatePosts(postList, startPost, numPosts);
        } else {
          var filteredPostList = postList.filter(post => post.placeType === filter.placeType);
          populatePosts(filteredPostList, startPost, numPosts);
          displayPostTotal = filteredPostList.length;
        }
      } else if (filter.hasOwnProperty('placeName')) {
        filteredPostList = postList.filter(post => post.placeName.toLowerCase().includes(filter.placeName.toLowerCase()) || post.placeExperience.toLowerCase().includes(filter.placeName.toLowerCase()));
        populatePosts(filteredPostList, startPost, numPosts);
        displayPostTotal = filteredPostList.length;
      } 
    } else {
    populatePosts(postList, startPost, numPosts);
    }
  });
}