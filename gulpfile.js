var gulp=require('gulp');

//注册一个任务
// gulp.task('tosay',function(){
//     console.log(__dirname)
// })

/**
 * 注册一个自动复制的任务
 */
gulp.task('copy',function(){
    gulp.src('views/*.html') //取文件
    .pipe(gulp.dest('dist/views')); //目标目录
})
//监听文件的变化
gulp.task('dist',function(){
    gulp.watch('views/*.html',['copy']); //监视文件变化
})

//browsersync for gulp
var browserSync=require('browser-sync').create();
gulp.task('bserve',function(){
    browserSync.init({
        server:{
            baseDir:'./'
        }
    })
})