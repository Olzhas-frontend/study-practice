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

const header = document.querySelector('header');
const sticky = header.offsetTop;
function headerScroll() {
	if (window.pageYOffset > sticky) {
		header.classList.add('sticky');
	} else {
		header.classList.remove('sticky');
	}
}
const body = document.body;
const headerToggleBtn = document.querySelector('.header__toggle');
const menu = document.querySelector('.header__menu');

const disScroll = function disScroll() {
	const pagePosition = window.scrollY;
	document.body.classList.add('disable-scroll');
};

const enScroll = function enScroll() {
	document.body.classList.remove('disable-scroll');
};

headerToggleBtn.addEventListener('click', () => {
	headerToggleBtn.classList.toggle('is-active');
	menu.classList.toggle('active');

	if (headerToggleBtn.classList.contains('is-active')) {
		disScroll();
	} else {
		enScroll();
	}
});
