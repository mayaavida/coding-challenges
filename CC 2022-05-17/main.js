// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
    return s.sort()[0].split('').join('***')
  }

//   For every good kata idea there seem to be quite a few bad ones!

//   In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
    let count = 0
    x.map(idea => idea === 'good' ? count++ : count)
    if(count === 0){
      return 'Fail!'
    }else if(count <= 2){
      return 'Publish!'
    }else if (count > 2){
      return 'I smell a series!'
    }
  }


// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// Let's look at a few examples:

// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

function index(array, n){
    if(array[n]){
      return Math.pow(array[n], n)}
    else{
      return -1
    }
  }