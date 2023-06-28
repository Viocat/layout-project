const gulp = require('gulp');
const {src, dest, parallel } =require('gulp');
const copyScss=()=>{
    // return src('src/scss/**/*.scss')
    // .pipe(dest('build/styles'))
    return src(['src/**/*.scss', '!src/pages/testFolder/**'])
        .pipe(dest('build/styles'))
}

// const copyTxt=()=>{
//     return src('src/**/*.txt')
//         .pipe(dest('build/txt-files'))
// }
//
// const copyHtml=()=>{
//     return src('[src/pages/**/*.html]', '!src/pages/testFolder/**')
//         .pipe(dest('src/pages'))
// }

exports.lala=copyScss; // позволяет вызвать такс copyScss, прописывая прописывая gulp lala
// exports.fullCopy=parallel(copyTxt, copyScss,copyHtml)
gulp.task('default',lala) //функция запускается по дефолту при вызове gulp в консоли

