function localScope(){ 
    var myVariable = "I am here!";
    console.log (myVariable);

localScope();
console.log(myVariable);
}
    //Only change code below this line
    
    //Only change code adove this line
    
    // myVariable is not defined outside of localScope

if (typeof myVariable != "undefined") {
    console.log("outside localScope", myVariable)
} else {
    console.log("outside localScope UNDEFINED!!!")
}


module.exports = localScope;