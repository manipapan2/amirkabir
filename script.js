var nav = document.getElementById("nav")
var khatclick = document.getElementById("khatclick")
var navmobile = document.getElementById("navmobile")
var zabdarclick = document.getElementById("zabdarclick")
window.addEventListener('load', (event) =>{

    nav.style.transform="translateY(0px)"

});

khatclick.addEventListener("click",() => {
    navmobile.style.transform = "translateX(0%)"
})

zabdarclick.addEventListener("click",() => {
    navmobile.style.transform = "translateX(100%)"
})
