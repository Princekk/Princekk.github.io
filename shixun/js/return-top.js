$(window).scroll(function(){
	var win = $(document).scrollTop();
	if(win>=100){
		$(".return-top").addClass("active1").removeClass("return-top")
	}
})
$(".return-top").click(function(){
	$("body,html").animate({
             scrollTop:0  //让body的scrollTop等于top，就实现了滚动到顶部
           },700);
})