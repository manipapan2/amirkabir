var nav = document.getElementById("nav");
var khatclick = document.getElementById("khatclick");
var navmobile = document.getElementById("navmobile");
var navmDiv = document.getElementsByClassName("navmDiv")
var zabdarclick = document.getElementById("zabdarclick");
var aboutme = document.querySelector("#aboutme");
var gradientan = document.getElementById("gradientan");
var photoabout = document.getElementById("photoabout");
var loading = document.getElementById("loading");
var dayereanim1 = document.getElementById("dayereanim1");
var dayereanim2 = document.getElementById("dayereanim2");
var moratab1 = document.getElementById("moratab1");
var moratab2 = document.getElementById("moratab2");
var win = window.innerHeight
var khat3 = document.getElementById("khat3");
var khata = document.getElementById("khata");
var khatb = document.getElementById("khatb");
var nas = document.getElementById("nas")
var text =
  "میرزا محمد تقی‌خان فراهانی (۱۲۲۲-۱۲۶۸ق) (۱۱۸۵-۱۲۳۰ش) مشهور به امیرکبیر، صدراعظم‌ ایران در دوره ناصرالدین شاه قاجار. وی در دوره صدارت سه سال و سه ماه (۳۹ ماهه) خود، اصلاحاتی را در زمینه‌های آموزشی، اجتماعی و سیاسی ایران آغاز کرد. امیرکبیر دارُالفُنون را بنیان نهاد، مسجد و مدرسه دینی ساخت، بست‌نشینی در بیوت علما و تعزیه‌خوانی را محدود و شورش بابی‌ها را سرکوب کرد. او با دسیسه اطرافیان شاه از مقام خود برکنار و به کاشان تبعید شد و به دستور شاه به قتل رسید. قبر وی در حرم امام حسین(ع) قرار دارد.";
var prasl = text.split("");
var cheshmak = document.getElementById("cheshmak");
var farsi = document.getElementById("farsi")
var english = document.getElementById("english")
var rang = document.getElementById("rang")
var marginezafe = document.getElementById("marginezafe")

  setTimeout(dd, 1000);

function dd() {
  dayereanim1.classList.remove("dayereanim1");
  dayereanim2.classList.add("dayereanim2");
  setTimeout(ddd, 1000);
}

function ddd() {
  dayereanim1.classList.add("dayereanim1");
  dayereanim2.classList.remove("dayereanim2");
  setTimeout(dd, 1000);
}

