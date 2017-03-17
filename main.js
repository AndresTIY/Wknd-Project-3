//make album card area clickable
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
  // $headerDisplay.addClass('title-displayed');

  // var $target = $(e.target);
  // var albumCardId = $target.closest('a');
  // $(albumCardId).addClass('title-displayed');
  //clicking on album card add's title-displayed class to 'a' tag
  //we want to click on card and add that class to h1 tag




// var sdf= $(e.target)
// sdf.closest('a')
// finds closest anchor tag
});
var $albumCard1 = $('#album1');
$albumCard1.on('click', function(e){
  $('#album-header-1').addClass('title-displayed')
})
//dom traversal
// console.log('it works'); this works in the code above



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
