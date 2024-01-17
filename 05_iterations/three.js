// for of loop

// example 1
// const arr =  [1,2,3,4,5,6]
// for (const num of arr) {
//     console.log(num);
    
// }

// example 2
// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
// }


// Maps // it is object it in values include key and values pair, it includes unique values
// map is iteratable

const map = new Map()
map.set('IN',"india")
map.set('USA', "united states of america") 
map.set('fr', "france")

//console.log(map);
 
// for of loop on map

for (const [keys ,value] of map) {
    console.log(keys, ':-', value);
}

// note:-  for of loop not work on object