farsi.addEventListener("click",()=>{
  farsi.style.transition="0.5s"
  farsi.style.color = "black"
  rang.style.transition="0.5s"
  rang.style.margin="0px"
  english.style.transition="0.5s"
  english.style.color="white"
  //==========nav============
  document.querySelector("#nav p").innerHTML="...بزودی"
  if(window.innerWidth >= 1210){
    marginezafe.style.marginLeft="6px"
  }
  if(window.innerWidth < 1210){
    marginezafe.style.marginLeft="5px"
  }
  if(window.innerWidth < 1185){
    marginezafe.style.marginLeft="6px"
  }
  if(window.innerWidth < 1168){
    marginezafe.style.marginLeft="5px"
  }
  if(window.innerWidth < 1115){
    marginezafe.style.marginLeft="6px"
  }
  if(window.innerWidth < 1114){
    marginezafe.style.marginLeft="5px"
  }
  if(window.innerWidth < 1081){
    marginezafe.style.marginLeft="6px"
  }
  if(window.innerWidth < 999){
    marginezafe.style.marginLeft="5px"
  }
  if(window.innerWidth < 931){
    marginezafe.style.marginLeft="6px"
  }
  if(window.innerWidth < 918){
    marginezafe.style.marginLeft="5px"
  }
  if(window.innerWidth < 915){
    marginezafe.style.marginLeft="6px"
  }
  if(window.innerWidth < 914){
    marginezafe.style.marginLeft="5px"
  }
  if(window.innerWidth < 912){
    marginezafe.style.marginLeft="6px"
  }
  if(window.innerWidth < 903){
    marginezafe.style.marginLeft="5px"
  }
  if(window.innerWidth < 900){
    marginezafe.style.marginLeft="20px"
  }
  document.querySelector("#cms2").innerHTML="...بزودی"
  document.querySelector("#photos").innerHTML="عکس ها"
  document.querySelector("#home").innerHTML="خانه"
  document.querySelector("#cms3").innerHTML="بزودی..."
  document.querySelector("#cms4").innerHTML="بزودی..."
  document.querySelector("#photos2").innerHTML="عکس ها"
  document.querySelector("#home2").innerHTML="خانه"
  //==========paragraph======
  if(window.innerWidth > 900){
    document.querySelector(".hoverme p").innerHTML="موس را بر روی کارت ها ببرید"
  }

  if(window.innerWidth < 900){
    document.querySelector(".hoverme p").innerHTML="بر روی کارت ها کلیک کنید"
  }
  //=========cards===========
  dokme.innerHTML="نمایش بیشتر"
  dokme2.innerHTML="نمایش بیشتر"
  dokme3.innerHTML="نمایش بیشتر"
  dokme4.innerHTML="نمایش بیشتر"
  dokmekam.innerHTML="برگشت"
  dokmekam2.innerHTML="برگشت"
  dokmekam3.innerHTML="برگشت"
  dokmekam4.innerHTML="برگشت"
  //=========footer=========
  document.querySelector("footer li:nth-child(1)").innerHTML="سورس ها"
  document.getElementById("a1").innerHTML="ویکی پدیا"
  document.getElementById("a2").innerHTML="ویکی شیعه"
  document.getElementById("a3").innerHTML="سورس کد وب سایت امیر کبیر"
  document.querySelector("#s1").innerHTML="سورس کد"
  document.querySelector("#d1").innerHTML="سازنده"
  document.querySelector(".copyright").innerHTML="کپی رایت توسط manipapan2 ©"


})

english.addEventListener("click",()=>{
  farsi.style.color = "white"
  rang.style.marginRight="50%"
  english.style.color="black"
  //==========nav============
  document.querySelector("#nav p").innerHTML="Coming Soon..."
  marginezafe.style.marginLeft="20px"
  document.querySelector("#cms2").innerHTML="Coming Soon..."
  document.querySelector("#photos").innerHTML="Photos"
  document.querySelector("#home").innerHTML="Home"
  document.querySelector("#cms3").innerHTML="...Coming Soon"
  document.querySelector("#cms4").innerHTML="...Coming Soon"
  document.querySelector("#photos2").innerHTML="Photos"
  document.querySelector("#home2").innerHTML="Home"
  //==========paragraph======
  if(window.innerWidth > 900){
    document.querySelector(".hoverme p").innerHTML="Hover The Cards"
  }
  if(window.innerWidth < 900){
    document.querySelector(".hoverme p").innerHTML="Click The Cards"
  }
  //=========cards===========
  dokme.innerHTML="Show More"
  dokme2.innerHTML="Show More"
  dokme3.innerHTML="Show More"
  dokme4.innerHTML="Show More"
  dokmekam.innerHTML="Back"
  dokmekam2.innerHTML="Back"
  dokmekam3.innerHTML="Back"
  dokmekam4.innerHTML="Back"
  //=========footer=========
  document.querySelector("footer li:nth-child(1)").innerHTML="Sources"
  document.getElementById("a1").innerHTML="wikipedia"
  document.getElementById("a2").innerHTML="wikishia"
  document.getElementById("a3").innerHTML="Amir Kabir's Source Code"
  document.querySelector("#s1").innerHTML="Source Code"
  document.querySelector("#d1").innerHTML="Developer"
  document.querySelector(".copyright").innerHTML="Copyrigt By manipapan2 ©"
  
})

document.getElementById("youtube").addEventListener("click", alerting);
document.getElementById("instagram").addEventListener("click", alerting);
document.getElementById("twitter").addEventListener("click", alerting);


