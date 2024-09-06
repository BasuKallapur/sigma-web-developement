function createCard(title, chname, noOfviews, monthAgo, thumbNail, duration) {
    let viewStr
    if(noOfviews<1000){
        viewStr = noOfviews 
    }
    else if(noOfviews>=1000 && noOfviews<1000000){
        viewStr = noOfviews/1000 + "K"
    }
    else if(noOfviews>=1000000){
        viewStr = noOfviews/1000000 + "M"
    }
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbNail}">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${chname} . ${viewStr} . ${monthAgo} months ago</p>
    </div>
</div>`

document.querySelector(".container").innerHTML += html
}

createCard("Javascript exercise 13 solution | Sigma Web Development Course - Tutorial #73","CodeWithHarry",78000, 8, "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBY2BzrvQvf05RX_uINJMCgcuTKhQ","6:14")

createCard("Javascript exercise 13 solution | Sigma Web Development Course - Tutorial #73","CodeWithHarry",78000, 8, "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBY2BzrvQvf05RX_uINJMCgcuTKhQ","6:14")




