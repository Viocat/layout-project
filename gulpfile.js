const gulp = require('gulp');
const {src, dest } =require('gulp');
const copyScss=()=>{
    // return src('src/scss/**/*.scss')
    // .pipe(dest('build/styles'))
    return src(['src/**/*.scss', '!src/pages/testFolder/**'])
        .pipe(dest('build/styles'))
}

exports.lala=copyScss; // позволяет вызвать такс copyScss, прописывая прописывая gulp lala
gulp.task('default', copyScss) //функция запускается по дефолту при вызове gulp в консоли

