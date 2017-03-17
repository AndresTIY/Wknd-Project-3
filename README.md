## jQuery Homework
### Explorer Mode
- create a photo gallery application which allows users to view their albums as well as the individual photos contained within. We'll implement this as a single page application or SPA.
- include any pictures you use in a directory called images
- after building layout, use jQuery to make it dynamic
- must be able to switch between your List, Album, and Photo views without reloading page
- clicking an album should load a list of the photos
- clicking photos should open them individually full-screen for viewing
- minimum of 6 photo albums with 3 photos in each


## working through
- side bar display none while on main page width 15%
- body container width 84%
- sidebar, when display at none, body container width should be TURNED OFF
- While on main page: side-bar set at width 15%

#### layout looking good, now...
##### jquery!
- make image captions clickable. can we make entire album-card clickable? YES
- so when we click:
  - side-bar-> display: none get's removed
  - body-container-> width: 85% get's added
  - page changes
    - header -> disappears
    - background color takes over entire body container. this should happen anyways when header leaves
    - Album Name appears instead of Header Name
    - Could possibly just rename the h1 tag in header and take BG COLOR and BORDER
    - all images should change to the photos in that album instead
    - reorganize photos DONE  

#### jquery Notes
- HTML has a list of TAB 1, TAB 2, TAB 3, so we click on one and we get a a new section
- the LI tag has a class of TAB
  - var $tabs = $('.tab').
  - this var is = to the LI CLASS .TAB
- each LI also has an ANCHOR TAG, = to #tab1, #tab2, #tab3
- SECTION/DIV. first one has ID of tab1 and CLASS tab-content selected, second has ID of tab2, CLASS tab-content
  - var $tabContents = $(.tab-content)
  - this var is = to the SECTION/DIV CLASS of .TAB-CONTENT
  - var tabId = e.target.hash
- kind of looks like if you click on anchor tag #tab1, it brings up first DIV/SECTION with the same ID
- when you click on TAB 1
  - it has an anchor of #tab1, which is the ID of the DIV of the tab1 section.
  - since var tabId = e.target.hash, e.target.hash = #tab1, or #tab2, or #tab3 bc of the anchor tags.
  - $(tabId)(which is = e.target.hash=#tab1) . addClass (adding a class here) ('selected') (add's 'selected' class to )
-$tabContents.removeClass('selected') = $tabContents is the var that describes all 3 sections since all 3 has that class. if we click on any of those classes, the .selected class gets removed.
-$(tabId).addClass('selected') adds the .selected class to the DIV SECTION that has the id of #tab1

#### DOM traversal//look into DOM traversal

e.target.hash doesn't always working
var $target = $(e.target);
var albumCardId = $target.closest('a');
$(albumCardId).addClass('title-displayed');
clicking on album card add's title-displayed class to 'a' tag
