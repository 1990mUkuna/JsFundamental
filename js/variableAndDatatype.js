var firstName = 'Mukuna';
var age = 30; 
console.log("Your Name:"+firstName+ " Your Age:" +age);

var fullAge = true; 
console.log(fullAge);

var job; //undefined var
console.log(job);

job = 'Teacher' // Initialize varable
console.log(job);

const greeting = 2;
console.log('This is the const value '+greeting); 

/* greeting = 3;
console.log('other const value' + greeting); */ // error

//object
const sms = {
 messageTitle: "Software Enginner",
 text: "Yo Got the job",
 time: 4
}

console.log(sms.messageTitle);

// Accessing the const object to change the Message
sms.messageTitle = "Full-stack dev";
console.log(sms.messageTitle);

// type coecion
let country, president;
country = 'Drcongo';
president = 'Felix'


//BigInt

/**
 * BigInt is a special numeric type that provides support for integers of arbitrary length. 
   A bigint is created by appending 'n' to the end of an integer literal or by calling the function BigInt t
 */
const tankQuantity = 123546978965412321456698745631n;

console.log('Which data type is this Tank : ', typeof tankQuantity);






/* In javaScript there's 5 type of Data type
1.Number : Floating poin Number, for decimal and SVGAnimatedInteger
2.String: sequence of CharacterData, used for text
3.Bolean: logical data typeof, true and false
4.Undefined:Data type of a variable that does not have a value yet 
5.null: also means 'non-existent' 

Article link: https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/#:~:text=Hoisting%20of%20const&text=var%20declarations%20are%20globally%20scoped%20or%20function%20scoped%20while%20let,be%20updated%20nor%20re%2Ddeclared.
Scope of var: Scope essentially means where these variables are available for use. 
              var declarations are globally scoped or function/locally scoped.
The scope is global when a var variable is declared outside a function. 
This means that any variable that is declared with var outside a function 
block is available for use in the whole window.

"var"
var is function scoped when it is declared within a function. 
This means that it is available and can be accessed only within that function.

    var greeter = "hey hi";
    
    function newFunction() {
        var hello = "hello";
    }
greeter is globally scoped because it exists outside a function while hello is 
function scoped. So we cannot access the variable hello

var tester = "hey hi";
    
    function newFunction() {
        var hello = "hello";
    }
    console.log(hello); // error: hello is not defined

    var variables can be re-declared and updated
This means that we can do this within the same scope and won't get an error.

var greeter = "hey hi";
var greeter = "say Hello instead";

var greeter = "hey hi";
    greeter = "say Hello instead";

Problem with var: There's a weakness that comes with  var. I'll use the example below to explain:
    var greeter = "hey hi";
    var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead"; 
    }
    
    console.log(greeter) // "say Hello instead"


    "Let"
    let is block scoped

     A block is a chunk of code bounded by {}. 
     A block lives in curly braces. Anything within curly braces is a block.
 
    So a variable declared in a block with let  is only available for use within 
    that block. Let me explain this with an example:

    let greeting = "say Hi";
    let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);// "say Hello instead"
    }
   console.log(hello) // hello is not defined

   let can be updated but not re-declared.

   let greeting = "say Hi";
    greeting = "say Hello instead";

    This will return error;

    let greeting = "say Hi";
    let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared

    However, if the same variable is defined in different scopes, there will be no error:

     let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting); // "say Hello instead"
    }
    console.log(greeting); // "say Hi"


    "Const"
    Variables declared with the const maintain constant values. const declarations share some 
    similarities with let declarations.

    const declarations are block scoped
    Like let declarations, const declarations can only be accessed within the block they were 
    declared.

    const cannot be updated or re-declared
    This means that the value of a variable declared with const remains the same within its

    e.g ; 
    const greeting = "say Hi";
    greeting = "say Hello instead";// error: Assignment to constant variable. 

    const greeting = "say Hi";
    const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared

    Every const declaration, therefore, must be initialized at the time of declaration.

    Note; a cont object must be initialize / a const object can not be update



*/

// Note: varable can only start with $ sign or _ not start with number or other sign 



 