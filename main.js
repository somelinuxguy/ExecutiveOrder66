var myForm = document.querySelector(".submissionform");
loadPosts();

myForm.addEventListener('submit', newPost);

var filterElement = document.querySelector('[name="filterByType"]');
console.log(filterElement);
filterElement.addEventListener('change', function(event) {
  loadPosts(event.currentTarget.value);
})