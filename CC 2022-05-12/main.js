// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

function finalGrade (exam, projects) {
    if(exam>90 || projects>10){
      return 100
    }else if(exam>75 && projects>=5){
      return 90
    }else if(exam>50 && projects>=2){
      return 75
    }else{
      return 0
    }
  }

//   Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.

  function greet(language) {  
    const langs = {
      'english': 'Welcome',
      'czech': 'Vitejte',
      'danish': 'Velkomst',
      'dutch': 'Welkom',
      'estonian': 'Tere tulemast',
      'finnish': 'Tervetuloa',
      'flemish': 'Welgekomen',
      'french': 'Bienvenue',
      'german': 'Willkommen',
      'irish': 'Failte',
      'italian': 'Benvenuto',
      'latvian': 'Gaidits',
      'lithuanian': 'Laukiamas',
      'polish': 'Witamy',
      'spanish': 'Bienvenido',
      'swedish': 'Valkommen',
      'welsh': 'Croeso'
    }
      return langs[language] || langs['english'];
  }

//   In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

function findDifference(a, b) {
    let volumeA = a.reduce((acc, current) => acc * current)
    let volumeB = b.reduce((acc, current) => acc * current)
    return Math.abs(volumeA - volumeB)
  }
  
//   Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

// "c".isUpperCase() == false
// "C".isUpperCase() == true
// "hello I AM DONALD".isUpperCase() == false
// "HELLO I AM DONALD".isUpperCase() == true
// "ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
// "ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

String.prototype.isUpperCase = function() {
    return this == this.toUpperCase()
  }

//   Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
    return (n%x == 0 && n%y == 0)
  }

//   It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
    let sum = marks.reduce((acc, current) => acc + current)
    return Math.floor(sum/(marks.length))
  }

//   Complete the solution so that it reverses all of the words within the string passed in.

function reverseWords(str){
    return str.split(" ").reverse().join(" ")
  }

//   Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

function divisibleBy(numbers, divisor){
    return numbers.filter(num => num % divisor === 0)
  }
  