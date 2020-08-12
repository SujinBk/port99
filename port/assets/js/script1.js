//skrollr
var s = skrollr.init({
    edgeStrategy: 'set',
    easing: 'linear'
});

window.addEventListener("scroll", () => {
   let pageYOffset = (window.pageYOffset || document.documentElement.scrollTop);
   document.querySelector(".scrollTop").textContent = pageYOffset;
});

// nav
$(".menu-toggle").on('click', function() {
   $(this).toggleClass("on");
   $('.menu-section').toggleClass("on");
   $("nav ul").toggleClass('hidden');
 });



// site

$(".bc-bigtitle > ul > li").hide()
$(".bc-cont > ul > li").hide()
$(".bc-bigtitle ul li.active").show()
$(".bc-cont > ul > li.on").show()


$(".bc-cb ul li").click(function(e){
   e.preventDefault();
   let index=$(this).index();
   $(".bc-cb ul li").removeClass("active");
   $(this).addClass("active");

   let ul_dom = $(this).parents('.bc-cb').next();

   ul_dom.find('li').removeClass("on");
   ul_dom.find('li').eq(index).addClass("on");
   ul_dom.find('li').hide();
   ul_dom.find('li.on').show();

});

$(".btnsname li").click(function(e){
   e.preventDefault();
   tap_index=$(this).index();

   let li_dom = $(this).parents('.stbtn').next().find('.bc-bigtitle > ul > li');

   li_dom.removeClass("active");
   li_dom.eq(tap_index).addClass("active");
   li_dom.hide();
   $(this).parents('.stbtn').next().find('.bc-bigtitle > ul > li.active').show();

   $(".btnsname li").removeClass("active");

   $(this).addClass("active");
});

//main text animation

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


// steps animation

$(".btnStart").click(function(){
   $("#animation").removeClass().addClass("btnStart");
 });
 
 $(".btnStop").click(function(){
   $("#animation").removeClass().addClass("btnStop");
 });


 
 //spaceship
 
 TweenMax.fromTo(".fire", .03, {x:-.5, y:-.4}, {x:.5, y: .4, repeat: -1, yoyo: true});
// 배경 천천히 움직
let tl = new TimelineMax({ repeat: -1 }),
    tl_sky = new TimelineMax({ repeat: -1 });

tl_sky.fromTo(".sky", 12, 
        {transform: "translateY(-100vh)"},
        {transform: "translateY(0vh)", ease:Power0.easeNone});
///// 로켓 움직
tl.to(".rocket", 3, {transform: "translateY(-5vh)", ease: Expo.easeOut})
  .fromTo(".fire", .4, {scaleY: .8}, {scaleY: 1.5}, "+=1.5")// 기존 시간에 추가 시킴
  .add( () => tl_sky.timeScale(25),"-=.4")// 수치 배경을 빠르게 보이게 한다. 
  .to(".rocket",2,{transform: "translateY(-130vh)", ease:Power3.easeOut})
.add( () => tl_sky.timeScale(2));// 느리게 


tl_sky.timeScale(1);


///cursor

$(".mainbox").mousemove(function (e) {
   gsap.to(".cursor", {
       duration: .2,
       left: e.pageX - 10,
       top: e.pageY - 10
   });
   
   x = e.clientX - ($(".mainbox").width() / 2 + $(".mainbox").position().left);
   y = e.clientY - ($(".mainbox").height() / 2 + $(".mainbox").position().top);
});


