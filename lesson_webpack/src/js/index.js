import * as assets from './assets/';
/*import {add} from './modules/add';
import {cubes} from './modules/cubes';
import {tails} from './modules/tails';
import {randomFromOne} from './modules/random-from-one';
import {regForm} from './modules/reg-form';
import {todo} from './modules/todo';*/
import {isNumeric} from './modules/is-numeric';
/*import {makeBigger} from './modules/make-bigger';
import {smoothScroll} from './modules/smooth-scroll';*/



// function User(name, role){
// 	this.name = name;
// 	this.role = role;
// }

// User.prototype.getName = function(){
// 	return this.name;
// }

// const user_1 = new User('Seriy', 'admin');

// let name = user_1.getName();

// for(let key in user_1){
// 	if(!user_1.hasOwnProperty(key)){
// 		continue;
// 	}
// 	console.log(key);
// }


// var salaries = {
// 	"Вася": 400,
// 	"Петя": 300,
// 	"Даша": 350
// };

// const getSalariesSum = (obj) => {

// let sum = 0;
// 	for(let name in obj){
// 		sum += obj[name];
// 	}

// 	return sum
// }

// const result = getSalariesSum(salaries);

// console.log(result);

// const showReachest = (obj) => {
// 	let reachBitch = 'нет сотрудников';
// 	let num = 0;
// 	for(let name in obj){
// 		if(obj[name] > num){
// 			num = obj[name];
// 			reachBitch = name;
// 		}
// 	}
// 	return reachBitch;
// }

// let reachest = showReachest(salaries);

// console.log(reachest);


// const map = (fn, arr) => {
// 	const resArr = [];
// 	for(let i = 0; i < arr.length; i++){
// 		resArr.push(fn(arr[i]))
// 	}
// 	return resArr
// }

// const arr = [1, 2, 3, 4];

// function square(x) { return x * x; } // возведение в квадрат
// console.log(map(square, arr)); // [1, 4, 9, 16]
// console.log(map(square, [])); // []
// console.log(arr);


// const arr = [];

// for(let i = 0; i <= 20; i++){
// 	arr.push(i)
// }

// console.log(arr.sort((a,b)=>{
// 	return a < b;
// }));


// const a = {
// 	value: 2,
// 	toString: function(){
// 		return ++this.value;
// 	}
// };

// if(a == 3 && a == 4){
// 	console.log('I like JS!!!');
// }

// function smoothScrolling(queries){
// 	let sections = document.getElementsByTagName(queries);

// 	sections.forEach = [].forEach;

// 	const sectionsCollection = []

// 	sections.forEach((el) => {
// 		sectionsCollection.push(el.offsetTop);
// 	})

// 	let current = 0;
// 	const elem = document.body;

// 	if (elem.addEventListener) {
// 		if ('onwheel' in document) {
// 			elem.addEventListener("wheel", onWheel);
// 		} else if ('onmousewheel' in document) {
// 			elem.addEventListener("mousewheel", onWheel);
// 		} else {
// 			elem.addEventListener("MozMousePixelScroll", onWheel);
// 		}
// 	} else {
// 		elem.attachEvent("onmousewheel", onWheel);
// 	}

// 	function onWheel(e) {
// 		e = e || window.event;

// 		var delta = e.deltaY || e.detail || e.wheelDelta;

// 		e.preventDefault ? e.preventDefault() : (e.returnValue = false);

// 		current = current < 0 ? 0 : current;

// 		if(delta >= 0) {
// 			current = current >= sectionsCollection.length - 1 ? current : current + 1;
// 		} else {
// 			current -= 1;
// 		}
// 		window.scrollTo({
// 			top: sectionsCollection[current],
// 			behavior: 'smooth'
// 		})
// 	}
// }

// smoothScrolling('section');


// let form = document.forms['myForm'].elements;
// console.log(form);