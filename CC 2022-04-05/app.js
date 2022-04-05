// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2)
{
  if (operation == '+'){
    return value1 + value2;
  }else if (operation == '-'){
    return value1 - value2;
  }else if (operation == '*'){
    return value1 * value2;
  }else if (operation == '/'){
    return value1 / value2;
  }
}


// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name){
    return `Hello, ${name} how are you doing today?`
  }

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(str) {
    return String(str).split('').reverse().map(Number);
  }

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    let arr = name.split(' ').map( element => element[0]);
    return arr.join('.').toUpperCase();
  }
  
  function abbrevName(name){
    return name.split(' ').map( element => element[0]).join('.').toUpperCase();
  }
  
  let abbrevName = name => name.split(' ').map( element => element[0]).join('.').toUpperCase();