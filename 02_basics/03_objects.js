// singleton
// object.create(object create by constructor called as singleton)

//object literals
//Object.create  constructor method

const mySym = Symbol("key1") //symbol in js new type of a datatype

const JsUser = {
    name : "onkar",
    age : 23,
    [mySym] : "myKey1", //every time symbol declare in square bracket symbol syntax
    location : "pune",
    email : "onkar@google.com",
    login: false,
    lastLogInDays:["Monday","Saturaday"],

    
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);
JsUser.email = "omkar@gmail.com" 
//console.log(JsUser);
//Object.freeze(JsUser)// use the freeze method then do change the object value.
JsUser.email = "rahul@gmail.com"
//console.log(JsUser["email"]);


JsUser.greeting = function(){
    console.log("Hello JsUser ");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JsUser,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
//console.log(JsUser.greeting);// only output a function reffernce
    