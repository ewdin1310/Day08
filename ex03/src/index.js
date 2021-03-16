var myGlobalVariable = 10;


    //Write code below this line
    
    //write code adove this line
    function function1(notGlobalVariable){ 
        var function1 = ""
            if (typeof myGlobalVariable != "undefined" ) {
                function1 += "myGlobalVariable: " + myGlobalVariable;
            }
            if (typeof notGlobalVariable != "undefined" ){
                function1 += " notGlobalVariable: " + notGlobalVariable;
            }
            console.log (function1);
        }
        function1(5);
    
    module.exports = function1;