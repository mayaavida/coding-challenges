// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell ).

function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr): 0;
  }

//   You probably know that number 42 is "the answer to life, the universe and everything" according to Douglas Adams' "The Hitchhiker's Guide to the Galaxy". For Freud, the answer was quite different...

// In the society he lived in, people - women in particular - had to repress their sexual needs and desires. This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.

// Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was related to, and explained by sex.

// In this kata, the function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should return an empty string.

function toFreud(string) {
    return string ? string.split(' ').map(word => word = 'sex').join(' '): ''
    }

    // We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

    // You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).
    
    // All values will be positive integers or floats, or zero.

    function plural(n) {
        return n == 1 ? false : true
      }

    //   Write a method, that will get an integer array as parameter and will process every number from this array.

    //   Return a new array with processing every number of the input-array like this:
      
    //   If the number has an integer square root, take this, otherwise square the number.

    const squareOrSquareRoot = array => array.map(x => Math.sqrt(x) % 1 == 0 ? Math.sqrt(x) : Math.pow(x,2))
      