setTimeout(() => {
  loading.style.display = "none";
}, 3000);

setTimeout(() => {
  document.querySelector("body").style.position = "absolute";
  if (window.innerWidth > 900) {
    aboutme.style.transform = "translateX(" + window.innerWidth + "px)";
    gradientan.style.transform = "translateX(" + window.innerWidth + "px)";
  } else {
    aboutme.style.transform = "translateX(" + window.innerWidth + "px)";
    gradientan.style.transform = "translateX(" + window.innerWidth + "px)";
  }

  // navmobile.style.height=(win - 50) + "px"

  setTimeout(() => {
    nav.style.transition = "0.3s";
  }, "1");
  setTimeout(() => {
    aboutme.style.transition = "2s ease";
    aboutme.style.transform = "translateX(0)";
  }, "1");
  setTimeout(() => {
    gradientan.style.transition = "2s ease";
    gradientan.style.transform = "translateX(0)";
  }, "1");
  setTimeout(() => {
    gradientan.style.transition = "none";
  }, "2");
  document.querySelector(".language-selector").classList.add("showt")

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entries)=>{
      if(entries.isIntersecting){
        // entries.target.classList.add("show")
        anielement.classList.add("showt")
      }
    })
  })
  
  const observerr = new IntersectionObserver((entries)=>{
    entries.forEach((entries)=>{
      if(entries.isIntersecting){
        entries.target.classList.add("showtozih")
      }
    })
  })
  
  const anielement = document.querySelector(".hoverme")
  observer.observe(anielement)
  
  const anielements = document.querySelectorAll(".tozih")
  anielements.forEach((el) => {
    observerr.observe(el)
  });
  var textt = [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea laudantium impedit magni iure voluptatibus quidem cum perferendis eum ipsa placeat necessitatibus molestiae dolorem illum ducimus, doloribus ullam voluptatem iste quaerat.",
  ];
  setTimeout(() => {
    typing();
    typeWriter();
  }, "2200");
  setTimeout(() => {
    const myText = new AutoTyping({
      id: "types",

      typeText: ["میرزا محمدتقی‌خان فراهانی", "امیر کبیر"],

      // typeSpeed:20,
    }).init();
    document.querySelector(".types span:nth-child(1)").style.color = "white";
  }, "2200");
  nav.style.transform = "translateY(0px)";

  var i = 0;
  var speed = 20;

  function typeWriter() {
    if (i < text.length) {
      document.querySelector(".boro").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
      donetype();
    }
  }

  function typing() {
    document.querySelector(".pos").setAttribute("id", "pasl");
    const myText = new AutoTyping({
      id: "pasl",

      typeText: ["asd", "salam salam"],

      typeSpeed: 20,
    }).stop();

    setTimeout(() => {
      document.querySelector(".pos").removeAttribute("id");
    }, 1000);
  }

  function donetype() {
    if (document.querySelector(".boro").innerHTML == text) {
      setTimeout(() => {
        var second = document.querySelector(".matn span:nth-child(3)");
        second.style.display = "none";
      }, 1000);
    }
  }

  setTimeout(() => {
    photoabout.style.outlineOffset = "5px";
  }, "2000");

  if(window.innerWidth > 900){
    if(window.scrollY > 20){
      nav.style.borderTopRightRadius="25px"
      nav.style.borderBottomRightRadius="25px"
      nav.style.borderTopRightRadius="0px"
      nav.style.borderBottomLeftRadius="25px"
    }

    if(window.scrollY < 20){
      nav.style.borderTopRightRadius="25px"
      nav.style.borderBottomLeftRadius="25px"
      nav.style.borderBottomRightRadius="0"
    }
    document.querySelector(".hoverme p").innerHTML = "Hover The Cards"
  }

  if(window.innerWidth < 900){
    nav.style.borderTopRightRadius="0px"
    nav.style.borderBottomLeftRadius="0px"
    nav.style.borderBottomRightRadius="0px"
    document.querySelector(".hoverme p").innerHTML = "Click The Cards"
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

  var morata1top = moratab1.offsetTop;
  var morata1height = window.getComputedStyle(moratab1).height;
  var moratab1menha = morata1top - morata1height;
}, 3000);

