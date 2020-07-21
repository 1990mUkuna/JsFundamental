/******
 * Functions
 * Functions are very important and useful in any programming language as they make 
 * the code reusable A function is a block of code which will be executed only if 
 * it is called.  If you have a few lines of code that needs to be used several times, you can create a function including the
 */



 function calculateAge(birthYear)
 {
        return 2020 - birthYear;
 }

 var ageMukuna = calculateAge(1990);
 console.log('Mukuna your are ' +ageMukuna+ ' years old');

 function yearToretirement(year, firstame)
 {
     var age = calculateAge(year);
     var retirement = 65 -age;
     if(retirement < 20)
     {
        console.log(firstName+ ' retires in ' + retirement + ' Years')
     } else {
         console.log(firstName+ ' Is still have some more year to go ')
     }
     
     // it's not a must to always return value
 }

 yearToretirement(1990, 'Mukuna');