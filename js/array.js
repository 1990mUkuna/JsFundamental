/**
 * Array
 */

var student = ["John", "Christ", "Angel"];
const teachers = ["John", "Christ", "Angel"];


//You can re-initializing arrays
teachers [0] = "Mbuyi";
teachers [1] = "Cedrick";

console.log(teachers);
console.log(student);


// You can create array using array constructor:

var students = new Array("John", "Ann", "Kevin");

//OR

var students = new Array();

students[0] = "John";

students[1] = "Ann";

students[2] = "Kevin";

// Javascript Array Methods
/* push(); // push element at the end of array
unshift();// push element in front
pop();// remove the last element in the array 
shift()// Remove the first element in the array 
 */
console.log(students.indexOf('john'));