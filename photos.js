document.getElementById("youtube").addEventListener("click",alerting)
document.getElementById("instagram").addEventListener("click",alerting)
document.getElementById("twitter").addEventListener("click",alerting)
window.addEventListener("load", (event) => {
  setTimeout(() => {
    nav.style.transition = "0.3s";
  }, "1");
  nav.style.transform = "translateY(0px)";

  if (window.screen.width < 900) {
    nav.style.borderTopRightRadius = "0px";
    nav.style.borderBottomRightRadius = "0px";
    console.log(window.screen.width)
  }

  if(window.screen.width > 900){
    nav.style.borderTopRightRadius = "25px";
    nav.style.borderBottomRightRadius = "0px";
  }

  if(window.scrollY > 20 && window.screen.width > 900){
    nav.style.borderTopRightRadius = "0px";
    nav.style.borderBottomRightRadius = "25px";
  }

  if(window.scrollY < 20 && window.screen.width > 900){
    nav.style.borderTopRightRadius = "25px";
    nav.style.borderBottomRightRadius = "0px";
  }

    window.onscroll = function (e) {
      if(window.scrollY > 20 && window.screen.width > 900){
        nav.style.borderTopRightRadius = "0px";
        nav.style.borderBottomRightRadius = "25px";
      }
    
      if(window.scrollY < 20 && window.screen.width > 900){
        nav.style.borderTopRightRadius = "25px";
        nav.style.borderBottomRightRadius = "0px";
      }
    };
});

window.addEventListener("resize",() =>{

  if (window.screen.width < 900) {
    nav.style.borderTopRightRadius = "0px";
    nav.style.borderBottomRightRadius = "0px";
    console.log(window.screen.width)
  }

  if(window.screen.width > 900){
    nav.style.borderTopRightRadius = "25px";
    nav.style.borderBottomRightRadius = "0px";
  }

  if(window.scrollY > 20 && window.screen.width > 900){
    nav.style.borderTopRightRadius = "0px";
    nav.style.borderBottomRightRadius = "25px";
  }

  if(window.scrollY < 20 && window.screen.width > 900){
    nav.style.borderTopRightRadius = "25px";
    nav.style.borderBottomRightRadius = "0px";
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

function alerting(){
  alert("Coming Soon!")
}