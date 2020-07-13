//skrollr
var s = skrollr.init({
    edgeStrategy: 'set',
    easing: 'linear'
});

window.addEventListener("scroll", () => {
   let pageYOffset = (window.pageYOffset || document.documentElement.scrollTop);
   document.querySelector(".scrollTop").textContent = pageYOffset;
});


//

$(".splice").each(function () {
   let txt = $(this).text();
   let split = txt.split("").join("</span><span aria-hidden='true'>");
   split = "<span aria-hidden='true'>" + split + "</span>";
   $(this).html(split).attr("aria-label", txt);
});

setTimeout(function(){
   gsap.to(".section-box .sb1 h1 .t1 span", {opacity: 1, duration: 0.5, y:0, stagger:'0.03', ease: "power4.out"});
   gsap.to(".section-box .sb1 h1 .t2 span", {opacity: 1, duration: 0.5, y:0, stagger:'0.03', delay: 0.4, ease: "power4.out"});
   gsap.to(".section-box .sb1 h1 .t3 span", {opacity: 1, duration: 0.5, y:0, stagger:'0.03', delay: 1.2, ease: "power4.out"});
},2000);
