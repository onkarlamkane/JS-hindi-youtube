// if statement

// < , > , >= ,<= , != , == ,=== 

// if(2=="2"){
//     console.log("executed");
// }

// const  score = 200
// if (score > 100){
//     const power = "fly"
//     console.log(`user power:${power}`);
// }

//***************************************************************************** */
// const balance = 1000


// if(balance<500){
//     console.log("balance is less than 500");
// }else if(balance<750){
//     console.log("balance is lesst than750");

// }else if(balance<900){
//     console.log("balance is less than 900");
// }else{
//     console.log("balance is less than 1200");
// }

//********************************************************* */
 const userLoggedIn = true
 const debitCard = true
 const loggedInFromGoogle = false
 const loggedInFromemail = false
 const guestUser = true
 if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
 }

 if (loggedInFromGoogle || loggedInFromemail || guestUser){
    console.log("user log in");
 }
