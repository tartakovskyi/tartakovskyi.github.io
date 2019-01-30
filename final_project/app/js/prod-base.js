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
		price: '124.99',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, ex!',
		img: 'prod-1.jpg'
	}

}

const prodBaseKeys = Object.keys(prodBase);
const length = prodBaseKeys.length;

for (let i=0; i<length; i++) {
	const product = document.createElement('div');
	$(product).addClass('col-3 offers-item-wrapper').appendTo('#special-offers .row');

	const prodID = () => {
		return 'prod-' + prodBaseKeys[i];
	};

	const prodKey = prodBaseKeys[i];

	const prodImg = 'img/' + prodBase[prodKey]['img'];

	const productLink = document.createElement('a');
	$(productLink).addClass('offers-item').attr('id', prodID).appendTo(product).load("product.tpl.html", function() {
		$("#"+prodID()).find('[data-role=price-value]').text(prodBase[prodKey]['price']);
		$("#"+prodID()).find('.offers-item__brief-title h3').text(prodBase[prodKey]['name']);
		$("#"+prodID()).find('.offers-item__brief-descr').text(prodBase[prodKey]['description']);
		$("#"+prodID()).find('.offers-item__img').attr('src', prodImg);
	});
};

