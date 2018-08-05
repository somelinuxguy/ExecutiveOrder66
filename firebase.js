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
  firebase.database().ref('posts').push(postData);
  loadPosts();
}

var loadPosts = function(filter) {
  postList = [];
  console.log('loading saved posts...');
  firebase.database().ref('posts').once('value').then(function(data) {
    console.log(data.val());
    convertToArray(data.val(), postList);
    if (filter) {
      postList = postList.filter(post => post.placeType === filter);
    }
    populatePosts(postList);
  });
}