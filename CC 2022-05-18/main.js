// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a, b) {
    let arr = []
    for(let i = a; i<=b; i++){
      arr.push(i)
    }
    return arr
  }

//   Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(bird => !geese.includes(bird))
  };

//   Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
function powersOfTwo(n){
    let arr = []
    for(let i=0; i<=n; i++){
      arr.push(Math.pow(2, i))
    }
    return arr
  }

// Write a function that checks if a given string (case insensitive) is a palindrome.
function isPalindrome(x) {
    let reverse = x.split('').reverse().join('')
    return x.toLowerCase() === reverse.toLowerCase()
  }