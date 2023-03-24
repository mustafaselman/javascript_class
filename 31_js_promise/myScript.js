// let myPromise = new Promise(function(myResolve,myReject){
//     //some code;
//     myResolve("value"); //başarılı ise
//     myReject("error"); //başarısız
// });
// myPromise.then(
//     function(value) { // successful},function(error) {//some error}
// )

// myPromise.state -> pending-fulfilled-rejected

// myPromise.result -> undefined- value - error

// function myDisplayer(some){
//     console.log(some)
// }
// let myPromise = new Promise(function(myResolve,myReject){
//     let x = 0;
//     if(x == 0) {
//         myResolve("ok")
//     }
//     else {
//         myReject("error message")
//     }
// })

    // function myFunction() {
    //     let x = 0;
    //     if(x == 0)
    //     return Promise.resolve("ok")
    //     else
    //     return Promise.reject("error")
    // }

// myPromise.then(function(value) {myDisplayer(value)},function(error){myDisplayer(error)})

// myPromise.then(function(value) {myDisplayer(value)}).catch(function(error){myDisplayer(error)}).finally(console.log("program çalışması sonlandı..."))

let myPromise = new Promise(function(myResolve,myReject){
    setTimeout(function(){myResolve("ı love you!")},4000)
});
myPromise.then(function(value){
    console.log(myPromise)
});
console.log(myPromise)