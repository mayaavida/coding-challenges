
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
    if ((flower1 % 2 == 0 && flower2 % 2 != 0) || (flower1 % 2 != 0 && flower2 % 2 == 0)){
      return true
    }else {
      return false
    }
  }


//   Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

//   Examples
//   Input: [1, 5.2, 4, 0, -1]
//   Output: 9.2
  
//   Input: []
//   Output: 0
  
//   Input: [-2.398]
//   Output: -2.398
  
//   Assumptions
//   You can assume that you are only given numbers.
//   You cannot assume the size of the array.
//   You can assume that you do get an array and if the array is empty, return 0.

function sum (numbers) {
    if (!numbers){
      return 0
    } else {
      return numbers.reduce((a, b)=> a + b, 0)
    }
  };

//   Create a function which answers the question "Are you playing banjo?".
//   If your name starts with the letter "R" or lower case "r", you are playing banjo!
  
//   The function takes a name as its only argument, and returns one of the following strings:
  
//   name + " plays banjo" 
//   name + " does not play banjo"

function areYouPlayingBanjo(name) {
    return name.toLowerCase().startsWith('r') ? `${name} plays banjo` : `${name} does not play banjo`
  }

//   Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

var min = function(list){
    return Math.min(...list)
  }
  
  var max = function(list){
    return Math.max(...list)
  }

//   You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump <= (mpg*fuelLeft) ? true : false
  };


//   I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

//   P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    return (arr1.reduce((a,b) => a + b, 0)) + (arr2.reduce((a,b) => a+b, 0))
  }

//   This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    return number % 2 == 0 ? number * 8 : number * 9;
  }

//   You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

//   As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
  
function monkeyCount(n) {
    let arr = []
    for (let i = 1; i <= n ; i++){
      arr.push(i)
    }
    return arr
  }

//   Given a non-empty array of integers, return the result of multiplying the values together in order. 

function grow(x){
    return x.reduce((a,b)=>a*b,1)
  }