/*
1).
  a).
    O(1), there is only one tick which is the yell: whether there are 15 or 15000 people will not change the number of yells
  b).
    O(n), in this case you have to meet each person individually.  The number of meets is dependant on the number of people linearly.  15 meets for 15 people and 15000 meets for 15000 people
*/

/*
  2).
    O(1): regardless of the value, either one of the code blocks will run once
*/
function isEven(value) {
  if (value % 2 === 0) {
      return true;
  }
  else {
      return false;
  }
}

/*
  3).
    O(N^k) where k = 2: The first array is iterated through, and within it the second array is iterated as well. In this function there are two arrays, making k = 2
*/
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
      const el1 = arr1[i];
      for (let j = 0; j < arr2.length; j++) {
          const el2 = arr2[j];
          if (el1 === el2) return true;
      }
  }
  return false;
}

/*
  4).
    O(N): The array length is the main variable.  The longer the array, the larger N is
*/
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
      array[i] *= 2;
  }
  return array;
}
/*
  5).
    O(N): similar to the doubler.  It can be cut short if the item is found
*/
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
          return i;
      }
  }
}
/*
  6).
    Between O(NlogN) and O(N^2): the array is being iterated multiple times, though not quite like the usual two arrays.  As the first loop reaches the end, the length of the second loop also shortens.
*/
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j < arr.length; j++) {
          console.log(arr[i] + ", " +  arr[j] );
      }
  }
}
/*
  7).
    O(N): The for loop length is based on the given number regardless of the if else branches.  The result is the fibonacci sequence, the next variable pushed into the result is the sum of the prior two variables.
*/
function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

      if (i === 1) {
          result.push(0);
      }
      else if (i === 2) {
          result.push(1);
      }
      else {
          result.push(result[i - 2] + result[i - 3]);
      }
  }
  return result;
}
/*
  8).
    O(logN): The loop starts at the middle of the array, and each iteration essentially cuts the nonmatching half by comparing the current index item with the given item.  This means that each iteration cuts the choices in half.  This will only work properly if the given array is sorted however
*/
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
      currentIndex = Math.floor((minIndex + maxIndex) / 2);
      currentElement = array[currentIndex];

      if (currentElement < item) {
          minIndex = currentIndex + 1;
      }
      else if (currentElement > item) {
          maxIndex = currentIndex - 1;
      }
      else {
          return currentIndex;
      }
  }
  return -1;
}
/*
  9).
    O(1): Since there is no loop or iteration, the code will only run once regardless of the array length
*/
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
/*
  10).
    O(N): The given number will affect the number of iterations the for loop runs.
*/
function isWhat(n) {
  if (n < 2 || n % 1 !== 0) {
      return false;
  }
  for (let i = 2; i < n; ++i) {
      if (n % i === 0) return false;
  }
  return true;
}
/*
  11).
    Tower of Hanoi
*/
hanoi = (disks, cur, dest, aux) => {
  if (disks === 1) {
    //console.log(`${cur} to ${dest}`);
    ticks++;
    console.log(dest.length);
    dest.push(cur.pop());
  }
  else {
    //move disks to auxiliary
    hanoi(disks - 1, cur, aux, dest);
    //put disk to destination
    //console.log(`${cur} to ${dest}`)
    dest.push(cur.pop());
    //switch auxiliary to current and current becomes auxiliary
    hanoi(disks - 1, aux, dest, cur)
  }
}

// let ticks = 0;
// let source = [1, 1, 1, 1];
// let auxil = [];
// let destin = [];

// hanoi(source.length, source, destin, auxil);
// console.log(destin);
// console.log(ticks);

// O(N): N is based on the number given.  One loop control
countingSheep = (n) => {
  for (let i = n; i > 0; i--) {
    console.log(`${i}: Another sheep jumps over the fence`)
  }
  console.log('All sheep jumped over the fence');
}
countingSheepRec = (n) => {
  if (n <= 0) {
    console.log('All sheep jumped over the fence');
  } else {
    console.log(`${n}: Another sheep jumps over the fence`);
    countingSheepRec(n-1);
  }
}

// O(N): N is based on exp.  One loop control
powerCalc = (base, exp) => {
  if (exp < 0) {
    return 'exponent should be >= 0';
  }
  let result = 1;
  for (i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
}
powerCalcRec = (base, exp) => {
  if (exp < 0) {
    return 'exponent should be >= 0';
  }
  if (exp === 0) {
    return 1;
  }
  else {
    return base * powerCalcRec(base, exp-1);
  }
}

// O(N): N is based on the length of the string given.  One loop control
reverseString = (str) => {
  let newStr = ''
  for (let i = str.length-1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
reverseStringRec = (str) => {
  if (str.length <= 1) {
    return str[0];
  }
  else {
    return str[str.length-1] + reverseStringRec(str.slice(0, str.length-1));
  }
}

// O(N): N is based on the number given.  One loop control
triangleNumber = (num) => {
  let sum = 0;
  for (i = 1; i <= num; i++) {
    sum+=i;
  }
  return sum;
}
triangleNumberRec = (num) => {
  if (num <= 1) {
    return num
  }
  else {
    return num + triangleNumber(num-1);
  }
}
//console.log(triangleNumber(5));

// O(N): N is based on the number of separators that exist in the given string.  One loop control
stringSplit = (str, sep) => {
  let newStr = [];
  let curStr = str;
  while (curStr.includes(sep)) {
    console.log(curStr);
    const sepIndex = curStr.indexOf(sep);
    const cut = curStr.slice(0, sepIndex)
    newStr.push(cut)
    curStr = curStr.slice(sepIndex+1);
  }
  newStr.push(curStr);
  return newStr;
}
stringSplitRec = (str, sep) => {
  if (str.indexOf(sep) === -1) {
    return [str]
  }
  else {
    const sepIndex = str.indexOf(sep);
    const first = str.slice(0, sepIndex);
    const remaining = str.slice(sepIndex + 1);
    return [first, ...stringSplitRec(remaining, sep)];
  }
}
//console.log(stringSplitRec('02/20/2020', '/'));

// O(N): N is based on the number given. One loop control
fibonacci = (num) => {
  let prev = 0;
  let prevTwo = 1;
  let cur = 1;
  for (let i = 0; i < num; i++) {
    console.log(cur);
    cur = prev + prevTwo;
    prev = prevTwo;
    prevTwo = cur;
  }
  console.log(cur);
}
fibonacciRec = (num) => {
  fib = (num, prev, prevTwo) => {
    if (num <= 1) {
      return prevTwo
    }
    else {
      console.log(prev+prevTwo);
      return fib(num-1, prevTwo, prev+prevTwo);
    }
  }
  return fib(num, 0, 1);
}
//console.log(fibonacciRec(6));

// O(N): N is based on the number given. One loop control
factorial = (num) => {
  let result = num;
  for (let i = 1; i < num; i++) {
    result *= i;
  }
  return result;
}
factorialRec = (num) => {
  if (num <= 1) {
    return num
  }
  else {
    return factorial(num-1) * num;
  }
}
//console.log(factorialRec(5));

// countingSheep(3);
// console.log(powerCalc(10, 2))
// console.log(reverseString('string'));
// console.log(triangleNumber(5));
// console.log(stringSplit('02/20/2020', '/'))
// fibonacci(5);
// console.log(factorial(5));