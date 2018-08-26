# design
## 置顶
[IT侠杂乱需求文档](https://www.zybuluo.com/tipwheal/note/1215471)  

## 项目总纲
在[IT侠杂乱需求文档](https://www.zybuluo.com/tipwheal/note/1215471)中可以找到,大量相关内容.  

**总纲目录**
>- 项目规范
>- 前后端完全分离
>- 后端依据代码类型做多份
>- 前端依据application进行划分
>- 前后端协调方式

## 项目规范
我们采用多级分离的方式将itxia-web项目分离,子项目需要按照一定的规范完成,主要目的是可以很方便将子项目合并到主项目当中。

## 前后端完全分离方法
使用rest框架分离,实现两个http-server,前端部分的http-server放在nginx,后端部分的http-server放在docker当中运行.前端部分的http-server相对简单,后端部分的http-server相对复杂.  
![前后端分离](design-01.jpg)  
主要使用token的方式进行权限认证，之后完成数据传输。  

## 后端部分
后端部分按照代码java,js,python分为java-server,js-server-py-server开发。由于python部分缺少人手,py-server的开发现在不进行。
### java-server
此部分由相关负责人负责补全，主要内容补全在子项目designs文件夹下.
### js-server
此部分由相关负责人补全，主要内容补全在子项目designs文件夹下.
### py-server
此部分有相关负责人补全，主要内容补全在子项目designs文件夹下.

## 前端部分
前端部分由于数据请求是通过ajax完成的，按照application的方式进行分离，在src/front-end文件夹下按照application的名称进行建立。具体框架不限定，但需要保证前端设计与后端部分分离。

### home
此部分由主页负责人补全，主要内容补全在子项目designs文件夹下.
## 前后端协调方式
主要通过designs文件夹进行,在子项目designs文件夹下完成设计,在主项目的designs/README.md处进行注册.