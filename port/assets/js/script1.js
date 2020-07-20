//skrollr
var s = skrollr.init({
    edgeStrategy: 'set',
    easing: 'linear'
});

window.addEventListener("scroll", () => {
   let pageYOffset = (window.pageYOffset || document.documentElement.scrollTop);
   document.querySelector(".scrollTop").textContent = pageYOffset;
});


//main animation

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


// // tab menu
// const tBtn = $("#btns> ul > li");
// const tCont = $(".bc-bigtitle>ul>li");

// tCont.hide().eq(0).show();

// tBtn.click(function (e) {
// e.preventDefault();
// let target = $(this);
// let index = target.index();
// tBtn.removeClass("active");
// target.addClass("active");
// tCont.css("display", "none");
// tCont.eq(index).css("display", "block");
// });
