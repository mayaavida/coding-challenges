// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide

function mouthSize(animal) {
    return animal.toUpperCase() == 'ALLIGATOR' ? 'small' : 'wide'
  }

//   Palindrome strings
//   A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.
  
//   Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

function isPalindrome(line) {
    return line.toString() == line.toString().split('').reverse().join('')
  } 