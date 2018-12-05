const toUpperCaseFirst = str => {
  const strArr = str.split(' ');
  const newArr = [];
  for (let i = 0; i < strArr.length; i++) {
    let n = strArr[i].split('');
    const a = n[0].toUpperCase();
    n.splice(0, 1, a);
    const z = n.join('');
    newArr.push(z);
  }
  return newArr.join(' ');
}

/*toUpperCaseFirst('hello, world')*/

console.log(toUpperCaseFirst('hello, world! I love you'));





/*
const toUpperCaseFirst = n => {
  n[0] = toUpperCase(n[0]);
  const phraseLength = n.length;
  for (let i = 0; i < phraseLength; i++) {
    if (n[i] === ' ') {n[i+1] = n[i+1].toUpperCase()}
  }
return n;
}

console.log(toUpperCaseFirst('hello, world'));*/


