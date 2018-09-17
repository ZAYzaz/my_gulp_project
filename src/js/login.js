console.log("login.js is ok")
//先加载config配置文件
require(["conf/config"],function(){
   
     //再加载各个模块
    require(["jquery"],function($){
        return $;
    })
})