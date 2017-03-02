# bootstrapvalidator
##插件介绍<br>
    该插件是基于jquery和bootstrap的一个表单验证插件，可以实现表单验证，在验证错误时弹出错误，并且可以添加自定义规则，自定义错误信息，自定义触发条件。
##使用方法<br>
    1.加载jquery和bootstrap相关文件，之后引入本插件(bootstrapvalidator),最后创建一个本页面的js文件(这里命名为index.js）<br>
    2.用bootstrap的表单组建构建出登陆页面的表单.<br>
    3.不出意外，表单组件的最外层元素是一个id为"frmLogin"的form元素。<br>
    4.复制 【调用.js】 中的js代码至index.js即可调用<br>
	  5.为class名为form-control的input元素设置data数据，格式如下：<br>
![](http://coderzzp.github.io/demo/表单验证/说明1.jpg)  
	  6.设置message错误提示信息，若不设置则显示插件默认错误提示信息。表单验证基本完成，最终的html结构大致如下：
![](http://coderzzp.github.io/demo/表单验证/说明2.jpg)<br>
## 扩展方法：
 1.提供自设置规则的接口(需要阅读源码)<br>
 2.提供更改触发表达验证的方式<br>
 3.提供更改默认错误信息的方式<br>
 PS:源码中有相关注释
