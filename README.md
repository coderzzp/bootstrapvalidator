﻿# bootstrapvalidator
## 插件构思
### 之前一直再用jquery的插件validation做表单验证,觉得插件有以下几个小的问题:<br>
		1.用户必须在class中设置配置，导致css命名冲突(污染css命名空间);
		2.用户体验不够完善，做出来的提示信息过于粗糙(对于快速建站的用户不够友好);
		3.如果需要使用中文提示信息必须引入新的js插件，毫无疑问这会增加请求数目(这一点见仁见智)
### 所以为了解决这几个小问题，我自己做了一个简单的，却又可以改善以上几个小问题的插件：
		1.用HTML5的心属性data来存储用户配置，优点1.这算是一种规范 2.不会污染class 3.语义化
		2.我们直接用bootstrap来构建这个表单，利用bs丰富的UI库来辅助我们
		3.针对语言问题，插件所有的提示信息都需要用户自己填入(当然不论中英),当然如果用户不设置提示信息会有默认提示信息，虽然这样做会在一定程度上增加用户的操作量，但为了语言问题和用户需求的灵活性做一点牺牲，个人觉得无可厚非
## 插件介绍
    该插件是基于jquery和bootstrap的一个表单验证插件，可以实现表单验证，在验证错误时弹出错误，并且可以添加自定义规则，自定义错误信息，自定义触发条件。
## 使用方法
		1.配置：加载jquery和bootstrap相关文件，之后引入本插件,最后创建一个本页面的index.js文件
		2.HTML：用bootstrap的表单组建构建出登陆页面的表单.
		3.开始调用:在index.js中调用插件(调用方式同调用.js中),并且可以自定义扩展
		4.在HTML中设置检验规则<br>
		为class名为form-control的input元素设置data数据，格式如下：
![](http://coderzzp.github.io/demo/表单验证/说明1.jpg)
		设置message错误提示信息，若不设置则显示插件默认错误提示信息。表单验证基本完成，最终的html结构大致如下：
![](http://coderzzp.github.io/demo/表单验证/说明2.jpg)
## 扩展方法：
 1. 提供自设置规则的接口(需要阅读源码)
 2. 提供更改触发表达验证的方式
 3. 提供更改默认错误信息的方式
 PS:源码中有相关注释<br/>
[点击查看最终效果](http://coderzzp.github.io/demo/表单验证/表单验证页面.html)  <br>
