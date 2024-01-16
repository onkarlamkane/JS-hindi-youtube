// Immediately Invoked Function Expression(IIFE)


(function chai(){
    // named iife
    console.log(`DB connected`);
})();
// why using iife> global scope ke pollution se
// bachne ke liye iffe ka use karate hai OR function is
// immediately invoked

// or //chai function end hone ke bad semicolon  nahi diya 
// to error show in next function.

((name)=>{
    //unnamed iife / simple iife with parameter pass
    console.log(`db connected two ${name}`);
})('onkar')



// how to code execute in js
// total code ko two part me divide kiya jata hai
// 

