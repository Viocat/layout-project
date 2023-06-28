const gulp = require('gulp');
const {src, dest, parallel} =require('gulp');
const copyScss=()=>{
    return src(['src/**/*.scss', '!src/pages/testFolder/**'])
        .pipe(dest('build/styles'))
}

const copyTxt=()=>{
    return src('src/**/*.txt')
        .pipe(dest('build/txt-files'))
}

const copyHtml=()=>{
    return src(['src/pages/**/*.html', '!src/pages/testFolder/**'])
        .pipe(dest('build/pages'))
}

// exports.scssCopy=copyScss; // позволяет вызвать такс copyScss, прописывая прописывая gulp cssCopy и тд
// exports.txtCopy=copyTxt;
// exports.htmlCopy=copyHtml;
exports.fullCopy=parallel(copyHtml, copyScss, copyTxt)
gulp.task('default',parallel(copyHtml,copyScss, copyTxt)) //функция запускается по дефолту при вызове gulp в консоли

