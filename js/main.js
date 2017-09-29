/* GLOBAL VARIABLES UP HERE */
var frontPage = 'https://www.reddit.com/.json';
// function Posts(article){
//   this.title = article.data.title,
//   this.image = article.data.image,
//   this.user = article.data.user,
//   this.link = article.data.link,
// });



$(document).ready(function(){
/* FUNCTION EXECUTION HERE */
  console.log('Go forth and code!');
$.ajax({

  method: "GET",
  url: frontPage,
  dataType: 'json',
  success: onSuccess,
  error: onError
}); // AJAX IS DONE PLS DONT TOUCH


});



/* FUNCTION DEFINITION HERE */
/* TIP: don't forget scope! */

function onSuccess(json){
  $.each(json.data.children, function(i) {
  var title = json.data.children[i].data.title; //title
  var image = json.data.children[i].data.thumbnail; // test post pls ignore
  var thumbnail = "<img src="+image+">"; // actual picture
  $('#main').append('<div>'+thumbnail+title+'</div>');
});
};

  // $('#info').append('<p>' +  releasedData.features[i].properties.title + '</p>');
  // $.each(releasedData.features, function(i) {

function onError(){
  console.log('IT FAILED');
}
