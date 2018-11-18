/*let user_name = prompt('What is your name?');

if (user_name == 'Vova') {
	console.log(`Hello ${user_name}`);
}
else {	
	console.log(`By ${user_name}`);
}*/

/*
if (2&&1&&null&&0&&undefined) {
	console.log(`true`);
} 
else {	
	console.log(`false`);
}*/

/*const a = 3,
	b = 4,
	c = 5,
	d = 6;*/

/*	const age = prompt('What is your age?');
	const a = age >= 18 ? true : false;
	let b;

	const f = (a,b) => {
		if (a) {
			b = "Hello";
		} else {
			b = "Bye!";
		}
		return b;
	}

	const res = f(a,b);

	console.log(res);*/


var n = prompt("Введите значение");

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

console.log(n);

