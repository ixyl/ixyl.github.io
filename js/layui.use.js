layui.use(['layer', 'form', 'element','laydate'], function(){
	var layer = layui.layer,form = layui.form,element=layui.element,laydate=layui.laydate;
	//点击导航栏关闭其他子菜单
	$(".layui-side .layui-nav-tree .layui-nav-item").click(function(){
		$(".layui-side .layui-nav-tree .layui-nav-item").removeClass("layui-nav-itemed");
		$(this).addClass("layui-nav-itemed");
	});
	$(".layui-side .layui-nav-tree .layui-nav-item dl a").click(function(){
		//显示导航菜单提示
		$(".layadmin-header").show();
		//清空导航菜单位置信息
		$(".layadmin-header .layui-breadcrumb").empty();
		//获取当前点击菜单的父菜单
		var menu=$(this).parents(".layui-nav-item").find("cite").html();
		//添加主页及父菜单导航信息
		$(".layadmin-header .layui-breadcrumb").append("<a href=''>主页</a><span lay-separator>/</span><a><cite>"+menu+"</cite></a>");
		//添加子菜单导航信息
		$(".layadmin-header .layui-breadcrumb").append("<span lay-separator>/</span><a><cite>"+$(this).html()+"</cite></a>");
		//加载子页面
		$(".layui-body .layui-fluid").load($(this).attr("data-name"));
	});
	$(".function-search dd[lay-value!='']").click(function(){
		//console.log($(this).attr("lay-value"));
		$("[data-name='"+$(this).attr("lay-value")+"']").click();
	});
});