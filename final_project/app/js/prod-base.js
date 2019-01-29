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

console.log(length);

for (let i=0; i<length; i++) {
	const product = document.createElement('div');
	$(product).addClass('col-3 offers-item-wrapper').appendTo('#special-offers .row').load("product.tpl.html").find('.offers-item').attr('id', 'prod');
}




/*$('#special-offers .offers-item-wrapper').clone().appendTo('#special-offers');*/


