// const userEmail = "onkar@gmail.ai"
// if (userEmail){
//     console.log("got the user email");
// }
// else{
//     console.log("didn't the user email");
// }

//*************************************************************************** */
// falsy values
// false , 0 , -0 , In Bigint 0n , "", NaN , null , undefined
//********************************************************************************** */

// truthy values
// "0" , 'false' , " "(in string one space is truthy value) , [] , {} , function(){}(empty function) , 

//**************************************************************************/
//****************How to check array is empty or not****************** */
userEmail =[]
if (userEmail.length === 0){
    console.log("Array is empty"); // in the code check array is empty
}
// ************************** How to check object is empty or not****************/
const emtyobj = {}
if(Object.keys(emtyobj).length===0){
    console.log("object is empty");  // in this code check the object is empty 
                                    // first check the object.keys and in bracket give the object name and this object is 
                                    //covert into array and chek the length.
}

//***************************************************************************** */

// in brawser
//  false == 0  (O/P= true)
//  false == '' (O/P = true)
//  0 == ' '  (O/P = true)
// ********************************************************/

// nullish coalescing operator (??) ( yamdhe total work he null ani undefined varati ahe)
// this operator is used for error handle karne ke use hote hai

let val1;
//console.log(val1);
//O/P 10

// val1 = null ?? 15
// console.log(val1);
//O/P  15

// val1 = undefined ?? 10
// console.log(val1);
//O/P 10

val1 = 25 ?? 15 ?? 50
//console.log(val1);
// O/P 25
 
//****************************************************************** */

//Terniary operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("price more than 80") : console.log("price less than 80");



