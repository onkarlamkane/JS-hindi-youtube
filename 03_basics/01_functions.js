function addTwoNumbers(n1,n2)  //function declare and define //n1,n2 are the parameters
{ 
     console.log (n1+n2); 

}

addTwoNumbers(3,7) // function call //3,7 are the arguments
// O/P 10
addTwoNumbers(3,"4")
// O/P 34 

function logInUsermessage(username)
{
     return `${username} just logged in`

}
//console.log(logInUsermessage("onkar"));
// O/P onkar just logged in
//console.log(logInUsermessage());

//................................................................//

function calculateCartPrice(...num1){
     return num1

}
console.log(calculateCartPrice(200,400,600));


// O/P [200,400,600]

function calculateCartPrice2( val1,val2,...num2){
     return num2

}
console.log(calculateCartPrice2(200,400,600,500,800));

//...................................................................//
// object to function
const user={
     username:"onkar",
     price:199
}

function handleObject(anyobject){
     console.log(`usename is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

// O/P usename is onkar and price is 199

//............................................................//


//................................................................//
// array to function 
const myNewArray = [200,100,300,400,500]

function retunValue(getArray){
     return getArray[1]
}
console.log(retunValue(myNewArray));

// O/P  100

