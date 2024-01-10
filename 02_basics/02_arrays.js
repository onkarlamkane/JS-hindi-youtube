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
//console.log(real_array);


console.log(Array.isArray("onkar"));
console.log(Array.from("onkar"));
console.log(Array.from({name:"onkar"}));// interesting not converting  form array , 
//interview op is empty array, before run method define keys and values

let s1= 100
let s2= 200
let s3= 300
console.log(Array.of(s1,s2,s3,));