window.addEventListener("resize",()=>{
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

  if(window.innerWidth > 900 && english.style.color=="black"){
    document.querySelector(".hoverme p").innerHTML = "Hover The Cards"
  }

  if(window.innerWidth > 900 && english.style.color=="white"){
    document.querySelector(".hoverme p").innerHTML = "موس را بر روی کارت ها ببرید"
  }

  if(window.innerWidth < 900 && english.style.color=="white"){
    document.querySelector(".hoverme p").innerHTML = "بر روی کارت ها کلیک کنید"
  }

  if(window.innerWidth < 900 && english.style.color == "black" ){
    document.querySelector(".hoverme p").innerHTML = "Click The Cards"
  }


  if(window.innerWidth < 900){
    nav.style.borderTopRightRadius="0px"
    nav.style.borderBottomLeftRadius="0px"
    nav.style.borderBottomRightRadius="0px"
  }

  // if(khata.style.opacity=="1"){
  //   navmobile.style.height=0 + "px"
  // }
  // if(khata.style.opacity=="0"){
  //   navmobile.style.height=(window.innerHeight - 50) + "px"
  // }

})

// var khatd = document.getElementById("khatd")

khatclick.addEventListener("click", () => {
  // navmobile.style.height=(window.innerHeight - 50) + "px"
  // document.querySelector("body").style.position = "fixed";
  if(navmobile.style.height!="100vh"){
    document.querySelector("body").style.overflowY="hidden"
    navmobile.style.height="100vh"
    navmobile.style.paddingBottom = "60px"
    khat3.style.transform="translateY(20px) rotate(45deg)"
    khata.style.opacity="0"
    khatb.style.transform="translateY(20px) rotate(-45deg)"
    // document.querySelector("body").style.position = "fixed";
    // document.querySelector("html").style.overflow="hidden"
    for (const element of navmDiv) {
      element.style.opacity="1"
    }
  }
  else{
    document.querySelector("body").style.overflowY="auto"
    navmobile.style.height="0px"
    navmobile.style.padding="0px"
    document.querySelector("body").style.position = "absolute";
    khat3.style.transform="translateY(10px) rotate(0deg)"
    khatb.style.transform="translateY(30px) rotate(0deg)"
    khata.style.opacity="1"
    for (const element of navmDiv) {
      element.style.opacity="0"
    }

  }
  

});


// ===========================cart===========================
// window.addEventListener('resize', maxheight);
var t1a = document.getElementById("t1a");
var t1 = document.getElementById("tozih1");
var p1 = document.getElementById("p1");
var pi = document.getElementById("pi");
var pu = document.getElementById("pu");
var pup = document.getElementById("pup");
var dokme = document.getElementById("dokme");
var dokmekam = document.getElementById("dokmekam");
var nam = document.getElementById("nam");
var t1w = t1.offsetWidth * 1.5;
var t1h = t1.offsetHeight;
// =============
var t2a = document.getElementById("t2a");
var t2 = document.getElementById("tozih2");
var p2 = document.getElementById("p2");
var pi2 = document.getElementById("pi2");
var pu2 = document.getElementById("pu2");
var pup2 = document.getElementById("pup2");
var dokme2 = document.getElementById("dokme2");
var dokmekam2 = document.getElementById("dokmekam2");
var nam2 = document.getElementById("nam2");
// =============
var t3a = document.getElementById("t3a");
var t3 = document.getElementById("tozih3");
var p3 = document.getElementById("p3");
var pi3 = document.getElementById("pi3");
var pu3 = document.getElementById("pu3");
var pup3 = document.getElementById("pup3");
var dokme3 = document.getElementById("dokme3");
var dokmekam3 = document.getElementById("dokmekam3");
var nam3 = document.getElementById("nam3");
// =============
var t4a = document.getElementById("t4a");
var t4 = document.getElementById("tozih4");
var p4 = document.getElementById("p4");
var pi4 = document.getElementById("pi4");
var pu4 = document.getElementById("pu4");
var pup4 = document.getElementById("pup4");
var dokme4 = document.getElementById("dokme4");
var dokmekam4 = document.getElementById("dokmekam4");
var nam4 = document.getElementById("nam4");
// =============
dokme.addEventListener("click", koko);
dokmekam.addEventListener("click", koko);
t1.addEventListener("mouseleave", () => {
  dokme.style.transition = "0.3s";
});
t1.addEventListener("mouseover", () => {
  setTimeout(() => {
    nam.style.display = "none";
  }, "1");
});

