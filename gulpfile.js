let gulp=require("gulp");
let minifyJS=require("gulp-babel-minify");
let cleanCSS=require("gulp-clean-css");
let connect=require("gulp-connect");
let webserver=require("gulp-webserver");
let sass=require("gulp-sass");

gulp.task("build",function(){
    gulp.src("./src/**/*.html")
    .pipe(gulp.dest("./dest"));

    gulp.src("./src/**/*.js")
    .pipe(minifyJS())
    .pipe(gulp.dest("./dest"));

    gulp.src("./src/**/*.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest("./dest"));

    gulp.src("./src/**/*.scss")
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest("./dest"));
})

gulp.task("refreshHTML",()=>{
    gulp.src("./src/**/*.html")
    .pipe(gulp.dest("./dest"))
    .pipe(connect.reload());
})
gulp.task("refreshJS",()=>{
    gulp.src("./src/**/*.js")
    .pipe(minifyJS())
    .pipe(gulp.dest("./dest"));
})
gulp.task("refreshCSS",()=>{
    gulp.src("./src/**/*.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest("./dest"));
})

gulp.task("refreshSCSS",()=>{
    gulp.src("./src/**/*.scss")
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest("./dest"));
})
gulp.task("server",function(){
    connect.server({
        root:"dest",
        port:8080,
        livereload: true,
        middleware: function (connect, opt) {
            var Proxy = require('gulp-connect-proxy');
            opt.route = '/proxy';
            var proxy = new Proxy(opt);
            return [proxy];
          }
    })
})

gulp.watch("./src/**/*.html",["refreshHTML"]);
gulp.watch("./src/**/*.js",["refreshJS","refreshHTML"]);
gulp.watch("./src/**/*.css",["refreshCSS","refreshHTML"]);
gulp.watch("./src/**/*.scss",["refreshSCSS","refreshHTML"]);
