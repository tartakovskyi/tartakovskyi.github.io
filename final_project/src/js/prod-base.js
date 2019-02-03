const prodBase = {
	101 : {
		name: 'T-shirt ultra',
		price: '89.99',
		description: 'The best t-shirt in the world',
		img: 'prod-6.jpg',
		date: Date(2018/12/01),
		bestSeller: true,
	},

	102 : {
		name: 'coat magnum',
		price: '205.99',
		description: 'Very good coat',
		img: 'prod-3.jpg',
		date: Date(2018/12/02),
		bestSeller: true,
	},

	103 : {
		name: 'womens orange casual',
		price: '174.99',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, ex!',
		img: 'prod-4.jpg',
		date: Date(2018/12/25),
		bestSeller: false,
	},

	104 : {
		name: 'mens cyan t-shirt',
		price: '124.99',
		description: 'Lorem ipsum dolor sit amet. A, perferendis ullam iusto facere atque eveniet.',
		img: 'prod-1.jpg',
		date: Date(2018/12/28),
		bestSeller: false,
	},

	105 : {
		name: 'lorem lorem lorem',
		price: '174.99',
		description: 'Quasi aliquam odio iusto voluptatem. Iusto autem perferendis beatae saepe, iste eaque quam ex aperiam quasi at.',
		img: 'prod-2.jpg',
		date: Date(2018/12/09),
		bestSeller: false,
	},

	106 : {
		name: 'lorem test 3',
		price: '174.99',
		description: 'Provident, ex! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde adipisci accusantium ipsum?',
		img: 'prod-4.jpg',
		date: Date(2018/12/09),
		bestSeller: false,
	},

	107 : {
		name: 'Iipsum dolor 107',
		price: '299.99',
		description: 'Consectetur adipisicing elit. Provident, ex! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, optio?',
		img: 'prod-5.jpg',
		date: Date(2018/12/08),
		bestSeller: false,
	},

	108 : {
		name: 'Lorem ipsum dolo 108',
		price: '174.99',
		description: 'Consectetur adipisicing elit. Provident, ex! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, optio?',
		img: 'prod-6.jpg',
		date: Date(2018/12/07),
		bestSeller: false,
	},

	109 : {
		name: 'Lorem ipsum dolor109',
		price: '99.99',
		description: 'Consectetur adipisicing elit. Provident, ex! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, optio?',
		img: 'prod-4.jpg',
		date: Date(2018/12/15),
		bestSeller: false,
	},

	110 : {
		name: 'Lorem ipsum dolor110',
		price: '281.99',
		description: 'Consectetur adipisicing elit. Provident, ex! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, optio?',
		img: 'prod-3.jpg',
		date: Date(2018/12/21),
		bestSeller: false,
	},

	111 : {
		name: 'Lorem ipsum dolor111',
		price: '118.99',
		description: 'Consectetur adipisicing elit. Provident, ex! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, optio?',
		img: 'prod-2.jpg',
		date: Date(2018/12/23),
		bestSeller: false,
	},

	112 : {
		name: 'Lorem ipsum dolor112',
		price: '259.99',
		description: 'Consectetur adipisicing elit. Provident, ex! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, optio?',
		img: 'prod-1.jpg',
		date: Date(2018/12/24),
		bestSeller: false,
	},

	113 : {
		name: 'Lorem ipsum dolor113',
		price: '358.95',
		description: 'Consectetur adipisicing elit. Provident, ex! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, optio?',
		img: 'prod-5.jpg',
		date: Date(2018/12/22),
		bestSeller: false,
	},

	114 : {
		name: 'Lorem ipsum dolor114',
		price: '67.99',
		description: 'Consectetur adipisicing elit. Provident, ex! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, optio?',
		img: 'prod-6.jpg',
		date: Date(2018/12/27),
		bestSeller: false,
	},

	115 : {
		name: 'Lorem ipsum dolor115',
		price: '599.99',
		description: 'Consectetur adipisicing elit. Provident, ex! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, optio?',
		img: 'prod-5.jpg',
		date: Date(2018/12/29),
		bestSeller: false,
	}
}

const prodBaseKeys = Object.keys(prodBase);
const length = prodBaseKeys.length;

const createProduct = (begin, end, bigIndex, block) => {
	for (let i = begin; i <= end; i++) {
		console.log(i);
		const product = document.createElement('div');
		if (i === bigIndex) {
			$(product).addClass('col-12 offers-item-wrapper')
		} else 
		$(product).addClass('col-12 col-md-6 offers-item-wrapper');
		$(product).appendTo(block);


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

		if (i === bigIndex) {
			$(productLink).addClass('offers-item--big')
		};
	};
};

createProduct(0, 2, 2, '#special-offers .row .col-12.col-lg-6:first-child .row');
createProduct(3, 5, 3, '#special-offers .row .col-12.col-lg-6:last-child .row');



