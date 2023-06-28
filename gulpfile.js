const gulp = require('gulp');
const {src, dest } =require('gulp');
const copyScss=()=>{
    // return src('src/scss/**/*.scss')
    // .pipe(dest('build/styles'))
    return src(['src/**/*.scss', '!src/pages/testFolder/**'])
        .pipe(dest('build/styles'))
}

exports.copyScss=copyScss;

gulp.task('default', copyScss)

