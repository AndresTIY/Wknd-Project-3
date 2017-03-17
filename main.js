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

  var $albumImg = $('.album-img');
  $albumImg.addClass('album-img-rm');

  var $albumCap = $('.album-caption');
  $albumCap.addClass('album-cap-rm');


});
var $albumCard1 = $('.album1');
$albumCard1.on('click', function(e){
  $('#album-header-1').addClass('title-displayed')
})
var $albumCard2 = $('.album2');
$albumCard2.on('click', function(e){
  $('#album-header-2').addClass('title-displayed')
})
var $albumCard3 = $('.album3');
$albumCard3.on('click', function(e){
  $('#album-header-3').addClass('title-displayed')
})
var $albumCard4 = $('.album4');
$albumCard4.on('click', function(e){
  $('#album-header-4').addClass('title-displayed')
})
var $albumCard5 = $('.album5');
$albumCard5.on('click', function(e){
  $('#album-header-5').addClass('title-displayed')
})
var $albumCard6 = $('.album6');
$albumCard6.on('click', function(e){
  $('#album-header-6').addClass('title-displayed')
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
  var $albumImg = $('.album-img');
  $albumImg.removeClass('img-rm');

  var $albumCap = $('.album-caption');
  $albumCap.removeClass('cap-rm');
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
