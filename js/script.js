var logoNav = document.querySelector('.logo-navbar');
var logoFoot = document.querySelector('.logo-footer');
var ship = document.querySelector('.ship');
var twitter = document.querySelector('.twitter');
var medium = document.querySelector('.medium');
var discord = document.querySelector('.discord');

function loadTheme() {
    if ($('body').hasClass('light-mode')) {
        $.cookie('mode', 'light', { expires: 7, path: '/' });
        $('.logo-navbar').attr('src', 'img/logo-2.png');
        $('.logo-footer').attr('src', 'img/logo-footer-2.png');
        $('#ship').attr('src', 'img/ship-dark.png');
        $('#twitter').attr('src', 'img/twitter-dark.png');
        $('#medium').attr('src', 'img/medium-dark.png');
        $('#discord').attr('src', 'img/discord-dark.png');
    } else {
        $.cookie('mode', 'dark', { expires: 7, path: '/' });
        $('.logo-navbar').attr('src', 'img/logo.png');
        $('.logo-footer').attr('src', 'img/logo-footer.png');
        $('#ship').attr('src', 'img/ship-light.png');
        $('#twitter').attr('src', 'img/twitter-light.png');
        $('#medium').attr('src', 'img/medium-light.png');
        $('#discord').attr('src', 'img/discord-light.png');
    }
}

$(document).ready(function () {
    if ($.cookie('mode') == 'light') {
        $('body').addClass('light-mode');
        $('#switch').attr('checked', true);
        loadTheme();
    } else {
        $('body').removeClass('light-mode');
        $('#switch').attr('checked', false);
        loadTheme();
    }
})



$('#switch').on('click', () => {
    $('body').toggleClass('light-mode');
    loadTheme();
})

// toggle.onclick = () => {
// 	document.body.classList.toggle('light-mode');
// 	if (document.body.classList.contains('light-mode')) {
// 		logoNav.src = 'img/logo-2.png';
//         logoFoot.src = 'img/logo-footer-2.png';
//         ship.src = 'img/ship-dark.png';
//         twitter.src = 'img/twitter-dark.png';
//         medium.src = 'img/medium-dark.png';
//         discord.src = 'img/discord-dark.png';
// 	} else {
// 		logoNav.src = 'img/logo.png';
//         logoFoot.src = 'img/logo-footer.png';
//         ship.src = 'img/ship-light.png';
//         twitter.src = 'img/twitter-light.png';
//         medium.src = 'img/medium-light.png';
//         discord.src = 'img/discord-light.png';
// 	}
// }

// Fixed Navbar
$(window).scroll(function(){
    $('.navbar').toggleClass('scrolling-active', $(this).scrollTop() > 0);
});


// (function () {
//   "use strict";

//   // define variables
//   var items = document.querySelectorAll(".timeline li");

//   // check if an element is in viewport
//   // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
//   // function isElementInViewport(el) {
//   //   var rect = el.getBoundingClientRect();
//   //   return (
//   //     rect.top >= 0 &&
//   //     rect.left >= 0 &&
//   //     rect.bottom <=
//   //       (window.innerHeight || document.documentElement.clientHeight) &&
//   //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   //   );
//   // }

//   // function callbackFunc() {
//   //   for (var i = 0; i < items.length; i++) {
//   //     if (isElementInViewport(items[i])) {
//   //       items[i].classList.add("in-view");
//   //     }
//   //   }
//   // }

//   // // listen for events
//   // window.addEventListener("load", callbackFunc);
//   // window.addEventListener("resize", callbackFunc);
//   // window.addEventListener("scroll", callbackFunc);
// })();