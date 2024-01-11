//const tinderUser= new Object() //singleton object
const tinderUser={}  // non singleton object
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularuser = {
    email:"some@gmail.com",
    fullname : {
        userfullname :{
            firstname: "onkar",
            lastname : "lamkane"
        }
    }
}
//console.log(regularuser.fullname.userfullname.firstname);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
//const obj3 = Object.assign({}, obj1,obj2)// {}(target) , obj1 obj2(source)
const obj3 ={...obj1,...obj2} //most use type merge the object
//console.log(obj3);

//  console.log(Object.keys(tinderUser))
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));// every one key value convert into array
//  console.log(tinderUser.hasOwnProperty('name'));//check the property in the object

 const course ={
    coursename:"Js in hindi",
    courseprice:"999",
    courseInstructor:"Hitesh"
 }
 const {courseInstructor:instuctor} = course //destrucring value
 console.log(instuctor);

 //example of json
//  {
//     "name": "js in hindi",  // in json key and value write in double quote
//     "courseprice":"free",
//     "time":"1month"
//  }
