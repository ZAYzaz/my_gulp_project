console.log("login.js执行了，接下来，准备加载配置文件");

//先加载config配置文件
require(["config",function(){
    //再加载各个模块
    require(["jquery","jquery.hover"],function($){
        console.log($);
        console.log($.prototype.hoverdir);
    })
}])