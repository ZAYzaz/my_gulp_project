console.log("config.js 配置文件 is ok");

requirejs.config({
    baseUrl:"http://localhost:8080",
    paths:{
        "jquery":"https://cdn.bootcss.com/jquery/2.2.4/jquery"
    }
})