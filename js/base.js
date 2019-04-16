//base.js
var baseUrl='http://52.83.166.49:8868';
//ajaxPost请求
function ajaxPost(url,jsonData,returnFun) {
    $.ajax({
        type: 'post',
        url: baseUrl+url,
		headers: {
			Authorization: "Bearer "+(localStorage.getItem("ixyl_user")==null?"":JSON.parse(localStorage.getItem("ixyl_user")).access_token)
		},
        data: jsonData,
        contentType:'application/json',
        dataType: 'json',
        success: returnFun,
        error: function(XMLHttpRequest){
        	console.log(XMLHttpRequest);
        	switch (XMLHttpRequest.status){
        		case 0 :
        			layer.msg("网络异常!");
        			break;
        		case 401 :
        			localStorage.removeItem("ixyl_user");
        			parent.location.href="/login.html";
        			break;
        		case 403 :
        			layer.msg("授权不足!");
        			break;
        		default :
        			layer.msg(XMLHttpRequest.status+':'+XMLHttpRequest.responseJSON.error);
        	}  	
        }
    });
}
//ajaxGet请求
function ajaxGet(url,returnFun) {
    $.ajax({
        type: 'get',
        url: baseUrl+url,
        headers: {
			Authorization: "Bearer "+(localStorage.getItem("ixyl_user")==null?parent.location.href="/login.html":JSON.parse(localStorage.getItem("ixyl_user")).access_token)
		},
        dataType: 'json',
        success: returnFun,
        error: function(XMLHttpRequest){
        	console.log(XMLHttpRequest);
        	switch (XMLHttpRequest.status){
        		case 0 :
        			layer.msg("网络异常!");
        			break;
        		case 401 :
        			localStorage.removeItem("ixyl_user");
        			parent.location.href="/login.html";
        			break;
        		case 403 :
        			layer.msg("授权不足!");
        			break;
        		default :
        			layer.msg(XMLHttpRequest.status+':'+XMLHttpRequest.responseJSON.error);
        	}
        }
    });
}
//layui 请求路径处理
function layuiRequest(url){
	return baseUrl+url+'?access_token='+(localStorage.getItem("ixyl_user")==null?"":JSON.parse(localStorage.getItem("ixyl_user")).access_token);
}
//获取到Url里面的参数
$.getUrlParam = function (name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return decodeURI(r[2]);
	return null;
}
