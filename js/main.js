$(function(){	
	$(".VerticalMenu>div>div:first-child").click(function () {
        $menu = $(".VerticalMenu>div>div:first-child");
        // 右侧小箭头动画
        $($menu).not(this).children("i.glyphicon-chevron-right").css({ "transform": "rotate(0deg)", "color": "#000000" }).attr("leng", "")
        if ($(this).children("i.glyphicon-chevron-right").attr("leng") != "s") {
            $(this).children("i.glyphicon-chevron-right").attr("leng", "s")
            $(this).children("i.glyphicon-chevron-right").css({ "transform": "rotate(90deg)", "color": "#f9579e" })
        } else {
            $(this).children("i.glyphicon-chevron-right").attr("leng", "")
            $(this).children("i.glyphicon-chevron-right").css({ "transform": "rotate(0deg)", "color": "#000000" })
        }
        // 点击后子菜单展开其他菜单折叠
        $($menu).not($(this)).siblings("[name='menu']").stop().slideUp(400)
        $(this).siblings("[name='menu']").slideToggle(400)

    })
    // 菜单点击后背景颜色变化
    $VerticalMenu_scdj = null;
    $(".VerticalMenu>div>div:last-child>div").click(function () {
        $($VerticalMenu_scdj).css("background-color", "white");
        $(this).css("background-color","#33B9FF");
        $VerticalMenu_scdj=$(this)
    })
})