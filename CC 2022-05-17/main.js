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