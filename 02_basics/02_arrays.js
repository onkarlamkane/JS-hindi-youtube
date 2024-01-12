const marvel_heros = [ "thor","iornman","spiderman"]
const dc_heros =[ "superman ", "flash" , "batman"]
marvel_heros.push(dc_heros)
//console.log(marvel_heros);

//const allHeros = marvel_heros.concat(dc_heros)
const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);


// sprade 

const all_new_heros = [...marvel_heros,...dc_heros]
//console.log(all_new_heros);


const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
//console.log(lyrics);

//  O/P ["head", "shoulders", "knees", "and", "toes"]

const mn1  = ["a","b","c"]
const mn2 = ["d","e","f"]
const mn3 = [...mn1,...mn2]
const mn4 = [...mn3,...mn2,...mn1]

//console.log(mn4);
//console.log(all_new_heros);

// flat method

const another_array = [1,2,3,[5,6,7],8,9,[10,11,[12,13,14]],15,16]
const real_array = another_array.flat(Infinity)
console.log(real_array);
//  O/P[
//     1,  2,  3,  5,  6,  7,
//     8,  9, 10, 11, 12, 13,
//    14, 15, 16
//  ]
//using .flat() method all array are include in one array


console.log(Array.isArray("onkar"));// use .isArray method not converted into array
console.log(Array.from("onkar")); // use .from converted into array
console.log(Array.from({name:"onkar"}));// interesting not converting  form array , 
// use .from method and give key and value then not converted in array output is empty array.
let s1= 100
let s2= 200
let s3= 300
//multiple variables is converted into array use Array.of method 
console.log(Array.of(s1,s2,s3,));
// output is [ 100, 200, 300 ]











