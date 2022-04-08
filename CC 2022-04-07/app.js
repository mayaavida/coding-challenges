// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0)
      return [];  
  let pos = 0;
    let neg = 0;
    input.forEach( element => element > 0 ? pos++ : neg = neg + element)
    let arr = [pos, neg]
    return arr;
  }