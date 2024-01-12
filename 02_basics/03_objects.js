// singleton
// object.create(object create by constructor called as singleton)

//object literals
//Object.create  constructor method

const mySym = Symbol("key1") //symbol in js new type of a datatype

const JsUser = {
    name : "onkar",
    age : 23,
    [mySym] : "myKey1", //every time symbol declare in square bracket symbol syntax
    //use symbol datatype variable name declare in square bracket
    location : "pune",
    email : "onkar@google.com",
    login: false,
    lastLogInDays:["Monday","Saturaday"],

    
}
// console.log(JsUser.email);
// console.log(JsUser["email"]); //access the object variable most use mthod 
// console.log(JsUser[mySym]);
JsUser.email = "omkar@gmail.com" 
//console.log(JsUser);
//Object.freeze(JsUser)// use the freeze method then do change the object value.
JsUser.email = "rahul@gmail.com"
//console.log(JsUser["email"]);


JsUser.greeting = function(){
    console.log("Hello JsUser "); // greeting is function
}
JsUser.greetingTwo = function(){
    console.log(`Hello JsUser,${this.name}`); // greetingtwo is a function print with object value print by this. keyword
    // object ke under ke value ko reference karne ke liye
    //string to converted into backticks called as string intepulation
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
//console.log(JsUser.greeting);// only output a function reffernce
    