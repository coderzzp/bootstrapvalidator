$(function(){
	// $.fn.bootstrapValidator.extendRules({
	// 	cardid : function(){
	// 		return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.val());
	// 	}
	// });
	//用到了bs一定会用到jquery
	//用jquery不见得会用bs
	$("#frmLogin").bootstrapValidator({
		// triggerEvent : "change"
	})
	.on("error",function(event,$errFiles){
		// alert("验证有错误");
		return false;
	})
	.on("success",function(event){
		this.submit();
		return false;
	});//开启某表单的验证功能
	//实现对登陆表单的验证
	//用户名必须是字母数字下划线组成，不允许中文
	//密码必须由字母数字组成，必须在8-12位之间
	// $("#username").on("blur",function(){
	// 	//\w正则里面意味着匹配一个字符（字母数字下划线）
	// 	var $group = $(this).parents(".input-group").removeClass("has-success has-error");
	// 	$group.next().remove();//移除之前的错误文本信息
	// 	if(/^\w+$/.test(this.value)){
	// 		$group.addClass("has-success");
	// 	}else{
	// 		$group.addClass("has-error");
	// 		$group.after("<p class=\"text-danger\">输入不合法</p>");
	// 	}
	// });
	// $("#password").on("blur",function(){
	// 	//\w正则里面意味着匹配一个字符（字母数字下划线）
	// 	var $group = $(this).parents(".input-group").removeClass("has-success has-error");
	// 	$group.next().remove();//移除之前的错误文本信息
	// 	if(/^[a-zA-Z0-9]{8,12}$/.test(this.value)){
	// 		$group.addClass("has-success");
	// 	}else{
	// 		$group.addClass("has-error");
	// 		$group.after("<p class=\"text-danger\">输入不合法</p>");
	// 	}
	// });
	// $("#verifyCode").on("blur",function(){
	// 	//\w正则里面意味着匹配一个字符（字母数字下划线）
	// 	var $group = $(this).parents(".input-group").removeClass("has-success has-error");
	// 	$group.next().remove();//移除之前的错误文本信息
	// 	if(/^[a-zA-Z0-9]{4}$/.test(this.value)){
	// 		$group.addClass("has-success");
	// 	}else{
	// 		$group.addClass("has-error");
	// 		$group.after("<p class=\"text-danger\">输入不合法</p>");
	// 	}
	// });

	// $("#frmLogin").on("submit",function(){
	// 	var all1 = $(this).find("input").length;
	// 	var all2 = $(this).find(".has-success").length;
	// 	if(all1===all2){
	// 		this.submit();
	// 	}
	// 	return false;
	// 	// if($(this).find(".has-error").size()>0){
	// 	// 	return false;
	// 	// }else{
	// 	// 	this.submit();
	// 	// }
	// });
});