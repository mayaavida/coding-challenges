// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

function hero(bullets, dragons){
    let win = bullets/2
    if(win >= dragons){
      return true
    }else
      return false
  }

//   Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"
  
  function bmi(weight, height) {
    let bmi = weight/(height*height)
    if(bmi <= 18.5){
      return 'Underweight'
    }else if(bmi <= 25){
      return 'Normal'
    }else if(bmi <= 30){
      return 'Overweight'
    }else
      return 'Obese'
  }