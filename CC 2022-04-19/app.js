// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

const rps = (p1, p2) => {
    if((p1 == 'scissors' && p2 == 'paper') || (p1 == 'paper' && p2 == 'rock') || (p1 == 'rock' && p2 == 'scissors')){
      return 'Player 1 won!'
    }else if ((p2 == 'scissors' && p1 == 'paper') || (p2 == 'paper' && p1 == 'rock') || (p2 == 'rock' && p1 == 'scissors')){
      return 'Player 2 won!'
    }else if (p2 == p1){
      return 'Draw!'
    }
  };

//   Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

//   Return your answer as a number.

function sumMix(x){
    let nums = x.map(element => Number(element))
    return nums.reduce((a,b) => a+b, 0)
  }

//   You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

//   Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
  
//   For example, update_light('green') should return 'yellow'.

function updateLight(current) {
    if(current == 'green'){
      return 'yellow'
    }else if(current == 'yellow'){
      return 'red'
    }else{
      return 'green'
    }
  }

//   Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

function getGrade (s1, s2, s3) {
    let average = (s1+s2+s3)/3
    if(average>=90){
      return 'A'
    }else if(average>=80){
      return 'B'
    }else if(average>=70){
      return 'C'
    }else if(average>=60){
      return 'D'
    }else{
      return 'F'
    }
  }

//   The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

  function cockroachSpeed(s) {
    return Math.floor(s*100000 / 3600)
  }