var $picList =  $(".picList");
$picList.cycle({
        "fx":"blindX",
        speed:500,
        timeout:2000,
        pause:true,
        "before":function(){
            var index = $(this).index();
            $("#numList li").eq(index)
                            .addClass("active")
                            .siblings()
                            .removeClass("active");
        }
    });
$("#numList li").click(function(){
    var index = $(this).index();
    $picList.cycle(index);
    $(this).addClass("active").siblings().removeClass("active");
});
