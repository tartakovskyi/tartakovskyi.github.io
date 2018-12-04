const length = str => str.length;
const toUpperCase = str => str.toUpperCase();

const bigLettersCount = (str) => {
  // BEGIN (write your solution here)
  let bigLetters = 0;
  for (let i = 0; i < length(str); i++) {
    if (toUpperCase(str[i]) === str[i]) {bigLetters = bigLetters + 1}
  }
  return bigLetters
  // END
};


const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
  if (first > second) return 1 
  else if (first < second) return -1
  else return 0
  // END
};

/*console.log(compare('AD', 'AsAsA'));
console.log(compare('AsAsA', 'AD'))*/
console.log('ASdsssD')



/*export const greaterThan = (first, second) =>
  compare(first, second) === 1;

export const lessThan = (first, second) =>
  compare(first, second) === -1;

export const isEqual = (first, second) =>
  compare(first, second) === 0;*/
