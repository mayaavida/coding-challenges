// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
    return str.split('').map(e => e+e).join('')
  }

//   You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

//   Write a program that returns the girl's age (0-9) as an integer.
  
//   Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
    let arr = inputString.split(' ')
    return Number(arr[0])
  }


//   The Story:
//   Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
  
//   Task Overview:
//   You have to write a function that accepts three parameters:
  
//   cap is the amount of people the bus can hold excluding the driver.
//   on is the number of people on the bus excluding the driver.
//   wait is the number of people waiting to get on to the bus excluding the driver.
//   If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

function enough(cap, on, wait) {
    let space = cap - on
    return space>= wait ? 0 : wait - space
  }