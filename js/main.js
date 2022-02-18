const swiper = new Swiper('.intro-slider', {
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	speed: 700,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

window.onscroll = function () {
	headerScroll();
};

// Get the header
const header = document.querySelector('header');

// Get the offset position of the navbar
const sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function headerScroll() {
	if (window.pageYOffset > sticky) {
		header.classList.add('sticky');
	} else {
		header.classList.remove('sticky');
	}
}
