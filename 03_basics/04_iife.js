//Immediately Envoked function expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`)
})();// explicitely semi colon is placed in order to tell the function to stop execution
((name)=>{
    console.log(`DB CONNECTED ${name}`)
})("devesh")