t1.addEventListener("mouseout", () => {
  setTimeout(() => {
    nam.style.display = "flex";
  }, "1");
});
// ===============
dokme2.addEventListener("click", koko2);
dokmekam2.addEventListener("click", koko2);
t2.addEventListener("mouseleave", () => {
  dokme2.style.transition = "0.3s";
});
t2.addEventListener("mouseover", () => {
  setTimeout(() => {
    nam2.style.display = "none";
  }, "1");
});

t2.addEventListener("mouseout", () => {
  setTimeout(() => {
    nam2.style.display = "flex";
  }, "1");
});
// ===============
dokme3.addEventListener("click", koko3);
dokmekam3.addEventListener("click", koko3);
t3.addEventListener("mouseleave", () => {
  dokme3.style.transition = "0.3s";
});
t3.addEventListener("mouseover", () => {
  setTimeout(() => {
    nam3.style.display = "none";
  }, "1");
});

t3.addEventListener("mouseout", () => {
  setTimeout(() => {
    nam3.style.display = "flex";
  }, "1");
});
// ===============
dokme4.addEventListener("click", koko4);
dokmekam4.addEventListener("click", koko4);
t4.addEventListener("mouseleave", () => {
  dokme4.style.transition = "0.3s";
});
t4.addEventListener("mouseover", () => {
  setTimeout(() => {
    nam4.style.display = "none";
  }, "1");
});

t4.addEventListener("mouseout", () => {
  setTimeout(() => {
    nam4.style.display = "flex";
  }, "1");
});

function checknumber(xx) {
  if (Number.isInteger(xx)) {
    return "yes";
  } else {
    return "no";
  }
}

var tt = 1;
function koko() {
  tt += 1;
  var tts = tt / 2;
  var ttss = checknumber(tts);
  console.log(ttss);

  if (ttss == "yes") {
    dokme.style.transition = "1s";
    setTimeout(() => {
      dokme.style.transition = "0.3s";
    }, 1);
    t1.classList.remove("tozih");
    t1.classList.add("t1a");
    pi.classList.remove("pi");
    pi.classList.add("pia");
    p1.style.borderRadius = "15px";
    pi.style.transform = "rotateY(-180deg)";
    pu.style.transform = "rotateY(0deg)";
    dokme.style.transform = "rotateY(-180deg)";
    pup.style.borderRadius = "15px";
    t1.classList.remove("tozih");
    t1.classList.add("t1a");
  }

  if (ttss == "no") {
    t1.classList.remove("t1a");
    t1.classList.add("tozih");
    pi.style.transform = "rotateY(0deg)";
    pu.style.transform = "rotateY(180deg)";
    dokme.style.transition = "1000ms";
    dokme.style.transform = "rotateY(0deg)";
    setTimeout(() => {
      pi.classList.remove("pia");
      pi.classList.add("pi");
    }, "1");
    setTimeout(() => {
      dokme.style.transition = "0.3s";
    }, "1");
  }
}

