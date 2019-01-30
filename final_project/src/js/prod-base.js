const prodBase = {
	101 : {
		name: 'T-shirt ultra',
		price: '89.99',
		description: 'The best t-shirt in the world',
		img: 'prod-6.jpg'
	},

	102 : {
		name: 'coat magnum',
		price: '205.99',
		description: 'Very good coat',
		img: 'prod-3.jpg'
	},

	103 : {
		name: 'womens orange casual',
		price: '174.99',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, ex!',
		img: 'prod-4.jpg'
	},

	104 : {
		name: 'mens cyan t-shirt',
		price: '174.99',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, ex!',
		img: 'prod-1.jpg'
	}

}

const length = Object.keys(prodBase).length;


for (let i=0; i<length; i++) {
	const product = document.createElement('div');
	/*$(product).addClass('col-3 offers-item-wrapper').appendTo('#special-offers .row').load("product.tpl.html");*/
	$(product).addClass('col-3 offers-item-wrapper').appendTo('#special-offers .row');

	const prodID = () => {
		const num = i + 101;
		return 'prod-' + num.toString();
	}

	const productLink = document.createElement('a');
	$(productLink).addClass('offers-item').attr('id', prodID).appendTo(product).load("product.tpl.html", function() {
		//const id = 
		$("#"+prodID()).find('.offers-item__price-value').text("100");
 /*  $(selector).val('100'); */
});

/*
	$(prodID() + ' .offers-item__price-value').val('100');*/

};





/*$('#special-offers .offers-item-wrapper').clone().appendTo('#special-offers');*/


