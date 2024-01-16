const user ={
    username: "onkar",
    price: 999,
    welcomemsg: function() {
        console.log(`${this.username}, welcome to website`);
    }
}
// user.welcomemsg()
// user.username="nil"// using this  current value print the output
// user.welcomemsg()
// console.log(this);// o/p is {} in node but in windows o/p is windows object in node global variable is not available
// and in windows globla variable is available


//****************************************************************************
//function chai (){
    //console.log(this);
//}
// chai() // run this function o/p is more value beacause this is define in the function

// this is used in object and then work succesfull
// this is usend in function and not work same like as a object

// const chai = function(){
//     let username = "onkar"
//     console.log(this.username);
// }
// chai()
//O/P undefined //in this function this in not working

// const chai = () => {
//     let username = "onkar"
//     console.log(this);
// }
// chai()
//O/P {}  using => funtion this is not working


//*************************Arrow function ************/

// arrow function syntax () => {}

// arrow function example
// const one= (num1,num2) => {
//     return num1+num2
// }
// console.log(one(3,5));
// O/P 8

//arrow function example
// const one= (num1,num2) =>  num1+num2
// console.log(one(3,5)); //implicit type
// O/P 8
// arrow function example
const one= (num1,num2) =>  (num1+num2) // using simple bracket not write return
//using curly bracket need write the return keyword
//console.log(one(3,5));
// O/P 8 





