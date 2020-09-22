/*
1).
  a).
    O(1), there is only one tick which is the yell: whether there are 15 or 15000 people will not change the number of yells
  b).
    O(n), in this case you have to meet each person individually.  The number of meets is dependant on the number of people linearly.  15 meets for 15 people and 15000 meets for 15000 people

2).

*/

function createPairs(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j < arr.length; j++) {
          count++;
          console.log(arr[i] + ", " +  arr[j] );
      }
  }
  return count;
}

console.log(createPairs(['asdasd', 'zxczczsx', 'asdasd', 'wqeaw']));
console.log(createPairs(['asdasd', 'zxczczsx', 'asdasd', 'wqeaw', 'dasfasd']));
console.log(createPairs(['asdasd', 'zxczczsx', 'asdasd', 'wqeaw', 'dasfasd', 'asdxzcweaw']));
console.log(createPairs(['asdasd', 'zxczczsx', 'asdasd', 'wqeaw', 'dasfasd', 'asdxzcweaw',' 3542342', 'cxzcz', 'sssssss']));