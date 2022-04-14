// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
    let classAverage = (classPoints.reduce((a,b)=>a+b))/classPoints.length
    return yourPoints > classAverage
  }

//   After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

//   You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
  
//   Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
  
//   Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
    let cost = d*40
      if(d>=7){
        return cost - 50
      }else if(d>=3){
        return cost - 20
      }else{
        return cost
      }
    }