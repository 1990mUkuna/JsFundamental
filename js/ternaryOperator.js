/*****
 * Ternary Operator
 * ? represent if
 * : represent else
 */
const firstName = 'Mukuna';
const age = 90;

try {
    age >=18 ? console.log(firstName + ' Is a Full-stack developer')
    : console.log(firstName+ ' Is a tester')
} catch (error) {
    console.log('It not the coorect age Please contact support')
}