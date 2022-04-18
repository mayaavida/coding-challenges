// Write a function to split a string and convert it into an array of words.

function stringToArray(string){
    return string.split(" ")
  }

//   If you can't sleep, just count sheep!!

//   Task:
//   Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
    let murmur = ""
    for(let i = 1; i<= num; i++){
      murmur += `${i} sheep...`
    }
    return murmur
  }

//   You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
//   If it is a square, return its area. If it is a rectangle, return its perimeter.
  
//   area_or_perimeter(6, 10) --> 32
//   area_or_perimeter(3, 3) --> 9
//   Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = (l,w) => l==w ? l*w : (l*2) + (w*2)

// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
    let z = [];
    for(let i=1; i<=n; i++){
      z.push(i*x)
    }
    return z;
  }

//   Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

//   Use conditionals to return the proper message:
  
//   case	return
//   name equals owner	'Hello boss'
//   otherwise	'Hello guest'

function greet (name, owner) {
    return name==owner ? "Hello boss" : "Hello guest"
  }

//   Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
    if(month <= 3){
      return 1
    }else if(month <=6){
      return 2
    }else if(month <= 9){
      return 3
    }else if(month <= 12){
      return 4
    }
  }

//   Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

//   A few cases:
  
  
//   (-12, 2, -6)  ->  true
//   (-12, 2, -5)  ->  false
  
//   (45, 1, 6)    ->  false
//   (45, 5, 15)   ->  true
  
//   (4, 1, 4)     ->  true
//   (15, -5, 3)   ->  true

function isDivideBy(number, a, b) {
    return (number % a == 0 && number % b == 0) ? true : false;
  }