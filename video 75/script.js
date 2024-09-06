console.log("I am Basu C Kallapur")
console.log("I am basukallapur from bmsce")
setTimeout(() => {
    console.log("this is in settimeout function")
}, 1000)
console.log("basu c kallapur from iit banahatti")
const callback = (arg) => {
    console.log(arg)
}

const loadscript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src
    sc.onload = callback("Harry")
    document.head.append(sc)
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
