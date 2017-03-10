$(function(){
	// $.fn.bootstrapValidator.extendRules({
	//请注意：HTML5中的规则名称不能存在大写字母,所以不存在驼峰写法
	// 	cardid : function(){
	// 		return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.val());
	// 	}
	// });
	//用到了bs一定会用到jquery
	//用jquery不见得会用bs
	$("#frmLogin").bootstrapValidator({
		// triggerEvent : "change"
		// errorMessage : "this field is required"
	})
	.on("error",function(event,$errFiles){
		//$errFiles为一个存取错误信息的接口
		// alert("验证有错误");
		return false;
	})
	.on("success",function(event){
		this.submit();
		return false;
	});
});