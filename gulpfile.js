var gulp = require("gulp");
var extender = require("gulp-html-extend");

gulp.task("extend", function(){
  gulp.src("./templates/index.html")
    .pipe(extender({annotations: true, verbose: true}))
    .pipe(gulp.dest("./"));
  gulp.src(["./templates/*.html", "!./templates/index.html"])
    .pipe(extender({annotations: true, verbose: true}))
    .pipe(gulp.dest("./views"));
});

gulp.task("default", function(){
  gulp.watch(["*.html", "templates/*.html"], ["extend"]);
});