var tt2 = 1;
function koko2() {
  tt2 += 1;
  var tts = tt2 / 2;
  var ttss = checknumber(tts);
  console.log(ttss);

  if (ttss == "yes") {
    dokme2.style.transition = "1s";
    setTimeout(() => {
      dokme3.style.transition = "0.3s";
    }, "1");
    t2.classList.remove("tozih");
    t2.classList.add("t1a");
    pi2.classList.remove("pi");
    pi2.classList.add("pia");
    p2.style.borderRadius = "15px";
    pi2.style.transform = "rotateY(-180deg)";
    pu2.style.transform = "rotateY(0deg)";
    dokme2.style.transform = "rotateY(-180deg)";
    pup2.style.borderRadius = "15px";
    t2.classList.remove("tozih");
    t2.classList.add("t1a");
  }

  if (ttss == "no") {
    t2.classList.remove("t1a");
    t2.classList.add("tozih");
    pi2.style.transform = "rotateY(0deg)";
    pu2.style.transform = "rotateY(180deg)";
    dokme2.style.transition = "1000ms";
    dokme2.style.transform = "rotateY(0deg)";
    setTimeout(() => {
      pi2.classList.remove("pia");
      pi2.classList.add("pi");
    }, "1");
    setTimeout(() => {
      dokme2.style.transition = "0.3s";
    }, "1");
  }
}

var tt3 = 1;
function koko3() {
  tt3 += 1;
  var tts = tt3 / 2;
  var ttss = checknumber(tts);
  console.log(ttss);

  if (ttss == "yes") {
    dokme3.style.transition = "1s";
    setTimeout(() => {
      dokme3.style.transition = "0.3s";
    }, "1");
    t3.classList.remove("tozih");
    t3.classList.add("t1a");
    pi3.classList.remove("pi");
    pi3.classList.add("pia");
    p3.style.borderRadius = "15px";
    pi3.style.transform = "rotateY(-180deg)";
    pu3.style.transform = "rotateY(0deg)";
    dokme3.style.transform = "rotateY(-180deg)";
    pup3.style.borderRadius = "15px";
    t3.classList.remove("tozih");
    t3.classList.add("t1a");
  }

  if (ttss == "no") {
    t3.classList.remove("t1a");
    t3.classList.add("tozih");
    pi3.style.transform = "rotateY(0deg)";
    pu3.style.transform = "rotateY(180deg)";
    dokme3.style.transition = "1000ms";
    dokme3.style.transform = "rotateY(0deg)";
    setTimeout(() => {
      pi3.classList.remove("pia");
      pi3.classList.add("pi");
    }, "1");
    setTimeout(() => {
      dokme3.style.transition = "0.3s";
    }, "1");
  }
}

var tt4 = 1;
function koko4() {
  tt4 += 1;
  var tts = tt4 / 2;
  var ttss = checknumber(tts);
  console.log(ttss);

  if (ttss == "yes") {
    dokme4.style.transition = "1s";
    setTimeout(() => {
      dokme4.style.transition = "0.3s";
    }, 1);
    t4.classList.remove("tozih");
    t4.classList.add("t1a");
    pi4.classList.add("pia");
    pi4.classList.remove("pi");
    p4.style.borderRadius = "15px";
    pi4.style.transform = "rotateY(-180deg)";
    pu4.style.transform = "rotateY(0deg)";
    dokme4.style.transform = "rotateY(-180deg)";
    pup4.style.borderRadius = "15px";
    t4.classList.remove("tozih");
    t4.classList.add("t1a");
  }

  if (ttss == "no") {
    t4.classList.remove("t1a");
    t4.classList.add("tozih");
    pi4.style.transform = "rotateY(0deg)";
    pu4.style.transform = "rotateY(180deg)";
    dokme4.style.transition = "1000ms";
    dokme4.style.transform = "rotateY(0deg)";
    setTimeout(() => {
      pi4.classList.remove("pia");
      pi4.classList.add("pi");
    }, "1");
    setTimeout(() => {
      dokme4.style.transition = "0.3s";
    }, "1");
  }
}
// ==========================================================

function alerting() {
  alert("Coming Soon!");
}