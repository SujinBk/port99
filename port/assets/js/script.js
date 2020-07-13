//  srollr
        var s = skrollr.init({
            edgeStrategy: 'set',
            easing: 'linear'
        });
        window.addEventListener("scroll", () => {
            let pageYOffset = (window.pageYOffset || document.documentElement.scrollTop);
            let floor = Math.floor(pageYOffset)
            document.querySelector(".scrollTop").textContent = floor;
        });

// //탭 메뉴1
// const tBtn = $("#bnts> ul > li");
// const tCont = $(".tabcontbox>ul>li");

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

$("#section-site > div").each(function(index){
    $(this).find(".bwrap").attr("data-num",index);
    $(this).find(".bwrap").addClass("num"+index)
    
    
    $("#btns > ul > li").click(function(e){
        e.preventDefault();
        let target = $(this);
        let num = target.parent().parent().parent().attr("data-num");
        let index = target.index();

        $(".bwrap.num"+num+" #btns > ul > li").removeClass("active");  
        target.addClass("active");  
        
        $(".bwrap.num"+num+" .tabcontbox > ul>li").css("display","none");
        $(".bwrap.num"+num+" .tabcontbox > ul>li").eq(index).css("display","block");  
    });            
});

