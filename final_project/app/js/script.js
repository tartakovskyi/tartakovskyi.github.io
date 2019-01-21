document.addEventListener('scroll', () => {
	setMenuFixed();
});

const setMenuFixed = () => {
	const navbar = document.getElementsByClassName('main-menu')[0];
	if(window.pageYOffset >= 34){
		navbar.classList.add('fixed-top');
	} else {
		navbar.classList.remove('fixed-top');
	}
};

$('#cart').click(function() {$(this).toggleClass('expand')});




