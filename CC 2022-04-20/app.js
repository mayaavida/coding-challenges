// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise.

function setAlarm(employed, vacation){
    return (employed && !vacation) ? true : false
  }

  const setAlarm = (employed, vacation) => employed && !vacation ? true : false

//   Your function takes two arguments:

//   current father's age (years)
//   current age of his son (years)
//   Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let doubleSonAge = 2*sonYearsOld;
    return dadYearsOld > doubleSonAge ? dadYearsOld - doubleSonAge : doubleSonAge - dadYearsOld;
  }