// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

function generateRange(min, max, step){
    let arr = []
    for(let i = min; i <= max; i += step){
      arr.push(i)
    }
    return arr
  }

//   We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]

const arr = N => {
    let arr = []
    for(let i = 0; i < N; i++){
      arr.push(i)
    }
    return arr
  }