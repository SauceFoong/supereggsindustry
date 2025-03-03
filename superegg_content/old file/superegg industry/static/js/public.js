$(function(){
	var c=new Vue({el:"#top",data:{topData:{		
		navText:["Home Page","News Center","GameCenter","合作商家","礼品兑换","会员中心","排行榜"]},}});
			
	$(window).scroll(function(){if($(window).scrollTop()>40){$(".topNav").addClass("on")}else{$(".topNav").removeClass("on")}}); // smallerize it
	
		
	$(window).resize(function(){if($(window).width()<=992){f()}}).resize();
	function f(){
		var j=0;$(".muen").click(function(i){$(this).toggleClass("on");
		if(j==0){$(".topNav nav").stop().animate({right:"0"});j=1}else{if(j==1){$(".topNav nav").stop().animate({right:"-100%"});j=0}}i.stopPropagation()});
		$("body, body > *").click(function(){$(".topNav nav").stop().animate({right:"-100%"});$(".muen").removeClass("on");j=0})
		}
	$(".user-menu dl dt").on("click",function(){if($(window).width()<=750){$(this).toggleClass("on");$(this).parent().siblings("dl").find("dt").removeClass("on");
	$(this).parent().find("dd").slideToggle();
	$(this).parent().siblings("dl").find("dd").slideUp()}});
	$(".tab-menu a").on("click",function(){var i=$(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$(".tab-con").eq(i).addClass("active").siblings().removeClass("active")});
	$(".user-menu dd a").each(function(m,j){var k=window.location.href;var l=k.split("/");var n=l[l.length-1];if($(j).attr("href")==n){$(j).parent("dd").addClass("on")}else{$(j).parent("dd").removeClass("on")}}
)});