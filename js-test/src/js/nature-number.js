function f(begin, end) {
	let n = begin;
	do {
		const test = () => {
			for (i = 2; i < n; i++) {
				if (n % i === 0) return true;
			} 
		};
		if (test === true) {
			console.log(n)
		};
		n = n+1;
	}
	while (n<=end)
};

f(3, 7); 
