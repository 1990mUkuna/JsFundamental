/***********************
 * Basic Operators
 */

 let year, yearJunior, yearMark;
 year = 2020;
 yearJunior = year - 30;
 yearMark = year - 29;
 
 alert('Mark born in : '+yearMark);

 const juniorBornyear = 1990;
 const currentYear = 2020;

 const juniorAge = currentYear - juniorBornyear;
 alert('Junior is :'+juniorAge+ ' years old');

 //logical Operator

 if(yearJunior > yearMark)
 {
     alert('Junior is older than Mark !!')
 } else
 {
     alert('Mark is older than Junior');
 }


 // typeopf operator
 alert(typeof yearJunior); // typeof tell you which data type is your varable



 //Operator precedent
console.log(3 + 10 * 2);   // logs 23
console.log(3 + (10 * 2)); // logs 23 because parentheses here are superfluous
console.log((3 + 10) * 2); // logs 26 because the parentheses change the order 


var now = 2020;
var yearKgori = 1990;
var fullAge = 18;

var isFullAge = now - yearJunior >= fullAge;
console.log("Total Now yeark kgori :"+fullAge);


function calcualtion(name, num){
    console.log("Evaluating the " + name + "side")
    return num;
}
// Notice the ivsion operator
console.log(calcualtion("left", 6) / calcualtion("right", 2))