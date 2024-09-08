let a = prompt("Enter first number: ")
let b = prompt("Enter second number: ")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("give valid inputs.")
}
let sum = parseInt(a) + parseInt(b)
// try catch works synchronously
function main() {
    let x = 1
    try {
        console.log("sum is: ", sum * x);
        return true
    } catch (error) {
        console.log('error encountered');
        return false
    }
    // console.log("demonstation of usage of try catch and finally")
    finally {
        console.log("demonstation of usage of try catch and finally")
    }
}
let c = main()
