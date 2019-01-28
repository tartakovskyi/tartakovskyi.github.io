///Cart Widget///
$('#cart').click(function() {
	$(this).toggleClass('expand')
});

///Change currency///


///Buy good///
$('[data-action="offers__buy"]').click(function(e) {
	e.preventDefault();
	const prodID = "#" + $(this).closest('.offers-item').attr('id');
	const selector = prodID + ' ' + '.offers-item__price-value'[0];
	$prodPrice = $(selector).text();
	$prodNumber = $('.cart-static').text();
	if ($prodNumber == 'empty') {
		$('.cart-static').text('1');
	} else {
		$prodNumber = Number($prodNumber);
		$newNumber = $prodNumber + 1;
		$('.cart-static').text($newNumber);
	};
	$('.cart-static').addClass('cart-static--number');
});


///Fixed Menu (Sergey Chuprina)///
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

