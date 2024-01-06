// Dates


let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(Date());

// milisecond time convert into second


//console.log(Math.floor(myTimeStamp/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());

newDate.toLocaleString(`Default`,{
    weekday:"long",
})
console.log(newDate);




