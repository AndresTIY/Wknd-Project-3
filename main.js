var $album = $('.album-card');
$album.on('click',function(e){

  var $sideBar = $('.side-bar');
  $sideBar.addClass('bar-display-on');
  $sideBar.removeClass('bar-display-off');

  var $bodyContainer = $('.body-container');
  $bodyContainer.addClass('body-container-width');
  $bodyContainer.removeClass('body-container-og');

  var $header = $('.main-header');
  $header.removeClass('og-header');
  $header.addClass('album-header');


  var $headerDisplay = $('.title');
  $headerDisplay.removeClass('title-displayed');


  var $albumAnchor = $('.album-anchor');
  $albumAnchor.addClass('remove');


});

var $list = $('.list');
$list.on('click', function(e){
  var $photoAnchor = $('.photo-a');
  $photoAnchor.addClass('remove');
})


var $albumCard1 = $('.album1');
$albumCard1.on('click', function(e){
  $('#album-header-1').addClass('title-displayed');
  $('.album-one').removeClass('remove');
})

var $albumCard2 = $('.album2');
$albumCard2.on('click', function(e){
  $('#album-header-2').addClass('title-displayed');
  $('.album-two').removeClass('remove');
})
var $albumCard3 = $('.album3');
$albumCard3.on('click', function(e){
  $('#album-header-3').addClass('title-displayed');
  $('.album-three').removeClass('remove');
})
var $albumCard4 = $('.album4');
$albumCard4.on('click', function(e){
  $('#album-header-4').addClass('title-displayed');
  $('.album-four').removeClass('remove');
})
var $albumCard5 = $('.album5');
$albumCard5.on('click', function(e){
  $('#album-header-5').addClass('title-displayed');
  $('.album-five').removeClass('remove');
})
var $albumCard6 = $('.album6');
$albumCard6.on('click', function(e){
  $('#album-header-6').addClass('title-displayed');
  $('.album-six').removeClass('remove');

})


var $home = $('.home-page');
$home.on('click', function(e){
  var $sideBar = $('.side-bar');
  $sideBar.removeClass('bar-display-on');
  $sideBar.addClass('bar-display-off');
  var $bodyContainer = $('.body-container');
  $bodyContainer.addClass('body-container-og');
  $bodyContainer.removeClass('body-container-width');
  var $header = $('.main-header');
  $header.removeClass('album-header');
  $header.addClass('og-header');
  var $headerDisplay = $('.title');
  $headerDisplay.removeClass('title-displayed');
  var $resetHeaderDisplay = $('#main-title');
  $resetHeaderDisplay.addClass('title-displayed');
  var $albumAnchor = $('.album-anchor');
  $albumAnchor.removeClass('remove');
  var $photoAnchor = $('.photo-a');
  $photoAnchor.addClass('remove');
});


//look into DOM traversal
//e.target.hash doesn't always working
// var $target = $(e.target);
// var albumCardId = $target.closest('a');
// $(albumCardId).addClass('title-displayed');
//clicking on album card add's title-displayed class to 'a' tag

//---------------Notes from previous exercise

// var $tabs = $('.tab');
// $tabs.on('click', function(e) {
// 	e.preventDefault();
// 	console.log(e.target.hash);
// 	var $tabContents = $('.tab-content');
// 	// remove the selected class from all the tab contents elements
// 	$tabContents.removeClass('selected');
//
// 	var tabId = e.target.hash; //#tab1
// 	$(tabId).addClass('selected');
// 	// and then add it to the correct contents element
//
// })
// //remove the selected class from all the tab contents and then add it to the correct contents elements
// <section id="tab1" class="tab-content selected">
//   <section id="tab2" class="tab-content">
// <li class="tab">
// 					<a href="#tab1">Tab 1</a>
// 				</li>
// 				<li class="tab">
// 					<a href="#tab2">Tab 2</a>
// 				</li>
// 				<li class="tab">
// 					<a href="#tab3">Tab 3</a>
// 				</li>
