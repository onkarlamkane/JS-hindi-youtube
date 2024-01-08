//arrays

const myArray = [1,2,3,4,5]
//console.log(myArray[3]);


//Array methods
myArray.push(6)
//console.log(myArray);
myArray.pop()
//console.log(myArray);
myArray.unshift(8)
//console.log(myArray);
myArray.shift()
//console.log(myArray);

// console.log(myArray.includes(3));
// console.log(myArray.indexOf(5));

// const newArry = myArray.join()
// console.log(myArray);
// console.log(newArry)
// console.log(typeof newArry);


//slice splice

// slice ( writen a copy of section of array but last index is not included)


console.log( "a",myArray);

const myn1 = myArray.slice(0,3)//print 0 to 2 index
console.log(myn1);
console.log("b", myArray);
const myn2 = myArray.splice(1,3)// first value is start index and second value is delete count(
   // start 1 index and total three value in array o/p is [2,3,4] )
console.log(myn2);
console.log("c", myArray);

//Note in array apply a slice do not modity orignal array and apply the splice modify the original array 
// in slice not include last index and in splice include a last index









