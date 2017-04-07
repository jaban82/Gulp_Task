'user strict';


var gulp = require('gulp'),
    csslint = require('gulp-csslint'),
    htmlhint = require("gulp-htmlhint"),
    sass = require("gulp-sass"),
    webReporter = require('gulp-hint-web-reporter'),
    del = require('del'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;



// 파일네임 정규식
tmptime = new Date().toLocaleString(),
tmptime = tmptime.replace(/\-|\:/g, ''),
tmptime = tmptime.replace(/\s/g, '_'),

//del task
gulp.task('del', function() {
  del(['logs/*.html'])
});

//csslint task
gulp.task('css', function() {
  gulp.src('public/dist/**/*.css')
    .pipe(csslint('csslintrc.json'))
    .pipe(webReporter({
      //logsPath: "./logs",
      filenames: {
        csslint: "csslint_" + tmptime + "_log.html"
      }
    }));
});

//htmlhint task
gulp.task('html', function() {
  gulp.src('public/dist/**/*.html')
    .pipe(htmlhint('htmlhintrc.json'))
    .pipe(webReporter({
      //logsPath: "./logs",
      filenames: {
        htmlhint: "htmlhint_" + tmptime + "_log.html"
      }
    }));
});

//sass task
gulp.task('sass_task', function () {
 gulp.src('public/src/scss/**/*.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('public/dist/css'));
});

//gulp.task('sass',['sass_task'], function () {
// gulp.watch('public/src/scss/**/*.scss', ['sass_task']).on('change', reload);
//});

//brower-sync web server
gulp.task('server', function () {
 browserSync.init({
   server:{
     baseDir: "./",
     directory: true
   },
   browser: "chrome"
 });

 //gulp.watch('logs/*.html', ['del']).on('change', reload);
 gulp.watch('public/dist/**/*.html', ['html']).on('change', reload);
 gulp.watch('public/dist/**/*.css', ['css']).on('change', reload);
 gulp.watch('public/src/scss/**/*.scss', ['sass_task']).on('change', reload);
});

//default

//gulp.task('tt', ['del','sass_task','html','css']);

//gulp.task('default', ['del','sass_task','html','css'], function () {
//  gulp.watch('public/src/scss/**/*.scss', ['sass_task']);
//  gulp.watch('public/dist/**/*.html', ['html']);
//  gulp.watch('public/dist/**/*.css', ['css']);
//});
