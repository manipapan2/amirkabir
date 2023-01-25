var imagesm1 = document.getElementById("imagesm1")
var imagesm2 = document.getElementById("imagesm2")
var imagesm3 = document.getElementById("imagesm3")
var imagesm4 = document.getElementById("imagesm4")
var imagesm5 = document.getElementById("imagesm5")
var imagesm6 = document.getElementById("imagesm6")
var nam1 = document.getElementById("nam1")
var nam2 = document.getElementById("nam2")
var nam3 = document.getElementById("nam3")
var nam4 = document.getElementById("nam4")
var nam5 = document.getElementById("nam5")
var nam6 = document.getElementById("nam6")
var nav = document.getElementById("nav")
document.getElementById("youtube").addEventListener("click",alerting)
document.getElementById("instagram").addEventListener("click",alerting)
document.getElementById("twitter").addEventListener("click",alerting)
window.addEventListener("load", (event) => {
  setTimeout(() => {
    nav.style.transition = "0.3s";
  }, "1");
  nav.style.transform = "translateY(0px)";

  if(window.screen.width > 900){
    if(window.scrollY > 20){
      nav.style.borderTopRightRadius="25px"
      nav.style.borderBottomRightRadius="25px"
      nav.style.borderTopRightRadius="0px"
    }

    if(window.scrollY < 20){
      nav.style.borderTopRightRadius="25px"
      nav.style.borderBottomLeftRadius="25px"
      nav.style.borderBottomRightRadius="0"
    }
  }

  if(window.screen.width < 900){
    nav.style.borderTopRightRadius="0px"
    nav.style.borderBottomLeftRadius="0px"
    nav.style.borderBottomRightRadius="0px"
  }

  window.onscroll = function (e) {
    if(window.screen.width > 900){
      if(window.scrollY > 20){
        nav.style.borderTopRightRadius="25px"
        nav.style.borderBottomRightRadius="25px"
        nav.style.borderTopRightRadius="0px"
      }
  
      if(window.scrollY < 20){
        nav.style.borderTopRightRadius="25px"
        nav.style.borderBottomLeftRadius="25px"
        nav.style.borderBottomRightRadius="0"
      }
    }
  
    if(window.screen.width < 900){
      nav.style.borderTopRightRadius="0px"
      nav.style.borderBottomLeftRadius="0px"
      nav.style.borderBottomRightRadius="0px"
    }
  }
});


window.addEventListener("resize",()=>{
  if(window.screen.width > 900){
    if(window.scrollY > 20){
      nav.style.borderTopRightRadius="25px"
      nav.style.borderBottomRightRadius="25px"
      nav.style.borderTopRightRadius="0px"
      console.log("avali")
    }

    if(window.scrollY < 20){
      nav.style.borderTopRightRadius="25px"
      nav.style.borderBottomLeftRadius="25px"
      nav.style.borderBottomRightRadius="0"
      console.log("dovomi")
    }
  }

  if(window.screen.width < 900){
    nav.style.borderTopRightRadius="0px"
    nav.style.borderBottomLeftRadius="0px"
    nav.style.borderBottomRightRadius="0px"
    console.log("sevomi")
  }


})

khatclick.addEventListener("click", () => {
  navmobile.style.transform = "translateX(0%)";
  document.querySelector("body").style.position = "fixed";
});

zabdarclick.addEventListener("click", () => {
  navmobile.style.transform = "translateX(101%)";
  document.querySelector("body").style.position = "relative";
});

imagesm1.addEventListener("mouseenter",()=>{
  setTimeout(() => {
    nam1.style.display="none"
  }, "1");
})

imagesm1.addEventListener("mouseleave",()=>{
  nam1.style.display="flex"
})

imagesm2.addEventListener("mouseenter",()=>{
  setTimeout(() => {
    nam2.style.display="none"
  }, "1");
})

imagesm2.addEventListener("mouseleave",()=>{
  nam2.style.display="flex"
})

imagesm3.addEventListener("mouseenter",()=>{
  setTimeout(() => {
    nam3.style.display="none"
  }, "1");
})

imagesm3.addEventListener("mouseleave",()=>{
  nam3.style.display="flex"
})

imagesm4.addEventListener("mouseenter",()=>{
  setTimeout(() => {
    nam4.style.display="none"
  }, "1");
})

imagesm4.addEventListener("mouseleave",()=>{
  nam4.style.display="flex"
})

imagesm5.addEventListener("mouseenter",()=>{
  setTimeout(() => {
    nam5.style.display="none"
  }, "1");
})

imagesm5.addEventListener("mouseleave",()=>{
  nam5.style.display="flex"
})

imagesm6.addEventListener("mouseenter",()=>{
  setTimeout(() => {
    nam6.style.display="none"
  }, "1");
})

imagesm6.addEventListener("mouseleave",()=>{
  nam6.style.display="flex"
})


function alerting(){
  alert("Coming Soon!")
}