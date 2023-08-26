function findDominator(arr) {
  // Step 1: Find distinct values in the array.
  const distinctValues = new Set(arr);
  console.log(distinctValues)
  let domin = arr[0];
  let max = 0;
  // Step 2: Count occurrences of each distinct value.
  for (const num of distinctValues) {
    let count = 0;
    for (const val of arr) {
      if (num == val) {
        count++;
      }
    
    if (count > max) {
      max = count;
      domin = num
    }
  }
}
  console.log(domin);
}
findDominator([0, 5, 0, 2, 3, 0, 1, 5, 5,5]);


function secondOccurrenceIndex(str, letter) {
  let count = 0;
 let result = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      result.push(i)
      console.log("hello i am here");
    }
  }
  if(result[1]){
    return result[1]
  } else 'not found'

}
let res = secondOccurrenceIndex('Hello world!!!','l')
console.log(res);