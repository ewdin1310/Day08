
// Setup
function mathTest (x, y){

    //Only change code below this line

    //Only change code adove this line
    if (x < 0 || y < 0) {
        return undefined;
    }
    //Only change code below this line
    

    return Math.round(Math.sqrt(x) + Math.sqrt(y), 2)

}

    //Only change code adove this line
mathTest (-2,2);


module.exports = mathTest;