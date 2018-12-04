
//getTriangleArea(5, 10) === 25;
//getTriangleArea(15, 12) === 90;


/*
const getTriangleArea = (h, b) => {
	return h * b / 2
}

export default getTriangleArea;



console.log(getTriangleArea(5, 10));
console.log(getTriangleArea(15, 12));*/

// BEGIN (write your solution here)
const square = n => n * n;

const sumOfSquares = (a, b) =>  square(a) + square (b);

const squareSumOfSquares = (x, y) => sumOfSquares (x, y) ** 2;
// END

export default {
  square,
  sumOfSquares,
  squareSumOfSquares,
};

