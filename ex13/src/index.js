
function randomRangNumber(minNumber, maxNumber) {

   return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
}

console.log(randomRangNumber(1, 9));


    // Only change code below this line
  
    // Only change code above this line
   
    module.exports = randomRangNumber;