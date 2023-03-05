var HEADER_HEIGHT = 0;	// The height of the navbar

var ROTATION_ANGLE = "15deg";
var avatarIsRotated = false;	// status of avatar: rotated or not

var CONTENT_TITLE = '.content .title';
var AVATAR_IMAGE = '.banner .avatar .img';

var TIMELINE_PARAGRAPHS = $('.timeline .hide');

$(document).ready(function () {
	
	HEADER_HEIGHT = $('header').height();
	
	$(window).scroll(function () {
		scrollFunction();
	});
	scrollFunction();	// call function after loading page
	
	setupAvatarRotations();
	
	setupStars();  

	setupNavArrow();

	setupCornerImages();

	fadeInTimeline();
});

/**
 * Fade in timeline
 */
function fadeInTimeline() {
	
	var index = 0;

	(function fadeInTimelineParagraph() {
		TIMELINE_PARAGRAPHS.eq(index++).fadeIn(300, fadeInTimelineParagraph);
   
	})();
   
}

/**
 * Add small or large background corner images
 */
function setupCornerImages() {

	var origin = window.location.origin;

	$('.yummy-yam-corner-images').append(`
		<img class="corner-image bottom-left large" alt="corner image bottom left" src="${origin}/img/theme/corner-left.png">
		<img class="corner-image bottom-right large" alt="corner image bottom right" src="${origin}/img/theme/corner-right.png">`);
}

/**
 * Add stars in titles and paragraphs
 */
function setupStars() {

	$('.list-articles h1').addClass(CONTENT_TITLE);

	// In titles h1
	$(`<p class="star">⚝</p>`).insertBefore(CONTENT_TITLE);
	$(`<p class="star">⚝</p>`).insertAfter(CONTENT_TITLE);
}

/**
 * Add down arrow to navigate in main page
 */
function setupNavArrow() {
	$('.yummy-yam-arrow').html('⮛<br>⮛');
}

/**
 * Setup avatar rotations:
 * 	- on click on navbar button
 * 	- on mouse over
 */
function setupAvatarRotations() {

	$(AVATAR_IMAGE).mouseenter(function() {	// mouse entre: rotate avatar
		$(AVATAR_IMAGE).css('rotate', `-${ROTATION_ANGLE}`);
	});
	
	$(AVATAR_IMAGE).mouseout(function() {	// mouse out: reset avatar rotation
		$(AVATAR_IMAGE).css('rotate', '0deg');
	});

	$('.banner .button').click(function() {	// on click on navbar button
		rotateAvatar();
	});
}

/**
 * Rotate avatar on expend navbar
 */
function rotateAvatar() {

	if(avatarIsRotated) {
		$(AVATAR_IMAGE).css('rotate', '0deg');	// reset avatar rotation
		avatarIsRotated = false;
	} else {
		$(AVATAR_IMAGE).css('rotate', `+${ROTATION_ANGLE}`);	// rotate avatar
		avatarIsRotated = true;
	}
}

/**
 * Fade out navbar after scroll down.
 * Fade in navbar if scroll to top page. 
 */
function scrollFunction() {

	const header = $('header');

	var scroll = $(window).scrollTop();

	if( scroll > HEADER_HEIGHT ) {
		header.stop().fadeOut(700);
	} else {
		header.stop().fadeIn(700);
	}
}

