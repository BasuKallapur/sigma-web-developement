console.log('promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("No random number was not supporting you1")
    }
    else {
        setTimeout(() => {
            console.log("yes I'm done1");
            resolve("Harry1")
        }, 3000);
    }
})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("No random number was not supporting you2")
    }
    else {
        setTimeout(() => {
            console.log("yes I'm done2");
            resolve("Harry2")
        }, 2000);
    }
})

// prom1.then((a) => {
//     console.log(a);
// }).catch((err) => {
//   console.log(err);
// })

let p3 = Promise.any([prom1,prom2])
p3.then((a) => {
    console.log(a);
}).catch(err => {
    console.log(err);
    
})





