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

var convertToArray = function(data) {
  Object.values(data).forEach(function(postFromFB) {
      console.log('Push post to post list: ' + postFromFB.placeName)
      postList.push(postFromFB);
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

var removePost = function(post) {
      console.log('Post deleted: ' + post.postKey);
      firebase.database().ref('posts/' + post.postKey).remove();
      loadPosts();
}

var loadPosts = function(filter) {
  postList = [];
  console.log('loading saved posts...');
  firebase.database().ref('posts').once('value').then(function(data) {
    console.log(data.val());
    convertToArray(data.val(), postList);
    var filteredPostList;
    console.log(filter);
    if (filter) {
      if (filter.hasOwnProperty('placeType')) {
        if (filter.placeType === "") {
          populatePosts(postList);
        } else {
          var filteredPostList = postList.filter(post => post.placeType === filter.placeType);
          populatePosts(filteredPostList);
        }
      } else if (filter.hasOwnProperty('placeName')) {
        filteredPostList = postList.filter(post => post.placeName.toLowerCase().includes(filter.placeName.toLowerCase()) || post.placeExperience.toLowerCase().includes(filter.placeName.toLowerCase()));
        populatePosts(filteredPostList);
      } 
    } else {
    populatePosts(postList);
    }
  });
}