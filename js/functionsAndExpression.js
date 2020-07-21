/******
 * Functions expression is writen whithout function name
 */

 // Function declaration
 function whatDoYouDo(job, firstName)
 {

 }

 // Function expression
 var whatDoYouDo = function(jobs, firstName)
 {
     // Note in switch when you return value you dan't need to break the case  
     switch(jobs)
     {
         case 'Developer':
             return firstName + ' Develope Website and Mobile App';

         case 'Teacher':
            return firstName + ' Teach Developer to build Website and Mobile App';
         case 'Designer':
             return firstName + ' Design Mockup of a website';

         case 'Tester':
             return firstName + ' Test Software';

         default:
             return firstName + ' Does something else';
     }
 
 }

 console.log(whatDoYouDo('Developer', 'Mukuna'));


 // Arrow Functions : Arrow functions allow us to write shorter function syntax:

 // Before
 var hello = function()
 {
     return "Hello World";
 }

 // With Arrow Function:
 hellos = () => {
     return "This is the arrow functions";
 }
 console.log(hellos());
