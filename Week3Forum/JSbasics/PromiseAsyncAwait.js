/* 
    A Promise object is what links a producing code and a consuming code. Based on what the producing code has, it could result into two states,
     fullfilled or reject. It can be used to check for the status of a certain transaction. (i.e. whether it succeeded or failed)
*/
let myPromise = new Promise(function(myResolve,myReject){
    let x = 0;

    if (x==0) {
        myResolve("SUCCESS");
    } else {
        myReject("REJECT");
    }
})

myPromise.then(
    function(value) {console.log(value);},
    function(error) {console.log(error);}
);

/*
    Async is a keyword that makes a function return a promise
*/

function noAsyncFunction(){ // Function without async
    return Promise.resolve("Hello");
}

async function AsyncFunction(){ // Function with async. Is similar to the first function
    return "Hello";
}

// Await will make a function wait for a promise to resolve or reject before returning the promise.

async function AwaitExample(){
    let myPromise = new Promise(function(resolve,reject){
        resolve("Good")
    });
    console.log(await myPromise)
}

AwaitExample();