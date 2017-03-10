$(function(){
	//提供了extendRules接口用于扩展规则
	// $.fn.bootstrapValidator.extendRules({
	// 	cardid : function(){
	// 		return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.val());
	// 	}
	// });
	//调用方式：
	$("#frmLogin").bootstrapValidator({
		// triggerEvent : "自定义事件例如change"
		//errorMessage : "自定义错误提示信息"
	})
	.on("error",function(event,$errFiles){
		//预留$errFiles用于传入错误信息
		// alert("验证有错误");
		return false;
	})
	.on("success",function(event){
		this.submit();
		return false;
	});
});