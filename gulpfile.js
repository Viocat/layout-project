const {require, series} = require("gulp-cli/lib/shared/cli-options");
const firstTask=(done)=> {
    console.log('my first task');
    done();
}

exports.default=firstTask;


// вшитая функция paralell - для  одновременного выполнения:

const {parallel}=require('gulp');
const sassCompile = (done)=>{
    console.log('Compile SASS to SCSS');
    done();
}

const pugCompile=(done)=>{
    console.log('Compile Pug to HTML');
    done();
}

const imagesOptimize=(done)=>{
    console.log('Optimize images');
    done();
}

exports.default = parallel(sassCompile());

// series  - вызывает функции по очереди, когда предыдущая полностью отработала функция полностью отработала

exports.layoutComplete=series(sassCompile(),pugCompile())