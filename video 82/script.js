// // IIFE
// async function sleep() {
//     return new Promise((resolve,reject) => {
//         setInterval(() => {
//             resolve(45)
//         }, 1000);
//     }
//     )
// }
// (async function main() {
//     let a = await sleep()
//     console.log(a)
//     let b = await sleep()
//     console.log(b)
// })()

// destructuring
// let [x, y, ...rest]  = [1,2,3,4,5,6]
// console.log(x,y,rest)

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// let {a,b} = obj
// console.log(a,b)

// //spread syntax
// function sum (a,b,c){
//     return a+b+c
// }
// let arr = [1,2,3]
// // console.log(sum(arr[0],arr[1],arr[2]))
// console.log(sum(...arr))  //using spread operator

// Hoisting occurs with var but not with let or const





