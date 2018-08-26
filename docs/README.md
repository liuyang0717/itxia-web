# docs
主要是js-server,vue,www三个部分的内容，看三个部分的文档就可以了(其实我并没有写多少)，主要原因是现在很多东西并没有完成，写了文档之后可能还需要大改，就写得很随意。
## 端口部分
由于此项目是多个项目的集合，还没有将多个项目的启动方式进行整合，启动需要注意。  
js-server是单独的后端文件夹，启动可以看package.json的内容，主要占据端口3000.  
vue组件使用webpack，启动方式见上，主要占据端口8081.
www部分使用nginx的方式处理，www属于纯静态文件，由于浏览器不支持无域名的访问(具体原因不记得了，所以必须配置nginx),占据8080端口。
## nginx配置
```
server {
	listen 8080;
    root /home/liuyang0717/www;
    
    location / {
   		root /home/liuyang0717/www;
   		autoindex on;
    }
}
```

## 数据库部分
mysql的内容  
主要增加了两个外键，这个很关键，但是我忘记怎么查看外键的配置了。在`order`数据表上增加了一个`reply`和`yunfile`的外键。忘记怎么处理的了。这个现在不会影响，但是到后面很重要。