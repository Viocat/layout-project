const {src, dest } =require('gulp');
//копируются все фалы с расширением scss из заданой папки
// const copyScss=()=>{
//     return src('dist/scss/*.scss')
//     .pipeTo(dest('build/styles'))
// }

//копируются все фалы с расширением scss из всех папок внутри папки dist
// const copyScss=()=>{
//     return src('dist/**/*.scss')
//     .pipeTo(dest('build/styles'))
// }

//копируются все фалы с расширением scss из всех папок внутри папки dist
// за исключением папки project (её исключаем из поиска)
const copyScss=()=>{
    return src(['dist/**/*.scss', '!dist/pages/**'])
        .pipeTo(dest('build/styles'))
}



exports.copy = copyScss()