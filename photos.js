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
var farsi = document.getElementById("farsi")
var english = document.getElementById("english")
var rang = document.getElementById("rang")
const divs = document.querySelectorAll(".a");
farsi.addEventListener("click",()=>{
  farsi.style.transition="0.5s"
  farsi.style.color = "black"
  rang.style.transition="0.5s"
  rang.style.margin="0px"
  english.style.transition="0.5s"
  english.style.color="white"
  //==========nav============
  document.querySelector("#nav p").innerHTML="...بزودی"
  document.querySelector("#cms2").innerHTML="...بزودی"
  document.querySelector("#photos").innerHTML="عکس ها"
  document.querySelector("#home").innerHTML="خانه"
  document.querySelector("#cms3").innerHTML="بزودی..."
  document.querySelector("#cms4").innerHTML="بزودی..."
  document.querySelector("#photos2").innerHTML="عکس ها"
  document.querySelector("#home2").innerHTML="خانه"
  //==========paragraph======
  if(window.innerWidth > 900){
    document.querySelector(".htc p").innerHTML="موس را بر روی کارت ها ببرید"
    document.querySelector(".htc2 p").innerHTML="موس را بر روی کارت ها ببرید"
  }

  if(window.innerWidth < 900){
    document.querySelector(".htc p").innerHTML="بر روی کارت ها کلیک کنید"
    document.querySelector(".htc2 p").innerHTML="بر روی کارت ها کلیک کنید"
  }
  //=========cards===========
  divs.forEach(div => div.innerText = "دانلود")
  //=========footer=========
  document.querySelector("footer li:nth-child(1)").innerHTML="سورس کد"
  document.querySelector("footer li:nth-child(2)").innerHTML="سورس کد وب سایت امیر کبیر"
  document.querySelector("footer a:nth-child(1)").innerHTML="سورس کد وب سایت امیر کبیر"
  document.querySelector("#s1").innerHTML="سورس کد"
  document.querySelector("#d1").innerHTML="سازنده"
  document.querySelector(".copyright").innerHTML="© manipapan2 کپی رایت توسط"


})

english.addEventListener("click",()=>{
  farsi.style.color = "white"
  rang.style.marginRight="50%"
  english.style.color="black"
  //==========nav============
  document.querySelector("#nav p").innerHTML="Coming Soon..."
  document.querySelector("#cms2").innerHTML="Coming Soon..."
  document.querySelector("#photos").innerHTML="Photos"
  document.querySelector("#home").innerHTML="Home"
  document.querySelector("#cms3").innerHTML="...Coming Soon"
  document.querySelector("#cms4").innerHTML="...Coming Soon"
  document.querySelector("#photos2").innerHTML="Photos"
  document.querySelector("#home2").innerHTML="Home"
  //==========paragraph======
  if(window.innerWidth > 900){
    document.querySelector(".htc p").innerHTML="Hover The Cards"
    document.querySelector(".htc2 p").innerHTML="Hover The Cards"
  }
  if(window.innerWidth < 900){
    document.querySelector(".htc p").innerHTML="Click The Cards"
    document.querySelector(".htc2 p").innerHTML="Click The Cards"
  }
  //=========cards===========
  divs.forEach(div => div.innerText = "Click to Download")

  //=========footer=========
  document.querySelector("footer li:nth-child(1)").innerHTML="Source Code"
  document.querySelector("footer li:nth-child(2)").innerHTML="Amir Kabir's Source Code"
  document.querySelector("footer a:nth-child(1)").innerHTML="Amir Kabir's Source Code"
  document.querySelector("#s1").innerHTML="Source Code"
  document.querySelector("#d1").innerHTML="Developer"
  document.querySelector(".copyright").innerHTML="© Copyrigt By manipapan2"
  
})

document.getElementById("youtube").addEventListener("click",alerting)
document.getElementById("instagram").addEventListener("click",alerting)
document.getElementById("twitter").addEventListener("click",alerting)
window.addEventListener("load", (event) => {
  setTimeout(() => {
    nav.style.transition = "0.3s";
  }, "1");
  nav.style.transform = "translateY(0px)";

  if(window.innerWidth > 900){
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

  if(window.innerWidth < 900){
    nav.style.borderTopRightRadius="0px"
    nav.style.borderBottomLeftRadius="0px"
    nav.style.borderBottomRightRadius="0px"
  }

  window.onscroll = function (e) {
    if(window.innerWidth > 900){
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
  
    if(window.innerWidth < 900){
      nav.style.borderTopRightRadius="0px"
      nav.style.borderBottomLeftRadius="0px"
      nav.style.borderBottomRightRadius="0px"
    }
  }
});


window.addEventListener("resize",()=>{
  if(window.innerWidth > 900){
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

  if(window.innerWidth < 900){
    nav.style.borderTopRightRadius="0px"
    nav.style.borderBottomLeftRadius="0px"
    nav.style.borderBottomRightRadius="0px"
    console.log("sevomi")
  }

  if(window.innerWidth > 900 && english.style.color=="black"){
    document.querySelector(".htc p").innerHTML = "Hover The Cards"
    document.querySelector(".htc2 p").innerHTML = "Hover The Cards"
  }

  if(window.innerWidth > 900 && english.style.color=="white"){
    document.querySelector(".htc p").innerHTML = "موس را بر روی کارت ها ببرید"
    document.querySelector(".htc2 p").innerHTML = "موس را بر روی کارت ها ببرید"
  }

  if(window.innerWidth < 900 && english.style.color=="white"){
    document.querySelector(".htc p").innerHTML = "بر روی کارت ها کلیک کنید"
    document.querySelector(".htc2 p").innerHTML = "بر روی کارت ها کلیک کنید"
  }

  if(window.innerWidth < 900 && english.style.color == "black" ){
    document.querySelector(".htc p").innerHTML = "Click The Cards"
    document.querySelector(".htc2 p").innerHTML = "Click The Cards"
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