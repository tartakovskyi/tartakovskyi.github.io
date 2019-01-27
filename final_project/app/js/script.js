///Cart Widget///
$('#cart').click(function() {
	$(this).toggleClass('expand')
});

///Change currency///


///Buy good///
$sum = 0;

$('[data-action="offers__buy"]').click(function(e) {
	e.preventDefault();
	const prodID = "#" + $(this).closest('.offers-item').attr('id');
	const selector = prodID + ' ' + '.offers-item__price-value';
	$prodPrice = $(selector).text();
	$sum = $sum + Number($prodPrice);
	$sum.toFixed(2);
	console.log($sum);
	$('.cart-sum').css('display', 'inline-block');
	$('.cart-sum-value').text($sum);


	$prodNumber = $('.cart-static').text();
	if ($prodNumber == 'empty') {
		$('.cart-static').text('1');
	} else {
		$prodNumber = Number($prodNumber);
		$newNumber = $prodNumber + 1;
		$('.cart-static').text($newNumber);
		$('.cart-open').text($newNumber + ' good(s)');
	};
	$('.cart-static').addClass('cart-static--number');
});

///Change currency///
$oldCurr = 'gbp';

$('[name=currency-list]').change (function () {
	$newCurr = $(this).val();
	console.log(('$oldCurr ') + $oldCurr);
	console.log(('$newCurr ') + $newCurr);

	function changeCurrency (el) {
		if ($newCurr == 'gbp') {$(el).html('&#163')}
			else if ($newCurr == 'usd') {$(el).html('&#36')}
				else if ($newCurr == 'eur') {$(el).html('&#8364')}
			}

	function changePriceValue (el) {

		if ($oldCurr == 'gbp' & $newCurr == 'usd') {PriceValueCalc(1.33333)} 
			else if ($oldCurr == 'usd' & $newCurr == 'gbp') {PriceValueCalc(0.75)}
				else if ($oldCurr == 'gbp' & $newCurr == 'eur') {PriceValueCalc(1.15)}
					else if ($oldCurr == 'gbp' & $newCurr == 'eur') {PriceValueCalc(0.8696)}
						else if ($oldCurr == 'eur' & $newCurr == 'usd') {PriceValueCalc(1.14)}
							else if ($oldCurr == 'usd' & $newCurr == 'eur') {PriceValueCalc(0.8772)}

		function PriceValueCalc (coefficient) {
			$(el).each( function() {
				$oldValue = $(this).text();
				$newValue = Number($oldValue) * coefficient;
				$newValue = $newValue.toFixed(2).toString();
				$(this).text($newValue);
			});						
		}			
	};

	changePriceValue('[data-role=price-value]');
	changeCurrency('[data-role=price-currency]');

	$oldCurr = $newCurr;
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


///Calculation of the elements height///
const ComputeElemHeight = (el, mw) => {
	$mw = mw;
	
	let $elHeight = 0;

	if ($(window).width() >= $mw) {
		$(el).each(function() {    
			if ($(this).height() > $elHeight) {$elHeight = $(this).height()}
		});

		$(el).height($elHeight);
	}
}