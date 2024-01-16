// let a=300 //Global scope
// if (true) {
//      let a=10
//     const b=20
//     //console.log("inner:",a); //block scope
    
// }
//console.log(a);

//***************************************************************************** */
//nested scope
// function one(){
//     const username = "onkar"
//     function two(){
//         const website = "youtube.com"
//         console.log(username);
//     }
//    // console.log(website);
//     //two()
// }
// one()

//O/p  onkar 

//******************************************************************** */

if(true)
{

    const username="onkar"

    if(username==="onkar")

    {
        const website = " youtube"

        //console.log(username + website);
        //console.log(website);
    } 
    
   
}
// in nested function inner fuction access parent function variable and parent function does not access child funtion values
//console.log("Hello ");

//**************************************************** */
console.log(addone(5)); //access before initialization
function addone(num){
    return num + 1
    
}


console.log(addtwo(5)); // cannot access before intialization
const  addtwo = function(num){
    return num + 2
}
